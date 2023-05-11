import { jsx } from 'react/jsx-runtime';
import FolderPlus from '../../../../node_modules/react-feather/dist/icons/folder-plus.js';
import IconBase from '../../IconBase.js';

function IconFolderPlus(props) {
  return jsx(IconBase, Object.assign({
    icon: FolderPlus
  }, props));
}

export { IconFolderPlus as default };
