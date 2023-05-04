import Container from '~/widget/Container'
import { Default } from '~/widget/Default'
import { Metadata } from '~/utils/Metadata'
import Link from 'next/link'
import {
  Button,
  Badge,
  IconArrowUpRight,
  IconMessageCircle,
  IconShuffle,
  IconX,
  Space,
  Tabs,
  Typography,
  IconGitHub,
  Divider,
  IconMail,
} from '@wesbitty/ui'
import { Section } from '~/components/widget/Section'
import 'swiper/swiper.min.css'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

type Props = {}

const SupportPage = ({}: Props) => {
  const PageMeta = {
    title: `Help & Support | ${Metadata.Name}`,
    description:
      'Find help and support for Wesbitty. Our support agents provide answers on all types of issues, including account information, billing, and refunds.',
  }

  return (
    <>
      <NextSeo
        title={PageMeta.title}
        description={PageMeta.description}
        openGraph={{
          title: PageMeta.title,
          description: PageMeta.description,
          url: `${Metadata.Url}/support`,
          images: [
            {
              url: `${Metadata.Url}${Metadata.Og}`,
            },
          ],
        }}
      />
      <Default>
        <Container>
          <Section className="">
            <div className="text-center">
              <Typography.Title level={2}>Get Support</Typography.Title>
              <Typography.Text>
                <p className="lg:text-lg">
                  Need a bit of help? We're here for you. Check out our current
                  issues, GitHub discussions, or get email support.
                </p>
              </Typography.Text>
            </div>
            <div className="grid sm:grid-cols-3 md:grid-cols-12 gap-5 mt-16">
              <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                <div
                  className="h-40 bg-white dark:bg-gray-700 
                  border-t border-r border-l border-gray-100 dark:border-gray-600
                  p-5
                  flex flex-col justify-between
                  rounded rounded-b-none
                  "
                >
                  <div className="mb-4">
                    <Typography.Title level={5} className="mb-1">
                      GitHub Issues
                    </Typography.Title>
                    <Typography.Text className="block">
                      <p>
                        Have a general issue or bug that you've found? We'd love
                        to hear about it in our GitHub issues. This can be
                        feature requests too!
                      </p>
                      <p>
                        <span className="font-bold">Use this for:</span> Bugs
                        and other issues
                      </p>
                    </Typography.Text>
                  </div>
                </div>
                <Divider light />
                <div>
                  <div
                    className="
                  bg-white dark:bg-gray-800 
                  border-b border-r border-l border-gray-100 dark:border-gray-600
                  p-5
                  flex flex-col justify-between
                  rounded rounded-t-none"
                  >
                    <Space className="">
                      <Link
                        target="_blank"
                        href="https://github.com/wesbitty/wesbitty/issues"
                        as="https://github.com/wesbitty/wesbitty/issues"
                      >
                        <Button
                          size="medium"
                          type="default"
                          iconRight={<IconGitHub />}
                        >
                          Go To Issues
                        </Button>
                      </Link>
                    </Space>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                <div
                  className="h-40 bg-white dark:bg-gray-700 
                  border-t border-r border-l border-gray-100 dark:border-gray-600
                  p-5
                  flex flex-col justify-between
                  rounded rounded-b-none
                  "
                >
                  <div className="mb-4">
                    <Typography.Title level={5} className="mb-1">
                      GitHub Discussions
                    </Typography.Title>
                    <Typography.Text className="block">
                      <p>
                        For help and questions about best practices, join our
                        GitHub discussions. Browse and ask questions.
                      </p>
                      <p>
                        <span className="font-bold">Use this for:</span> General
                        questions
                      </p>
                    </Typography.Text>
                  </div>
                </div>
                <Divider light />
                <div>
                  <div
                    className="
                  bg-white dark:bg-gray-800 
                  border-b border-r border-l border-gray-100 dark:border-gray-600
                  p-5
                  flex flex-col justify-between
                  rounded rounded-t-none"
                  >
                    <Space className="">
                      <Link
                        target="_blank"
                        href="https://github.com/wesbitty/wesbitty/discussions"
                        as="https://github.com/wesbitty/wesbitty/discussions"
                      >
                        <Button
                          size="medium"
                          type="default"
                          iconRight={<IconMessageCircle />}
                        >
                          Join The Discussion
                        </Button>
                      </Link>
                    </Space>
                  </div>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                <div
                  className="h-40 bg-white dark:bg-gray-700 
                  border-t border-r border-l border-gray-100 dark:border-gray-600
                  p-5
                  flex flex-col justify-between
                  rounded rounded-b-none
                  "
                >
                  <div className="mb-4">
                    <Typography.Title level={5} className="mb-1">
                      Email Support
                    </Typography.Title>
                    <Typography.Text className="block">
                      <p>
                        We offer email based support. If you need SLAs,
                        guaranteed response times, or have an issue, please
                        contact us here.
                      </p>
                      <p>
                        <span className="font-bold">Use this for:</span> Issues
                        or questions specific to you
                      </p>
                    </Typography.Text>
                  </div>
                </div>
                <Divider light />
                <div>
                  <div
                    className="
                  bg-white dark:bg-gray-800 
                  border-b border-r border-l border-gray-100 dark:border-gray-600
                  p-5
                  flex flex-col justify-between
                  rounded rounded-t-none"
                  >
                    <Space className="">
                      <Link href="mailto:admin@wesbitty.org">
                        <Button
                          size="medium"
                          type="default"
                          iconRight={<IconMail />}
                        >
                          Email Support
                        </Button>
                      </Link>
                    </Space>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Container>
      </Default>
    </>
  )
}

export default SupportPage
