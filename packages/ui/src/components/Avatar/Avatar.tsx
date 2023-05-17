import React from 'react'
import { Icon } from '../Icon/IconImportHandler'
import { IconUser } from '../Icon/icons/IconUser'
// @ts-ignore
import AvatarStyles from './Avatar.module.css'

type AvatarProps = {
  children?: React.ReactNode
  src?: string | undefined
  style?: React.CSSProperties
  className?: string
  alt?: string
  responsive?: boolean
  text?: string
  variant?: 'circle' | 'square'
  AvatarIcon?: Icon
  size: number
}

export default function Avatar({
  src,
  style,
  className,
  alt,
  responsive,
  text,
  variant,
  AvatarIcon,
  size,
  children,
}: AvatarProps) {
  const classes = [AvatarStyles['wsb-avatar']]
  classes.push(className)
  let objectToRender

  const imageExist = () => {
    const img = new Image()
    img.src = src
    if (img.complete) {
      return true
    } else {
      img.onload = () => {
        return true
      }
      img.onerror = () => {
        return false
      }
    }
  }

  if (imageExist && src) {
    classes.push(AvatarStyles['wsb-avatar-image'])
    objectToRender = (
      <img
        className={classes.join(' ')}
        src={src}
        alt={alt}
        style={{ height: size, width: size, ...style }}
      />
    )
  } else if (AvatarIcon) {
    classes.push(AvatarStyles['wsb-avatar-icon'])
    objectToRender = (
      <div
        className={classes.join(' ')}
        style={{ height: size, width: size, ...style }}
      >
        <AvatarIcon />
      </div>
    )
  } else if (text) {
    classes.push(AvatarStyles['wsb-avatar-text'])
    objectToRender = (
      <div
        className={classes.join(' ')}
        style={{ height: size, width: size, ...style }}
      >
        <p>{text[0]}</p>
      </div>
    )
  } else if (children) {
    classes.push(AvatarStyles['wsb-avatar-children'])
    objectToRender = (
      <div
        className={classes.join(' ')}
        style={{ height: size, width: size, ...style }}
      >
        {children}
      </div>
    )
  } else {
    classes.push(AvatarStyles['wsb-avatar-fallback'])
    objectToRender = (
      <div
        className={classes.join(' ')}
        style={{ height: size, width: size, ...style }}
      >
        <IconUser />
      </div>
    )
  }

  return <>{objectToRender}</>
}
