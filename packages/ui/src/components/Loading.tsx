import { IconLoader } from '../index'
import { styleHandler } from '../theme/handler'
import React from 'react'

type Props = {
  children: React.ReactNode
  active: boolean
}
export default function Loading({ children, active }: Props) {
  const __styles = styleHandler('loading')

  let classNames = [__styles.base]

  let contentClasses = [__styles.content.base]

  if (active) {
    contentClasses.push(__styles.content.active)
  }

  let spinnerClasses = [__styles.spinner]

  return (
    <div className={classNames.join(' ')}>
      <div className={contentClasses.join(' ')}>{children}</div>
      {active && <IconLoader size="xlarge" className={spinnerClasses} />}
    </div>
  )
}
