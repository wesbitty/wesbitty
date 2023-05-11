import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import Typography from '../Typography'
import styleHandler from '../../theme/handler'
function Card({
  children,
  className,
  cover,
  hoverable,
  style,
  title,
  titleExtra,
}) {
  let __styles = styleHandler('card')
  let classes = [__styles.base]
  if (hoverable) classes.push(__styles.hoverable)
  if (className) classes.push(className)
  return _jsxs(
    'div',
    Object.assign(
      { className: classes.join(' '), style: style },
      {
        children: [
          title &&
            _jsxs(
              'div',
              Object.assign(
                { className: __styles.head },
                {
                  children: [
                    _jsx(
                      Typography.Text,
                      Object.assign(
                        { style: { margin: 0 } },
                        { children: title }
                      )
                    ),
                    _jsx(
                      Typography.Link,
                      Object.assign(
                        { style: { margin: 0 } },
                        { children: titleExtra }
                      )
                    ),
                  ],
                }
              )
            ),
          cover,
          _jsx(
            'div',
            Object.assign(
              { className: __styles.content },
              { children: children }
            )
          ),
        ],
      }
    )
  )
}
function Meta({ title, description, style, className }) {
  return _jsxs(
    'div',
    Object.assign(
      { style: style, className: className },
      {
        children: [
          _jsx(
            Typography.Title,
            Object.assign(
              { style: { margin: '0' }, level: 5 },
              { children: title }
            )
          ),
          _jsx('div', {
            children: _jsx(
              Typography.Text,
              Object.assign({ type: 'secondary' }, { children: description })
            ),
          }),
        ],
      }
    )
  )
}
Card.Meta = Meta
export default Card
