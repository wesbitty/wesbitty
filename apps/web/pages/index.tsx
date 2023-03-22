import { Default } from '~/Widget/Default'
import Container from '~/Widget/Container'
import { Hero } from '~/components/Features/Hero'

type Props = {}

const Index = ({}: Props) => {
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

export default Index
