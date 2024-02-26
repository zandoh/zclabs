import type { APIRoute } from "astro";
import { RedisUtils, SpotifyUtils } from "../../utils";

export const prerender = false;

export const PUT: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    try {
      const body = await request.json();
      const { access_token, refresh_token, expires } = await RedisUtils.getTokens();

      const sdk = SpotifyUtils.createSpotifyApi(
        import.meta.env.SPOTIFY_CLIENT_ID,
        {
          access_token: access_token,
          token_type: "Bearer",
          expires_in: Math.round((new Date(expires).getTime() - new Date().getTime()) / 1000),
          refresh_token: refresh_token,
          expires: expires,
        },
        refresh_token,
      );

      await sdk.playlists.addItemsToPlaylist(import.meta.env.SPOTIFY_PLAYLIST_ID, [body.suggestion]);

      return new Response(null, {
        status: 200,
        statusText: "Success",
      });
    } catch (e) {
      console.error(e);

      return new Response(null, {
        status: 500,
        statusText: "Error from Spotify",
      });
    }
  }

  return new Response(null, {
    status: 400,
    statusText: "Bad request",
  });
};
