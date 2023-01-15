import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Button, Card, Auth, Space, Tabs, Typography, IconCode, IconSearch } from '@wesbitty/ui'
import CodeBlock from '../CodeBlock/CodeBlock'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRouter } from 'next/router'

const wesbitty = createClient(
  'https://rsnibhkhsbfnncjmwnkj.wesbitty.com',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTIxNDE1MywiZXhwIjoxOTMwNzkwMTUzfQ.OQEbAaTfgDdLCCht251P2JRD3QDnui6nsU8N-tZA_Mc'
)

function AuthComponentExample() {
  // store API swiper instance
  const [imageSwiper, setImageSwiper] = useState(undefined)
  const [imageSwiperActiveIndex, setImageSwiperActiveIndex] = useState(0)
  const { basePath } = useRouter()

  function handleNavChange(e: number) {
    console.log(e)
    setImageSwiperActiveIndex(e)
    // @ts-ignore
    imageSwiper.slideTo(e)
  }

  const AuthContainer = (props: any) => {
    const { user } = Auth.useUser()
    if (user) {
      return (
        <>
          <Typography.Text>Signed in: {user.email}</Typography.Text>
          <Button block onClick={() => props.supabaseClient.auth.signOut()}>
            Sign out
          </Button>
        </>
      )
    }
    return props.children
  }

  return (
    <div className="sbui-tabs--alt">
      {/* <Tabs
        activeId={imageSwiperActiveIndex.toString()}
        onChange={(id: string) => handleNavChange(Number(id))}
      >
        <Tabs.Panel label="Preview" id="0" icon={<IconSearch />}>
          <span></span>
        </Tabs.Panel>
        <Tabs.Panel label="Code" icon={<IconCode />} id="1">
          <span></span>
        </Tabs.Panel>
      </Tabs> */}
      <div
        className={`relative bg-white dark:bg-gray-800 py-2 pb-16 border dark:border-gray-600 auth-container`}
      >
        <Swiper
          // @ts-ignore
          onSwiper={setImageSwiper}
          style={{ zIndex: 0 }}
          initialSlide={0}
          spaceBetween={0}
          slidesPerView={1}
          speed={300}
          autoHeight={true}
          allowTouchMove={false}
        >
          <SwiperSlide key={1}>
            <div className="pt-8" style={{ maxWidth: '420px', margin: '0 auto' }}>
              <Card>
                <Space size={8} direction="vertical">
                  <div>
                    <Space size={3} direction="vertical">
                      <img src={`${basePath}/Logo/wesbitty-dark-logo.svg`} alt="Logo" />
                      <Typography.Title level={3}>{'Wesbitty Inc'}</Typography.Title>
                    </Space>
                  </div>
                  <Auth.UserContextProvider supabaseClient={wesbitty}>
                    <AuthContainer supabaseClient={wesbitty}>
                      <Auth
                        providers={['facebook', 'google', 'github', 'bitbucket', 'gitlab']}
                        socialButtonSize={'medium'}
                        socialLayout={'horizontal'}
                        supabaseClient={wesbitty}
                        socialColors={false}
                      />
                    </AuthContainer>
                  </Auth.UserContextProvider>
                </Space>
              </Card>
            </div>
          </SwiperSlide>

          <SwiperSlide key={2}>
            <div className="p-8">
              <CodeBlock
                children={`import React, { useState } from 'react'
import { Auth, Typography, Button } from '@wesbitty/ui'
import { createClient } from '@supabase/supabase-js'

export default function app() {
  const wesbitty = createClient(
    "https://YOUR-PROJECT-ID.wesbitty.com",
    "YOUR-PUBLIC-ANON-KEY"
  );

  function Container(props: any) {
    const { user } = Auth.useUser();
    if (user) {
      return (
        <div>
          <Typography.Text>Signed in: {user.email}</Typography.Text>
          <Button block onClick={() => props.supabaseClient.auth.signOut()}>
            Sign out
          </Button>
        </div>
      )
    }
    return props.children;
  };

  return (
    <Auth.UserContextProvider supabaseClient={wesbitty}>
      <Container supabaseClient={wesbitty}>
        <Auth supabaseClient={wesbitty} />
      </Container>
    </Auth.UserContextProvider>
  );
}
`}
                lang="js"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default AuthComponentExample
