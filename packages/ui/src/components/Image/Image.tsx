import React from 'react'

// @ts-ignore
// import ImageStyles from './Image.module.css'

type Props = {
  source?: string
  style?: React.CSSProperties
  className?: string
  type?: 'rounded' | 'circle'
  alt?: string
  responsive?: boolean
}

export default function Image({
  source,
  style,
  className,
  type,
  alt,
  responsive,
}: Props) {
  // let classes = [ImageStyles['wsb-image-normal']]
  // classes.push(type === 'rounded' && ImageStyles['wsb-image-rounded'])
  // classes.push(type === 'circle' && ImageStyles['wsb-image-circle'])
  // if(responsive) classes.push(ImageStyles['wsb-image-responsive'])
  // if (className) classes.push(className)
  return (
    <>
      <img
        // className={classes.join(' ')}
        src={source}
        style={style}
        alt={alt}
      />
    </>
  )
}
