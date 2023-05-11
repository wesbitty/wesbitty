import { jsx } from 'react/jsx-runtime';
import Underline from '../../../../node_modules/react-feather/dist/icons/underline.js';
import IconBase from '../../IconBase.js';

function IconUnderline(props) {
  return jsx(IconBase, Object.assign({
    icon: Underline
  }, props));
}

export { IconUnderline as default };
