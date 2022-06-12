import { Text as NText, ITextProps, useTheme } from "native-base"
import { RFValue } from "react-native-responsive-fontsize"

type IProps = ITextProps & {
  fontSize?: number
  fontWeight?: "regular" | "medium" | "semiBold" | "bold"
  children: React.ReactNode
}

export function SText({ fontSize = 14, fontWeight = "regular", children, ...props }: IProps) {
  const { fontConfig } = useTheme()

  const fontFamily = fontConfig.Inter[fontWeight]
  const color = props.color || "white"

  return (
    <NText fontSize={`${RFValue(fontSize)}px`} color={color} fontFamily={fontFamily} {...props}>
      {children}
    </NText>
  )
}
