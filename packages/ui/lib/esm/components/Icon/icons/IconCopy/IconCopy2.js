import { jsx } from 'react/jsx-runtime';
import Copy from '../../../../node_modules/react-feather/dist/icons/copy.js';
import IconBase from '../../IconBase.js';

function IconCopy(props) {
  return jsx(IconBase, Object.assign({
    icon: Copy
  }, props));
}

export { IconCopy as default };
