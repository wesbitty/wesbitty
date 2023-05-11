import { jsx } from 'react/jsx-runtime';
import MicOff from '../../../../node_modules/react-feather/dist/icons/mic-off.js';
import IconBase from '../../IconBase.js';

function IconMicOff(props) {
  return jsx(IconBase, Object.assign({
    icon: MicOff
  }, props));
}

export { IconMicOff as default };
