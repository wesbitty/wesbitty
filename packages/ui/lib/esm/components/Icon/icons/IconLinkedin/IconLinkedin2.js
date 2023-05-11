import { jsx } from 'react/jsx-runtime';
import Linkedin from '../../../../node_modules/react-feather/dist/icons/linkedin.js';
import IconBase from '../../IconBase.js';

function IconLinkedin(props) {
  return jsx(IconBase, Object.assign({
    icon: Linkedin
  }, props));
}

export { IconLinkedin as default };
