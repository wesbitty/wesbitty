import { useTheme } from '../theme'
import * as React from 'react'
import Image from 'next/image'

interface GlassPanelProps {
  title: string
  span?: string
  icon?: string | React.ReactNode
  children?: React.ReactNode
  header?: string
  background?: boolean
  logo?: string
  logoInverse?: string
  hasLightIcon?: boolean
  showLink?: boolean
  showIconBg?: boolean
}

interface Props {
  children: React.ReactNode
}

export const GlassPanel = ({
  title,
  span,
  icon,
  children,
  header,
  background = true,
  logo,
  logoInverse,
  hasLightIcon,
  showLink = false,
  showIconBg = false,
}: GlassPanelProps) => {
  const { darkMode } = useTheme()
  const showLogoInverse = logoInverse && darkMode
  const showLogo = !showLogoInverse && logo

  const IconBackground: React.FC<Props> = ({ children }) => (
    <div
      className={[
        'shrink-0',
        showIconBg
          ? 'bg-green-600 w-8 h-8 flex items-center justify-center rounded'
          : '',
      ].join(' ')}
    >
      {children}
    </div>
  )

  const LogoComponent = ({
    logoImage,
    className,
  }: {
    logoImage: string
    className?: string
  }) => (
    <div className="relative box-content p-8 pb-0">
      <div className="relative h-[33px] w-auto max-w-[145px]">
        <img
          alt="Logo"
          src={logoImage}
          width="100%"
          height="100%"
          className={className}
        />
      </div>
    </div>
  )

  return (
    <div
      className={[
        'relative',
        'h-full',
        'group',
        'cursor-pointer',
        'overflow-hidden',
        'border rounded-lg',
        'text-left',
        background
          ? 'border-scale-500 hover:border-scale-700 bg-white dark:bg-scale-300'
          : 'border-scale-400 hover:border-scale-500 bg-transparent',
        'transition',
      ].join(' ')}
    >
      {showLogoInverse && (
        <LogoComponent logoImage={logoInverse} className="opacity-50" />
      )}
      {showLogo && <LogoComponent logoImage={logo} className="opacity-75" />}

      {header && (
        <img
          src={`${header}`}
          className="transition-all left-0 -top-64 w-full
            duration-700 ease-out
            "
        />
      )}
      <div
        className="absolute left-0 top-0 w-[250px] h-[150px] transform scale-100 opacity-50 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700 ease-out"
        style={{
          background: `radial-gradient(100% 100% at 0% 0%, #3EACCF18, transparent)`,
        }}
      />
      <div
        className={[
          'px-8 pb-8 relative',
          'flex flex-col h-full',
          icon ? 'gap-6' : 'gap-2',
          !header ? 'pt-8' : '',
        ].join(' ')}
      >
        <div className="flex items-center gap-3">
          {icon && typeof icon === 'string' ? (
            <IconBackground>
              <img
                className="w-5"
                src={`${icon}${hasLightIcon && !darkMode ? '-light' : ''}.svg`}
              />
            </IconBackground>
          ) : (
            icon && <IconBackground>{icon}</IconBackground>
          )}
          <h5 className="text-base text-scale-1200">{title}</h5>
        </div>

        {children && (
          <span className="text-sm text-scale-1100 flex-grow">{children}</span>
        )}
        {showLink && (
          <span className="text-brand-900 justify-end text-sm">Learn more</span>
        )}
      </div>
    </div>
  )
}