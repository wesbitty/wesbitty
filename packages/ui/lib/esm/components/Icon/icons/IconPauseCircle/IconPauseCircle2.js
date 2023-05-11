import { jsx } from 'react/jsx-runtime';
import PauseCircle from '../../../../node_modules/react-feather/dist/icons/pause-circle.js';
import IconBase from '../../IconBase.js';

function IconPauseCircle(props) {
  return jsx(IconBase, Object.assign({
    icon: PauseCircle
  }, props));
}

export { IconPauseCircle as default };
