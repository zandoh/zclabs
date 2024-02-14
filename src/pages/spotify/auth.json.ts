import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ url: { searchParams }, cookies, redirect }) => {
  const secret = searchParams.get("secret");
  const state = (Math.random() + 1).toString(36).substring(7);
  cookies.set("state", state);

  if (secret !== import.meta.env.SPOTIFY_AUTH_SECRET) {
    return new Response(null, {
      status: 401,
      statusText: "Unauthorized",
    });
  }

  return redirect(
    "https://accounts.spotify.com/authorize?" +
      new URLSearchParams({
        response_type: "code",
        client_id: import.meta.env.SPOTIFY_CLIENT_ID,
        scope: "user-read-currently-playing playlist-modify-public playlist-modify-private",
        redirect_uri: import.meta.env.SPOTIFY_REDIRECT_URI,
        state: state,
      }).toString(),
    302,
  );
};
