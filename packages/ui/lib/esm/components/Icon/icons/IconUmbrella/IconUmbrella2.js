import { jsx } from 'react/jsx-runtime';
import Umbrella from '../../../../node_modules/react-feather/dist/icons/umbrella.js';
import IconBase from '../../IconBase.js';

function IconUmbrella(props) {
  return jsx(IconBase, Object.assign({
    icon: Umbrella
  }, props));
}

export { IconUmbrella as default };
