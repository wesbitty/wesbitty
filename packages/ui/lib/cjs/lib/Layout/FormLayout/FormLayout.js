'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var _default = require('../../../theme/default.js');

function FormLayout(_ref) {
  let {
    align = 'left',
    children,
    className,
    descriptionText,
    error,
    id,
    label,
    labelOptional,
    layout = 'vertical',
    style,
    // flex = false,
    labelLayout,
    responsive = true,
    size = 'medium',
    beforeLabel,
    afterLabel,
    nonBoxInput = label ? false : true
  } = _ref;
  // _error is used label && to delay the error string beind removed too soon
  // once it has animated out, the string will be removed
  // const [_error, _setError] = useState(error)
  // useEffect(() => {
  //   if (!error) {
  //     console.log('no error')
  //     setTimeout(function () {
  //       _setError(error)
  //     }, 500)
  //   } else {
  //     console.log('has error')
  //     _setError(error)
  //   }
  //   // Update the document title using the browser API
  // }, [error])
  const __styles = _default["default"].form_layout;
  const flex = layout === 'flex';
  let containerClasses = [];
  containerClasses.push(__styles.size[size]);
  let labelContainerClasses = [];
  let dataInputContainerClasses = [];
  if (layout !== 'horizontal' && !labelLayout && !flex) {
    labelContainerClasses.push(__styles.labels_horizontal_layout);
  } else if (labelLayout === 'horizontal') {
    labelContainerClasses.push(__styles.labels_horizontal_layout);
  } else if (labelLayout === 'vertical') {
    labelContainerClasses.push(__styles.labels_vertical_layout);
  } else {
    labelContainerClasses.push(__styles.labels_vertical_layout);
  }
  if (layout !== 'horizontal') {
    dataInputContainerClasses.push(__styles.data_input_horizontal_layout);
  } else {
    dataInputContainerClasses.push(__styles.data_input_vertical_layout);
    if (align === 'right') {
      dataInputContainerClasses.push(__styles.data_input_vertical_layout__align_right);
    }
  }
  if (flex) {
    containerClasses.push(__styles.flex[align].base);
    if (align === 'left') {
      labelContainerClasses.push(__styles.flex.left.labels);
      dataInputContainerClasses.push(__styles.flex.left.data_input);
    }
    if (align === 'right') {
      labelContainerClasses.push(__styles.flex.right.labels);
      dataInputContainerClasses.push(__styles.flex.right.data_input);
    }
  } else {
    containerClasses.push(__styles.container, responsive ? __styles.responsive : __styles.non_responsive);
  }
  if (className) {
    containerClasses.push(className);
  }
  const labelled = Boolean(label || beforeLabel || afterLabel);
  // console.log('error', error)
  const renderError = jsxRuntime.jsx("p", Object.assign({
    "data-state": error ? 'show' : 'hide',
    className: [__styles.error.base, __styles.error.size[size]].join(' ')
  }, {
    children: error
  }));
  const renderDescription = descriptionText && jsxRuntime.jsx("p", Object.assign({
    className: [__styles.description.base, __styles.description.size[size]].join(' '),
    id: id + '-description'
  }, {
    children: descriptionText
  }));
  return jsxRuntime.jsxs("div", Object.assign({
    className: containerClasses.join(' ')
  }, {
    children: [flex && jsxRuntime.jsx("div", Object.assign({
      className: __styles.flex[align].content
    }, {
      children: children
    })), labelled || labelOptional || layout === 'horizontal' ? jsxRuntime.jsxs("div", Object.assign({
      // direction={
      //   (layout && layout === 'horizontal') ||
      //   (flex && layout && layout === 'vertical')
      //     ? 'vertical'
      //     : 'horizontal'
      // }
      className: labelContainerClasses.join(' ')
    }, {
      children: [labelled && jsxRuntime.jsxs("label", Object.assign({
        className: [__styles.label.base, __styles.label.size[size], 'break-all'].join(' '),
        htmlFor: id
      }, {
        children: [beforeLabel && jsxRuntime.jsx("span", Object.assign({
          className: [__styles.label_before.base, __styles.label_before.size[size]].join(' '),
          id: id + '-before'
        }, {
          children: beforeLabel
        })), label, afterLabel && jsxRuntime.jsx("span", Object.assign({
          className: [__styles.label_after.base, __styles.label_after.size[size]].join(' '),
          id: id + '-after'
        }, {
          children: afterLabel
        }))]
      })), labelOptional && jsxRuntime.jsx("span", Object.assign({
        className: [__styles.label_optional.base, __styles.label_optional.size[size]].join(' '),
        id: id + '-optional'
      }, {
        children: labelOptional
      })), flex && jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [renderDescription, renderError]
      })]
    })) : null, !flex && jsxRuntime.jsx("div", Object.assign({
      className: dataInputContainerClasses.join(' '),
      style: style
    }, {
      children: jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [jsxRuntime.jsx("div", Object.assign({
          className: nonBoxInput && label && layout === 'vertical' ? __styles.non_box_data_input_spacing_vertical : nonBoxInput && label && layout === 'horizontal' ? __styles.non_box_data_input_spacing_horizontal : ''
        }, {
          children: children
        })), renderError, renderDescription]
      })
    }))]
  }));
}

exports.FormLayout = FormLayout;
