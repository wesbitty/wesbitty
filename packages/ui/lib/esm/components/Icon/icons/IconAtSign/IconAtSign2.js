import { jsx } from 'react/jsx-runtime';
import AtSign from '../../../../node_modules/react-feather/dist/icons/at-sign.js';
import IconBase from '../../IconBase.js';

function IconAtSign(props) {
  return jsx(IconBase, Object.assign({
    icon: AtSign
  }, props));
}

export { IconAtSign as default };
