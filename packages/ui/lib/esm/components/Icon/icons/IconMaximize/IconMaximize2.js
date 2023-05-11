import { jsx } from 'react/jsx-runtime';
import Maximize from '../../../../node_modules/react-feather/dist/icons/maximize.js';
import IconBase from '../../IconBase.js';

function IconMaximize(props) {
  return jsx(IconBase, Object.assign({
    icon: Maximize
  }, props));
}

export { IconMaximize as default };
