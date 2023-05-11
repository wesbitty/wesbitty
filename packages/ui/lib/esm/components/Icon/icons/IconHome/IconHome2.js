import { jsx } from 'react/jsx-runtime';
import Home from '../../../../node_modules/react-feather/dist/icons/home.js';
import IconBase from '../../IconBase.js';

function IconHome(props) {
  return jsx(IconBase, Object.assign({
    icon: Home
  }, props));
}

export { IconHome as default };
