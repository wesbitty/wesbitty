import FeatureService from '~/components/Feature'
import Hero from '~/components/Hero'
import Container from '~/components/widget/Container'
import { Default } from '~/components/widget/Default'

export default function Home() {
  return (
    <>
      <Default>
        <Container>
          <Hero />
          <FeatureService />
        </Container>
      </Default>
    </>
  )
}
