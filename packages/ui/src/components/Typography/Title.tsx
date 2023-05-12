import React from 'react'
import { styleHandler } from '../../theme/handler'

interface Props {
  className?: string
  level?: 1 | 2 | 3 | 4 | 5
  children: any
  style?: React.CSSProperties
}

function Title({ className, level = 1, children, style }: Props) {
  let __styles = styleHandler('typography')

  let classes = [__styles.title.base]

  if (className) {
    classes.push(className)
  }

  if (level) {
    classes.push(__styles.title.level[level])
  }

  const CustomTag: any = `h${level}`

  return (
    <CustomTag style={style} className={classes.join(' ')}>
      {children}
    </CustomTag>
  )
}

export default Title
