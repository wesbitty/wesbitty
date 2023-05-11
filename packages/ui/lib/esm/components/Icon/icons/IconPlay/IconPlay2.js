import { jsx } from 'react/jsx-runtime';
import Play from '../../../../node_modules/react-feather/dist/icons/play.js';
import IconBase from '../../IconBase.js';

function IconPlay(props) {
  return jsx(IconBase, Object.assign({
    icon: Play
  }, props));
}

export { IconPlay as default };
