import { jsx } from 'react/jsx-runtime';
import { createContext, useMemo } from 'react';
import { mergeDeep } from '../utils/mergeDeep.js';
import defaultTheme from './default.js';

const ThemeContext = /*#__PURE__*/createContext({
  theme: defaultTheme
});
const ThemeProvider = _ref => {
  let {
    children,
    theme: customTheme
  } = _ref;
  const mergedTheme = mergeDeep(defaultTheme, customTheme);
  const value = useMemo(() => ({
    theme: mergedTheme
  }), []);
  return jsx(ThemeContext.Provider, Object.assign({
    value: value
  }, {
    children: children
  }));
};

export { ThemeContext, ThemeProvider };
