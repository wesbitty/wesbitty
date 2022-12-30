import { Button, Typography } from '@wesbitty/ui'

const CTABanner = (props: any) => {
  const { darkerBg } = props
  return (
    <div
      className={`
        grid grid-cols-12 items-center gap-4 border-t bg-dark-800 py-32 text-center dark:border-gray-600
        ${darkerBg ? 'dark:bg-dark-900' : ''} px-16
      `}
    >
      <div className="col-span-12">
        <Typography.Title level={2}>
          <span style={{ color: '#bbbbbb' }}>Build in a weekend,</span>
          <span style={{ color: '#ffffff' }}> scale to millions</span>
        </Typography.Title>
      </div>
      <div className="col-span-12 mt-4">
        <a href="/user/login">
          <Button size="medium">Start your project</Button>
        </a>
      </div>
    </div>
  )
}

export default CTABanner
