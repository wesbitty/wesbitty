import { jsx } from 'react/jsx-runtime';
import Sun from '../../../../node_modules/react-feather/dist/icons/sun.js';
import IconBase from '../../IconBase.js';

function IconSun(props) {
  return jsx(IconBase, Object.assign({
    icon: Sun
  }, props));
}

export { IconSun as default };
