import GA from './GoogleAnalytics'
import Plausible from './Plausible'
import SimpleAnalytics from './SimpleAnalytics'
import Umami from './Umami'
import Posthog from './Posthog'
import { Metadata } from '../lib/Metadata'


const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  return (
    <>
      {isProduction && Metadata.analytics.plausibleDataDomain && <Plausible />}
      {isProduction && Metadata.analytics.simpleAnalytics && <SimpleAnalytics />}
      {isProduction && Metadata.analytics.umamiWebsiteId && <Umami />}
      {isProduction && Metadata.analytics.googleAnalyticsId && <GA />}
      {isProduction && Metadata.analytics.posthogAnalyticsId && <Posthog />}
    </>
  )
}

export default Analytics
