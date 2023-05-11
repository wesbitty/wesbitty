import { createContext } from 'react';

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
const CheckboxContext = /*#__PURE__*/createContext({
  parentCallback: e => {},
  parentSize: ''
});

export { CheckboxContext };
