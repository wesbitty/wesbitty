import { createContext } from 'react';

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
const SelectContext = /*#__PURE__*/createContext({
  onChange: e => {},
  selected: undefined
});

export { SelectContext };
