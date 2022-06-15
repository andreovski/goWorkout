import { RFValue } from "react-native-responsive-fontsize"

import { extendTheme } from "native-base"

export default extendTheme({
  colors: {
    primary: "#DC6024",
    primaryDark: "#9E4C14",
    "primary.50": "#DC602499",

    lightGrey: "#7F7C78",
    mediumGrey: "#413E3A",
    darkGrey: "#33302D",

    error: "#C34533",
    success: "#219653",
    warning: "#E79C25"
  },

  fontConfig: {
    Inter: {
      regular: "Inter_400Regular",
      medium: "Inter_500Medium",
      semiBold: "Inter_600SemiBold",
      bold: "Inter_700Bold"
    }
  },

  fonts: {
    heading: "Inter",
    body: "Inter",
    mono: "Inter"
  },

  fontSizes: {
    light: RFValue(14)
  }
})
