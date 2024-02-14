import type { AccessToken } from "@spotify/web-api-ts-sdk";
import type { APIRoute } from "astro";
import { ApiUtils, RedisUtils, SpotifyUtils } from "../../utils";

export const prerender = false;

export const GET: APIRoute = async ({ url: { searchParams }, cookies }) => {
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");

  if (cookies.get("state")?.value !== state) {
    return new Response(null, {
      status: 400,
      statusText: "State mismatch",
    });
  }

  if (error) {
    return new Response(null, {
      status: 403,
      statusText: error,
    });
  }

  cookies.delete("state");

  return fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: SpotifyUtils.getBasicAuthHeader(),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: ApiUtils.encodeFormData({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: import.meta.env.SPOTIFY_REDIRECT_URI,
    }),
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(JSON.stringify({ status: response.status, statusText: response.statusText }));
      }

      return response.json() as Promise<AccessToken>;
    })
    .then(async (data) => {
      await RedisUtils.setTokens({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires: Date.now() + 3600 * 1000,
      });

      return new Response(null, {
        status: 200,
      });
    })
    .catch((e) => {
      console.error(e);

      return new Response(null, {
        status: 400,
        statusText: "Bad request",
      });
    });
};
