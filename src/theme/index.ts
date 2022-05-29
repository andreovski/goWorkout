import { RFValue } from "react-native-responsive-fontsize";

import { extendTheme } from "native-base";
import { Inter_600SemiBold } from "@expo-google-fonts/inter";

export default extendTheme({
  colors: {
    primary: "#DC6024",

    lighGrey: "#7F7C78",
    mediumGrey: "#413E3A",
    darkGray: "#33302D",

    error: "#C34533",
    success: "#219653",
    warning: "#E79C25",
  },

  fontConfig: {
    Inter: {
      regular: "Inter_400Regular",
      medium: "Inter_500Medium",
      semiBold: "Inter_600Semibold",
      bold: "Inter_700Bold",
    },
  },

  fonts: {
    heading: "Inter",
    body: "Inter",
    mono: "Inter",
  },

  fontSizes: {
    light: RFValue(14),
  },
});
