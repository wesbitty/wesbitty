import { jsx } from 'react/jsx-runtime';
import Inbox from '../../../../node_modules/react-feather/dist/icons/inbox.js';
import IconBase from '../../IconBase.js';

function IconInbox(props) {
  return jsx(IconBase, Object.assign({
    icon: Inbox
  }, props));
}

export { IconInbox as default };
