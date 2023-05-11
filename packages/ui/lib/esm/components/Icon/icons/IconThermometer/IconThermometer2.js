import { jsx } from 'react/jsx-runtime';
import Thermometer from '../../../../node_modules/react-feather/dist/icons/thermometer.js';
import IconBase from '../../IconBase.js';

function IconThermometer(props) {
  return jsx(IconBase, Object.assign({
    icon: Thermometer
  }, props));
}

export { IconThermometer as default };
