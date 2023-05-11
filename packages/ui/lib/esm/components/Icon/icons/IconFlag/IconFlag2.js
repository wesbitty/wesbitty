import { jsx } from 'react/jsx-runtime';
import Flag from '../../../../node_modules/react-feather/dist/icons/flag.js';
import IconBase from '../../IconBase.js';

function IconFlag(props) {
  return jsx(IconBase, Object.assign({
    icon: Flag
  }, props));
}

export { IconFlag as default };
