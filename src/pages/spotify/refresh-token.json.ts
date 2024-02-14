import type { AccessToken } from "@spotify/web-api-ts-sdk";
import type { APIRoute } from "astro";
import { ApiUtils, RedisUtils, SpotifyUtils } from "./utils";

export const prerender = false;

export const GET: APIRoute = async ({ url: { searchParams } }) => {
  const refresh_token = searchParams.get("refresh_token");
  const secret = searchParams.get("secret");

  if (secret !== import.meta.env.SPOTIFY_AUTH_SECRET) {
    return new Response(null, {
      status: 401,
      statusText: "Unauthorized",
    });
  }

  if (!refresh_token) {
    return new Response(null, {
      status: 422,
      statusText: "Missing `refresh_token` search parameter",
    });
  }

  return fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: SpotifyUtils.getBasicAuthHeader(),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: ApiUtils.encodeFormData({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
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
