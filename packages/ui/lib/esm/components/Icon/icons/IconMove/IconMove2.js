import { jsx } from 'react/jsx-runtime';
import Move from '../../../../node_modules/react-feather/dist/icons/move.js';
import IconBase from '../../IconBase.js';

function IconMove(props) {
  return jsx(IconBase, Object.assign({
    icon: Move
  }, props));
}

export { IconMove as default };
