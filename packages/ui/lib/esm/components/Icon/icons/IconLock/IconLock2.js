import { jsx } from 'react/jsx-runtime';
import Lock from '../../../../node_modules/react-feather/dist/icons/lock.js';
import IconBase from '../../IconBase.js';

function IconLock(props) {
  return jsx(IconBase, Object.assign({
    icon: Lock
  }, props));
}

export { IconLock as default };
