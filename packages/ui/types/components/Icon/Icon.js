var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
import { jsx as _jsx } from 'react/jsx-runtime'
import styleHandler from '../../theme/handler'
import { IconContext } from './IconContext'
// @ts-ignore
// import IconStyles from './Icon.module.css'
const IconStyles = {}
function Icon(_a) {
  var {
      className,
      size,
      type,
      color,
      strokeWidth,
      fill = undefined,
      stroke = undefined,
      background,
      src,
    } = _a,
    props = __rest(_a, [
      'className',
      'size',
      'type',
      'color',
      'strokeWidth',
      'fill',
      'stroke',
      'background',
      'src',
    ])
  const __styles = styleHandler('icon')
  return _jsx(IconContext.Consumer, {
    children: ({ contextSize, className: contextClassName }) => {
      const defaultSizes = {
        tiny: 14,
        small: 18,
        medium: 20,
        large: 20,
        xlarge: 24,
        xxlarge: 30,
        xxxlarge: 42,
      }
      const defaultSize = defaultSizes['large']
      // const iconSize = typeof size === 'string' ? defaultSizes[contextSize] : 21
      let iconSize = 21
      // use contextSize of parent (via context hook) if one exists
      if (contextSize) {
        iconSize = contextSize
          ? typeof contextSize === 'string'
            ? defaultSizes[contextSize]
            : contextSize
          : defaultSize
      }
      // use size prop of this component if one exists
      if (size) {
        iconSize = size
          ? typeof size === 'string'
            ? defaultSizes[size]
            : size
          : defaultSize
      }
      // confitional used for Icons with no color settings
      // default these icons to use 'currentColor' ie, the text color
      const noColor = !color && !fill && !stroke
      let classes = ['wsb-icon', className]
      if (contextClassName) {
        classes.push(contextClassName)
      }
      const Icon =
        // custom SVG file
        _jsx(
          'svg',
          Object.assign(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              color: !noColor ? color : 'currentColor',
              fill: !noColor ? (fill ? fill : 'none') : 'none',
              stroke: !noColor ? stroke : 'currentColor',
              strokeWidth: strokeWidth,
              className: classes.join(' '),
              width: iconSize,
              height: iconSize,
            },
            props,
            { children: src }
          )
        )
      return background
        ? _jsx(
            'div',
            Object.assign(
              {
                // circle coloured background
                className: __styles.container,
              },
              { children: Icon }
            )
          )
        : Icon
    },
  })
}
export default Icon
