import { jsx } from 'react/jsx-runtime';
import Settings from '../../../../node_modules/react-feather/dist/icons/settings.js';
import IconBase from '../../IconBase.js';

function IconSettings(props) {
  return jsx(IconBase, Object.assign({
    icon: Settings
  }, props));
}

export { IconSettings as default };
