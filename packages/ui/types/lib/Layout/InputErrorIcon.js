import { jsx as _jsx } from 'react/jsx-runtime'
import styleHandler from '../../theme/handler'
import { IconAlertCircle } from './../../index'
export default function InputErrorIcon({ style, size }) {
  const __styles = styleHandler('inputErrorIcon')
  return _jsx(
    'div',
    Object.assign(
      { className: __styles.base, style: style },
      {
        children: _jsx(IconAlertCircle, {
          size: size,
          strokeWidth: 2,
          // stroke={'#f56565'}
          className: '',
        }),
      }
    )
  )
}
