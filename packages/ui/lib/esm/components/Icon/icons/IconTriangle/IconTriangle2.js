import { jsx } from 'react/jsx-runtime';
import Triangle from '../../../../node_modules/react-feather/dist/icons/triangle.js';
import IconBase from '../../IconBase.js';

function IconTriangle(props) {
  return jsx(IconBase, Object.assign({
    icon: Triangle
  }, props));
}

export { IconTriangle as default };
