import { jsx } from 'react/jsx-runtime';
import Sliders from '../../../../node_modules/react-feather/dist/icons/sliders.js';
import IconBase from '../../IconBase.js';

function IconSliders(props) {
  return jsx(IconBase, Object.assign({
    icon: Sliders
  }, props));
}

export { IconSliders as default };
