import { jsx } from 'react/jsx-runtime';
import MessageSquare from '../../../../node_modules/react-feather/dist/icons/message-square.js';
import IconBase from '../../IconBase.js';

function IconMessageSquare(props) {
  return jsx(IconBase, Object.assign({
    icon: MessageSquare
  }, props));
}

export { IconMessageSquare as default };
