import type { AccessToken } from "@spotify/web-api-ts-sdk";
import type { APIRoute } from "astro";
import { encodeFormData } from "../../utils";

export const prerender = false;
const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;
const authSecret = import.meta.env.SPOTIFY_AUTH_SECRET;

export const GET: APIRoute = async ({ url: { searchParams }, cookies }) => {
  const refresh_token = searchParams.get("refresh_token");
  const secret = searchParams.get("secret");

  if (secret !== authSecret) {
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
      Authorization: "Basic " + Buffer.from(clientId + ":" + clientSecret).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: encodeFormData({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    }),
  })
    .then((response) => {
      if (response.status !== 200) {
        throw Error(JSON.stringify({ status: response.status, statusText: response.statusText }));
      }

      return response.json() as Promise<AccessToken>;
    })
    .then((data) => {
      // lol
      global.access_token = data.access_token;
      global.refresh_token = data.refresh_token;

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