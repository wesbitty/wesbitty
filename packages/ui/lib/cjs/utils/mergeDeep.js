'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Check if item is Object
 */
function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}
/**
 * Deep merge two objects.
 * @return merged object
 */
function mergeDeep(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }
  if (sources.length === 0) return target;
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, {
          [key]: {}
        });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key]
        });
      }
    }
  }
  return mergeDeep(target, ...sources);
}

exports.isObject = isObject;
exports.mergeDeep = mergeDeep;
