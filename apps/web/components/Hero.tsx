import { Button, IconBookOpen } from 'ui'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Section } from './widget/Section'

const Hero = () => {
  const router = useRouter()
  const { basePath } = router

  return (
    <div className="overflow-hidden">
      <Section className="pb-0 pt-24">
        <div className="relative">
          <main className="">
            <div className="mx-auto">
              <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                <div className="md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                  <div
                    className="
                    space-y-12 sm:mx-auto md:w-3/4 lg:mx-0
                    lg:w-full"
                  >
                    <div>
                      <h1
                        className="
                        text-scale-1200
                        text-2xl sm:text-3xl sm:leading-none lg:text-4xl
                        xl:text-5xl
                        "
                      >
                        <span className="block">Build an Online Store</span>
                        <span className="text-brand-900 block md:ml-0">
                          In a few steps.
                        </span>
                      </h1>
                      <div>
                        <p className="p mt-1.5 text-sm sm:mt-5 sm:text-base lg:text-lg ">
                          With wesbitty you will have all the tools needed to
                          run an online ecommerce website. Start your free trial
                          and enjoy 1 months of Wesbitty for $2/month on select
                          plans.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        href="https://app.wesbitty.org"
                        as="https://app.wesbity.org"
                        passHref
                      >
                        <Button size="small" type="primary">
                          Start your project
                        </Button>
                      </Link>
                      <Link href="/pricing" as="/pricing" passHref>
                        <Button
                          size="small"
                          type="default"
                          icon={<IconBookOpen />}
                        >
                          Pricing
                        </Button>
                      </Link>
                    </div>
                    <div className="flex flex-col gap-4">
                      <small className="small text-xs">backed by</small>
                      <div className="w-full sm:max-w-lg lg:ml-0">
                        <div className="flex flex-wrap items-center justify-start gap-y-8 sm:flex-nowrap">
                          <img
                            className="h-8 pr-5 sm:h-8 md:pr-10"
                            src={`${basePath}/images/company-logos/YC.png`}
                            alt="Y Combinator"
                          />
                          <img
                            className="relative h-5 pr-5 sm:h-5 md:pr-10"
                            src={`${basePath}/images/company-logos/mozilla.png`}
                            alt="Mozilla"
                          />
                          <img
                            className="relative h-5 pr-5 sm:h-5 md:pr-10"
                            src={`${basePath}/images/company-logos/coatue.png`}
                            alt="Coatue"
                          />
                          <img
                            className="relative h-6 pr-5 sm:h-6 md:pr-10"
                            src={`${basePath}/images/company-logos/felicis.png`}
                            alt="Felicis"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-16 flex content-center sm:mt-24 lg:absolute lg:-right-80 lg:col-span-6 lg:mt-0 lg:w-9/12 xl:relative xl:right-0 xl:w-full">
                  <div className="relative flex w-full flex-col items-center justify-center rounded-md">
                    <div className="bg-scale-400 flex h-5 w-full items-center justify-start rounded-t-md px-2">
                      <div className="bg-scale-800 mr-2 h-2 w-2 rounded-full" />
                      <div className="bg-scale-800 mr-2 h-2 w-2 rounded-full" />
                      <div className="bg-scale-800 mr-2 h-2 w-2 rounded-full" />
                    </div>
                    <div
                      className="bg-scale-1000 relative w-full rounded-b-md shadow-lg"
                      style={{ padding: '56.25% 0 0 0' }}
                    >
                      <iframe
                        title="Introducing Wesbitty To The World"
                        className="absolute h-full w-full rounded-b-md"
                        src="https://www.youtube-nocookie.com/embed/A63UxsQsEbU?playlist=A63UxsQsEbU&autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&disablekb=1&mute=1&muted=1"
                        style={{ top: 0, left: 0 }}
                        frameBorder="0"
                        allow="autoplay; modestbranding; encrypted-media"
                      />
                    </div>
                    {/*
                      Replace src with the following if have preference:
                      Vimeo:   https://player.vimeo.com/video/485959063?loop=1&autoplay=1
                      Youtube: https://www.youtube-nocookie.com/embed/dBOSUER_5T4?playlist=dBOSUER_5T4&autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&disablekb=1&mute=1&muted=1
                     */}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Section>
    </div>
  )
}

export default Hero
