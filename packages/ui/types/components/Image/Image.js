import { jsx as _jsx, Fragment as _Fragment } from 'react/jsx-runtime'
export default function Image({
  source,
  style,
  className,
  type,
  alt,
  responsive,
}) {
  // let classes = [ImageStyles['wsb-image-normal']]
  // classes.push(type === 'rounded' && ImageStyles['wsb-image-rounded'])
  // classes.push(type === 'circle' && ImageStyles['wsb-image-circle'])
  // if(responsive) classes.push(ImageStyles['wsb-image-responsive'])
  // if (className) classes.push(className)
  return _jsx(_Fragment, {
    children: _jsx('img', {
      // className={classes.join(' ')}
      src: source,
      style: style,
      alt: alt,
    }),
  })
}
