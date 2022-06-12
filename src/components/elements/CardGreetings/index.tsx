import { ImageBackground } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import styled from "styled-components"
import cardImage from "../../../assets/img/bannerWorkout.png"
import { getStatusbarHeight } from "../../../theme/helpers/getStatusbarHeight"
import { Flex, Avatar, Stack, Icon, IconButton, IFlexProps } from "native-base"
import { SText } from "../../tools"
import FiIcon from "@expo/vector-icons/Feather"

const ImageBackgroundStyled = styled(ImageBackground)`
  flex: 1;
`

type IProps = IFlexProps & {
  height: number
}

export function CardGreetings({ height = 25, ...props }: IProps) {
  const statusbarHeight = getStatusbarHeight()

  return (
    <Flex width="100%" height={`${RFPercentage(height)}px`} {...props}>
      <ImageBackgroundStyled source={cardImage} resizeMode="cover">
        <Flex mt={statusbarHeight} pt={8} px={6}>
          <Stack alignItems="center" direction="row" space={6}>
            <Avatar source={{ uri: "https://github.com/andreovski.png" }} size="lg">
              AF
            </Avatar>

            <Flex>
              <SText color="white" fontSize={16}>
                Boa tarde{" "}
                <SText fontSize={16} fontWeight={"semiBold"}>
                  André
                </SText>
              </SText>
              <SText fontWeight="regular" color="white">
                Bem vindo de volta!
              </SText>
            </Flex>
            <IconButton
              ml="auto"
              borderRadius="8px"
              icon={<Icon as={FiIcon} name="list" color="white" size="xl" />}
            />
          </Stack>
        </Flex>
      </ImageBackgroundStyled>
    </Flex>
  )
}
