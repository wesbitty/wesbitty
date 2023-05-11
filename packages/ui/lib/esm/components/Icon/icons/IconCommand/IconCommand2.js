import { jsx } from 'react/jsx-runtime';
import Command from '../../../../node_modules/react-feather/dist/icons/command.js';
import IconBase from '../../IconBase.js';

function IconCommand(props) {
  return jsx(IconBase, Object.assign({
    icon: Command
  }, props));
}

export { IconCommand as default };
