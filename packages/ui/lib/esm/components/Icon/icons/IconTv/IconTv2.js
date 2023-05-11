import { jsx } from 'react/jsx-runtime';
import Tv from '../../../../node_modules/react-feather/dist/icons/tv.js';
import IconBase from '../../IconBase.js';

function IconTv(props) {
  return jsx(IconBase, Object.assign({
    icon: Tv
  }, props));
}

export { IconTv as default };
