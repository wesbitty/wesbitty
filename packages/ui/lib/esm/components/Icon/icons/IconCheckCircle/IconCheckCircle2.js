import { jsx } from 'react/jsx-runtime';
import CheckCircle from '../../../../node_modules/react-feather/dist/icons/check-circle.js';
import IconBase from '../../IconBase.js';

function IconCheckCircle(props) {
  return jsx(IconBase, Object.assign({
    icon: CheckCircle
  }, props));
}

export { IconCheckCircle as default };
