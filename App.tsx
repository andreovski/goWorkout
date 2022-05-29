import React from "react";
import { Home } from "./src/screens/Home";

import { Providers } from "./src/providers";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <Providers>
      <StatusBar animated translucent barStyle="light-content" />
      <Home />
    </Providers>
  );
}
