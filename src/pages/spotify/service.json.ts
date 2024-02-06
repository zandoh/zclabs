import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import type { APIRoute } from "astro";

export const prerender = false;
const clientId = import.meta.env.SPOTIFY_CLIENT_ID;

export const GET: APIRoute = async () => {
  const sdk = SpotifyApi.withAccessToken(clientId, {
    access_token: global.access_token,
    token_type: "Bearer",
    expires_in: 3600,
    refresh_token: global.refresh_token,
  });

  try {
    let track = await sdk.player.getCurrentlyPlayingTrack("US", "track");

    if (track && track.currently_playing_type === "episode") {
      track = await sdk.player.getCurrentlyPlayingTrack("US", "episode");
    }

    if (!track || track.is_playing === false) {
      return new Response(JSON.stringify({ data: null }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
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
