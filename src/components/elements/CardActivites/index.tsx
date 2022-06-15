import { Card } from "../../elements/Card"
import { Flex, Box, Stack } from "native-base"
import { SText } from "../../tools"
import YogaIconSvg from "../../../assets/svg/yoga.svg"
import { Dimensions } from "react-native"

type IProps = {
  i: number
  items: Array<any>
}

export const CardActivites = ({ i, items, ...props }: IProps) => {
  const width = Dimensions.get("screen").width - 64

  return (
    <Card
      width={width}
      ml={i === 0 ? 8 : 4}
      mr={i === items.length - 1 ? 8 : 0}
      dir="row"
      space={2}
      background="mediumGrey"
    >
      <Box width="100%" p={5}>
        <Flex flexDir="row" justify="space-between">
          <YogaIconSvg width={120} />
          <Stack alignItems="flex-end">
            <SText fontSize={16} color="primary">
              Hoje
            </SText>
            <SText fontSize={16} fontWeight="medium">
              Aula de Yoga
            </SText>
            <SText mt="auto" color="lightGrey">
              14:00 - 16:00
            </SText>
          </Stack>
        </Flex>
      </Box>
    </Card>
  )
}
