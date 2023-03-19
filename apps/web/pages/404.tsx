import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@wesbitty/ui'
import { Default } from '../components/Widget/Default'
import { useTheme } from '~/components/ColorScheme'
import { useRouter } from 'next/router'

const Error404 = () => {
  const [show404, setShow404] = useState<boolean>(false)
  const { AppMode } = useTheme()
  const { basePath } = useRouter()

  useEffect(() => {
    setTimeout(() => {
      setShow404(true)
    }, 500)
  }, [])

  return (
    <Default hideHeader hideFooter>
      <div className="relative mx-auto flex h-screen w-full flex-col items-center justify-center">
        <div className="absolute top-0 mx-auto w-full max-w-7xl px-8 pt-6 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between sm:h-10">
            <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <Link href="/">
                  <Image
                    src={
                      AppMode
                        ? `${basePath}/Logo/wesbitty-dark-logo.svg`
                        : `${basePath}/Logo/wesbitty-light-logo.svg`
                    }
                    alt="Wesbitty logo"
                    height={24}
                    width={120}
                  />
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="absolute">
          <h1
            className={`text-scale-1200 select-none text-[14rem] opacity-[5%] filter transition duration-200 sm:text-[18rem] lg:text-[28rem] ${
              show404 ? 'blur-sm' : 'blur-none'
            }`}
          >
            404
          </h1>
        </div>
        <div
          className={`flex flex-col items-center justify-center space-y-6 transition ${
            show404 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-scale-1200 flex w-[320px] flex-col items-center justify-center space-y-3">
            <h1 className="m-2 text-2xl">Looking for something? 🔍</h1>
            <p className="text-center text-sm">
              We couldn't find the page that you're looking for!
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button as="a" size="small" className="text-white">
                Head back
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Default>
  )
}

export default Error404
