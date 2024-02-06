import type { AccessToken } from "@spotify/web-api-ts-sdk";
import type { APIRoute } from "astro";
import { encodeFormData } from "../../utils";

export const prerender = false;
const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;
const redirectUri = import.meta.env.SPOTIFY_REDIRECT_URI;

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
      Authorization: "Basic " + Buffer.from(clientId + ":" + clientSecret).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: encodeFormData({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirectUri,
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
