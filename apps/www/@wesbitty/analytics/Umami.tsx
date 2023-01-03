import Script from 'next/script'
import { Metadata } from '../lib/Metadata'


const UmamiScript = () => {
  return (
    <>
      <Script
        async
        defer
        data-website-id={Metadata.analytics.umamiWebsiteId}
        src="https://umami.example.com/umami.js" // Replace with your umami instance
      />
    </>
  )
}

export default UmamiScript
