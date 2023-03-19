import { useRouter } from 'next/router'
import Image from 'next/image'
import Styles from './FloatingIcons.module.css'

function FloatingIcons() {
  const { basePath } = useRouter()

  return (
    <div className="absolute hidden h-full w-full lg:block">
      <div className="container relative mx-auto h-full max-w-screen-2xl">
        <Image
          alt=""
          className={`${Styles['icon-react-one']}`}
          src={`${basePath}/images/product/auth/react-icon.svg`}
        />
        <Image
          alt=""
          src={`${basePath}/images/product/auth/electron-icon.svg`}
          className={`${Styles['icon-electron']}`}
        />
        <Image
          alt=""
          src={`${basePath}/images/product/auth/vue-icon.svg`}
          className={`${Styles['icon-vue']}`}
        />
        <Image
          alt=""
          src={`${basePath}/images/product/auth/angular-icon.svg`}
          className={`${Styles['icon-angular']}`}
        />
        <Image
          alt=""
          src={`${basePath}/images/product/auth/flutter-icon.svg`}
          className={`${Styles['icon-flutter']}`}
        />
        <Image
          alt=""
          src={`${basePath}/images/product/auth/nuxt-icon.svg`}
          className={`${Styles['icon-nuxt']}`}
        />
        <Image
          alt=""
          src={`${basePath}/images/product/auth/redwood-icon.svg`}
          className={`${Styles['icon-redwood']}`}
        />
      </div>
    </div>
  )
}

export default FloatingIcons
