import React from "react";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import theme from "../theme";
import { NativeBaseProvider } from "native-base";

type IProps = {
  children: any;
};

export function Providers({ children }: IProps) {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
}
