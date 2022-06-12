import { Stack } from "native-base"
import { CardGreetings } from "../../components/elements/CardGreetings"
import { CardWorkout } from "../../components/elements/CardWorkout"
import { Layout } from "../../components/layouts"
import { SText } from "../../components/tools"

import WorkoutA from "../../assets/svg/workoutIcon01.svg"
import WorkoutB from "../../assets/svg/workoutIcon02.svg"
import WorkoutC from "../../assets/svg/workoutIcon03.svg"

export const WorkoutList = () => {
  return (
    <Layout>
      <CardGreetings height={20} mb={10} />

      <Stack space={8} mx={8}>
        <SText fontWeight="bold" fontSize={22}>
          Treinos disponíveis
        </SText>

        <Stack space={6} mb={10}>
          <CardWorkout
            title="Treino A"
            subtitle="Treino abdominal leve com foco em repetições."
            icon={WorkoutA}
          />
          <CardWorkout
            title="Treino B"
            subtitle="Treino focado nos musculos inferiores e cardio."
            icon={WorkoutB}
          />
          <CardWorkout title="Treino C" subtitle="Treino de musculação de nivel iniciante." icon={WorkoutC} />
        </Stack>
      </Stack>
    </Layout>
  )
}
