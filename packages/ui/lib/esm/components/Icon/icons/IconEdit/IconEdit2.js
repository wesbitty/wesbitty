import { jsx } from 'react/jsx-runtime';
import Edit from '../../../../node_modules/react-feather/dist/icons/edit.js';
import IconBase from '../../IconBase.js';

function IconEdit(props) {
  return jsx(IconBase, Object.assign({
    icon: Edit
  }, props));
}

export { IconEdit as default };
