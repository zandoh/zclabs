import {
  ProvidedAccessTokenStrategy,
  SpotifyApi,
  type AccessToken,
  type ICachable,
  type SdkOptions,
} from "@spotify/web-api-ts-sdk";
import { createClient } from "@vercel/kv";

export const ApiUtils = {
  encodeFormData: (data: Record<string, string | number | boolean>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  },
};

export const SpotifyUtils = {
  createSpotifyApi: (clientId: string, access_token: AccessToken, refresh_token: string, config?: SdkOptions) => {
    const strategy = new ProvidedAccessTokenStrategy(clientId, access_token, () =>
      SpotifyUtils.refreshNonPKCEAccessToken(refresh_token),
    );

    return new SpotifyApi(strategy, config);
  },
  refreshNonPKCEAccessToken: async (refresh_token: string): Promise<ICachable & AccessToken> => {
    const params = new URLSearchParams();
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", refresh_token);

    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: SpotifyUtils.getBasicAuthHeader(),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    const text = await result.text();

    if (!result.ok) {
      throw new Error(`Failed to refresh token: ${result.statusText}, ${text}`);
    }

    return JSON.parse(text);
  },
  getBasicAuthHeader: () =>
    "Basic " +
    Buffer.from(import.meta.env.SPOTIFY_CLIENT_ID + ":" + import.meta.env.SPOTIFY_CLIENT_SECRET).toString("base64"),
};

export const RedisUtils = {
  client: createClient({
    url: import.meta.env.KV_REST_API_URL,
    token: import.meta.env.KV_REST_API_TOKEN,
  }),
  getTokens: async () => {
    try {
      const access_token = await RedisUtils.client.get<string>(`${import.meta.env.ENVIRONMENT}/access_token`);
      const refresh_token = await RedisUtils.client.get<string>(`${import.meta.env.ENVIRONMENT}/refresh_token`);
      const expires = await RedisUtils.client.get<string>(`${import.meta.env.ENVIRONMENT}/expires`);

      return {
        access_token,
        refresh_token,
        expires: Number(expires),
      };
    } catch (e) {
      console.error(e);

      throw new Error("Failed to get tokens from redis");
    }
  },
  setTokens: async ({
    access_token,
    refresh_token,
    expires,
  }: {
    access_token: string;
    refresh_token: string;
    expires: number;
  }) => {
    try {
      await RedisUtils.client.set(`${import.meta.env.ENVIRONMENT}/access_token`, access_token);
      await RedisUtils.client.set(`${import.meta.env.ENVIRONMENT}/refresh_token`, refresh_token);
      await RedisUtils.client.set(`${import.meta.env.ENVIRONMENT}/expires`, expires);
    } catch (e) {
      console.error(e);

      throw new Error("Failed to get set KV values");
    }
  },
};
