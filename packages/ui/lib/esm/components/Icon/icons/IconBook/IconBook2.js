import { jsx } from 'react/jsx-runtime';
import Book from '../../../../node_modules/react-feather/dist/icons/book.js';
import IconBase from '../../IconBase.js';

function IconBook(props) {
  return jsx(IconBase, Object.assign({
    icon: Book
  }, props));
}

export { IconBook as default };
