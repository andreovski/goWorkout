import { IFlexProps } from "native-base/lib/typescript/components/primitives/Flex"
import { Flex, ScrollView } from "native-base"

interface IProps extends IFlexProps {
  bounceAnimation?: boolean
  children: React.ReactNode
}

export const Layout = ({ bounceAnimation = false, children, ...props }: IProps) => {
  return (
    <Flex flex={1} background="darkGrey" {...props}>
      <ScrollView
        bounces={bounceAnimation}
        alwaysBounceVertical={bounceAnimation}
        showsVerticalScrollIndicator={false}
        width="100%"
      >
        {children}
      </ScrollView>
    </Flex>
  )
}
