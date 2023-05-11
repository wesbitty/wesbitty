import { jsx } from 'react/jsx-runtime';
import Edit2 from '../../../../node_modules/react-feather/dist/icons/edit-2.js';
import IconBase from '../../IconBase.js';

function IconEdit2(props) {
  return jsx(IconBase, Object.assign({
    icon: Edit2
  }, props));
}

export { IconEdit2 as default };
