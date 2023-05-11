import { jsx } from 'react/jsx-runtime';
import Archive from '../../../../node_modules/react-feather/dist/icons/archive.js';
import IconBase from '../../IconBase.js';

function IconArchive(props) {
  return jsx(IconBase, Object.assign({
    icon: Archive
  }, props));
}

export { IconArchive as default };
