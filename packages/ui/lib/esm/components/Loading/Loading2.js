import { jsxs, jsx } from 'react/jsx-runtime';
import styleHandler from '../../theme/handler.js';
import IconLoader from '../Icon/icons/IconLoader/IconLoader2.js';

function Loading(_ref) {
  let {
    children,
    active
  } = _ref;
  const __styles = styleHandler('loading');
  let classNames = [__styles.base];
  let contentClasses = [__styles.content.base];
  if (active) {
    contentClasses.push(__styles.content.active);
  }
  let spinnerClasses = [__styles.spinner];
  return jsxs("div", Object.assign({
    className: classNames.join(' ')
  }, {
    children: [jsx("div", Object.assign({
      className: contentClasses.join(' ')
    }, {
      children: children
    })), active && jsx(IconLoader, {
      size: "xlarge",
      className: spinnerClasses
    })]
  }));
}

export { Loading as default };
