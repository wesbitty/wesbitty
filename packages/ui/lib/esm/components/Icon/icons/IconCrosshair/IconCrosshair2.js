import { jsx } from 'react/jsx-runtime';
import Crosshair from '../../../../node_modules/react-feather/dist/icons/crosshair.js';
import IconBase from '../../IconBase.js';

function IconCrosshair(props) {
  return jsx(IconBase, Object.assign({
    icon: Crosshair
  }, props));
}

export { IconCrosshair as default };
