import { Button, IconBookOpen, Space, Typography } from '@wesbitty/ui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SectionContainer from './Layouts/SectionContainer'

const Hero = () => {
  const { basePath } = useRouter()

  return (
    <div className="overflow-hidden">
      <SectionContainer className="pb-0 pt-24">
        <div className="relative">
          <main className="">
            <div className="mx-auto">
              <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                <div className="md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                  <div className="sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full">
                    <h1 className="mt-4 text-4xl text-gray-800 dark:text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                      <span className="block text-gray-800 dark:text-white">
                        Empowering entrepreneurs
                      </span>
                      <span className="block text-brand-600 md:ml-0">
                        to grow their businesses around the globe.
                      </span>
                    </h1>
                    <Typography.Text>
                      <p className="mt-5 text-base sm:mt-5 lg:text-lg ">
                        Create an ecommerce website backed by powerful tools that help you find
                        customers, drive sales, and manage your day-to-day.
                      </p>
                    </Typography.Text>

                    <Link href="/user/login" as="/user/login">
                      <a className="mt-10">
                        <Button className="py-3" size="medium">
                          Get started
                        </Button>
                      </a>
                    </Link>
                    <Link href="/docs" as="/docs">
                      <a className="mt-10">
                        <Button className="py-3" size="medium" type="text" icon={<IconBookOpen />}>
                          Documentation
                        </Button>
                      </a>
                    </Link>
                    <p className="mt-8 text-sm tracking-wide text-dark-400 sm:mt-10">backed by</p>
                    <div className="mt-5 w-full sm:max-w-lg lg:ml-0">
                      <div className="flex flex-wrap items-center justify-start">
                        <img
                          className="mb-5 h-8 pr-10 sm:h-10"
                          src={`${basePath}/images/logos/yc--grey.png`}
                          alt="Y Combinator"
                        />
                        <img
                          className="relative mb-5 h-5 pr-10 sm:h-7"
                          src={`${basePath}/images/logos/mozilla--grey.png`}
                          alt="Mozilla"
                        />
                        <img
                          className="relative mb-5 h-5 pr-10 sm:h-7"
                          src={`${basePath}/images/logos/coatue.png`}
                          alt="Coatue"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-16 flex content-center sm:mt-24 lg:absolute lg:-right-80 lg:col-span-6 lg:mt-0 lg:w-9/12 xl:relative xl:right-0 xl:w-full">
                  <div className="relative flex w-full flex-col items-center justify-center rounded-md">
                    <div className="flex h-5 w-full items-center justify-start rounded-t-md bg-dark-700 px-2">
                      <div className="mr-2 h-2 w-2 rounded-full bg-dark-500" />
                      <div className="mr-2 h-2 w-2 rounded-full bg-dark-500" />
                      <div className="mr-2 h-2 w-2 rounded-full bg-dark-500" />
                    </div>
                    <div
                      className="relative w-full rounded-b-md bg-dark-900 shadow-lg"
                      style={{ padding: '56.25% 0 0 0' }}
                    >
                      <iframe
                        title="Demo video showcasing Wesbitty"
                        className="absolute h-full w-full rounded-b-md"
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
      </SectionContainer>
    </div>
  )
}

export default Hero
