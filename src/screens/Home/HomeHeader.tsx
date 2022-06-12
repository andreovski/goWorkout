import React from "react"
import { Card } from "../../components/elements/Card"
import { CardGreetings } from "../../components/elements/CardGreetings"
import { Flex, Box } from "native-base"
import { SText } from "../../components/tools"

export const HomeHeader = () => {
  return (
    <Flex alignItems="center">
      <CardGreetings />

      <Box width="85%">
        <Card
          p={2}
          space={12}
          dir="row"
          background="primary.50"
          alignItems="center"
          position="relative"
          bottom="30px"
        >
          <Flex direction="column" align="center">
            <SText fontWeight="semiBold" fontSize={24} color="white">
              21d
            </SText>
            <SText color="white">Seguidos</SText>
          </Flex>
          <Flex direction="column" align="center">
            <SText fontWeight="semiBold" fontSize={24} color="white">
              20h
            </SText>
            <SText color="white">Treino</SText>
          </Flex>
          <Flex direction="column" align="center">
            <SText fontWeight="semiBold" fontSize={24} color="white">
              3
            </SText>
            <SText color="white">Nível</SText>
          </Flex>
        </Card>
      </Box>
    </Flex>
  )
}
