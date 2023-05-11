import { jsx } from 'react/jsx-runtime';
import Twitter from '../../../../node_modules/react-feather/dist/icons/twitter.js';
import IconBase from '../../IconBase.js';

function IconTwitter(props) {
  return jsx(IconBase, Object.assign({
    icon: Twitter
  }, props));
}

export { IconTwitter as default };
