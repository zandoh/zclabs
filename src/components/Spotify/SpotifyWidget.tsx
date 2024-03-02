import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { useKeyPress } from "../../hooks/useKeyPress";
import { SpotifyFab } from "./SpotifyFab";
import { SpotifyPlayer } from "./SpotifyPlayer";

const queryClient = new QueryClient();

export const SpotifyWidget = () => {
  const [playerOpen, setPlayerOpen] = useState(false);

  useKeyPress(["Escape"], () => setPlayerOpen(false));

  return (
    <QueryClientProvider client={queryClient}>
      {!playerOpen && <SpotifyFab setPlayerOpen={setPlayerOpen} />}
      {playerOpen && <SpotifyPlayer setPlayerOpen={setPlayerOpen} />}
    </QueryClientProvider>
  );
};
