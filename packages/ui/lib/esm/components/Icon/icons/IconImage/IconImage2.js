import { jsx } from 'react/jsx-runtime';
import Image from '../../../../node_modules/react-feather/dist/icons/image.js';
import IconBase from '../../IconBase.js';

function IconImage(props) {
  return jsx(IconBase, Object.assign({
    icon: Image
  }, props));
}

export { IconImage as default };
