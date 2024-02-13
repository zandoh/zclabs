import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SpotifyPlayer } from "./SpotifyPlayer";

const queryClient = new QueryClient();

export const SpotifyWidget = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SpotifyPlayer />
    </QueryClientProvider>
  );
};
