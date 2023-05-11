import { jsx } from 'react/jsx-runtime';
import Shuffle from '../../../../node_modules/react-feather/dist/icons/shuffle.js';
import IconBase from '../../IconBase.js';

function IconShuffle(props) {
  return jsx(IconBase, Object.assign({
    icon: Shuffle
  }, props));
}

export { IconShuffle as default };
