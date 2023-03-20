import classNames from 'classnames'

interface Props {
  children: React.ReactNode
  className?: string
}

export const Section = ({ children, className }: Props) => (
  <div
    className={classNames(
      `sm:py-6 container relative mx-auto px-6 pt-6 md:pt-10 lg:px-8 lg:pt-8 xl:px-8`,
      className
    )}
  >
    {children}
  </div>
)
