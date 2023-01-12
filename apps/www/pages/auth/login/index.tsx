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

          <div className="order-last col-span-12 lg:order-first lg:col-span-6 mt-8 lg:mt-0">
      
            <div className="pt-8" style={{ maxWidth: '420px', margin: '0 auto' }}>
                      <Card>
                        <Space size={4} direction="vertical">
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


      
                <div className="col-span-12 lg:col-span-6 lg:col-start-7 xl:col-span-4 xl:col-start-8">

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
           </div>
          
        </div>
        </SectionContainer>
    </DefaultLayout>
  )
}

export default ApiLayout
