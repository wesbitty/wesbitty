import { jsx } from 'react/jsx-runtime';
import Compass from '../../../../node_modules/react-feather/dist/icons/compass.js';
import IconBase from '../../IconBase.js';

function IconCompass(props) {
  return jsx(IconBase, Object.assign({
    icon: Compass
  }, props));
}

export { IconCompass as default };
