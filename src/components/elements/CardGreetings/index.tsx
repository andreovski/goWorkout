import { ImageBackground } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { useTheme } from "styled-components";
import cardImage from "../../../assets/cardGreetings.png";
import { getStatusbarHeight } from "../../../theme/helpers/getStatusbarHeight";
import { Box } from "../../tools/Box";
import { Avatar } from "../../core/Avatar";
import { Text } from "../../tools/Text";
import { Stack } from "../../tools/Stack";
import { Icon, IconButton } from "../../core/Icon";
import FiIcon from "@expo/vector-icons/Feather";

const ImageBackgroundStyled = styled(ImageBackground)`
  flex: 1;
`;

export function CardGreetings() {
  const statusbarHeight = getStatusbarHeight();

  return (
    <Box width="100%" height={`${RFPercentage(25)}px`}>
      <ImageBackgroundStyled source={cardImage} resizeMode="cover">
        <Box mt={statusbarHeight} pt={8} px={6}>
          <Stack alignItems="center" direction="row" space={6}>
            <Avatar
              source={{ uri: "https://github.com/andreovski.png" }}
              size="lg"
            >
              AF
            </Avatar>
            <Box>
              <Text color="white" fontSize={16}>
                Boa tarde{" "}
                <Text fontSize={16} fontWeight={"medium"}>
                  André Luiz
                </Text>
              </Text>
              <Text color="white">Bem vindo de volta!</Text>
            </Box>
            <IconButton
              ml="auto"
              icon={<Icon as={FiIcon} name="list" color="white" size="xl" />}
            />
          </Stack>
        </Box>
      </ImageBackgroundStyled>
    </Box>
  );
}
