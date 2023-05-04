import { Button, IconBookOpen, Space, Typography } from '@wesbitty/ui'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Section } from '../widget/Section'

export const Hero = () => {
  const { basePath } = useRouter()

  return (
    <div className="overflow-hidden">
      <Section className="py-24">
        <div className="relative">
          <main className="">
            <div className="mx-auto pb-24">
              <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                <div className="md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                  <div className="space-y-12 sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full">
                    <div>
                      <h1
                        className="
                        text-slate-1200
                        text-2xl sm:text-3xl sm:leading-none lg:text-4xl
                        xl:text-5xl
                        "
                      >
                        <span className="block">Build Better Store.</span>
                        <span className="text-brand-800 block md:ml-0">
                          In a Few Steps.
                        </span>
                      </h1>

                      <div className="flex flex-wrap mt-4">
                        <div className="flex items-center text-sm sm:mt-5 sm:text-base">
                          <svg
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 flex-none stroke-current text-brand-800"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 4.15h22.5l-2 20.5-9.25 4-9.25-4-2-20.5Z"></path>
                            <path d="M20.5 9.15H12v5.5h8.5v6l-4.25 2-4.25-2v-2.5"></path>
                          </svg>
                          <span className="ml-2.5">HTML</span>
                        </div>
                        <div className="flex items-center text-sm sm:mt-5 sm:text-base ml-6">
                          <svg
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 flex-none stroke-current text-brand-800"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
                        <div className="flex items-center text-sm sm:mt-5 sm:text-base ml-6">
                          <svg
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 flex-none stroke-current text-brand-800"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M19.924 5 16 11.644 12.075 5H3l13 23L29 5h-9.076Z"></path>
                            <path d="M19.879 5 16 11.26 12.121 5H8l8 13 8-13h-4.121Z"></path>
                          </svg>
                          <span className="ml-2.5">Vue</span>
                        </div>
                      </div>

                      <p className="p mt-1.5 text-sm sm:mt-5 sm:text-base lg:text-lg ">
                        Start your business website with Wesbitty to sell
                        online, offline, and everywhere in between, no credit
                        card required.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link href="https://app.wesbitty.org">
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
                  </div>
                </div>
                <div className="mt-16 flex content-center sm:mt-24 lg:absolute lg:-right-80 lg:col-span-6 lg:mt-0 lg:w-9/12 xl:relative xl:right-0 xl:w-full">
                  <div className="relative flex w-full flex-col items-center justify-center rounded-md">
                    <div className="bg-slate-300 flex h-5 w-full items-center justify-start rounded-t-md px-2">
                      <div className="h-2 w-2 mr-2 rounded-full bg-black" />
                      <div className="h-2 w-2 mr-2 rounded-full bg-black" />
                      <div className="h-2 w-2 mr-2 rounded-full bg-black" />
                    </div>
                    <div
                      className="bg-slate-200 relative w-full rounded-b-md shadow-lg"
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
            <div className="mx-auto max-w-container">
              <div className="relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                <div className="flex">
                  <div className="">
                    <svg
                      className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-brand-500/[.12]"
                      viewBox="0 0 40 40"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                        className="fill-brand-100 stroke-brand-800"
                      ></path>
                      <path
                        d="M27 25.335L30.25 27l-6.603 3.382a8 8 0 01-7.294 0L9.75 27 13 25.335m14-6.999L30.25 20l-6.603 3.382a8 8 0 01-7.294 0L9.75 20 13 18.336"
                        className="stroke-brand-800"
                      ></path>
                      <path
                        d="M9.75 13l9.338-4.783a2 2 0 011.824 0L30.25 13l-6.603 3.382a8 8 0 01-7.294 0L9.75 13z"
                        className="stroke-brand-800"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h2 className="text-base font-medium tracking-wide leading-6 text-slate-1200">
                      Build an online storefront
                    </h2>
                    <p className="mt-2 text-base leading-6 text-slate-1100">
                      Bring your vision to life with our drag-and-drop store
                      creator. No coding expertise required — just your next big
                      idea.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="">
                    <svg
                      className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-brand-500/[.12]"
                      viewBox="0 0 40 40"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                        className="fill-brand-100 stroke-brand-800"
                      ></path>
                      <path
                        d="M22.25 11.75l-4.5 16.5"
                        className="stroke-brand-800"
                      ></path>
                      <path
                        d="M16.25 7.75h-.5a4 4 0 00-4 4v4.007a3 3 0 01-.88 2.122 3 3 0 000 4.242 3 3 0 01.88 2.122v4.007a4 4 0 004 4h.5m7.5-24.5h.5a4 4 0 014 4v4.007a3.002 3.002 0 00.878 2.122 3 3 0 010 4.242 3 3 0 00-.878 2.122v4.007a4 4 0 01-4 4h-.5"
                        className="stroke-brand-800"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h2 className="text-base font-medium tracking-wide leading-6 text-slate-1200">
                      Craft the brand you want
                    </h2>
                    <p className="mt-2 text-base leading-6 text-slate-1100">
                      Select from customizable templates created by a community
                      of world-class designers.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="p-0.5">
                    <svg
                      className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-brand-500/[.12]"
                      viewBox="0 0 40 40"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                        className="fill-brand-100 stroke-brand-800"
                      ></path>
                      <path
                        d="M7.75 21.25v-1.5a4 4 0 014-4h7.5m5 5v7.5a4 4 0 01-4 4h-1.5M27.75 32.25h.5a4 4 0 004-4v-10.5m-10-10h-10.5a4 4 0 00-4 4v.5"
                        className="stroke-brand-800"
                      ></path>
                      <path
                        d="M31.5 8.5l-23 23"
                        className="stroke-brand-800"
                      ></path>
                      <path
                        d="M25.75 7.75h4.5a2 2 0 012 2v4.5m-18 18h-4.5a2 2 0 01-2-2v-4.5"
                        className="stroke-brand-800"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h2 className="text-base font-medium tracking-wide leading-6 text-slate-1200">
                      Level up with apps
                    </h2>
                    <p className="mt-2 text-base leading-6 text-slate-1100">
                      Add more features and functionality to your online store
                      with apps built by trusted Wesbitty developers.
                    </p>
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
