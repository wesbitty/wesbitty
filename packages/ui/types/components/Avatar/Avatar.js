import { jsx as _jsx, Fragment as _Fragment } from 'react/jsx-runtime'
import { IconUser } from '../Icon/icons/IconUser'
// @ts-ignore
import AvatarStyles from './Avatar.module.css'
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
}) {
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
    objectToRender = _jsx('img', {
      className: classes.join(' '),
      src: src,
      alt: alt,
      style: Object.assign({ height: size, width: size }, style),
    })
  } else if (AvatarIcon) {
    classes.push(AvatarStyles['wsb-avatar-icon'])
    objectToRender = _jsx(
      'div',
      Object.assign(
        {
          className: classes.join(' '),
          style: Object.assign({ height: size, width: size }, style),
        },
        { children: _jsx(AvatarIcon, {}) }
      )
    )
  } else if (text) {
    classes.push(AvatarStyles['wsb-avatar-text'])
    objectToRender = _jsx(
      'div',
      Object.assign(
        {
          className: classes.join(' '),
          style: Object.assign({ height: size, width: size }, style),
        },
        { children: _jsx('p', { children: text[0] }) }
      )
    )
  } else if (children) {
    classes.push(AvatarStyles['wsb-avatar-children'])
    objectToRender = _jsx(
      'div',
      Object.assign(
        {
          className: classes.join(' '),
          style: Object.assign({ height: size, width: size }, style),
        },
        { children: children }
      )
    )
  } else {
    classes.push(AvatarStyles['wsb-avatar-fallback'])
    objectToRender = _jsx(
      'div',
      Object.assign(
        {
          className: classes.join(' '),
          style: Object.assign({ height: size, width: size }, style),
        },
        { children: _jsx(IconUser, {}) }
      )
    )
  }
  return _jsx(_Fragment, { children: objectToRender })
}
