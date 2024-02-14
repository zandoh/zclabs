import type { Episode, Track } from "@spotify/web-api-ts-sdk";
import { useQuery } from "@tanstack/react-query";
import type { Dispatch, SetStateAction } from "react";
import { match } from "ts-pattern";
import { getPlaybackState } from "./clientApi";

export const SpotifyPlayer = ({ setPlayerOpen }: { setPlayerOpen: Dispatch<SetStateAction<boolean>> }) => {
  const { data, isPending, error } = useQuery({
    queryKey: ["spotify/playing/data"],
    queryFn: getPlaybackState,
    refetchInterval: 5000,
  });

  if (!data || isPending || error) {
    return <></>;
  }

  const playingTrack = match(data.data)
    .with({ item: { type: "track" } }, (d) => {
      const item = d.item as Track;

      return {
        artist: item.artists.map((artist) => artist.name).join(", "),
        duration: item.duration_ms,
        image: item.album.images[0].url ?? "",
        progress: d.progress_ms,
        title: item.name,
      };
    })
    .with({ item: { type: "episode" } }, (d) => {
      const item = d.item as Episode;

      return {
        artist: item.show.name,
        duration: item.duration_ms,
        image: item.images[0].url ?? "",
        progress: d.progress_ms,
        title: item.name,
      };
    })
    .otherwise(() => ({
      artist: "Suggest Something",
      duration: 1,
      image: "",
      progress: 0,
      title: "No Track",
    }));

  return (
    <div className="fixed bottom-0 right-5 max-w-[400px] select-none">
      <div className="grid max-h-[200px] grid-cols-[125px_225px_50px] grid-rows-[1fr] gap-x-0 gap-y-0 overflow-clip rounded-t">
        <div className="h-[125px] bg-black">
          <img src={playingTrack.image} />
        </div>
        <div className="flex cursor-default flex-col items-start justify-center truncate bg-neutral-100 px-8 dark:bg-neutral-900">
          <p className="inline-block max-w-full truncate font-bold text-zinc-800 dark:text-zinc-100">
            {playingTrack.title}
          </p>
          <p className="inline-block max-w-full truncate text-base text-zinc-600 dark:text-zinc-400">
            {playingTrack.artist}
          </p>
        </div>
        <div className="flex flex-col items-center justify-evenly bg-neutral-400 dark:bg-neutral-950">
          <span className="cursor-pointer text-zinc-50 dark:text-zinc-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
          </span>
          <span className="cursor-pointer text-zinc-50 dark:text-zinc-400" onClick={() => setPlayerOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </span>
        </div>
      </div>
      <div className="mb-4 h-1.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-600">
        <div
          className="h-1.5 rounded-full bg-green-500 transition-all duration-[5000ms] ease-in-out"
          style={{ width: `${Math.round((playingTrack.progress / playingTrack.duration) * 100)}%` }}
        ></div>
      </div>
    </div>
  );
};
