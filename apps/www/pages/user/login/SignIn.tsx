import React from 'react'
import { createClient } from '@supabase/supabase-js'
import {
  Button,
  IconX,
  Space,
  Card,
  Auth,
  Typography,
} from '@wesbitty/ui'
import SectionContainer from '../../../components/Layouts/SectionContainer'
import Link from 'next/link'
import DefaultLayout from '../../../components/Layouts/Default'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'


import { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

const wesbitty = createClient(
  'https://rsnibhkhsbfnncjmwnkj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTIxNDE1MywiZXhwIjoxOTMwNzkwMTUzfQ.OQEbAaTfgDdLCCht251P2JRD3QDnui6nsU8N-tZA_Mc'
)

export default function SignIn() {
  // store API swiper instance
  const [imageSwiper, setImageSwiper] = useState(undefined)
  const [imageSwiperActiveIndex, setImageSwiperActiveIndex] = useState(0)

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

        </Swiper>
      </div>
    </div>
  )
}