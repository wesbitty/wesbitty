import Container from '../../components/Widget/Container'
import { Default } from '../../components/Widget/Default'
import HeaderFeature from '../../components/Features/hero'
import 'swiper/swiper.min.css'

type Props = {}

const Index = ({}: Props) => {
  return (
    <>
      <Default>
        <Container>
          <HeaderFeature />
        </Container>
      </Default>
    </>
  )
}

export default Index
