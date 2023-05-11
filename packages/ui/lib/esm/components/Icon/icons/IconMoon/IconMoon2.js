import { jsx } from 'react/jsx-runtime';
import Moon from '../../../../node_modules/react-feather/dist/icons/moon.js';
import IconBase from '../../IconBase.js';

function IconMoon(props) {
  return jsx(IconBase, Object.assign({
    icon: Moon
  }, props));
}

export { IconMoon as default };
