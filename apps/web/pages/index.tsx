import { Default } from '~/components/widget/Default'
import Container from '~/components/widget/Container'
import { Hero } from '~/components/hero'
import { FeatureService } from '~/components/Feature'

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
