import { FC, ReactNode } from 'react'
import Link from 'next/link'
import { Icon } from './Icon'

export const iLink: FC<{ href: string; children: ReactNode }> = ({
  href,
  children,
}) => {
  const isExternalUrl = !(href.startsWith('/') || href.startsWith('#'))

  return (
    <Link
      href={href}
      className="inline-flex items-center space-x-1"
      target={isExternalUrl ? '_blank' : undefined}
      rel={isExternalUrl ? 'noreferrer' : undefined}
    >
      <span>{children}</span>
      {isExternalUrl && (
        <span className="block w-4">
          <Icon name="external-link" />
        </span>
      )}
    </Link>
  )
}
