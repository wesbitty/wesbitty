import { useRouter } from 'next/router'
import Image from 'next/image'
import Styles from './FloatingIcons.module.css'

function FloatingIcons() {
  const { basePath } = useRouter()

  return (
    <div className="absolute w-full h-full hidden lg:block">
      <div className="container max-w-screen-2xl h-full relative mx-auto">
        <Image
          alt="Product"
          className={`${Styles['icon-react-one']}`}
          src={`${basePath}/images/product/auth/react-icon.svg`}
        />
        <Image
          alt="Product"
          src={`${basePath}/images/product/auth/electron-icon.svg`}
          className={`${Styles['icon-electron']}`}
        />
        <Image
          alt="Product"
          src={`${basePath}/images/product/auth/vue-icon.svg`}
          className={`${Styles['icon-vue']}`}
        />
        <Image
          alt="Product"
          src={`${basePath}/images/product/auth/angular-icon.svg`}
          className={`${Styles['icon-angular']}`}
        />
        <Image
          alt="Product"
          src={`${basePath}/images/product/auth/flutter-icon.svg`}
          className={`${Styles['icon-flutter']}`}
        />
        <Image
          alt="Product"
          src={`${basePath}/images/product/auth/nuxt-icon.svg`}
          className={`${Styles['icon-nuxt']}`}
        />
        <Image
          alt="Product"
          src={`${basePath}/images/product/auth/redwood-icon.svg`}
          className={`${Styles['icon-redwood']}`}
        />
      </div>
    </div>
  )
}

export default FloatingIcons
