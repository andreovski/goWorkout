import { Flex, Box, Stack, FlatList } from "native-base"
import { SText } from "../../components/tools"
import { CardActivites } from "../../components/elements/CardActivites"

import BoxingSvg from "../../assets/svg/box.svg"
import FightSvg from "../../assets/svg/luta.svg"
import FootsSvg from "../../assets/svg/sapatos.svg"
import DancerSvg from "../../assets/svg/dancarino.svg"

import FightImg from "../../assets/img/LutaImg.png"
import BoxImg from "../../assets/img/BoxImg.png"
import DanceImg from "../../assets/img/DancaImg.png"
import RunnersImg from "../../assets/img/CorridaImg.png"

import { CardSuggestion } from "../../components/elements/CardSuggestion"
import { Feedback } from "../../components/elements/Feedback"

export const HomeContent = () => {
  const data = []

  return (
    <Box flex={1} my={4}>
      <Stack space={8}>
        <Stack space={4}>
          <SText fontWeight="bold" fontSize={22} ml={8}>
            Atividades
          </SText>

          {data.length ? (
            <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ index }) => <CardActivites i={index} items={data} />}
            />
          ) : (
            <Feedback
              title="Poxa, você ainda não possui atividades agendadas!"
              subtitle="Suas atividades aparecerão aqui assim que você às confirma-lás."
            />
          )}
        </Stack>

        <Flex mx={8}>
          <SText fontWeight="bold" fontSize={22}>
            Sugestões
          </SText>

          <Flex flexDirection="row" flexWrap="wrap" justify="space-between">
            <CardSuggestion title="Artes Marciais" icon={FightSvg} imgBg={FightImg} />
            <CardSuggestion title="Box" icon={BoxingSvg} imgBg={BoxImg} />
            <CardSuggestion title="Corrida coletiva" icon={FootsSvg} imgBg={DanceImg} />
            <CardSuggestion title="Dança" icon={DancerSvg} imgBg={RunnersImg} />
          </Flex>
        </Flex>
      </Stack>
    </Box>
  )
}
