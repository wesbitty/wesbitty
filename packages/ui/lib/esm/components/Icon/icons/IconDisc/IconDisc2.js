import { jsx } from 'react/jsx-runtime';
import Disc from '../../../../node_modules/react-feather/dist/icons/disc.js';
import IconBase from '../../IconBase.js';

function IconDisc(props) {
  return jsx(IconBase, Object.assign({
    icon: Disc
  }, props));
}

export { IconDisc as default };
