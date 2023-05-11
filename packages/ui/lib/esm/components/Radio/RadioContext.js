import { createContext } from 'react';

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
const RadioContext = /*#__PURE__*/createContext({
  parentCallback: e => {},
  type: '',
  name: '',
  activeId: '',
  parentSize: ''
});

export { RadioContext };
