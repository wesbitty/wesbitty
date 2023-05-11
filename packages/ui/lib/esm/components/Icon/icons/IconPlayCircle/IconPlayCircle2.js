import { jsx } from 'react/jsx-runtime';
import PlayCircle from '../../../../node_modules/react-feather/dist/icons/play-circle.js';
import IconBase from '../../IconBase.js';

function IconPlayCircle(props) {
  return jsx(IconBase, Object.assign({
    icon: PlayCircle
  }, props));
}

export { IconPlayCircle as default };
