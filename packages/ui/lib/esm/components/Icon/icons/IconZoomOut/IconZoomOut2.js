import { jsx } from 'react/jsx-runtime';
import ZoomOut from '../../../../node_modules/react-feather/dist/icons/zoom-out.js';
import IconBase from '../../IconBase.js';

function IconZoomOut(props) {
  return jsx(IconBase, Object.assign({
    icon: ZoomOut
  }, props));
}

export { IconZoomOut as default };
