import { IconArrowRight } from '@wesbitty/ui'
import Link from 'next/link'

function TextLink({ url, label }: any) {
  return (
    <Link href={url} className="mt-3 block text-sm text-gray-400 dark:text-gray-400">
      <div className="flex items-center">
        <span>{label}</span>
        <span className="ml-2">
          <IconArrowRight size="tiny" />
        </span>
      </div>
    </Link>
  )
}

export default TextLink
