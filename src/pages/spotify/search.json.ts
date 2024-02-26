import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ url: { searchParams } }) => {
  const sdk = SpotifyApi.withClientCredentials(
    import.meta.env.SPOTIFY_CLIENT_ID,
    import.meta.env.SPOTIFY_CLIENT_SECRET,
  );
  const query = searchParams.get("q");

  if (!query) {
    return new Response(null, {
      status: 422,
      statusText: "Missing `q` search parameter",
    });
  }

  try {
    const items = await sdk.search(query, ["track", "episode"], undefined, 10);

    return new Response(
      JSON.stringify({
        data: [...items.episodes.items, ...items.tracks.items],
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
