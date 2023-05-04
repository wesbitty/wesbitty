import { FC } from 'react'
import Link from 'next/link'
import { Icon } from './Icon'

const isExternalUrl = (link: string): boolean => !link.startsWith('/')

export const ChevronLink: FC<{ label: string; url: string }> = ({
  label,
  url,
}) => {
  if (isExternalUrl(url)) {
    return (
      <Link
        href={url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center space-x-1.5 text-sky-600 no-underline hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
      >
        <span className="font-semibold">{label}</span>
        <span className="block w-2">
          <Icon name="chevron-right" />
        </span>
      </Link>
    )
  } else {
    return (
      <Link
        href={url}
        className="inline-flex items-center space-x-1.5 text-sky-600 no-underline hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
      >
        <span className="font-semibold">{label}</span>
        <span className="block w-2">
          <Icon name="chevron-right" />
        </span>
      </Link>
    )
  }
}
