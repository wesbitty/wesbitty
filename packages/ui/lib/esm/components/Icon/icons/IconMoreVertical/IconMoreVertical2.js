import { jsx } from 'react/jsx-runtime';
import MoreVertical from '../../../../node_modules/react-feather/dist/icons/more-vertical.js';
import IconBase from '../../IconBase.js';

function IconMoreVertical(props) {
  return jsx(IconBase, Object.assign({
    icon: MoreVertical
  }, props));
}

export { IconMoreVertical as default };
