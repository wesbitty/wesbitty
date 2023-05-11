import { jsx } from 'react/jsx-runtime';
import Calendar from '../../../../node_modules/react-feather/dist/icons/calendar.js';
import IconBase from '../../IconBase.js';

function IconCalendar(props) {
  return jsx(IconBase, Object.assign({
    icon: Calendar
  }, props));
}

export { IconCalendar as default };
