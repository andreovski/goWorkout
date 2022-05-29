import { NativeModules, Platform } from "react-native";

export function getStatusbarHeight(numeric = false) {
  const { StatusBarManager } = NativeModules;

  if (numeric) {
    return Platform.OS === "ios" ? 30 : StatusBarManager.HEIGHT;
  }
  return Platform.OS === "ios" ? "30px" : `${StatusBarManager.HEIGHT}px`;
}
