import Container from 'components/Container'
import Layout from '../components/Layouts/Default'
import Hero from '~/components/HeaderFeature'
import Features from 'components/Features/index'
import BuiltExamples from '../components/WesbittyMaker/index'
import MadeForDevelopers from 'components/MadeForDevelopers/index'
import AdminAccess from 'components/AdminAccess/index'
import CaseStudies from 'components/CaseStudies/index'
import CTABanner from 'components/CTABanner/index'
import SectionContainer from '../components/Layouts/SectionContainer'
import TwitterSocialProof from '../components/Sections/TwitterSocialProof'
import { Auth0Provider } from '@auth0/auth0-react'
import { useUser } from '@auth0/nextjs-auth0/client'
import 'swiper/swiper.min.css'

type Props = {}

function IndexApi() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    )
  }

  return <a href="/api/auth/login">Login</a>
}

const Index = ({}: Props) => {
  return (
    <>
      <Layout>
        <IndexApi />
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
