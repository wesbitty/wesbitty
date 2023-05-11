import { jsx } from 'react/jsx-runtime';
import Divide from '../../../../node_modules/react-feather/dist/icons/divide.js';
import IconBase from '../../IconBase.js';

function IconDivide(props) {
  return jsx(IconBase, Object.assign({
    icon: Divide
  }, props));
}

export { IconDivide as default };
