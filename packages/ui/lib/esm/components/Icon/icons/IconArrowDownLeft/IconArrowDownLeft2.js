import { jsx } from 'react/jsx-runtime';
import ArrowDownLeft from '../../../../node_modules/react-feather/dist/icons/arrow-down-left.js';
import IconBase from '../../IconBase.js';

function IconArrowDownLeft(props) {
  return jsx(IconBase, Object.assign({
    icon: ArrowDownLeft
  }, props));
}

export { IconArrowDownLeft as default };
