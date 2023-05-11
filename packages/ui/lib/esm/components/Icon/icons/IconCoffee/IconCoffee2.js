import { jsx } from 'react/jsx-runtime';
import Coffee from '../../../../node_modules/react-feather/dist/icons/coffee.js';
import IconBase from '../../IconBase.js';

function IconCoffee(props) {
  return jsx(IconBase, Object.assign({
    icon: Coffee
  }, props));
}

export { IconCoffee as default };
