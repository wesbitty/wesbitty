import {
  jsx as _jsx,
  Fragment as _Fragment,
  jsxs as _jsxs,
} from 'react/jsx-runtime'
import { useState } from 'react'
import { IconAlertTriangle } from './Icon/icons/IconAlertTriangle'
import { IconInfo } from './Icon/icons/IconInfo'
import { IconX } from './Icon/icons/IconX'
import styleHandler from '../theme/handler'
import { IconAlertOctagon } from './Icon/icons/IconAlertOctagon'
import { IconCheckCircle } from './Icon/icons/IconCheckCircle'
const icons = {
  danger: _jsx(IconAlertOctagon, { strokeWidth: 1.5, size: 18 }),
  success: _jsx(IconCheckCircle, { strokeWidth: 1.5, size: 18 }),
  warning: _jsx(IconAlertTriangle, { strokeWidth: 1.5, size: 18 }),
  info: _jsx(IconInfo, { strokeWidth: 1.5, size: 18 }),
  neutral: _jsx(_Fragment, {}),
}
export function Alert({
  variant = 'neutral',
  className,
  title,
  withIcon,
  closable,
  children,
  icon,
  actions,
}) {
  let __styles = styleHandler('alert')
  const [visible, setVisible] = useState(true)
  let containerClasses = [__styles.base]
  containerClasses.push(__styles.variant[variant].base)
  if (className) containerClasses.push(className)
  let descriptionClasses = [
    __styles.description,
    __styles.variant[variant].description,
  ]
  let closeButtonClasses = [__styles.close]
  return _jsx(_Fragment, {
    children:
      visible &&
      _jsxs(
        'div',
        Object.assign(
          { className: containerClasses.join(' ') },
          {
            children: [
              withIcon
                ? _jsx(
                    'div',
                    Object.assign(
                      { className: __styles.variant[variant].icon },
                      { children: withIcon && icons[variant] }
                    )
                  )
                : null,
              icon && icon,
              _jsxs(
                'div',
                Object.assign(
                  { className: 'flex flex-1 items-center justify-between' },
                  {
                    children: [
                      _jsxs('div', {
                        children: [
                          _jsx(
                            'h3',
                            Object.assign(
                              {
                                className: [
                                  __styles.variant[variant].header,
                                  __styles.header,
                                ].join(' '),
                              },
                              { children: title }
                            )
                          ),
                          _jsx(
                            'div',
                            Object.assign(
                              { className: descriptionClasses.join(' ') },
                              { children: children }
                            )
                          ),
                        ],
                      }),
                      actions,
                    ],
                  }
                )
              ),
              closable &&
                _jsx(
                  'button',
                  Object.assign(
                    {
                      'aria-label': 'Close alert',
                      onClick: () => setVisible(false),
                      className: closeButtonClasses.join(' '),
                    },
                    { children: _jsx(IconX, { strokeWidth: 2, size: 16 }) }
                  )
                ),
            ],
          }
        )
      ),
  })
}
