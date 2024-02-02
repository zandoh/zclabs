import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import type { APIRoute } from "astro";

export const prerender = false;
const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
const accessToken = import.meta.env.SPOTIFY_ACCESS_TOKEN;
const refreshToken = import.meta.env.SPOTIFY_REFRESH_TOKEN;

export const GET: APIRoute = async () => {
  const sdk = SpotifyApi.withAccessToken(clientId, {
    access_token: accessToken,
    token_type: "Bearer",
    expires_in: 10000,
    refresh_token: refreshToken,
  });

  try {
    let track = await sdk.player.getCurrentlyPlayingTrack("US", "track");

    if (track.currently_playing_type === "episode") {
      track = await sdk.player.getCurrentlyPlayingTrack("US", "episode");
    }

    return new Response(
      JSON.stringify({
        data: track,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (e) {
    console.error(e);

    return new Response(null, {
      status: 500,
      statusText: "Error from Spotify",
    });
  }
};
