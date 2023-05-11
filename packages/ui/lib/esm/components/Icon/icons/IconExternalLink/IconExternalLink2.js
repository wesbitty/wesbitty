import { jsx } from 'react/jsx-runtime';
import ExternalLink from '../../../../node_modules/react-feather/dist/icons/external-link.js';
import IconBase from '../../IconBase.js';

function IconExternalLink(props) {
  return jsx(IconBase, Object.assign({
    icon: ExternalLink
  }, props));
}

export { IconExternalLink as default };
