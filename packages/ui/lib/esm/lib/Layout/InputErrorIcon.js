import { jsx } from 'react/jsx-runtime';
import styleHandler from '../../theme/handler.js';
import IconAlertCircle from '../../components/Icon/icons/IconAlertCircle/IconAlertCircle2.js';

function InputErrorIcon(_ref) {
  let {
    style,
    size
  } = _ref;
  const __styles = styleHandler('inputErrorIcon');
  return jsx("div", Object.assign({
    className: __styles.base,
    style: style
  }, {
    children: jsx(IconAlertCircle, {
      size: size,
      strokeWidth: 2,
      // stroke={'#f56565'}
      className: ""
    })
  }));
}

export { InputErrorIcon as default };
