import { Default } from '~/Widget/Default'
import Container from '~/Widget/Container'
import { Hero } from '~/components/Features/Hero'

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
