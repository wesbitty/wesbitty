import { Button, IconBookOpen, Space, Typography } from '@wesbitty/ui'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Section } from '../Widget/Section'

const HeaderFeature = () => {
  const { basePath } = useRouter()

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
                    <h1 className="text-gray-800 dark:text-white sm:mt-5 text-2xl sm:text-3xl sm:leading-none lg:text-4xl xl:text-5xl">
                      <span className="block text-gray-800 dark:text-white">
                        Empowering entrepreneurs
                      </span>
                      <span className="text-brand-600 md:ml-0 block">
                        to grow their businesses around the globe.
                      </span>
                    </h1>
                    <div>
                      <p className="p mt-1.5 text-sm sm:mt-5 sm:text-base lg:text-lg">
                        Create an ecommerce website backed by powerful tools that help you find
                        customers, drive sales, and manage your day-to-day.
                      </p>
                    </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href="https://app.wesbitty.org"
                        as="https://app.wesbitty.org"
                        className=""
                      >
                        <Button className="py-3" size="medium">
                          Get Started
                        </Button>
                      </Link>
                      <Link href="/docs" as="/docs" className="">
                        <Button className="py-3" size="medium" type="text" icon={<IconBookOpen />}>
                          Documentation
                        </Button>
                      </Link>
                    </div>
                    <div className="flex flex-col gap-4">
                    <p className="mt-8 text-xs text-dark-400 tracking-wide sm:mt-10">backed by</p>
                    <div className="w-full sm:max-w-lg lg:ml-0">
                      <div className="flex flex-wrap items-center justify-start gap-y-8 sm:flex-nowrap">
                        <img
                          className="relative h-6 pr-5 sm:h-6 md:pr-10"
                          src={`${basePath}/images/company-logos/grayYC.png`}
                          alt="Y Combinator"
                        />
                        <img
                          className="relative h-6 pr-5 sm:h-6 md:pr-10"
                          src={`${basePath}/images/company-logos/mozilla-transparent.png`}
                          alt="Mozilla"
                        />
                        <img
                          className="relative h-6 pr-5 sm:h-6 md:pr-10"
                          src={`${basePath}/images/company-logos/coatue.png`}
                          alt="Coatue"
                        />
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-16 flex content-center sm:mt-24 lg:absolute lg:-right-80 lg:col-span-6 lg:mt-0 lg:w-9/12 xl:relative xl:right-0 xl:w-full">
                  <div className="relative flex w-full flex-col items-center justify-center rounded-md">
                    <div className="bg-dark-400 flex h-5 w-full items-center justify-start rounded-t-md px-2">
                      <div className="h-2 w-2 mr-2 rounded-full bg-dark-500" />
                      <div className="h-2 w-2 mr-2 rounded-full bg-dark-500" />
                      <div className="h-2 w-2 mr-2 rounded-full bg-dark-500" />
                    </div>
                    <div
                      className="w-full relative bg-dark-900 shadow-lg rounded-b-md"
                      style={{ padding: '56.25% 0 0 0' }}
                    >
                      <iframe
                        title="Demo video showcasing Wesbitty"
                        className="absolute w-full h-full rounded-b-md"
                        src="https://www.youtube-nocookie.com/embed/dBOSUER_5T4?playlist=dBOSUER_5T4&autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&disablekb=1&mute=1&muted=1"
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

export default HeaderFeature
