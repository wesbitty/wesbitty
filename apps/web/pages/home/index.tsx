import { Default } from "~/components/Widget/Default"
import Container from "~/components/Widget/Container"
import HeaderFeature from "~/components/Features/Header"

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

