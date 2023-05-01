import { Default } from '~/widget/Default'
import Container from '~/widget/Container'
import { Hero } from '~/components/features/Hero'

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
