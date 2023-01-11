import { useState } from 'react'
import { createClient, Provider } from '@supabase/supabase-js'
import {
  Button,
  Auth,
  Card,
  Checkbox,
  Divider,
  Radio,
  Select,
  Space,
  Tabs,
  Typography,
  Input,
  Toggle,
  IconCode,
  IconZoomIn,
  IconCopy,
  IconColumns,
  IconArrowUpRight,
  IconBriefcase,
  IconEye,
  IconKey,
  IconX,
} from '@wesbitty/ui'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRouter } from 'next/router'
import SectionContainer from '../../../components/Layouts/SectionContainer'
import DefaultLayout from '~/components/Layouts/Default'
import FeatureColumn from '~/components/FeatureColumn'
import Link from 'next/link'

const wesbitty = createClient(
  'https://rsnibhkhsbfnncjmwnkj.wesbitty.com',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTIxNDE1MywiZXhwIjoxOTMwNzkwMTUzfQ.OQEbAaTfgDdLCCht251P2JRD3QDnui6nsU8N-tZA_Mc'
)


function ApiLayout() {
    const { basePath } = useRouter()

  type SizeProps = 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  type LayoutProps = 'horizontal' | 'vertical'

  const [companyName] = useState('Wesbitty Inc')
  const [widgetSize] = useState<SizeProps>('tiny')
  const [socialLogins] = useState(true)
  const [socialLoginLayout] = useState<LayoutProps>('horizontal')

  const socials: Provider[] = ['facebook', 'google', 'bitbucket', 'github', 'gitlab']

  return (
    <DefaultLayout hideFooter hideHeader>
      <SectionContainer>
          <div className="grid grid-cols-12 lg:gap-16">

            <div className="col-span-12 lg:order-first lg:col-span-6 mb-14 lg:mt-0">
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                      <Card>
                        <Space size={8} direction="vertical">
                          <div>
                            <Space size={3} direction="vertical">
                             <Typography.Title level={3}>{companyName}</Typography.Title>
                            </Space>
                          </div>
                          <Auth
                            providers={socialLogins ? socials : []}
                            socialButtonSize={widgetSize}
                            socialLayout={socialLoginLayout}
                            supabaseClient={wesbitty}
                            socialColors={true}
                          />
                        </Space>
                      </Card>
                    </div>
                </div>


            <div className="order-last col-span-12 lg:col-span-6 xl:col-span-4">
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
                href="https://github.com/wesbitty/ui#using-supabase-ui-auth"
                as="https://github.com/wesbitty/ui#using-supabase-ui-auth"
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
    </DefaultLayout>
  )
}

export default ApiLayout