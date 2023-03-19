import { Typography } from '@wesbitty/ui'

const SectionHeader = (props: any) => {
  return (
    <div className={'grid grid-cols-12 gap-1 sm:gap-8 ' + props.className}>
      <div className="relative col-span-12 grid grid-cols-12 py-12">
        <div className="col-span-12">
          <span className="col-span-12 mb-6 block font-mono text-sm uppercase tracking-widest text-gray-300 dark:text-gray-300">
            {props.subtitle}
          </span>
          <Typography.Title level={2}>
            <span>{props.title}</span>
            {props.title_alt && (
              <span className="inline text-gray-400 dark:text-gray-300">{props.title_alt}</span>
            )}
          </Typography.Title>
        </div>
        <div className="col-span-12 lg:col-span-7">
          {props.paragraph && (
            <Typography.Text type="secondary">
              <p className="mx-auto mt-3 text-xl sm:mt-4">{props.paragraph}</p>
            </Typography.Text>
          )}
        </div>
      </div>
    </div>
  )
}

export default SectionHeader
