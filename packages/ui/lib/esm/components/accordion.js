import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useContext, createContext } from 'react';
import IconChevronUp from './Icon/icons/IconChevronUp/IconChevronUp2.js';
import styleHandler from '../theme/handler.js';
import * as RadixAccordion from '@radix-ui/react-accordion';
import IconChevronDown from './Icon/icons/IconChevronDown/IconChevronDown2.js';

const AccordionContext = /*#__PURE__*/createContext({
  chevronAlign: 'left',
  justified: true,
  type: 'default'
  // currentItems: [],
});

function Accordion(_ref) {
  let {
    children,
    className,
    defaultActiveId = [],
    icon = jsx(IconChevronUp, {
      strokeWidth: 2
    }),
    iconPosition = 'right',
    onChange,
    openBehaviour = 'multiple',
    type = 'default',
    // size, // TO DO
    defaultValue = undefined,
    justified = true,
    chevronAlign
  } = _ref;
  // const [currentItems, setCurrentItems] = useState(defaultValue || [])
  const __styles = styleHandler('accordion');
  let containerClasses = [__styles.variants[type].base];
  if (className) {
    containerClasses.push(className);
  }
  // let currentItems = defaultValue || []
  const contextValue = {
    chevronAlign,
    justified,
    type,
    defaultValue
  };
  function handleOnChange(e) {
    if (onChange) onChange(e);
    e == typeof String ? e.split(' ') : e;
    // setCurrentItems(e)
    console.log('about to change state');
    // currentItems = e
    // console.log('currentItems', currentItems)
  }

  return jsx(Fragment, {
    children: jsx(RadixAccordion.Root, {
      type: openBehaviour,
      onValueChange: handleOnChange,
      defaultValue: defaultValue,
      className: containerClasses.join(' '),
      children: jsx(AccordionContext.Provider, Object.assign({
        value: Object.assign({}, contextValue)
      }, {
        children: jsx("div", Object.assign({
          className: containerClasses.join(' ')
        }, {
          children: children
        }))
      }))
    })
  });
}
function Item(_ref2) {
  let {
    children,
    className,
    header,
    id,
    icon
  } = _ref2;
  const __styles = styleHandler('accordion');
  // const [open, setOpen] = useState(false)
  const {
    type,
    justified,
    chevronAlign
    // currentItems,
    // defaultActiveId, iconPosition, onChange
  } = useContext(AccordionContext);
  let triggerClasses = [__styles.variants[type].trigger];
  if (justified) triggerClasses.push(__styles.justified);
  if (className) triggerClasses.push(className);
  let chevronClasses = [__styles.chevron.base, __styles.chevron.align[chevronAlign]];
  // console.log('currentItems', currentItems)
  return jsxs(RadixAccordion.Item, Object.assign({
    value: id,
    className: __styles.variants[type].container
  }, {
    children: [jsxs(RadixAccordion.Trigger, Object.assign({
      className: triggerClasses.join(' ')
    }, {
      children: [header, jsx(IconChevronDown, {
        "aria-hidden": true,
        className: chevronClasses.join(' '),
        strokeWidth: 2
      })]
    })), jsx(RadixAccordion.Content, Object.assign({
      className: __styles.variants[type].content
    }, {
      children: jsx("div", Object.assign({
        className: __styles.variants[type].panel
      }, {
        children: children
      }))
    }))]
  }));
}
Accordion.Item = Item;

export { Accordion, Item };
