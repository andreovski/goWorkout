import { IFlexProps } from "native-base/lib/typescript/components/primitives/Flex"
import { Flex, Stack } from "native-base"

interface IProps extends IFlexProps {
  space?: number | string
  children: React.ReactNode
  dir?: "row" | "column"
}

export const Card = ({ space, children, dir, ...props }: IProps) => {
  if (dir && space) {
    return (
      <Flex width={props.width || "100%"} borderRadius="8px" {...props}>
        <Stack direction={dir} space={space}>
          {children}
        </Stack>
      </Flex>
    )
  }

  return (
    <Flex width={props.width || "100%"} borderRadius="8px" {...props}>
      {children}
    </Flex>
  )
}
