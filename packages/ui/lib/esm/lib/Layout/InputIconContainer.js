import { jsx } from 'react/jsx-runtime';
import styleHandler from '../../theme/handler.js';

function InputIconContainer(_ref) {
  let {
    icon
  } = _ref;
  const __styles = styleHandler('inputIconContainer');
  return jsx("div", Object.assign({
    className: __styles.base
  }, {
    children: icon
  }));
}

export { InputIconContainer as default };
