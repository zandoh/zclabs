import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import type { APIRoute } from "astro";

export const prerender = false;
const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;

export const GET: APIRoute = async ({ url: { searchParams } }) => {
  const sdk = SpotifyApi.withClientCredentials(clientId, clientSecret);
  const query = searchParams.get("q");

  if (!query) {
    return new Response(null, {
      status: 422,
      statusText: "Missing `q` search parameter",
    });
  }

  try {
    const items = await sdk.search(query, ["album", "artist", "playlist", "track", "show", "episode", "audiobook"]);

    return new Response(
      JSON.stringify({
        data: items,
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
