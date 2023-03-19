import {
  Button,
  Divider,
  IconArrowUpRight,
  IconGitHub,
  IconTriangle,
  Space,
  Typography,
} from '@wesbitty/ui'
import Image from 'next/image'
import Link from 'next/link'

function ExampleCard(props: any) {
  return (
    <>
      <div
        className="flex h-40 flex-col 
          justify-between rounded rounded-b-none border-t border-r
          border-l
          border-gray-100 bg-white p-5
          dark:border-gray-600 dark:bg-gray-700
          "
      >
        <div className="mb-4">
          <Typography.Title level={5} className="mb-1">
            {props.title}
          </Typography.Title>
          <Typography.Text className="block">
            <p>{props.description}</p>
            <div className="mb-2 flex flex-row items-center">
              Created by:
              <Image
                alt=""
                src={props.author_img}
                className="ml-2 inline w-6 rounded-full border dark:border-gray-500"
              />
              <span className="ml-2">{props.author}</span>
            </div>
          </Typography.Text>
        </div>
      </div>
      <Divider light />
      <div>
        <div
          className="
          flex flex-col 
          justify-between rounded rounded-t-none border-b border-r
          border-l
          border-gray-100 bg-white p-5
          dark:border-gray-600 dark:bg-gray-800"
        >
          <Typography.Text>
            <Link
              href={props.repo_url}
              as={props.repo_url}
              className="flex flex-row items-center"
              target="_blank"
            >
              <span>{props.repo_name}</span>
              <span className="ml-1 inline-block">
                <IconGitHub size="small" />
              </span>
            </Link>
          </Typography.Text>
          <Space className="mt-3">
            {props.vercel_deploy_url && (
              <Link target="_blank" href={props.vercel_deploy_url}>
                <Image alt="" src="https://vercel.com/button" />
              </Link>
            )}
            {props.demo_url && (
              <Link href={props.demo_url} as={props.demo_url} target="_blank">
                <Button size="tiny" type="default" iconRight={<IconArrowUpRight />}>
                  Launch Demo
                </Button>
              </Link>
            )}
            {!props.demo_url && (
              <Link href={props.repo_url} as={props.repo_url} target="_blank">
                <Button size="tiny" type="default" iconRight={<IconArrowUpRight />}>
                  View Code
                </Button>
              </Link>
            )}
          </Space>
        </div>
      </div>
    </>
  )
}

export default ExampleCard
