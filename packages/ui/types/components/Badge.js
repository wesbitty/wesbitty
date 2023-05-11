import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import styleHandler from '../theme/handler'
export function Badge({ color = 'brand', children, size, dot, className }) {
  const __styles = styleHandler('badge')
  let classes = [__styles.base]
  if (color) {
    classes.push(__styles.color[color])
  }
  if (size === 'large') {
    classes.push(__styles.size.large)
  }
  if (className) {
    classes.push(className)
  }
  return _jsxs(
    'span',
    Object.assign(
      { className: classes.join(' ') },
      {
        children: [
          dot &&
            _jsx(
              'svg',
              Object.assign(
                {
                  className: `${__styles.dot} ${__styles.color[color]}`,
                  fill: 'currentColor',
                  viewBox: '0 0 8 8',
                },
                { children: _jsx('circle', { cx: '4', cy: '4', r: '3' }) }
              )
            ),
          children,
        ],
      }
    )
  )
}
