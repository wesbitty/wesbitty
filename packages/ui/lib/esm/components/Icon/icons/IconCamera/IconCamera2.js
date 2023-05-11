import { jsx } from 'react/jsx-runtime';
import Camera from '../../../../node_modules/react-feather/dist/icons/camera.js';
import IconBase from '../../IconBase.js';

function IconCamera(props) {
  return jsx(IconBase, Object.assign({
    icon: Camera
  }, props));
}

export { IconCamera as default };
