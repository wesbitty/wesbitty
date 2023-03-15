import { useRouter } from 'next/router'
import { Button, Card, Typography, Space, IconGitHub } from '@wesbitty/ui'
import SectionContainer from '../Layouts/SectionContainer'
import ExampleCard from '../ExampleCard'
import Examples from '../../wesbitty/data/Examples.json'
import Link from 'next/link'

const BuiltExamples = () => {
  const { basePath } = useRouter()
  return (
    <SectionContainer className="xl:pt-32">
      <div className="text-center">
        <Typography.Title level={2}>
          What can you build with wesbitty?
        </Typography.Title>
        <Typography.Text>
          <p className="lg:text-lg">
            There are many example apps and starter projects to get going
          </p>
          <Space className="justify-center">
            <Link href="/docs/guides/examples" as="/docs/guides/examples">
              <a>
                <Button type="default">View all examples</Button>
              </a>
            </Link>
            <Link
              href="https://github.com/wesbitty/wesbitty/tree/master/examples"
              as="https://github.com/wesbitty/wesbitty/tree/master/examples"
            >
              <a>
                <Button type="default" icon={<IconGitHub />}>
                  Official github library
                </Button>
              </a>
            </Link>
          </Space>
        </Typography.Text>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-16">
        {Examples.slice(0, 6).map((example, i) => {
          return (
            <div
              className={`col-span-12 lg:col-span-6 xl:col-span-4 ${
                i > 2 && `sm:hidden lg:block`
              }`}
              key={i}
            >
              <ExampleCard {...example} />
            </div>
          )
        })}
      </div>
    </SectionContainer>
  )
}

export default BuiltExamples
