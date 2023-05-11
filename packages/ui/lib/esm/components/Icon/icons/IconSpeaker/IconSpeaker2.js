import { jsx } from 'react/jsx-runtime';
import Speaker from '../../../../node_modules/react-feather/dist/icons/speaker.js';
import IconBase from '../../IconBase.js';

function IconSpeaker(props) {
  return jsx(IconBase, Object.assign({
    icon: Speaker
  }, props));
}

export { IconSpeaker as default };
