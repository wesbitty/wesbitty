import { jsx } from 'react/jsx-runtime';
import BarChart from '../../../../node_modules/react-feather/dist/icons/bar-chart.js';
import IconBase from '../../IconBase.js';

function IconBarChart(props) {
  return jsx(IconBase, Object.assign({
    icon: BarChart
  }, props));
}

export { IconBarChart as default };
