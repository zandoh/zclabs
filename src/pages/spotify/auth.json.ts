import type { APIRoute } from "astro";

export const prerender = false;
const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
const redirectUri = import.meta.env.SPOTIFY_REDIRECT_URI;
const authSecret = import.meta.env.SPOTIFY_AUTH_SECRET;

export const GET: APIRoute = async ({ url: { searchParams }, cookies, redirect }) => {
  const secret = searchParams.get("secret");
  const state = (Math.random() + 1).toString(36).substring(7);
  cookies.set("state", state);

  if (secret !== authSecret) {
    return new Response(null, {
      status: 401,
      statusText: "Unauthorized",
    });
  }

  return redirect(
    "https://accounts.spotify.com/authorize?" +
      new URLSearchParams({
        response_type: "code",
        client_id: clientId,
        scope: "user-read-currently-playing playlist-modify-public playlist-modify-private",
        redirect_uri: redirectUri,
        state: state,
      }).toString(),
    302,
  );
};
