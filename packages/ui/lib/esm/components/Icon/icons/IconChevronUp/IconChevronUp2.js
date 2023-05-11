import { jsx } from 'react/jsx-runtime';
import ChevronUp from '../../../../node_modules/react-feather/dist/icons/chevron-up.js';
import IconBase from '../../IconBase.js';

function IconChevronUp(props) {
  return jsx(IconBase, Object.assign({
    icon: ChevronUp
  }, props));
}

export { IconChevronUp as default };
