import { jsx } from 'react/jsx-runtime';
import HardDrive from '../../../../node_modules/react-feather/dist/icons/hard-drive.js';
import IconBase from '../../IconBase.js';

function IconHardDrive(props) {
  return jsx(IconBase, Object.assign({
    icon: HardDrive
  }, props));
}

export { IconHardDrive as default };
