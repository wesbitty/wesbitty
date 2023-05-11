'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function generateUID() {
  var firstPart = Math.random() * 46656 | 0;
  var secondPart = Math.random() * 46656 | 0;
  const newFirstPart = ('00000' + firstPart.toString(36)).slice(-3);
  const newSecondPart = ('00000' + secondPart.toString(36)).slice(-3);
  return newFirstPart + newSecondPart;
}

exports["default"] = generateUID;
