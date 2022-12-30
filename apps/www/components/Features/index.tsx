import { Button, Badge, Typography, IconArrowRight } from '@wesbitty/ui'
import SectionHeader from '../UI/SectionHeader'
import Solutions from '../../@wesbitty/data/Solutions.json'
import Link from 'next/link'
import SectionContainer from '../Layouts/SectionContainer'
import ProductIcon from '../ProductIcon'
import TextLink from '../TextLink'

const Features = () => {
  const IconSections = Object.values(Solutions).map((solution: any) => {
    const { name, description, icon, label, url } = solution
    return (
      <div key={name} className="mb-10 md:mb-0">
        <div className="flex items-center">
          <ProductIcon icon={icon} />
          <dt className="ml-4 flex flex-row xl:flex-col">
            <Typography.Title level={4} className="m-0">
              {name}
            </Typography.Title>
          </dt>
        </div>
        <div className="mt-5">
          <Typography.Text>{description}</Typography.Text>
        </div>
        {label && (
          <div className="mt-3">
            <Badge dot>{label}</Badge>
          </div>
        )}
        {url && <TextLink label={label ? 'Get notified' : 'Learn more'} url={url} />}
      </div>
    )
  })

  return (
    <SectionContainer className="pb-0">
      <Typography.Title level={2} className="mb-16">
        Build faster and focus on your products
      </Typography.Title>
      <dl className="grid grid-cols-1 gap-y-4  sm:grid-cols-2 md:grid-cols-2 md:gap-16 lg:grid-cols-4 lg:gap-x-8 xl:gap-x-24">
        {IconSections}
      </dl>
    </SectionContainer>
  )
}

export default Features
