import { Box, Button, Drawer, Flex, Icon, IconButton, Overlay, Pressable, Slide, Stack } from "native-base"
import { RFPercentage } from "react-native-responsive-fontsize"
import { SText } from "../../tools"

import FiIcon from "@expo/vector-icons/Feather"

export const SideBar = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <Slide in={isOpen} duration={200} placement="right">
        <Box flex={1} py={20} px={3} width={RFPercentage(35)} background="dark.50">
          <IconButton
            borderRadius="8px"
            colorScheme="light"
            icon={<Icon as={FiIcon} name="x" color="white" size="xl" />}
            position="absolute"
            top={10}
            right={3}
            onPress={onClose}
          />

          <Stack space={2} mt={4}>
            <Button
              w="100%"
              p={4}
              variant="ghost"
              colorScheme="light"
              justifyContent="flex-start"
              borderRadius={8}
              leftIcon={<Icon as={FiIcon} name="user" size="lg" color="white" pr={8} />}
            >
              <SText textAlign="left" fontWeight="medium" fontSize={18}>
                Meus dados
              </SText>
            </Button>
            <Button
              w="100%"
              p={4}
              variant="ghost"
              colorScheme="light"
              justifyContent="flex-start"
              borderRadius={8}
              leftIcon={<Icon as={FiIcon} name="dollar-sign" size="lg" color="white" pr={8} />}
            >
              <SText textAlign="left" fontWeight="medium" fontSize={18}>
                Pagamentos
              </SText>
            </Button>
            <Button
              w="100%"
              p={4}
              variant="ghost"
              colorScheme="light"
              justifyContent="flex-start"
              borderRadius={8}
              leftIcon={<Icon as={FiIcon} name="message-square" size="lg" color="white" pr={8} />}
            >
              <SText fontWeight="medium" fontSize={18}>
                Atendimento
              </SText>
            </Button>
          </Stack>

          <Button
            w="100%"
            p={4}
            mt="auto"
            variant="ghost"
            colorScheme="light"
            justifyContent="flex-start"
            borderRadius={8}
            leftIcon={<Icon as={FiIcon} name="log-out" size="lg" color="primary" pr={8} />}
          >
            <SText color="primary" fontWeight="medium" fontSize={18}>
              Desconectar
            </SText>
          </Button>
        </Box>
      </Slide>
    </Drawer>
  )
}
