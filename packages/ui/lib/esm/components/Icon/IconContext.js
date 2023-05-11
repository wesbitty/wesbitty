import { createContext } from 'react';

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
const IconContext = /*#__PURE__*/createContext({
  contextSize: '',
  className: ''
});

export { IconContext };
