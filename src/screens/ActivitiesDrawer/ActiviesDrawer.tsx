import { Avatar, Box, Drawer, Flex, Icon, IconButton, Slide, Slider, Stack } from "native-base"
import { Card } from "../../components/elements/Card"
import { Layout } from "../../components/layouts"
import { SText } from "../../components/tools"
import { getStatusbarHeight } from "../../theme/helpers/getStatusbarHeight"
import YogaIconSvg from "../../assets/svg/yoga.svg"

import FiIcon from "@expo/vector-icons/Feather"
import { useState } from "react"

export const ActiviesDrawer = ({ isOpen, onClose }) => {
  const topBarPadding = getStatusbarHeight(true) + 60

  return (
    <Drawer isOpen={isOpen}>
      <Slide in={isOpen} duration={250} placement="bottom">
        <Layout bg="mediumGrey">
          <Card
            pt={topBarPadding}
            px={4}
            flexDirection="row"
            width="full"
            height={250}
            bg="darkGrey"
            justifyContent="space-between"
          >
            <Box width="1/2">
              <IconButton
                position="absolute"
                bottom={160}
                borderRadius="8px"
                onPress={onClose}
                icon={<Icon as={FiIcon} name="x" color="white" size="xl" />}
              />

              <YogaIconSvg width={160} height={140} />
            </Box>
            <Stack width="1/2" alignItems="flex-end" space={2}>
              <Stack space={3} direction="row">
                <SText fontSize={16} color="lightGrey">
                  Sex,
                </SText>
                <SText fontSize={16} color="primary">
                  Sab
                </SText>
              </Stack>
              <Flex>
                <SText fontWeight="semiBold" fontSize={22}>
                  Aula de Yoga
                </SText>
              </Flex>
              <Flex>
                <SText fontSize={16}>14:00 - 16:00</SText>
              </Flex>
            </Stack>
          </Card>
          <Flex px={4} py={7} direction="row" flex={1}>
            <Avatar size="md" source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=female" }} />
            <Stack ml={4}>
              <SText color="lightGrey" fontWeight="medium">
                Instrutora
              </SText>
              <SText fontSize={16} fontWeight="bold">
                Ana Paula
              </SText>
            </Stack>
          </Flex>
        </Layout>
      </Slide>
    </Drawer>
  )
}
