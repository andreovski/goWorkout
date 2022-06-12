import { Platform } from "react-native"

export const usePlataform = (iosValue, androidValue) => {
  if (Platform.OS === "ios") return iosValue
  return androidValue
}
