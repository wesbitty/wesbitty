import { jsx } from 'react/jsx-runtime';
import ChevronsDown from '../../../../node_modules/react-feather/dist/icons/chevrons-down.js';
import IconBase from '../../IconBase.js';

function IconChevronsDown(props) {
  return jsx(IconBase, Object.assign({
    icon: ChevronsDown
  }, props));
}

export { IconChevronsDown as default };
