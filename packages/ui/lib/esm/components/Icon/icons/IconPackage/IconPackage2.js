import { jsx } from 'react/jsx-runtime';
import Package from '../../../../node_modules/react-feather/dist/icons/package.js';
import IconBase from '../../IconBase.js';

function IconPackage(props) {
  return jsx(IconBase, Object.assign({
    icon: Package
  }, props));
}

export { IconPackage as default };
