'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Helper function to show warning in the console during development
 * @param {expression} assert - assertion to test
 * @param {string} scope - location of the warning, usually a component
 * @param {string} message - instructions about the warning
 */
function warn(assert, scope, message) {
  if (process.env.NODE_ENV !== 'production') {
    if (assert) {
      if (console.warn) {
        console.warn(`Wesbitty [${scope}]: ${message}`);
      } else {
        console.log(`Wesbitty [${scope}]: ${message}`);
      }
    }
  }
}

exports["default"] = warn;
