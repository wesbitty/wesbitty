import { jsx } from 'react/jsx-runtime';
import Smartphone from '../../../../node_modules/react-feather/dist/icons/smartphone.js';
import IconBase from '../../IconBase.js';

function IconSmartphone(props) {
  return jsx(IconBase, Object.assign({
    icon: Smartphone
  }, props));
}

export { IconSmartphone as default };
