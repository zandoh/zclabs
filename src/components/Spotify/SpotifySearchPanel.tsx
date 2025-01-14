import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { IconCheck, IconSearch, IconX } from "@tabler/icons-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useDebounceValue } from "usehooks-ts";
import { addSuggestion, getSearchResults } from "./clientApi";

export const SpotifySearchPanel = () => {
  const [search, setSearch] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useDebounceValue(search, 500);

  const { data, isPending, error } = useQuery({
    queryKey: ["search", debouncedSearchTerm],
    queryFn: () => getSearchResults(debouncedSearchTerm),
    enabled: debouncedSearchTerm !== "",
  });

  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: (id: string) => addSuggestion(id),
  });

  return (
    <Autocomplete
      className="mb-2 rounded bg-neutral-100 dark:bg-neutral-900"
      inputValue={search}
      isLoading={search !== "" && isPending && !error}
      items={data?.data ?? []}
      placeholder="Type to search..."
      variant="flat"
      aria-label="Search spotify for track or episode suggestions"
      autoFocus
      onInputChange={(v) => {
        setSearch(v);
        setDebouncedSearchTerm(v);
      }}
      onSelectionChange={(key) => key && mutate(key.toString())}
      errorMessage={error && "Failed to search spotify."}
      popoverProps={{
        placement: "top",
        className: twMerge(["w-[400px]", (!data || data?.data?.length === 0) && "invisible !p-0"]),
      }}
      startContent={<IconSearch />}
      endContent={isSuccess ? <IconCheck /> : isError ? <IconX /> : <></>}
    >
      {(item) => {
        return (
          <AutocompleteItem key={item.uri} className="capitalize">
            {item.name}
          </AutocompleteItem>
        );
      }}
    </Autocomplete>
  );
};
