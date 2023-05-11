import { jsx } from 'react/jsx-runtime';
import FolderMinus from '../../../../node_modules/react-feather/dist/icons/folder-minus.js';
import IconBase from '../../IconBase.js';

function IconFolderMinus(props) {
  return jsx(IconBase, Object.assign({
    icon: FolderMinus
  }, props));
}

export { IconFolderMinus as default };
