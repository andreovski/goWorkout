import { IFlexProps } from "native-base/lib/typescript/components/primitives/Flex"
import { Flex, ScrollView } from "native-base"
import { getStatusbarHeight } from "../../theme/helpers/getStatusbarHeight"

interface IProps extends IFlexProps {
  bounceAnimation?: boolean
  setStatusBarMargin?: boolean
  children: React.ReactNode
}

export const Layout = ({ bounceAnimation = false, children, ...props }: IProps) => {
  const statusbarHeight = getStatusbarHeight()

  return (
    <Flex flex={1} background="darkGrey" {...props}>
      <ScrollView
        mt={props.setStatusBarMargin ? statusbarHeight : 0}
        bounces={bounceAnimation}
        alwaysBounceVertical={bounceAnimation}
        showsVerticalScrollIndicator={false}
        width="full"
      >
        {children}
      </ScrollView>
    </Flex>
  )
}
