import { jsx, jsxs } from 'react/jsx-runtime';
import Typography from '../Typography/Typography.js';
import { MenuContextProvider, useMenuContext } from './MenuContext.js';
import styleHandler from '../../theme/handler.js';

function Menu(_ref) {
  let {
    children,
    className,
    style,
    type = 'text'
  } = _ref;
  return jsx("nav", Object.assign({
    role: "menu",
    "aria-label": "Sidebar",
    "aria-orientation": "vertical",
    "aria-labelledby": "options-menu",
    className: className,
    style: style
  }, {
    children: jsx(MenuContextProvider, Object.assign({
      type: type
    }, {
      children: jsx("ul", {
        children: children
      })
    }))
  }));
}
function Item(_ref2) {
  let {
    children,
    icon,
    active,
    rounded,
    onClick,
    doNotCloseOverlay = false,
    showActiveBar = false,
    style
  } = _ref2;
  const __styles = styleHandler('menu');
  const {
    type
  } = useMenuContext();
  let classes = [__styles.item.base];
  classes.push(__styles.item.variants[type].base);
  if (active) {
    classes.push(__styles.item.variants[type].active);
  } else {
    classes.push(__styles.item.variants[type].normal);
  }
  let contentClasses = [__styles.item.content.base];
  if (active) {
    contentClasses.push(__styles.item.content.active);
  } else {
    contentClasses.push(__styles.item.content.normal);
  }
  let iconClasses = [__styles.item.icon.base];
  if (active) {
    iconClasses.push(__styles.item.icon.active);
  } else {
    iconClasses.push(__styles.item.icon.normal);
  }
  return jsx("li", Object.assign({
    role: "menuitem",
    className: "outline-none"
  }, {
    children: jsxs("a", Object.assign({
      style: style,
      className: classes.join(' '),
      onClick: onClick,
      "aria-current": active ? 'page' : undefined
    }, {
      children: [icon && jsx("span", Object.assign({
        className: iconClasses.join(' ')
      }, {
        children: icon
      })), jsx("span", Object.assign({
        className: contentClasses.join(' ')
      }, {
        children: children
      }))]
    }))
  }));
}
function Group(_ref3) {
  let {
    children,
    icon,
    title
  } = _ref3;
  const __styles = styleHandler('menu');
  const {
    type
  } = useMenuContext();
  return jsxs("div", Object.assign({
    className: [__styles.group.base, __styles.group.variants[type]].join(' ')
  }, {
    children: [icon && jsx("span", Object.assign({
      className: __styles.group.icon
    }, {
      children: icon
    })), jsx("span", Object.assign({
      className: __styles.group.content
    }, {
      children: title
    })), children]
  }));
}
function Misc(_ref4) {
  let {
    children
  } = _ref4;
  return jsx("div", {
    children: jsx(Typography.Text, {
      children: jsx("span", {
        children: children
      })
    })
  });
}
Menu.Item = Item;
Menu.Group = Group;
Menu.Misc = Misc;

export { Group, Item, Misc, Menu as default };
