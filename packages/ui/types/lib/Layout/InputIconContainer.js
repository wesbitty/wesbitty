import { jsx as _jsx } from 'react/jsx-runtime'
import styleHandler from '../../theme/handler'
export default function InputIconContainer({ icon }) {
  const __styles = styleHandler('inputIconContainer')
  return _jsx(
    'div',
    Object.assign({ className: __styles.base }, { children: icon })
  )
}
