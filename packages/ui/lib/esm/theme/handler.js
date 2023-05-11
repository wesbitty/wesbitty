import { useContext } from 'react';
import { ThemeContext } from './provider.js';
import defaultTheme from './default.js';

function styleHandler(target) {
  let {
    theme: {
      [target]: __styles
    }
  } = useContext(ThemeContext);
  if (!__styles) __styles = defaultTheme.button;
  __styles = JSON.stringify(__styles).replace(/\\n/g, '').replace(/\s\s+/g, ' ');
  __styles = JSON.parse(__styles);
  return __styles;
}

export { styleHandler as default };
