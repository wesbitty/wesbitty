import { createClient } from '@supabase/supabase-js'
import {
  Button,
  IconArrowUpRight,
  IconBriefcase,
  IconEye,
  IconKey,
  IconLink,
  IconShield,
  IconX,
  Space,
  Typography,
} from '@wesbitty/ui'
import ApiExamples from 'data/products/auth/auth-api-examples'
import AuthSqlRulesExamples from 'data/products/auth/auth-sql-rules-examples'
import Solutions from 'data/Solutions.json'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AuthComponentExample from '../../components/AuthWidget/AuthComponentExample'
import SplitCodeBlockCarousel from '../../components/Carousels/SplitCodeBlockCarousel'
import CTABanner from '../../components/CTABanner'
import FeatureColumn from '../../components/FeatureColumn'
import FloatingIcons from '../../components/FloatingIcons'
import DefaultLayout from '../../components/Layouts/Default'
import SectionContainer from '../../components/Layouts/SectionContainer'
import APISection from '../../components/Sections/APISection'
import GithubExamples from '../../components/Sections/GithubExamples'
import ProductHeader from '../../components/Sections/ProductHeader'

function AuthPage() {
  // base path for images
  const { basePath } = useRouter()

  // supabase auth widget project details
  const wesbitty = createClient(
    'https://rsnibhkhsbfnncjmwnkj.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTIxNDE1MywiZXhwIjoxOTMwNzkwMTUzfQ.OQEbAaTfgDdLCCht251P2JRD3QDnui6nsU8N-tZA_Mc'
  )

  const meta_title = 'Auth | Built-in user management'
  const meta_description =
    'Authentication that you can afford that is built in to your wesbitty project.'

  return (
    <>
      <NextSeo
        title={meta_title}
        description={meta_description}
        openGraph={{
          title: meta_title,
          description: meta_description,
          url: `https://wesbitty.com/auth`,
          images: [
            {
              url: `https://wesbitty.com${basePath}/images/product/auth/auth-og.jpg`,
            },
          ],
        }}
      />
      <DefaultLayout>
        <ProductHeader
          icon={Solutions['authentication'].icon}
          title={Solutions['authentication'].name}
          h1={[
            <span key={'authentication-h1'}>
              Open Source Auth
              <br /> (with tons of integrations)
            </span>,
          ]}
          subheader={[
            'Every Wesbitty project comes with a complete User Management system that works without any additional tools.',
            "Including PostgreSQL's policy engine, for fine-grained access rules.",
          ]}
          image={[
            <div className="w-full header--light block">
              <Image
                src={`${basePath}/images/product/auth/header-light.png`}
                alt="auth header"
                layout="responsive"
                width="1372"
                height="1074"
              />
            </div>,
            <div className="w-full header--dark mr-0 dark:block">
              <Image
                src={`${basePath}/images/product/auth/header-dark.png`}
                alt="auth header"
                layout="responsive"
                width="1372"
                height="1074"
              />
            </div>,
          ]}
          documentation_url={'/docs/guides/auth'}
        />

        <SectionContainer>
          <div className="grid grid-cols-12">
            <div className="mb-10 lg:mb-0 col-span-12 lg:col-span-3">
              <p className="mb-4">
                <Space>
                  <img src={`${basePath}/images/product/auth/google-icon.svg`} width={21} />
                  <img src={`${basePath}/images/product/auth/facebook-icon.svg`} width={21} />
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32.58 31.77"
                      width={21}
                      className="text-gray-800 dark:text-white"
                    >
                      <path
                        fill="currentColor"
                        d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.82.15,1.11-.36,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3,6.3,0,0,1,1.67-4.37,5.94,5.94,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67A5.91,5.91,0,0,1,25,11.07a6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z"
                      />
                    </svg>
                  </div>
                  <img src={`${basePath}/images/product/auth/gitlab-icon.svg`} width={21} />
                  <img src={`${basePath}/images/product/auth/bitbucket-icon.svg`} width={21} />
                  <img src={`${basePath}/images/product/auth/twitter-icon.svg`} width={21} />
                </Space>
              </p>
              <Typography.Title level={4}>All the social providers</Typography.Title>
              <Typography.Text>
                <p className="text-base">
                  Enable social logins with the click of a button. Google, Facebook, GitHub, Azure,
                  Gitlab, Twitter, Discord, and Bitbucket.
                </p>
              </Typography.Text>
            </div>
            <div className="mb-10 lg:mb-0 col-span-12 lg:col-span-3 lg:col-start-5">
              <Typography.Text>
                <p className="mb-4">
                  <IconLink />
                </p>
              </Typography.Text>
              <Typography.Title level={4}>Fully integrated</Typography.Title>
              <Typography.Text>
                <p className="text-base">
                  Incredibly simple Auth, without a single external authentication service. Built-in
                  Authentication, Authorization, and User Management.
                </p>
              </Typography.Text>
            </div>
            <div className="col-span-12 lg:col-span-3 lg:col-start-9">
              <Typography.Text>
                <p className="mb-4">
                  <IconShield />
                </p>
              </Typography.Text>
              <Typography.Title level={4}>Own your data</Typography.Title>
              <Typography.Text>
                <p className="text-base">
                  User data stored in your Wesbitty database so you never have to worry about 3rd
                  party privacy issues. Host your data in 8 different locations.
                </p>
              </Typography.Text>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer className="-mb-48">
          <APISection
            title="Simple APIs"
            // @ts-ignore
            content={ApiExamples}
            size="large"
            text={[
              <Typography.Text>
                <p className="text-base lg:text-lg">
                  APIs that you can understand. With powerful libraries that work on client and
                  server-side applications.
                </p>
                {/* I think less is more here ... */}
                {/* <p>
                  With powerful client libraries that work on both client and server-side
                  applications.
                </p> */}
              </Typography.Text>,
            ]}
            footer={[
              <div className="grid grid-cols-12 md:gap-8 lg:gap-0 xl:gap-16 mt-8">
                <div className="col-span-12 sm:col-span-6 lg:col-span-12 xl:col-span-4">
                  <FeatureColumn
                    icon={<IconBriefcase />}
                    title="Enterprise logins"
                    text="Support for SAML, Azure. More enterprise providers and SSO coming soon."
                  />
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-12 xl:col-span-4">
                  <FeatureColumn
                    icon={<IconEye />}
                    title="Social login scopes"
                    text="Request additional user data permissions when using social logins."
                  />
                </div>
              </div>,
            ]}
            documentation_link={'/docs/guides/auth'}
          />
        </SectionContainer>

        <div className="relative">
          <div className="section--masked">
            <div className="section--bg-masked">
              <div className="section--bg border-t border-b border-gray-100 dark:border-gray-600"></div>
            </div>
            <div className="section-container pt-12 pb-0">
              <FloatingIcons />
              <div className="overflow-x-hidden">
                <SectionContainer className="mb-0 pb-8">
                  <GithubExamples />
                </SectionContainer>
              </div>
            </div>
          </div>
        </div>

        <SectionContainer>
          <div className="grid grid-cols-12 lg:gap-16">
            <div className="col-span-12 lg:col-span-5 mb-8">
              <Typography.Title level={2}>User permissions without the middleware</Typography.Title>
              <Typography.Text>
                <p className="text-base lg:text-lg">
                  Wesbitty Auth works without any additional servers. Build Authorization rules with
                  Postgres' Row Level Security, controlling who can create, edit and delete specific
                  rows in your database.
                </p>
                <p>Policies can be written in SQL or using the dashboard online.</p>
              </Typography.Text>
              <Link href="/docs/guides/auth#policy-examples">
                <a>
                  <Button size="small" type="default" className="mt-4" icon={<IconArrowUpRight />}>
                    Explore documentation
                  </Button>
                </a>
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <SplitCodeBlockCarousel
                // @ts-ignore
                content={AuthSqlRulesExamples}
              />
            </div>
          </div>
        </SectionContainer>

        <SectionContainer>
          <div className="grid grid-cols-12 lg:gap-16">
            <div className="order-last col-span-12 lg:order-first lg:col-span-6 mt-8 lg:mt-0">
              <AuthComponentExample />
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 xl:col-span-4 xl:col-start-8">
              <Space className="mb-4">
                <div className="w-8 h-8 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900  flex justify-center items-center">
                  <IconKey size="small" strokeWidth={1.5} />
                </div>
                <Typography.Text type="secondary">
                  <IconX />
                </Typography.Text>
                <img className="w-8" src={`${basePath}/images/product/auth/react-icon.svg`} />
              </Space>

              <Typography.Title level={2} className="mb-4">
                React Auth
              </Typography.Title>
              <Typography.Text>
                <p className="text-base lg:text-lg">
                  Pre-built auth widgets to get started in minutes.
                </p>
                <p>
                  Wesbitty provides React libraries which handle common scenarios, including logging
                  in, signing up, magic link and forgot password forms.
                </p>
              </Typography.Text>
              <Link
                href="https://github.com/wesbitty/ui#wesbitty-auth"
                as="https://github.com/wesbitty/ui#wesbitty-auth"
              >
                <a>
                  <Button size="small" type="default" className="mt-4" icon={<IconArrowUpRight />}>
                    Explore documentation
                  </Button>
                </a>
              </Link>

              <div className="grid grid-cols-12 md:gap-8 lg:gap-0 xl:gap-16 mt-8">
                <div className="col-span-12 lg:col-span-12 xl:col-span-4">
                  <FeatureColumn
                    icon={<IconBriefcase />}
                    title="Social login support"
                    text="Support for social logins are built in and the component "
                  />
                </div>
                <div className="col-span-12 lg:col-span-12 xl:col-span-4">
                  <FeatureColumn
                    icon={<IconEye />}
                    title="User context hooks"
                    text="Access the auth status from any component."
                  />
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
        <CTABanner />
      </DefaultLayout>
    </>
  )
}

export default AuthPage
