import { FC, useState, useEffect } from 'react'
import { type DocHeading } from '~/utils/wesjet/config/Doc'
import { getNodeText, sluggifyTitle } from '~/utils/sluggify'
import { Icon } from '../../Icon'
import Link from 'next/link'

export const PageNavigation: FC<{ headings: DocHeading[] }> = ({
  headings,
}) => {
  const [activeHeading, setActiveHeading] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      let current = ''
      for (const heading of headings) {
        const slug = sluggifyTitle(getNodeText(heading.title))
        const element = document.getElementById(slug)
        if (element && element.getBoundingClientRect().top < 240) current = slug
      }
      setActiveHeading(current)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headings])

  const headingsToRender = headings.filter((_) => _.level > 1)

  if ((headingsToRender ?? []).length === 0) return null

  return (
    <div className="text-sm">
      <h4 className="mb-4 font-medium text-slate-1200 dark:text-slate-300">
        On this page
      </h4>
      <ul className="space-y-2">
        {headingsToRender.map(({ title, level }, index) => (
          <li key={index}>
            <Link
              href={`#${sluggifyTitle(getNodeText(title))}`}
              style={{ marginLeft: (level - 2) * 16 }}
              className={`flex ${
                sluggifyTitle(getNodeText(title)) == activeHeading
                  ? 'text-sky-600 dark:text-sky-400'
                  : 'hover:text-slate-1200 dark:hover:text-slate-300'
              }`}
            >
              <span className="mr-2 mt-[5px] block w-1.5 shrink-0">
                <Icon name="chevron-right" />
              </span>
              <span
                dangerouslySetInnerHTML={{
                  __html: title
                    .replace('`', '<code style="font-size: 0.75rem;">')
                    .replace('`', '</code>'),
                }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
