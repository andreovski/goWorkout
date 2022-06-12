import { Box, Flex, Image } from "native-base"
import WorkoutGroupImg from "../../../assets/img/workout.png"
import { SText } from "../../tools"

export const Feedback = ({ title, subtitle }) => {
  return (
    <Flex align="center">
      <SText w="80%" textAlign="center" color="lightGrey" fontWeight="semiBold">
        {title}
      </SText>

      <Image position="relative" bottom={8} source={WorkoutGroupImg} alt={title} width="90%" height={200} />

      <SText w="80%" fontSize={12} color="lightGrey">
        {subtitle}
      </SText>
    </Flex>
  )
}
