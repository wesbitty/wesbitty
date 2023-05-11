import { jsx } from 'react/jsx-runtime';
import ThumbsDown from '../../../../node_modules/react-feather/dist/icons/thumbs-down.js';
import IconBase from '../../IconBase.js';

function IconThumbsDown(props) {
  return jsx(IconBase, Object.assign({
    icon: ThumbsDown
  }, props));
}

export { IconThumbsDown as default };
