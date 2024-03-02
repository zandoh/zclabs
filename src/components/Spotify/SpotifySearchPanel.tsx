import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { IconCheck, IconSearch, IconX } from "@tabler/icons-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState, type Dispatch, type SetStateAction } from "react";
import { twMerge } from "tailwind-merge";
import { useDebounce } from "usehooks-ts";
import { addSuggestion, getSearchResults } from "./clientApi";

export const SpotifySearchPanel = ({ setSearchOpen }: { setSearchOpen: Dispatch<SetStateAction<boolean>> }) => {
  const [search, setSearch] = useState<string>("");
  const debouncedSearchTerm = useDebounce(search, 500);

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
      className="mb-2 rounded bg-neutral-100 !outline-none !ring-[0px] dark:bg-neutral-900"
      inputValue={search}
      isLoading={search !== "" && isPending && !error}
      items={data?.data ?? []}
      placeholder="Type to search..."
      variant="flat"
      aria-label="Search spotify for track or episode suggestions"
      autoFocus
      onInputChange={setSearch}
      onSelectionChange={mutate}
      errorMessage={error && "Failed to search spotify."}
      popoverProps={{
        placement: "top",
        className: twMerge(["w-[400px]", (!data || data?.data.length === 0) && "invisible !p-0"]),
      }}
      startContent={<IconSearch />}
      endContent={isSuccess ? <IconCheck /> : isError ? <IconX /> : <></>}
      onClose={() => setSearchOpen(false)}
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
