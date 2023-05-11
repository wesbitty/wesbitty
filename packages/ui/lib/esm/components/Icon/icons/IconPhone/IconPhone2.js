import { jsx } from 'react/jsx-runtime';
import Phone from '../../../../node_modules/react-feather/dist/icons/phone.js';
import IconBase from '../../IconBase.js';

function IconPhone(props) {
  return jsx(IconBase, Object.assign({
    icon: Phone
  }, props));
}

export { IconPhone as default };
