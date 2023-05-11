import { jsx } from 'react/jsx-runtime';
import Anchor from '../../../../node_modules/react-feather/dist/icons/anchor.js';
import IconBase from '../../IconBase.js';

function IconAnchor(props) {
  return jsx(IconBase, Object.assign({
    icon: Anchor
  }, props));
}

export { IconAnchor as default };
