import { Flex, Icon } from "native-base"
import { SText } from "../../tools"
import FiIcon from "@expo/vector-icons/Feather"
import { Pressable } from "native-base"
import { usePlataform } from "../../../helpers/usePlataform"

type IProps = {
  name: string
  icon: string
  isSelected: boolean
}

export const TabBar = ({ name, icon, isSelected }: IProps) => {
  return (
    <Flex alignItems="center">
      <Icon my={1} as={FiIcon} name={icon} color={isSelected ? "primary" : "white"} size="md" />
      <SText fontSize={12} color={isSelected ? "primary" : "white"}>
        {name}
      </SText>
    </Flex>
  )
}

export const TabBarContainer = ({ onPress, children }: any) => {
  return (
    <Pressable flex={1} onPress={onPress} position="relative" top={usePlataform(2, 0)}>
      {children}
    </Pressable>
  )
}
