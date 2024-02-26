import type { PlaybackState, SimplifiedEpisode, Track } from "@spotify/web-api-ts-sdk";

export const getPlaybackState = (): Promise<{ data: PlaybackState | null }> => {
  return fetch("/spotify/playing.json")
    .then((res) => res.json())
    .catch((e) => console.error("Failed to get playback state. ", e));
};

export const getSearchResults = (query): Promise<{ data: Array<Track | SimplifiedEpisode> | null }> => {
  return fetch(`/spotify/search.json?q=${encodeURIComponent(query)}`)
    .then((res) => res.json())
    .catch((e) => console.error("Failed to get search results. ", e));
};

export const addSuggestion = (spotifyId): Promise<void> => {
  return fetch("/spotify/suggest.json", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ suggestion: spotifyId }),
  })
    .then((res) => res.json())
    .catch((e) => console.error("Failed to add suggestion. ", e));
};
