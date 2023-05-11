import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import styleHandler from '../../theme/handler'
import { IconLoader } from './../../index'
export default function Loading({ children, active }) {
  const __styles = styleHandler('loading')
  let classNames = [__styles.base]
  let contentClasses = [__styles.content.base]
  if (active) {
    contentClasses.push(__styles.content.active)
  }
  let spinnerClasses = [__styles.spinner]
  return _jsxs(
    'div',
    Object.assign(
      { className: classNames.join(' ') },
      {
        children: [
          _jsx(
            'div',
            Object.assign(
              { className: contentClasses.join(' ') },
              { children: children }
            )
          ),
          active &&
            _jsx(IconLoader, { size: 'xlarge', className: spinnerClasses }),
        ],
      }
    )
  )
}
