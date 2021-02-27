import React from "react";
import { Box } from "./components/box";
import { Game } from "./components/game";

export const App: React.VFC = () => {
  return (
    <div>
      <Game>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Game>
    </div>
  );
};
