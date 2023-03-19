import { IconTwitter, Typography } from '@wesbitty/ui'
import Image from 'next/image'

interface TweetCard {
  handle: string
  quote: string
  img_url: string
}

function TweetCard(props: TweetCard) {
  return (
    <div className="dark:bg-dark-800 rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-600">
      <div className="relative">
        <div className="h-12 w-12 overflow-hidden rounded-md border dark:border-gray-600">
          <Image
            src={props.img_url}
            width="64"
            height="64"
            alt="Tweet"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div
          className="absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-md"
          style={{ background: '#00acee' }}
        >
          <div className="text-white">
            <IconTwitter fill={'white'} size="tiny" />
          </div>
        </div>
      </div>
      <Typography.Text type="secondary" className="mt-3 block">
        {props.handle}
      </Typography.Text>
      <Typography.Text>
        <p className="mt-3 text-base text-gray-900 dark:text-white">&quot;{props.quote}&quot;</p>
      </Typography.Text>
    </div>
  )
}
export default TweetCard
