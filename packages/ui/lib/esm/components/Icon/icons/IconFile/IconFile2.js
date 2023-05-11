import { jsx } from 'react/jsx-runtime';
import File from '../../../../node_modules/react-feather/dist/icons/file.js';
import IconBase from '../../IconBase.js';

function IconFile(props) {
  return jsx(IconBase, Object.assign({
    icon: File
  }, props));
}

export { IconFile as default };
