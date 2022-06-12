import { Layout } from "../../components/layouts"
import { HomeContent } from "./HomeContent"
import { HomeHeader } from "./HomeHeader"

export function Home() {
  return (
    <Layout alignItems="center">
      <HomeHeader />

      <HomeContent />
    </Layout>
  )
}
