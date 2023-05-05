import { Default } from '~/components/widget/Default'
import Container from '~/components/widget/Container'
import { Hero } from '~/components/hero'

export default function Home() {
  return (
    <>
      <Default>
        <Container>
          <Hero />
        </Container>
      </Default>
    </>
  )
}
