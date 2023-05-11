import { jsx } from 'react/jsx-runtime';
import Slash from '../../../../node_modules/react-feather/dist/icons/slash.js';
import IconBase from '../../IconBase.js';

function IconSlash(props) {
  return jsx(IconBase, Object.assign({
    icon: Slash
  }, props));
}

export { IconSlash as default };
