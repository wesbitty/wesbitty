import { Button, IconBookOpen, Space, Typography } from '@wesbitty/ui'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Section } from '../Widget/Section'

export const Hero = () => {
  const { basePath } = useRouter()

  return (
    <div className="overflow-hidden">
      <Section className="pb-0 pt-24">
        <div className="relative">
          <main className="">
            <div className="mx-auto">
              <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                <div className="md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                  <div className="space-y-12 sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full">
                    <div>
                      <h1 className="text-gray-800 dark:text-white text-2xl sm:text-3xl sm:leading-none lg:text-4xl xl:text-5xl">
                        <span className="block">Build better app</span>
                        <span className="text-blue-900 block md:ml-0">
                          in a few steps.
                        </span>
                      </h1>
                      <div>
                        <p className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">
                          Build Better Store, in a few steps.
                        </p>
                        <div className="flex flex-wrap mt-4">
                          <div className="flex items-center text-sm font-medium text-slate-500">
                            <svg
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 flex-none stroke-current text-slate-400"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 4.15h22.5l-2 20.5-9.25 4-9.25-4-2-20.5Z"></path>
                              <path d="M20.5 9.15H12v5.5h8.5v6l-4.25 2-4.25-2v-2.5"></path>
                            </svg>
                            <span className="ml-2.5">HTML</span>
                          </div>
                          <div className="flex items-center text-sm font-medium text-slate-500 ml-6">
                            <svg
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 flex-none stroke-current text-slate-400"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <ellipse cx="16" cy="16" rx="13" ry="5"></ellipse>
                              <ellipse
                                cx="16"
                                cy="16"
                                rx="13"
                                ry="5"
                                transform="rotate(60 16 16)"
                              ></ellipse>
                              <ellipse
                                rx="13"
                                ry="5"
                                transform="matrix(-.5 .86603 .86603 .5 16 16)"
                              ></ellipse>
                              <circle cx="16" cy="16" r="2"></circle>
                            </svg>
                            <span className="ml-2.5">React</span>
                          </div>
                          <div className="flex items-center text-sm font-medium text-slate-500 ml-6">
                            <svg
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 flex-none stroke-current text-slate-400"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M19.924 5 16 11.644 12.075 5H3l13 23L29 5h-9.076Z"></path>
                              <path d="M19.879 5 16 11.26 12.121 5H8l8 13 8-13h-4.121Z"></path>
                            </svg>
                            <span className="ml-2.5">Vue</span>
                          </div>
                        </div>

                        <p className="mt-4 text-base leading-7 text-slate-700">
                          Start your business website with Wesbitty to sell
                          online, offline, and everywhere in between, no credit
                          card required.
                        </p>
                      </div>
                    </div>
                    <div className="mt-8 flex items-center gap-4">
                      <Link
                        href="https://app.wesbitty.org"
                        as="https://app.wesbitty.org"
                        passHref
                      >
                        <Button size="small" className="text-white bg-blue-600">
                          Start your project
                        </Button>
                      </Link>
                      <Link href="/docs" as="/docs" passHref>
                        <Button
                          size="small"
                          type="default"
                          icon={<IconBookOpen />}
                        >
                          Documentation
                        </Button>
                      </Link>
                    </div>
                    <div className="flex flex-col gap-4">
                      <small className="small text-xs">backed by</small>
                      <div className="w-full sm:max-w-lg lg:ml-0">
                        <div className="flex flex-wrap items-center justify-start gap-y-8 sm:flex-nowrap">
                          <img
                            className="h-8 pr-5 sm:h-8 md:pr-10"
                            src={`${basePath}/images/company-logos/grayYC.png`}
                            alt="Y Combinator"
                          />
                          <img
                            className="relative h-5 pr-5 sm:h-5 md:pr-10"
                            src={`${basePath}/images/company-logos/mozilla-transparent.png`}
                            alt="Mozilla"
                          />
                          <img
                            className="relative h-5 pr-5 sm:h-5 md:pr-10"
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
                      className="bg-scale-1000 relative w-full rounded-b-md shadow-lg"
                      style={{ padding: '56.25% 0 0 0' }}
                    >
                      <iframe
                        title="Demo video showcasing Wesbitty"
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
