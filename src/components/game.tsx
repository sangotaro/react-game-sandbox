import React from "react";
import { Canvas } from "react-three-fiber";

export const Game: React.FC = ({ children }) => {
  return <Canvas>{children}</Canvas>;
};
