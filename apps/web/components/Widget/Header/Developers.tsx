import React from 'react'
import DevelopersData from '../../../wesbitty/data/Developers.json'
import AnnouncementsData from '../../../wesbitty/data/Announcements.json'
import { useRouter } from 'next/router'
import { Typography } from '@wesbitty/ui'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  text: string
  description?: string
  url?: string
  icon?: string
}

const Developers = () => {
  const { basePath } = useRouter()
  const iconSections = Object.values(DevelopersData).map((company: Props) => {
    const { text, description, url, icon } = company

    const content = (
      <a
        href={url}
        className="dark:hover:bg-dark-700 -m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50"
      >
        {/* <!-- Heroicon name: support --> */}
        <svg
          className="stroke-gray h-6 w-6 flex-shrink-0 dark:stroke-white "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icon} />
        </svg>
        <div className="ml-4">
          <Typography.Title level={5}>{text}</Typography.Title>
          <Typography.Text>
            <p>{description}</p>
          </Typography.Text>
        </div>
      </a>
    )
    return url ? (
      <Link
        key={text}
        href={url}
        className="dark:hover:bg-dark-700 col-span-6 rounded p-3 transition hover:bg-gray-50"
      >
        {content}
      </Link>
    ) : (
      <div
        key={text}
        className="-m-3 flex flex-col justify-between rounded-lg p-3 transition duration-150 ease-in-out"
      >
        {content}
      </div>
    )
  })

  return (
    <div className="grid grid-cols-12">
      <nav className="col-span-6" aria-labelledby="solutionsHeading">
        <div className="m-3 grid grid-cols-12 gap-3">{iconSections}</div>
      </nav>
      <div className="col-span-6">
        <div className="m-3 mx-6">
          <Typography.Text type="secondary">Latest announcements</Typography.Text>
          <ul className="mt-6 space-y-3 pb-6">
            {AnnouncementsData.map((caseStudy: any, idx: number) => (
              <li className="flow-root" key={`flyout_case_${idx}`}>
                <Link
                  href={caseStudy.url}
                  className="dark:hover:bg-dark-700 flex rounded-lg border p-3 transition duration-150 ease-in-out hover:bg-gray-100 dark:border-gray-600"
                >
                  <div className="hidden flex-shrink-0 sm:block">
                    <Image
                      className="h-20 w-32 rounded-md object-cover"
                      src={`${basePath}/${caseStudy.imgUrl}`}
                      alt="caseStudyThumb"
                    />
                  </div>
                  <div className="min-w-0 flex-1 sm:ml-8">
                    <Typography.Title level={5} className="mb-0">
                      {caseStudy.title}
                    </Typography.Title>
                    <Typography.Text type="secondary">{caseStudy.description}</Typography.Text>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Developers
