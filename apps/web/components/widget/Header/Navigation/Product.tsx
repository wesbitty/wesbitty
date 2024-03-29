import React from 'react'
import Image from 'next/image'
import SolutionsData from '~/data/Solutions.json'
import CaseStudiesData from '~/data/CaseStudies.json'
import { useRouter } from 'next/router'
import ProductIcon from '~/components/Icons/product'
import { Typography, Badge } from '@wesbitty/ui'
import Link from 'next/link'

const Product = () => {
  const { basePath } = useRouter()

  const iconSections = Object.values(SolutionsData).map((solution) => {
    const { name, description, icon, label, url } = solution

    const content = (
      <div className="flex lg:flex-col">
        <div className="flex flex-row items-center">
          <ProductIcon icon={icon} />
          <div>
            <Typography.Title level={5} className="ml-3 mb-0">
              {name}
            </Typography.Title>
          </div>
        </div>
        <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
          <Typography.Text>
            <p className="mt-1 text-sm">{description}</p>
          </Typography.Text>
          {label && (
            <div>
              <Badge>{label}</Badge>
            </div>
          )}
        </div>
      </div>
    )
    return (
      url && (
        <Link
          key={name}
          href={url}
          className="p-3 col-span-6 rounded hover:bg-gray-50 dark:hover:bg-dark-700 transition"
        >
          {content}
        </Link>
      )
    )
  })

  return (
    <div className="grid grid-cols-12">
      <nav className="col-span-6" aria-labelledby="solutionsHeading">
        <div className="grid grid-cols-12 m-3 gap-3">{iconSections}</div>
      </nav>
      <div className="col-span-6">
        <div className="m-3 mx-6">
          <Typography.Text type="secondary">
            Latest case studies
          </Typography.Text>
          <ul className="mt-6 space-y-3">
            {CaseStudiesData.map((caseStudy: any, idx: number) => {
              if (idx > 1) {
                return null
              }
              return (
                <li className="flow-root" key={`flyout_case_${idx}`}>
                  <Link
                    href={caseStudy.url}
                    className="p-3 flex rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition ease-in-out duration-150 border dark:border-gray-600"
                  >
                    <div className="hidden sm:block flex-shrink-0">
                      <img
                        className="w-32 h-20 object-cover rounded-md"
                        src={`${basePath}/${caseStudy.imgUrl}`}
                        alt="caseStudyThumb"
                      />
                    </div>
                    <div className="min-w-0 flex-1 sm:ml-8">
                      <Typography.Title level={5} className="mb-0">
                        {caseStudy.title}
                      </Typography.Title>
                      <Typography.Text>{caseStudy.description}</Typography.Text>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Product
