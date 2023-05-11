import { jsx } from 'react/jsx-runtime';
import Columns from '../../../../node_modules/react-feather/dist/icons/columns.js';
import IconBase from '../../IconBase.js';

function IconColumns(props) {
  return jsx(IconBase, Object.assign({
    icon: Columns
  }, props));
}

export { IconColumns as default };
