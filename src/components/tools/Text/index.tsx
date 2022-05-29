import { Text as NText, ITextProps, useTheme } from "native-base";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../../theme";

type IProps = ITextProps & {
  fontSize?: number;
  fontWeight?: "regular" | "medium" | "semiBold" | "bold";
  children: React.ReactNode;
};

export function Text({ fontSize = 14, children, ...props }: IProps) {
  const { fontConfig } = useTheme();
  const { fontWeight = "regular" } = props;

  const fontFamily = fontConfig.Inter[fontWeight];

  return (
    <NText
      fontSize={`${RFValue(fontSize)}px`}
      fontFamily={fontFamily}
      {...props}
    >
      {children}
    </NText>
  );
}
