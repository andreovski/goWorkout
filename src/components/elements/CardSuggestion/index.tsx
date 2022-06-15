import styled from "styled-components/native"
import { Card } from "../Card"
import { SText } from "../../tools"
import { Box, Flex, IIconProps } from "native-base"
import { ImageBackground } from "react-native"
import { usePlataform } from "../../../helpers/usePlataform"
import { RFValue } from "react-native-responsive-fontsize"

type IProps = IIconProps & {
  icon: any
  imgBg?: any
  title: string
}

const ImageBackgroundStyled = styled(ImageBackground)`
  flex: 1;
`

const Overlay = styled(Box)`
  background: rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`

export const CardSuggestion = ({ icon: Icon, title, size, imgBg }: IProps) => {
  return (
    <Card mt={6} background="mediumGrey" width={usePlataform(150, RFValue(130))} height={150}>
      <ImageBackgroundStyled borderRadius={8} source={imgBg} resizeMode="cover">
        <Overlay flex={1}>
          <Flex height="100%" justify="center" align="center">
            <Icon width={size ?? 100} />
            <SText position="relative" top={4}>
              {title}
            </SText>
          </Flex>
        </Overlay>
      </ImageBackgroundStyled>
    </Card>
  )
}
