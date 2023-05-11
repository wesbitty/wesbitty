import { jsx } from 'react/jsx-runtime';
import AlignRight from '../../../../node_modules/react-feather/dist/icons/align-right.js';
import IconBase from '../../IconBase.js';

function IconAlignRight(props) {
  return jsx(IconBase, Object.assign({
    icon: AlignRight
  }, props));
}

export { IconAlignRight as default };
