import React from "react";
import { CardGreetings } from "../components/elements/CardGreetings";
import { Box } from "../components/tools/Box";

export function Home() {
  return (
    <Box width="100%" height="100%">
      <CardGreetings />
    </Box>
  );
}
