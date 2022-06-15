import { Flex, Pressable } from "native-base"
import { Card } from "../Card"

import { SText } from "../../tools"

type IProps = {
  title: string
  subtitle: string
  icon: any
}

export const CardWorkout = ({ title, subtitle, icon: Icon, ...props }: IProps) => {
  return (
    <Card height={165} background="mediumGrey" {...props}>
      <Flex direction="row" height="80%" px={6} justify="space-between" align="center">
        <Icon width={80} />
        <Flex width={160}>
          <SText textAlign="right" color="primary" fontWeight="semiBold" fontSize={16}>
            {title}
          </SText>
          <SText textAlign="right">{subtitle}</SText>
        </Flex>
      </Flex>

      <Pressable width="100%" height="20%" position="absolute" bottom={0}>
        {({ isPressed }) => (
          <Flex
            flex={1}
            alignItems="center"
            justifyContent="center"
            bg={!isPressed ? "primary" : "primary.50"}
            borderBottomRadius={8}
          >
            <SText fontSize={16} fontWeight="semiBold">
              Iniciar
            </SText>
          </Flex>
        )}
      </Pressable>
    </Card>
  )
}
