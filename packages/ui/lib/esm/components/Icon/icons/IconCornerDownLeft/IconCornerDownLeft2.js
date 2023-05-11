import { jsx } from 'react/jsx-runtime';
import CornerDownLeft from '../../../../node_modules/react-feather/dist/icons/corner-down-left.js';
import IconBase from '../../IconBase.js';

function IconCornerDownLeft(props) {
  return jsx(IconBase, Object.assign({
    icon: CornerDownLeft
  }, props));
}

export { IconCornerDownLeft as default };
