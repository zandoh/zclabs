import type { APIRoute } from "astro";
import { RedisUtils, SpotifyUtils } from "./utils";

export const prerender = false;
const clientId = import.meta.env.SPOTIFY_CLIENT_ID;

export const GET: APIRoute = async () => {
  try {
    const { access_token, refresh_token, expires } = await RedisUtils.getTokens();

    const sdk = SpotifyUtils.createSpotifyApi(
      clientId,
      {
        access_token: access_token,
        token_type: "Bearer",
        expires_in: Math.round((new Date(expires).getTime() - new Date().getTime()) / 1000),
        refresh_token: refresh_token,
        expires: expires,
      },
      refresh_token,
    );

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
      statusText: "Error",
    });
  }
};
