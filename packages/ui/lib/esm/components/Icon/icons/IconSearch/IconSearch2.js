import { jsx } from 'react/jsx-runtime';
import Search from '../../../../node_modules/react-feather/dist/icons/search.js';
import IconBase from '../../IconBase.js';

function IconSearch(props) {
  return jsx(IconBase, Object.assign({
    icon: Search
  }, props));
}

export { IconSearch as default };
