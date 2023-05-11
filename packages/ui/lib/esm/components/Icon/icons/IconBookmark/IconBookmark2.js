import { jsx } from 'react/jsx-runtime';
import Bookmark from '../../../../node_modules/react-feather/dist/icons/bookmark.js';
import IconBase from '../../IconBase.js';

function IconBookmark(props) {
  return jsx(IconBase, Object.assign({
    icon: Bookmark
  }, props));
}

export { IconBookmark as default };
