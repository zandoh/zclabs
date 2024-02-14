import type { PlaybackState } from "@spotify/web-api-ts-sdk";

export const getPlaybackState = (): Promise<{ data: PlaybackState | null }> => {
  return fetch("/spotify/playing.json")
    .then((res) => res.json())
    .catch((e) => console.error("Failed to get playback state. ", e));
};
