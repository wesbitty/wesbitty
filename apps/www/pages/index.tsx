import Container from 'components/Container'
import Layout from '../components/Layouts/Default'
import Hero from 'components/Hero'

import Features from 'components/Features/index'
import BuiltExamples from 'components/WesbittyMaker/index'
import MadeForDevelopers from 'components/MadeForDevelopers/index'
import AdminAccess from 'components/AdminAccess/index'
import CaseStudies from 'components/CaseStudies/index'
import CTABanner from 'components/CTABanner/index'
import SectionContainer from '../components/Layouts/SectionContainer'
import TwitterSocialProof from '../components/Sections/TwitterSocialProof'

// Import Swiper styles if swiper used on page
import 'swiper/swiper.min.css'

const API_HOST = process.env.NEXT_PUBLIC_API_HOST || 'http://localhost:3001'

export default function Web() {
  const [name, setName] = useState<string>('')
  const [response, setResponse] = useState<{ message: string } | null>(null)
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    setResponse(null)
    setError(undefined)
  }, [name])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const result = await fetch(`${API_HOST}/message/${name}`)
      const response = await result.json()
      setResponse(response)
    } catch (err) {
      console.error(err)
      setError('Unable to fetch response')
    }
  }

  const onReset = () => {
    setName('')
  }

  return (
    <div>
      <h1>Web</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name </label>
        <input type="text" name="name" id="name" value={name} onChange={onChange}></input>
        <Button type="submit">Submit</Button>
      </form>
      {error && (
        <div>
          <h3>Error</h3>
          <p>{error}</p>
        </div>
      )}
      {response && (
        <div>
          <h3>Greeting</h3>
          <p>{response.message}</p>
          <Button onClick={onReset}>Reset</Button>
        </div>
      )}
    </div>
  )
}

type Props = {}

const Index = ({}: Props) => {
  return (
    <>
      <Layout>
        <Container>
          <Hero />
          <Features />
          <div className="relative">
            <div className="section--masked">
              <div className="section--bg-masked">
                <div className="section--bg border-t border-b border-gray-100 dark:border-gray-600"></div>
              </div>
              <div className="section-container pt-12 pb-0">
                <div className="overflow-x-hidden">
                  <SectionContainer className="mb-0 pb-8">
                    <TwitterSocialProof />
                  </SectionContainer>
                </div>
              </div>
            </div>
          </div>
          <BuiltExamples />
          <MadeForDevelopers />
          <AdminAccess />
          <CaseStudies />
          <CTABanner />
        </Container>
      </Layout>
    </>
  )
}

export default Index
