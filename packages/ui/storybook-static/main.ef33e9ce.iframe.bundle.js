;(self.webpackChunkui = self.webpackChunkui || []).push([
  [179],
  {
    '../../node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./.storybook/preview.css':
      function (module, exports, __webpack_require__) {
        ;(exports = __webpack_require__(
          '../../node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/runtime/api.js'
        )(!1)).push([
          module.id,
          "/*\n! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: var(--colors-gray2); /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  -webkit-font-feature-settings: normal;\n          font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\n  opacity: 1; /* 1 */\n  color: var(--colors-gray4); /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: var(--colors-gray4); /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {\n  -webkit-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  border-color: var(--colors-gray5);\n  border-width: 1px;\n  border-radius: 0px;\n  padding-top: 0.5rem;\n  padding-right: 0.75rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  --tw-shadow: 0 0 #0000;\n}\n\n[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: var(--colors-blue6);\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  border-color: var(--colors-blue6);\n}\n\ninput::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\n  color: var(--colors-gray5);\n  opacity: 1;\n}\n\ninput::placeholder,textarea::placeholder {\n  color: var(--colors-gray5);\n  opacity: 1;\n}\n\n::-webkit-datetime-edit-fields-wrapper {\n  padding: 0;\n}\n\n::-webkit-date-and-time-value {\n  min-height: 1.5em;\n}\n\n::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nselect {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='var(--colors-gray5)' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");\n  background-position: right 0.5rem center;\n  background-repeat: no-repeat;\n  background-size: 1.5em 1.5em;\n  padding-right: 2.5rem;\n  -webkit-print-color-adjust: exact;\n          color-adjust: exact;\n}\n\n[multiple] {\n  background-image: initial;\n  background-position: initial;\n  background-repeat: unset;\n  background-size: initial;\n  padding-right: 0.75rem;\n  -webkit-print-color-adjust: unset;\n          color-adjust: unset;\n}\n\n[type='checkbox'],[type='radio'] {\n  -webkit-appearance: none;\n          appearance: none;\n  padding: 0;\n  -webkit-print-color-adjust: exact;\n          color-adjust: exact;\n  display: inline-block;\n  vertical-align: middle;\n  background-origin: border-box;\n  -webkit-user-select: none;\n          user-select: none;\n  flex-shrink: 0;\n  height: 1rem;\n  width: 1rem;\n  color: var(--colors-blue6);\n  background-color: #fff;\n  border-color: var(--colors-gray5);\n  border-width: 1px;\n  --tw-shadow: 0 0 #0000;\n}\n\n[type='checkbox'] {\n  border-radius: 0px;\n}\n\n[type='radio'] {\n  border-radius: 100%;\n}\n\n[type='checkbox']:focus,[type='radio']:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 2px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: var(--colors-blue6);\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}\n\n[type='checkbox']:checked,[type='radio']:checked {\n  border-color: transparent;\n  background-color: currentColor;\n  background-size: 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n[type='checkbox']:checked {\n  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\");\n}\n\n[type='radio']:checked {\n  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\");\n}\n\n[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {\n  border-color: transparent;\n  background-color: currentColor;\n}\n\n[type='checkbox']:indeterminate {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\");\n  border-color: transparent;\n  background-color: currentColor;\n  background-size: 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {\n  border-color: transparent;\n  background-color: currentColor;\n}\n\n[type='file'] {\n  background: unset;\n  border-color: inherit;\n  border-width: 0;\n  border-radius: 0;\n  padding: 0;\n  font-size: unset;\n  line-height: inherit;\n}\n\n[type='file']:focus {\n  outline: 1px auto -webkit-focus-ring-color;\n}\n\n:root {\n  --width-listbox: 320px;\n  --colors-amber1: hsl(39, 70.0%, 99.0%);\n  --colors-amber2: hsl(40, 100%, 96.5%);\n  --colors-amber3: hsl(44, 100%, 91.7%);\n  --colors-amber4: hsl(43, 100%, 86.8%);\n  --colors-amber5: hsl(42, 100%, 81.8%);\n  --colors-amber6: hsl(38, 99.7%, 76.3%);\n  --colors-amber7: hsl(36, 86.1%, 67.1%);\n  --colors-amber8: hsl(35, 85.2%, 55.1%);\n  --colors-amber9: hsl(39, 100%, 57.0%);\n  --colors-amber10: hsl(35, 100%, 55.5%);\n  --colors-amber11: hsl(30, 100%, 34.0%);\n  --colors-amber12: hsl(20, 80.0%, 17.0%);\n  --colors-amberA1: hsla(40, 94.9%, 38.7%, 0.016);\n  --colors-amberA2: hsla(40, 100%, 50.3%, 0.071);\n  --colors-amberA3: hsla(44, 100%, 50.1%, 0.165);\n  --colors-amberA4: hsla(43, 100%, 50.0%, 0.263);\n  --colors-amberA5: hsla(42, 100%, 50.0%, 0.365);\n  --colors-amberA6: hsla(38, 100%, 50.1%, 0.475);\n  --colors-amberA7: hsla(36, 99.9%, 46.2%, 0.612);\n  --colors-amberA8: hsla(35, 99.8%, 46.0%, 0.832);\n  --colors-amberA9: hsla(39, 100%, 50.0%, 0.859);\n  --colors-amberA10: hsla(35, 100%, 50.0%, 0.891);\n  --colors-amberA11: hsla(29, 100%, 33.6%, 0.980);\n  --colors-amberA12: hsla(20, 99.8%, 14.1%, 0.965);\n  --colors-blackA1: hsla(0, 0%, 0%, 0.012);\n  --colors-blackA2: hsla(0, 0%, 0%, 0.027);\n  --colors-blackA3: hsla(0, 0%, 0%, 0.047);\n  --colors-blackA4: hsla(0, 0%, 0%, 0.071);\n  --colors-blackA5: hsla(0, 0%, 0%, 0.090);\n  --colors-blackA6: hsla(0, 0%, 0%, 0.114);\n  --colors-blackA7: hsla(0, 0%, 0%, 0.141);\n  --colors-blackA8: hsla(0, 0%, 0%, 0.220);\n  --colors-blackA9: hsla(0, 0%, 0%, 0.439);\n  --colors-blackA10: hsla(0, 0%, 0%, 0.478);\n  --colors-blackA11: hsla(0, 0%, 0%, 0.565);\n  --colors-blackA12: hsla(0, 0%, 0%, 0.910);\n  --colors-blue1: hsl(206, 100%, 99.2%);\n  --colors-blue2: hsl(210, 100%, 98.0%);\n  --colors-blue3: hsl(209, 100%, 96.5%);\n  --colors-blue4: hsl(210, 98.8%, 94.0%);\n  --colors-blue5: hsl(209, 95.0%, 90.1%);\n  --colors-blue6: hsl(209, 81.2%, 84.5%);\n  --colors-blue7: hsl(208, 77.5%, 76.9%);\n  --colors-blue8: hsl(206, 81.9%, 65.3%);\n  --colors-blue9: hsl(206, 100%, 50.0%);\n  --colors-blue10: hsl(208, 100%, 47.3%);\n  --colors-blue11: hsl(211, 100%, 43.2%);\n  --colors-blue12: hsl(211, 100%, 15.0%);\n  --colors-blueA1: hsla(210, 100%, 51.0%, 0.016);\n  --colors-blueA2: hsla(210, 100%, 51.0%, 0.040);\n  --colors-blueA3: hsla(210, 100%, 50.3%, 0.071);\n  --colors-blueA4: hsla(210, 100%, 50.1%, 0.118);\n  --colors-blueA5: hsla(208, 99.1%, 47.1%, 0.189);\n  --colors-blueA6: hsla(209, 99.5%, 45.3%, 0.283);\n  --colors-blueA7: hsla(208, 99.9%, 43.8%, 0.412);\n  --colors-blueA8: hsla(206, 99.8%, 45.1%, 0.632);\n  --colors-blueA9: hsla(206, 100%, 50.0%, 0.980);\n  --colors-blueA10: hsla(208, 100%, 47.2%, 0.980);\n  --colors-blueA11: hsla(212, 100%, 43.0%, 0.980);\n  --colors-blueA12: hsla(213, 100%, 14.4%, 0.980);\n  --colors-bronze1: hsl(15, 30.0%, 99.1%);\n  --colors-bronze2: hsl(17, 63.6%, 97.8%);\n  --colors-bronze3: hsl(17, 42.1%, 95.2%);\n  --colors-bronze4: hsl(17, 35.2%, 92.1%);\n  --colors-bronze5: hsl(17, 31.5%, 88.2%);\n  --colors-bronze6: hsl(17, 29.0%, 83.0%);\n  --colors-bronze7: hsl(17, 26.9%, 75.6%);\n  --colors-bronze8: hsl(17, 25.1%, 66.5%);\n  --colors-bronze9: hsl(17, 20.0%, 54.0%);\n  --colors-bronze10: hsl(17, 18.1%, 50.1%);\n  --colors-bronze11: hsl(15, 20.0%, 43.1%);\n  --colors-bronze12: hsl(12, 22.0%, 21.5%);\n  --colors-bronzeA1: hsla(0, 89.3%, 18.3%, 0.012);\n  --colors-bronzeA2: hsla(17, 95.1%, 40.1%, 0.036);\n  --colors-bronzeA3: hsla(18, 98.3%, 29.8%, 0.067);\n  --colors-bronzeA4: hsla(17, 99.6%, 26.0%, 0.106);\n  --colors-bronzeA5: hsla(19, 99.6%, 23.8%, 0.157);\n  --colors-bronzeA6: hsla(17, 99.2%, 22.5%, 0.220);\n  --colors-bronzeA7: hsla(18, 99.7%, 21.6%, 0.310);\n  --colors-bronzeA8: hsla(17, 99.5%, 20.2%, 0.420);\n  --colors-bronzeA9: hsla(18, 99.9%, 16.7%, 0.553);\n  --colors-bronzeA10: hsla(17, 99.2%, 15.4%, 0.589);\n  --colors-bronzeA11: hsla(15, 99.9%, 13.2%, 0.655);\n  --colors-bronzeA12: hsla(12, 98.7%, 5.7%, 0.832);\n  --colors-brown1: hsl(30, 40.0%, 99.1%);\n  --colors-brown2: hsl(30, 50.0%, 97.6%);\n  --colors-brown3: hsl(30, 52.5%, 94.6%);\n  --colors-brown4: hsl(30, 53.0%, 91.2%);\n  --colors-brown5: hsl(29, 52.9%, 86.8%);\n  --colors-brown6: hsl(29, 52.5%, 80.9%);\n  --colors-brown7: hsl(29, 51.5%, 72.8%);\n  --colors-brown8: hsl(28, 50.0%, 63.1%);\n  --colors-brown9: hsl(28, 34.0%, 51.0%);\n  --colors-brown10: hsl(27, 31.8%, 47.6%);\n  --colors-brown11: hsl(25, 30.0%, 41.0%);\n  --colors-brown12: hsl(20, 30.0%, 19.0%);\n  --colors-brownA1: hsla(30, 94.3%, 34.6%, 0.012);\n  --colors-brownA2: hsla(30, 94.3%, 34.6%, 0.036);\n  --colors-brownA3: hsla(30, 97.7%, 33.9%, 0.083);\n  --colors-brownA4: hsla(31, 98.5%, 34.2%, 0.134);\n  --colors-brownA5: hsla(29, 100%, 34.3%, 0.200);\n  --colors-brownA6: hsla(28, 99.2%, 34.6%, 0.291);\n  --colors-brownA7: hsla(29, 99.8%, 33.8%, 0.412);\n  --colors-brownA8: hsla(28, 100%, 33.3%, 0.553);\n  --colors-brownA9: hsla(28, 99.9%, 25.5%, 0.655);\n  --colors-brownA10: hsla(27, 99.7%, 22.4%, 0.675);\n  --colors-brownA11: hsla(25, 99.8%, 17.3%, 0.714);\n  --colors-brownA12: hsla(21, 99.4%, 6.6%, 0.867);\n  --colors-crimson1: hsl(332, 100%, 99.4%);\n  --colors-crimson2: hsl(330, 100%, 98.4%);\n  --colors-crimson3: hsl(331, 85.6%, 96.6%);\n  --colors-crimson4: hsl(331, 78.1%, 94.2%);\n  --colors-crimson5: hsl(332, 72.1%, 91.1%);\n  --colors-crimson6: hsl(333, 67.0%, 86.7%);\n  --colors-crimson7: hsl(335, 63.5%, 80.4%);\n  --colors-crimson8: hsl(336, 62.3%, 72.9%);\n  --colors-crimson9: hsl(336, 80.0%, 57.8%);\n  --colors-crimson10: hsl(336, 73.7%, 53.5%);\n  --colors-crimson11: hsl(336, 75.0%, 47.2%);\n  --colors-crimson12: hsl(340, 65.0%, 14.5%);\n  --colors-crimsonA1: hsla(340, 100%, 51.0%, 0.012);\n  --colors-crimsonA2: hsla(330, 100%, 51.0%, 0.032);\n  --colors-crimsonA3: hsla(332, 99.1%, 47.1%, 0.063);\n  --colors-crimsonA4: hsla(331, 99.9%, 44.3%, 0.102);\n  --colors-crimsonA5: hsla(333, 99.9%, 42.3%, 0.153);\n  --colors-crimsonA6: hsla(333, 99.5%, 40.5%, 0.224);\n  --colors-crimsonA7: hsla(335, 99.7%, 39.1%, 0.322);\n  --colors-crimsonA8: hsla(336, 99.5%, 38.5%, 0.440);\n  --colors-crimsonA9: hsla(336, 99.9%, 44.3%, 0.761);\n  --colors-crimsonA10: hsla(336, 100%, 42.5%, 0.808);\n  --colors-crimsonA11: hsla(336, 99.8%, 40.3%, 0.883);\n  --colors-crimsonA12: hsla(340, 99.0%, 10.0%, 0.950);\n  --colors-cyan1: hsl(185, 60.0%, 98.7%);\n  --colors-cyan2: hsl(185, 73.3%, 97.1%);\n  --colors-cyan3: hsl(186, 70.2%, 94.4%);\n  --colors-cyan4: hsl(186, 63.8%, 90.6%);\n  --colors-cyan5: hsl(187, 58.3%, 85.4%);\n  --colors-cyan6: hsl(188, 54.6%, 78.4%);\n  --colors-cyan7: hsl(189, 53.7%, 68.7%);\n  --colors-cyan8: hsl(189, 60.3%, 52.5%);\n  --colors-cyan9: hsl(190, 95.0%, 39.0%);\n  --colors-cyan10: hsl(191, 91.2%, 36.8%);\n  --colors-cyan11: hsl(192, 85.0%, 31.0%);\n  --colors-cyan12: hsl(192, 88.0%, 12.5%);\n  --colors-cyanA1: hsla(195, 95.2%, 41.2%, 0.020);\n  --colors-cyanA2: hsla(185, 99.9%, 42.3%, 0.051);\n  --colors-cyanA3: hsla(186, 97.8%, 42.2%, 0.095);\n  --colors-cyanA4: hsla(186, 99.9%, 38.5%, 0.153);\n  --colors-cyanA5: hsla(187, 99.3%, 36.6%, 0.232);\n  --colors-cyanA6: hsla(188, 99.4%, 35.4%, 0.334);\n  --colors-cyanA7: hsla(189, 99.6%, 35.0%, 0.483);\n  --colors-cyanA8: hsla(189, 99.9%, 37.6%, 0.761);\n  --colors-cyanA9: hsla(190, 100%, 37.8%, 0.980);\n  --colors-cyanA10: hsla(191, 99.9%, 34.6%, 0.969);\n  --colors-cyanA11: hsla(192, 100%, 27.6%, 0.953);\n  --colors-cyanA12: hsla(192, 100%, 11.0%, 0.980);\n  --colors-gold1: hsl(50, 20.0%, 99.1%);\n  --colors-gold2: hsl(47, 52.9%, 96.7%);\n  --colors-gold3: hsl(46, 38.2%, 93.7%);\n  --colors-gold4: hsl(44, 32.7%, 90.1%);\n  --colors-gold5: hsl(43, 29.9%, 85.7%);\n  --colors-gold6: hsl(41, 28.3%, 79.8%);\n  --colors-gold7: hsl(39, 27.6%, 71.9%);\n  --colors-gold8: hsl(36, 27.2%, 61.8%);\n  --colors-gold9: hsl(36, 20.0%, 49.5%);\n  --colors-gold10: hsl(36, 19.8%, 45.7%);\n  --colors-gold11: hsl(36, 20.0%, 39.0%);\n  --colors-gold12: hsl(36, 16.0%, 20.0%);\n  --colors-goldA1: hsla(60, 89.3%, 18.3%, 0.012);\n  --colors-goldA2: hsla(47, 99.9%, 34.6%, 0.051);\n  --colors-goldA3: hsla(45, 97.0%, 27.9%, 0.087);\n  --colors-goldA4: hsla(46, 98.0%, 25.4%, 0.134);\n  --colors-goldA5: hsla(43, 98.4%, 22.6%, 0.185);\n  --colors-goldA6: hsla(41, 99.7%, 22.0%, 0.259);\n  --colors-goldA7: hsla(38, 99.8%, 21.5%, 0.357);\n  --colors-goldA8: hsla(36, 99.3%, 21.5%, 0.487);\n  --colors-goldA9: hsla(36, 99.9%, 16.2%, 0.604);\n  --colors-goldA10: hsla(36, 99.2%, 14.6%, 0.636);\n  --colors-goldA11: hsla(35, 99.1%, 11.2%, 0.687);\n  --colors-goldA12: hsla(38, 98.0%, 3.8%, 0.832);\n  --colors-grass1: hsl(116, 50.0%, 98.9%);\n  --colors-grass2: hsl(120, 60.0%, 97.1%);\n  --colors-grass3: hsl(120, 53.6%, 94.8%);\n  --colors-grass4: hsl(121, 47.5%, 91.4%);\n  --colors-grass5: hsl(122, 42.6%, 86.5%);\n  --colors-grass6: hsl(124, 39.0%, 79.7%);\n  --colors-grass7: hsl(126, 37.1%, 70.2%);\n  --colors-grass8: hsl(131, 38.1%, 56.3%);\n  --colors-grass9: hsl(131, 41.0%, 46.5%);\n  --colors-grass10: hsl(132, 43.1%, 42.2%);\n  --colors-grass11: hsl(133, 50.0%, 32.5%);\n  --colors-grass12: hsl(130, 30.0%, 14.9%);\n  --colors-grassA1: hsla(120, 94.9%, 38.7%, 0.016);\n  --colors-grassA2: hsla(120, 94.9%, 38.7%, 0.048);\n  --colors-grassA3: hsla(120, 98.0%, 35.5%, 0.079);\n  --colors-grassA4: hsla(120, 98.7%, 31.5%, 0.126);\n  --colors-grassA5: hsla(122, 98.5%, 29.9%, 0.193);\n  --colors-grassA6: hsla(125, 99.2%, 27.9%, 0.283);\n  --colors-grassA7: hsla(125, 99.9%, 27.0%, 0.408);\n  --colors-grassA8: hsla(131, 100%, 27.6%, 0.604);\n  --colors-grassA9: hsla(131, 99.7%, 26.3%, 0.726);\n  --colors-grassA10: hsla(132, 99.9%, 24.0%, 0.761);\n  --colors-grassA11: hsla(133, 99.5%, 19.5%, 0.840);\n  --colors-grassA12: hsla(128, 98.0%, 4.9%, 0.895);\n  --colors-gray1: hsl(0, 0%, 99.0%);\n  --colors-gray2: hsl(0, 0%, 97.3%);\n  --colors-gray3: hsl(0, 0%, 95.1%);\n  --colors-gray4: hsl(0, 0%, 93.0%);\n  --colors-gray5: hsl(0, 0%, 90.9%);\n  --colors-gray6: hsl(0, 0%, 88.7%);\n  --colors-gray7: hsl(0, 0%, 85.8%);\n  --colors-gray8: hsl(0, 0%, 78.0%);\n  --colors-gray9: hsl(0, 0%, 56.1%);\n  --colors-gray10: hsl(0, 0%, 52.3%);\n  --colors-gray11: hsl(0, 0%, 43.5%);\n  --colors-gray12: hsl(0, 0%, 9.0%);\n  --colors-grayA1: hsla(0, 0%, 0%, 0.012);\n  --colors-grayA2: hsla(0, 0%, 0%, 0.027);\n  --colors-grayA3: hsla(0, 0%, 0%, 0.047);\n  --colors-grayA4: hsla(0, 0%, 0%, 0.071);\n  --colors-grayA5: hsla(0, 0%, 0%, 0.090);\n  --colors-grayA6: hsla(0, 0%, 0%, 0.114);\n  --colors-grayA7: hsla(0, 0%, 0%, 0.141);\n  --colors-grayA8: hsla(0, 0%, 0%, 0.220);\n  --colors-grayA9: hsla(0, 0%, 0%, 0.439);\n  --colors-grayA10: hsla(0, 0%, 0%, 0.478);\n  --colors-grayA11: hsla(0, 0%, 0%, 0.565);\n  --colors-grayA12: hsla(0, 0%, 0%, 0.910);\n  --colors-green1: hsl(136, 50.0%, 98.9%);\n  --colors-green2: hsl(138, 62.5%, 96.9%);\n  --colors-green3: hsl(139, 55.2%, 94.5%);\n  --colors-green4: hsl(140, 48.7%, 91.0%);\n  --colors-green5: hsl(141, 43.7%, 86.0%);\n  --colors-green6: hsl(143, 40.3%, 79.0%);\n  --colors-green7: hsl(146, 38.5%, 69.0%);\n  --colors-green8: hsl(151, 40.2%, 54.1%);\n  --colors-green9: hsl(151, 55.0%, 41.5%);\n  --colors-green10: hsl(152, 57.5%, 37.6%);\n  --colors-green11: hsl(153, 67.0%, 28.5%);\n  --colors-green12: hsl(155, 40.0%, 14.0%);\n  --colors-greenA1: hsla(140, 94.9%, 38.7%, 0.016);\n  --colors-greenA2: hsla(138, 99.9%, 38.5%, 0.051);\n  --colors-greenA3: hsla(139, 97.7%, 36.9%, 0.087);\n  --colors-greenA4: hsla(139, 98.5%, 32.7%, 0.134);\n  --colors-greenA5: hsla(141, 100%, 30.4%, 0.200);\n  --colors-greenA6: hsla(142, 99.0%, 28.9%, 0.295);\n  --colors-greenA7: hsla(146, 99.5%, 27.6%, 0.428);\n  --colors-greenA8: hsla(151, 99.5%, 28.8%, 0.644);\n  --colors-greenA9: hsla(151, 99.9%, 28.0%, 0.812);\n  --colors-greenA10: hsla(152, 99.6%, 25.8%, 0.840);\n  --colors-greenA11: hsla(153, 99.9%, 21.0%, 0.906);\n  --colors-greenA12: hsla(155, 99.4%, 6.2%, 0.918);\n  --colors-indigo1: hsl(225, 60.0%, 99.4%);\n  --colors-indigo2: hsl(223, 100%, 98.6%);\n  --colors-indigo3: hsl(223, 98.4%, 97.1%);\n  --colors-indigo4: hsl(223, 92.9%, 95.0%);\n  --colors-indigo5: hsl(224, 87.1%, 92.0%);\n  --colors-indigo6: hsl(224, 81.9%, 87.8%);\n  --colors-indigo7: hsl(225, 77.4%, 82.1%);\n  --colors-indigo8: hsl(226, 75.4%, 74.5%);\n  --colors-indigo9: hsl(226, 70.0%, 55.5%);\n  --colors-indigo10: hsl(226, 58.6%, 51.3%);\n  --colors-indigo11: hsl(226, 55.0%, 45.0%);\n  --colors-indigo12: hsl(226, 62.0%, 17.0%);\n  --colors-indigoA1: hsla(240, 92.6%, 26.5%, 0.008);\n  --colors-indigoA2: hsla(223, 100%, 51.0%, 0.028);\n  --colors-indigoA3: hsla(224, 100%, 50.1%, 0.059);\n  --colors-indigoA4: hsla(223, 98.0%, 48.5%, 0.099);\n  --colors-indigoA5: hsla(225, 98.6%, 46.4%, 0.150);\n  --colors-indigoA6: hsla(224, 99.5%, 44.9%, 0.224);\n  --colors-indigoA7: hsla(225, 99.7%, 43.9%, 0.318);\n  --colors-indigoA8: hsla(226, 99.5%, 43.1%, 0.448);\n  --colors-indigoA9: hsla(226, 100%, 41.2%, 0.757);\n  --colors-indigoA10: hsla(226, 99.8%, 37.1%, 0.773);\n  --colors-indigoA11: hsla(226, 99.6%, 31.1%, 0.797);\n  --colors-indigoA12: hsla(226, 99.3%, 11.4%, 0.938);\n  --colors-lime1: hsl(85, 50.0%, 98.7%);\n  --colors-lime2: hsl(85, 66.7%, 96.5%);\n  --colors-lime3: hsl(85, 76.0%, 92.3%);\n  --colors-lime4: hsl(84, 75.3%, 87.5%);\n  --colors-lime5: hsl(84, 71.5%, 81.9%);\n  --colors-lime6: hsl(82, 65.0%, 74.6%);\n  --colors-lime7: hsl(79, 53.2%, 61.8%);\n  --colors-lime8: hsl(76, 61.7%, 45.1%);\n  --colors-lime9: hsl(81, 67.0%, 50.0%);\n  --colors-lime10: hsl(80, 68.3%, 46.9%);\n  --colors-lime11: hsl(75, 80.0%, 26.0%);\n  --colors-lime12: hsl(78, 70.0%, 11.5%);\n  --colors-limeA1: hsla(80, 93.8%, 31.4%, 0.020);\n  --colors-limeA2: hsla(85, 99.3%, 40.2%, 0.059);\n  --colors-limeA3: hsla(84, 98.7%, 43.2%, 0.138);\n  --colors-limeA4: hsla(84, 99.6%, 43.0%, 0.220);\n  --colors-limeA5: hsla(85, 99.8%, 41.8%, 0.310);\n  --colors-limeA6: hsla(82, 99.8%, 39.3%, 0.420);\n  --colors-limeA7: hsla(79, 99.7%, 34.6%, 0.585);\n  --colors-limeA8: hsla(76, 99.8%, 33.7%, 0.828);\n  --colors-limeA9: hsla(81, 99.8%, 40.2%, 0.836);\n  --colors-limeA10: hsla(80, 100%, 37.6%, 0.851);\n  --colors-limeA11: hsla(75, 99.5%, 22.0%, 0.950);\n  --colors-limeA12: hsla(78, 99.6%, 8.4%, 0.965);\n  --colors-mauve1: hsl(300, 20.0%, 99.0%);\n  --colors-mauve2: hsl(300, 7.7%, 97.5%);\n  --colors-mauve3: hsl(294, 5.5%, 95.3%);\n  --colors-mauve4: hsl(289, 4.7%, 93.3%);\n  --colors-mauve5: hsl(283, 4.4%, 91.3%);\n  --colors-mauve6: hsl(278, 4.1%, 89.1%);\n  --colors-mauve7: hsl(271, 3.9%, 86.3%);\n  --colors-mauve8: hsl(255, 3.7%, 78.8%);\n  --colors-mauve9: hsl(252, 4.0%, 57.3%);\n  --colors-mauve10: hsl(253, 3.5%, 53.5%);\n  --colors-mauve11: hsl(252, 4.0%, 44.8%);\n  --colors-mauve12: hsl(260, 25.0%, 11.0%);\n  --colors-mauveA1: hsla(300, 89.3%, 18.3%, 0.012);\n  --colors-mauveA2: hsla(300, 78.1%, 9.0%, 0.028);\n  --colors-mauveA3: hsla(300, 99.5%, 7.7%, 0.051);\n  --colors-mauveA4: hsla(270, 90.5%, 6.1%, 0.071);\n  --colors-mauveA5: hsla(270, 83.0%, 5.2%, 0.091);\n  --colors-mauveA6: hsla(300, 93.5%, 3.7%, 0.114);\n  --colors-mauveA7: hsla(270, 82.6%, 3.3%, 0.142);\n  --colors-mauveA8: hsla(255, 95.2%, 3.7%, 0.220);\n  --colors-mauveA9: hsla(255, 94.8%, 3.7%, 0.444);\n  --colors-mauveA10: hsla(253, 96.5%, 3.8%, 0.483);\n  --colors-mauveA11: hsla(247, 97.9%, 3.2%, 0.569);\n  --colors-mauveA12: hsla(261, 98.7%, 3.0%, 0.918);\n  --colors-mint1: hsl(165, 80.0%, 98.8%);\n  --colors-mint2: hsl(164, 88.2%, 96.7%);\n  --colors-mint3: hsl(164, 76.6%, 93.3%);\n  --colors-mint4: hsl(165, 68.8%, 89.5%);\n  --colors-mint5: hsl(165, 60.6%, 84.5%);\n  --colors-mint6: hsl(165, 53.5%, 76.9%);\n  --colors-mint7: hsl(166, 50.7%, 66.1%);\n  --colors-mint8: hsl(168, 52.8%, 51.0%);\n  --colors-mint9: hsl(167, 65.0%, 66.0%);\n  --colors-mint10: hsl(167, 59.3%, 63.1%);\n  --colors-mint11: hsl(172, 72.0%, 28.5%);\n  --colors-mint12: hsl(172, 70.0%, 12.0%);\n  --colors-mintA1: hsla(168, 95.4%, 42.8%, 0.024);\n  --colors-mintA2: hsla(164, 99.1%, 47.1%, 0.063);\n  --colors-mintA3: hsla(164, 99.3%, 43.5%, 0.118);\n  --colors-mintA4: hsla(164, 99.3%, 41.3%, 0.177);\n  --colors-mintA5: hsla(165, 99.0%, 37.5%, 0.248);\n  --colors-mintA6: hsla(165, 100%, 35.0%, 0.353);\n  --colors-mintA7: hsla(166, 99.9%, 33.5%, 0.510);\n  --colors-mintA8: hsla(168, 99.6%, 34.6%, 0.750);\n  --colors-mintA9: hsla(167, 99.9%, 39.5%, 0.561);\n  --colors-mintA10: hsla(167, 99.7%, 37.4%, 0.589);\n  --colors-mintA11: hsla(172, 99.8%, 22.4%, 0.922);\n  --colors-mintA12: hsla(172, 99.7%, 8.8%, 0.965);\n  --colors-olive1: hsl(110, 20.0%, 99.0%);\n  --colors-olive2: hsl(120, 16.7%, 97.6%);\n  --colors-olive3: hsl(119, 10.1%, 95.2%);\n  --colors-olive4: hsl(118, 8.1%, 93.0%);\n  --colors-olive5: hsl(117, 7.1%, 90.8%);\n  --colors-olive6: hsl(115, 6.4%, 88.5%);\n  --colors-olive7: hsl(114, 5.9%, 85.4%);\n  --colors-olive8: hsl(110, 5.2%, 77.3%);\n  --colors-olive9: hsl(110, 3.5%, 55.5%);\n  --colors-olive10: hsl(111, 2.8%, 51.7%);\n  --colors-olive11: hsl(110, 3.0%, 43.0%);\n  --colors-olive12: hsl(110, 25.0%, 9.5%);\n  --colors-oliveA1: hsla(120, 89.3%, 18.3%, 0.012);\n  --colors-oliveA2: hsla(120, 87.7%, 16.0%, 0.028);\n  --colors-oliveA3: hsla(120, 99.5%, 7.7%, 0.051);\n  --colors-oliveA4: hsla(120, 92.3%, 8.5%, 0.075);\n  --colors-oliveA5: hsla(120, 86.0%, 6.9%, 0.099);\n  --colors-oliveA6: hsla(120, 94.8%, 6.8%, 0.122);\n  --colors-oliveA7: hsla(120, 99.3%, 5.2%, 0.153);\n  --colors-oliveA8: hsla(110, 93.8%, 5.2%, 0.240);\n  --colors-oliveA9: hsla(111, 98.7%, 3.0%, 0.459);\n  --colors-oliveA10: hsla(111, 93.5%, 2.9%, 0.499);\n  --colors-oliveA11: hsla(111, 95.2%, 2.5%, 0.585);\n  --colors-oliveA12: hsla(110, 97.6%, 2.6%, 0.930);\n  --colors-orange1: hsl(24, 70.0%, 99.0%);\n  --colors-orange2: hsl(24, 83.3%, 97.6%);\n  --colors-orange3: hsl(24, 100%, 95.3%);\n  --colors-orange4: hsl(25, 100%, 92.2%);\n  --colors-orange5: hsl(25, 100%, 88.2%);\n  --colors-orange6: hsl(25, 100%, 82.8%);\n  --colors-orange7: hsl(24, 100%, 75.3%);\n  --colors-orange8: hsl(24, 94.5%, 64.3%);\n  --colors-orange9: hsl(24, 94.0%, 50.0%);\n  --colors-orange10: hsl(24, 100%, 46.5%);\n  --colors-orange11: hsl(24, 100%, 37.0%);\n  --colors-orange12: hsl(15, 60.0%, 17.0%);\n  --colors-orangeA1: hsla(20, 94.9%, 38.7%, 0.016);\n  --colors-orangeA2: hsla(24, 95.8%, 46.5%, 0.044);\n  --colors-orangeA3: hsla(25, 100%, 50.5%, 0.095);\n  --colors-orangeA4: hsla(26, 100%, 50.0%, 0.157);\n  --colors-orangeA5: hsla(25, 100%, 50.1%, 0.236);\n  --colors-orangeA6: hsla(25, 100%, 50.1%, 0.346);\n  --colors-orangeA7: hsla(24, 100%, 50.1%, 0.495);\n  --colors-orangeA8: hsla(24, 99.7%, 48.7%, 0.695);\n  --colors-orangeA9: hsla(24, 99.9%, 48.4%, 0.969);\n  --colors-orangeA10: hsla(23, 100%, 46.4%, 0.980);\n  --colors-orangeA11: hsla(23, 100%, 36.8%, 0.980);\n  --colors-orangeA12: hsla(15, 99.4%, 11.0%, 0.934);\n  --colors-pink1: hsl(322, 100%, 99.4%);\n  --colors-pink2: hsl(323, 100%, 98.4%);\n  --colors-pink3: hsl(323, 86.3%, 96.5%);\n  --colors-pink4: hsl(323, 78.7%, 94.2%);\n  --colors-pink5: hsl(323, 72.2%, 91.1%);\n  --colors-pink6: hsl(323, 66.3%, 86.6%);\n  --colors-pink7: hsl(323, 62.0%, 80.1%);\n  --colors-pink8: hsl(323, 60.3%, 72.4%);\n  --colors-pink9: hsl(322, 65.0%, 54.5%);\n  --colors-pink10: hsl(322, 63.9%, 50.7%);\n  --colors-pink11: hsl(322, 75.0%, 46.0%);\n  --colors-pink12: hsl(320, 70.0%, 13.5%);\n  --colors-pinkA1: hsla(320, 100%, 51.0%, 0.012);\n  --colors-pinkA2: hsla(323, 100%, 51.0%, 0.032);\n  --colors-pinkA3: hsla(323, 98.9%, 47.3%, 0.067);\n  --colors-pinkA4: hsla(323, 99.9%, 44.3%, 0.102);\n  --colors-pinkA5: hsla(324, 99.9%, 42.3%, 0.153);\n  --colors-pinkA6: hsla(323, 99.5%, 39.6%, 0.224);\n  --colors-pinkA7: hsla(323, 99.7%, 38.5%, 0.322);\n  --colors-pinkA8: hsla(323, 99.5%, 37.7%, 0.444);\n  --colors-pinkA9: hsla(322, 99.7%, 39.3%, 0.750);\n  --colors-pinkA10: hsla(322, 100%, 39.1%, 0.808);\n  --colors-pinkA11: hsla(322, 99.8%, 39.0%, 0.887);\n  --colors-pinkA12: hsla(321, 99.8%, 10.0%, 0.961);\n  --colors-plum1: hsl(292, 90.0%, 99.4%);\n  --colors-plum2: hsl(300, 100%, 98.6%);\n  --colors-plum3: hsl(299, 71.2%, 96.4%);\n  --colors-plum4: hsl(299, 62.0%, 93.8%);\n  --colors-plum5: hsl(298, 56.1%, 90.5%);\n  --colors-plum6: hsl(296, 51.3%, 85.8%);\n  --colors-plum7: hsl(295, 48.2%, 78.9%);\n  --colors-plum8: hsl(292, 47.7%, 70.8%);\n  --colors-plum9: hsl(292, 45.0%, 51.0%);\n  --colors-plum10: hsl(292, 50.2%, 46.9%);\n  --colors-plum11: hsl(292, 60.0%, 42.5%);\n  --colors-plum12: hsl(291, 66.0%, 14.0%);\n  --colors-plumA1: hsla(280, 100%, 51.0%, 0.012);\n  --colors-plumA2: hsla(300, 100%, 51.0%, 0.028);\n  --colors-plumA3: hsla(300, 99.0%, 40.9%, 0.063);\n  --colors-plumA4: hsla(300, 99.9%, 38.5%, 0.102);\n  --colors-plumA5: hsla(298, 98.2%, 35.9%, 0.150);\n  --colors-plumA6: hsla(297, 99.6%, 33.7%, 0.216);\n  --colors-plumA7: hsla(295, 99.7%, 32.6%, 0.314);\n  --colors-plumA8: hsla(292, 99.6%, 32.4%, 0.432);\n  --colors-plumA9: hsla(292, 99.9%, 31.0%, 0.710);\n  --colors-plumA10: hsla(292, 99.9%, 30.8%, 0.765);\n  --colors-plumA11: hsla(292, 99.8%, 30.7%, 0.832);\n  --colors-plumA12: hsla(291, 99.9%, 9.7%, 0.953);\n  --colors-purple1: hsl(280, 65.0%, 99.4%);\n  --colors-purple2: hsl(276, 100%, 99.0%);\n  --colors-purple3: hsl(276, 83.1%, 97.0%);\n  --colors-purple4: hsl(275, 76.4%, 94.7%);\n  --colors-purple5: hsl(275, 70.8%, 91.8%);\n  --colors-purple6: hsl(274, 65.4%, 87.8%);\n  --colors-purple7: hsl(273, 61.0%, 81.7%);\n  --colors-purple8: hsl(272, 60.0%, 73.5%);\n  --colors-purple9: hsl(272, 51.0%, 54.0%);\n  --colors-purple10: hsl(272, 46.8%, 50.3%);\n  --colors-purple11: hsl(272, 50.0%, 45.8%);\n  --colors-purple12: hsl(272, 66.0%, 16.0%);\n  --colors-purpleA1: hsla(300, 94.3%, 34.6%, 0.012);\n  --colors-purpleA2: hsla(276, 100%, 51.0%, 0.020);\n  --colors-purpleA3: hsla(277, 99.6%, 46.5%, 0.055);\n  --colors-purpleA4: hsla(274, 97.9%, 44.3%, 0.095);\n  --colors-purpleA5: hsla(276, 98.6%, 42.0%, 0.142);\n  --colors-purpleA6: hsla(275, 100%, 39.2%, 0.200);\n  --colors-purpleA7: hsla(273, 99.2%, 38.2%, 0.295);\n  --colors-purpleA8: hsla(272, 99.7%, 37.6%, 0.424);\n  --colors-purpleA9: hsla(272, 99.6%, 34.0%, 0.695);\n  --colors-purpleA10: hsla(272, 99.7%, 32.0%, 0.730);\n  --colors-purpleA11: hsla(272, 99.8%, 29.7%, 0.773);\n  --colors-purpleA12: hsla(272, 99.2%, 11.3%, 0.946);\n  --colors-red1: hsl(359, 100%, 99.4%);\n  --colors-red2: hsl(359, 100%, 98.6%);\n  --colors-red3: hsl(360, 100%, 96.8%);\n  --colors-red4: hsl(360, 97.9%, 94.8%);\n  --colors-red5: hsl(360, 90.2%, 91.9%);\n  --colors-red6: hsl(360, 81.7%, 87.8%);\n  --colors-red7: hsl(359, 74.2%, 81.7%);\n  --colors-red8: hsl(359, 69.5%, 74.3%);\n  --colors-red9: hsl(358, 75.0%, 59.0%);\n  --colors-red10: hsl(358, 69.4%, 55.2%);\n  --colors-red11: hsl(358, 65.0%, 48.7%);\n  --colors-red12: hsl(354, 50.0%, 14.6%);\n  --colors-redA1: hsla(0, 100%, 51.0%, 0.012);\n  --colors-redA2: hsla(0, 100%, 51.0%, 0.032);\n  --colors-redA3: hsla(0, 100%, 50.2%, 0.063);\n  --colors-redA4: hsla(0, 100%, 50.0%, 0.102);\n  --colors-redA5: hsla(0, 99.9%, 47.5%, 0.153);\n  --colors-redA6: hsla(0, 99.5%, 44.9%, 0.224);\n  --colors-redA7: hsla(359, 99.7%, 42.7%, 0.318);\n  --colors-redA8: hsla(359, 99.6%, 41.1%, 0.436);\n  --colors-redA9: hsla(358, 99.9%, 42.9%, 0.718);\n  --colors-redA10: hsla(358, 99.9%, 41.0%, 0.761);\n  --colors-redA11: hsla(358, 99.8%, 38.3%, 0.832);\n  --colors-redA12: hsla(355, 99.3%, 7.9%, 0.926);\n  --colors-sage1: hsl(155, 30.0%, 98.8%);\n  --colors-sage2: hsl(150, 16.7%, 97.6%);\n  --colors-sage3: hsl(151, 10.6%, 95.2%);\n  --colors-sage4: hsl(151, 8.8%, 93.0%);\n  --colors-sage5: hsl(151, 7.8%, 90.8%);\n  --colors-sage6: hsl(152, 7.2%, 88.4%);\n  --colors-sage7: hsl(153, 6.7%, 85.3%);\n  --colors-sage8: hsl(154, 6.1%, 77.5%);\n  --colors-sage9: hsl(155, 3.5%, 55.5%);\n  --colors-sage10: hsl(154, 2.8%, 51.7%);\n  --colors-sage11: hsl(155, 3.0%, 43.0%);\n  --colors-sage12: hsl(155, 24.0%, 9.0%);\n  --colors-sageA1: hsla(150, 92.6%, 26.5%, 0.016);\n  --colors-sageA2: hsla(150, 87.7%, 16.0%, 0.028);\n  --colors-sageA3: hsla(160, 98.4%, 10.9%, 0.055);\n  --colors-sageA4: hsla(140, 92.3%, 8.5%, 0.075);\n  --colors-sageA5: hsla(160, 86.0%, 6.9%, 0.099);\n  --colors-sageA6: hsla(156, 95.1%, 8.2%, 0.126);\n  --colors-sageA7: hsla(156, 98.6%, 6.3%, 0.157);\n  --colors-sageA8: hsla(154, 94.6%, 6.0%, 0.240);\n  --colors-sageA9: hsla(154, 98.7%, 3.0%, 0.459);\n  --colors-sageA10: hsla(154, 93.5%, 2.9%, 0.499);\n  --colors-sageA11: hsla(154, 95.2%, 2.5%, 0.585);\n  --colors-sageA12: hsla(158, 97.0%, 2.4%, 0.934);\n  --colors-sand1: hsl(50, 20.0%, 99.0%);\n  --colors-sand2: hsl(60, 7.7%, 97.5%);\n  --colors-sand3: hsl(59, 6.5%, 95.1%);\n  --colors-sand4: hsl(58, 6.1%, 92.9%);\n  --colors-sand5: hsl(57, 6.0%, 90.7%);\n  --colors-sand6: hsl(56, 5.9%, 88.4%);\n  --colors-sand7: hsl(55, 5.9%, 85.2%);\n  --colors-sand8: hsl(51, 6.0%, 77.1%);\n  --colors-sand9: hsl(50, 2.0%, 55.7%);\n  --colors-sand10: hsl(55, 1.7%, 51.9%);\n  --colors-sand11: hsl(50, 2.0%, 43.1%);\n  --colors-sand12: hsl(50, 6.0%, 10.0%);\n  --colors-sandA1: hsla(60, 89.3%, 18.3%, 0.012);\n  --colors-sandA2: hsla(60, 78.1%, 9.0%, 0.028);\n  --colors-sandA3: hsla(60, 99.0%, 3.9%, 0.051);\n  --colors-sandA4: hsla(60, 88.9%, 5.9%, 0.075);\n  --colors-sandA5: hsla(60, 86.0%, 6.9%, 0.099);\n  --colors-sandA6: hsla(60, 93.2%, 5.2%, 0.122);\n  --colors-sandA7: hsla(60, 98.3%, 5.1%, 0.157);\n  --colors-sandA8: hsla(51, 94.1%, 6.0%, 0.244);\n  --colors-sandA9: hsla(60, 99.8%, 1.7%, 0.451);\n  --colors-sandA10: hsla(60, 90.7%, 1.8%, 0.491);\n  --colors-sandA11: hsla(45, 93.7%, 1.5%, 0.577);\n  --colors-sandA12: hsla(60, 98.0%, 0.7%, 0.906);\n  --colors-sky1: hsl(193, 100%, 98.8%);\n  --colors-sky2: hsl(193, 100%, 97.3%);\n  --colors-sky3: hsl(193, 99.0%, 94.7%);\n  --colors-sky4: hsl(193, 91.4%, 91.4%);\n  --colors-sky5: hsl(194, 82.0%, 86.6%);\n  --colors-sky6: hsl(194, 74.1%, 79.5%);\n  --colors-sky7: hsl(194, 72.3%, 69.6%);\n  --colors-sky8: hsl(193, 77.9%, 53.9%);\n  --colors-sky9: hsl(193, 98.0%, 70.0%);\n  --colors-sky10: hsl(193, 87.0%, 66.5%);\n  --colors-sky11: hsl(195, 100%, 31.5%);\n  --colors-sky12: hsl(195, 100%, 13.0%);\n  --colors-skyA1: hsla(190, 100%, 51.0%, 0.024);\n  --colors-skyA2: hsla(193, 100%, 50.1%, 0.055);\n  --colors-skyA3: hsla(193, 100%, 50.1%, 0.106);\n  --colors-skyA4: hsla(194, 99.6%, 47.7%, 0.165);\n  --colors-skyA5: hsla(194, 99.2%, 45.4%, 0.244);\n  --colors-skyA6: hsla(194, 99.9%, 42.3%, 0.357);\n  --colors-skyA7: hsla(194, 99.8%, 42.2%, 0.526);\n  --colors-skyA8: hsla(193, 99.9%, 43.8%, 0.820);\n  --colors-skyA9: hsla(193, 99.7%, 49.4%, 0.593);\n  --colors-skyA10: hsla(193, 99.8%, 46.6%, 0.628);\n  --colors-skyA11: hsla(196, 100%, 31.2%, 0.980);\n  --colors-skyA12: hsla(196, 100%, 12.2%, 0.980);\n  --colors-slate1: hsl(206, 30.0%, 98.8%);\n  --colors-slate2: hsl(210, 16.7%, 97.6%);\n  --colors-slate3: hsl(209, 13.3%, 95.3%);\n  --colors-slate4: hsl(209, 12.2%, 93.2%);\n  --colors-slate5: hsl(208, 11.7%, 91.1%);\n  --colors-slate6: hsl(208, 11.3%, 88.9%);\n  --colors-slate7: hsl(207, 11.1%, 85.9%);\n  --colors-slate8: hsl(205, 10.7%, 78.0%);\n  --colors-slate9: hsl(206, 6.0%, 56.1%);\n  --colors-slate10: hsl(206, 5.8%, 52.3%);\n  --colors-slate11: hsl(206, 6.0%, 43.5%);\n  --colors-slate12: hsl(206, 24.0%, 9.0%);\n  --colors-slateA1: hsla(210, 92.6%, 26.5%, 0.016);\n  --colors-slateA2: hsla(210, 87.7%, 16.0%, 0.028);\n  --colors-slateA3: hsla(210, 98.8%, 14.4%, 0.055);\n  --colors-slateA4: hsla(210, 94.1%, 11.1%, 0.075);\n  --colors-slateA5: hsla(216, 91.1%, 10.9%, 0.099);\n  --colors-slateA6: hsla(206, 96.4%, 11.3%, 0.126);\n  --colors-slateA7: hsla(210, 99.1%, 10.1%, 0.157);\n  --colors-slateA8: hsla(205, 96.5%, 10.0%, 0.244);\n  --colors-slateA9: hsla(206, 98.8%, 5.9%, 0.467);\n  --colors-slateA10: hsla(206, 99.6%, 5.4%, 0.506);\n  --colors-slateA11: hsla(206, 97.0%, 4.8%, 0.593);\n  --colors-slateA12: hsla(202, 97.0%, 2.4%, 0.934);\n  --colors-teal1: hsl(165, 60.0%, 98.8%);\n  --colors-teal2: hsl(169, 64.7%, 96.7%);\n  --colors-teal3: hsl(169, 59.8%, 94.0%);\n  --colors-teal4: hsl(169, 53.1%, 90.2%);\n  --colors-teal5: hsl(170, 47.1%, 85.0%);\n  --colors-teal6: hsl(170, 42.6%, 77.9%);\n  --colors-teal7: hsl(170, 39.9%, 68.1%);\n  --colors-teal8: hsl(172, 42.1%, 52.5%);\n  --colors-teal9: hsl(173, 80.0%, 36.0%);\n  --colors-teal10: hsl(173, 83.4%, 32.5%);\n  --colors-teal11: hsl(174, 90.0%, 25.2%);\n  --colors-teal12: hsl(170, 50.0%, 12.5%);\n  --colors-tealA1: hsla(165, 95.2%, 41.2%, 0.020);\n  --colors-tealA2: hsla(169, 99.5%, 39.4%, 0.055);\n  --colors-tealA3: hsla(167, 97.6%, 38.1%, 0.095);\n  --colors-tealA4: hsla(168, 98.1%, 34.6%, 0.150);\n  --colors-tealA5: hsla(170, 99.4%, 32.3%, 0.220);\n  --colors-tealA6: hsla(170, 99.7%, 30.1%, 0.314);\n  --colors-tealA7: hsla(170, 99.3%, 28.7%, 0.448);\n  --colors-tealA8: hsla(172, 99.8%, 29.7%, 0.675);\n  --colors-tealA9: hsla(173, 99.8%, 31.1%, 0.930);\n  --colors-tealA10: hsla(173, 99.7%, 28.7%, 0.946);\n  --colors-tealA11: hsla(174, 99.8%, 23.3%, 0.977);\n  --colors-tealA12: hsla(171, 98.8%, 6.8%, 0.938);\n  --colors-tomato1: hsl(10, 100%, 99.4%);\n  --colors-tomato2: hsl(8, 100%, 98.4%);\n  --colors-tomato3: hsl(8, 100%, 96.6%);\n  --colors-tomato4: hsl(8, 100%, 94.3%);\n  --colors-tomato5: hsl(8, 92.8%, 91.0%);\n  --colors-tomato6: hsl(9, 84.7%, 86.3%);\n  --colors-tomato7: hsl(10, 77.3%, 79.5%);\n  --colors-tomato8: hsl(10, 71.6%, 71.0%);\n  --colors-tomato9: hsl(10, 78.0%, 54.0%);\n  --colors-tomato10: hsl(10, 71.5%, 50.0%);\n  --colors-tomato11: hsl(10, 82.0%, 43.5%);\n  --colors-tomato12: hsl(10, 50.0%, 13.5%);\n  --colors-tomatoA1: hsla(0, 100%, 51.0%, 0.012);\n  --colors-tomatoA2: hsla(8, 100%, 51.0%, 0.032);\n  --colors-tomatoA3: hsla(7, 100%, 50.2%, 0.067);\n  --colors-tomatoA4: hsla(8, 100%, 50.1%, 0.114);\n  --colors-tomatoA5: hsla(7, 99.5%, 47.9%, 0.173);\n  --colors-tomatoA6: hsla(9, 99.9%, 46.2%, 0.255);\n  --colors-tomatoA7: hsla(10, 99.8%, 43.6%, 0.365);\n  --colors-tomatoA8: hsla(10, 99.5%, 41.8%, 0.499);\n  --colors-tomatoA9: hsla(10, 99.9%, 43.8%, 0.820);\n  --colors-tomatoA10: hsla(10, 100%, 41.8%, 0.859);\n  --colors-tomatoA11: hsla(10, 99.9%, 38.8%, 0.922);\n  --colors-tomatoA12: hsla(10, 99.0%, 7.4%, 0.934);\n  --colors-violet1: hsl(255, 65.0%, 99.4%);\n  --colors-violet2: hsl(252, 100%, 99.0%);\n  --colors-violet3: hsl(252, 96.9%, 97.4%);\n  --colors-violet4: hsl(252, 91.5%, 95.5%);\n  --colors-violet5: hsl(252, 85.1%, 93.0%);\n  --colors-violet6: hsl(252, 77.8%, 89.4%);\n  --colors-violet7: hsl(252, 71.0%, 83.7%);\n  --colors-violet8: hsl(252, 68.6%, 76.3%);\n  --colors-violet9: hsl(252, 56.0%, 57.5%);\n  --colors-violet10: hsl(251, 48.1%, 53.5%);\n  --colors-violet11: hsl(250, 43.0%, 48.0%);\n  --colors-violet12: hsl(254, 60.0%, 18.5%);\n  --colors-violetA1: hsla(270, 94.3%, 34.6%, 0.012);\n  --colors-violetA2: hsla(252, 100%, 51.0%, 0.020);\n  --colors-violetA3: hsla(254, 100%, 50.0%, 0.051);\n  --colors-violetA4: hsla(251, 98.3%, 48.2%, 0.087);\n  --colors-violetA5: hsla(252, 99.0%, 45.7%, 0.130);\n  --colors-violetA6: hsla(251, 99.1%, 44.0%, 0.189);\n  --colors-violetA7: hsla(252, 99.5%, 41.7%, 0.279);\n  --colors-violetA8: hsla(252, 100%, 40.7%, 0.400);\n  --colors-violetA9: hsla(252, 99.9%, 35.8%, 0.663);\n  --colors-violetA10: hsla(251, 99.6%, 32.5%, 0.691);\n  --colors-violetA11: hsla(250, 99.8%, 28.4%, 0.726);\n  --colors-violetA12: hsla(254, 99.5%, 11.9%, 0.926);\n  --colors-whiteA1: hsla(0, 0%, 100%, 0);\n  --colors-whiteA2: hsla(0, 0%, 100%, 0.013);\n  --colors-whiteA3: hsla(0, 0%, 100%, 0.034);\n  --colors-whiteA4: hsla(0, 0%, 100%, 0.056);\n  --colors-whiteA5: hsla(0, 0%, 100%, 0.086);\n  --colors-whiteA6: hsla(0, 0%, 100%, 0.124);\n  --colors-whiteA7: hsla(0, 0%, 100%, 0.176);\n  --colors-whiteA8: hsla(0, 0%, 100%, 0.249);\n  --colors-whiteA9: hsla(0, 0%, 100%, 0.386);\n  --colors-whiteA10: hsla(0, 0%, 100%, 0.446);\n  --colors-whiteA11: hsla(0, 0%, 100%, 0.592);\n  --colors-whiteA12: hsla(0, 0%, 100%, 0.923);\n  --colors-yellow1: hsl(60, 54.0%, 98.5%);\n  --colors-yellow2: hsl(52, 100%, 95.5%);\n  --colors-yellow3: hsl(55, 100%, 90.9%);\n  --colors-yellow4: hsl(54, 100%, 86.6%);\n  --colors-yellow5: hsl(52, 97.9%, 82.0%);\n  --colors-yellow6: hsl(50, 89.4%, 76.1%);\n  --colors-yellow7: hsl(47, 80.4%, 68.0%);\n  --colors-yellow8: hsl(48, 100%, 46.1%);\n  --colors-yellow9: hsl(53, 92.0%, 50.0%);\n  --colors-yellow10: hsl(50, 100%, 48.5%);\n  --colors-yellow11: hsl(42, 100%, 29.0%);\n  --colors-yellow12: hsl(40, 55.0%, 13.5%);\n  --colors-yellowA1: hsla(60, 94.3%, 34.6%, 0.024);\n  --colors-yellowA2: hsla(52, 100%, 50.4%, 0.091);\n  --colors-yellowA3: hsla(55, 100%, 50.2%, 0.181);\n  --colors-yellowA4: hsla(54, 100%, 50.1%, 0.267);\n  --colors-yellowA5: hsla(52, 99.9%, 49.5%, 0.357);\n  --colors-yellowA6: hsla(50, 100%, 47.4%, 0.451);\n  --colors-yellowA7: hsla(47, 99.8%, 44.6%, 0.577);\n  --colors-yellowA8: hsla(48, 100%, 46.0%, 0.980);\n  --colors-yellowA9: hsla(53, 100%, 48.0%, 0.961);\n  --colors-yellowA10: hsla(50, 100%, 48.4%, 0.980);\n  --colors-yellowA11: hsla(42, 100%, 28.6%, 0.980);\n  --colors-yellowA12: hsla(41, 98.9%, 8.0%, 0.942);\n  --colors-brand1: var(--colors-blue1);\n  --colors-brand2: var(--colors-blue2);\n  --colors-brand3: var(--colors-blue3);\n  --colors-brand4: var(--colors-blue4);\n  --colors-brand5: var(--colors-blue5);\n  --colors-brand6: var(--colors-blue6));\n  --colors-brand7: var(--colors-blue7);\n  --colors-brand8: var(--colors-blue8);\n  --colors-brand9: var(--colors-blue9);\n  --colors-brand10: var(--colors-blue10);\n  --colors-brand11: var(--colors-blue11);\n  --colors-brand12: var(--colors-blue12);\n  --colors-fixed-brand1: var(--colors-blue1);\n  --colors-fixed-brand2: var(--colors-blue2);\n  --colors-fixed-brand3: var(--colors-blue3);\n  --colors-fixed-brand4: var(--colors-blue4);\n  --colors-fixed-brand5: var(--colors-blue5);\n  --colors-fixed-brand6: var(--colors-blue6));\n  --colors-fixed-brand7: var(--colors-blue7);\n  --colors-fixed-brand8: var(--colors-blue8);\n  --colors-fixed-brand9: var(--colors-blue9);\n  --colors-fixed-brand10: var(--colors-blue10);\n  --colors-fixed-brand11: var(--colors-blue11);\n  --colors-fixed-brand12: var(--colors-blue12);\n  --colors-fixed-scale1: var(--colors-slate1);\n  --colors-fixed-scale2: var(--colors-slate2);\n  --colors-fixed-scale3: var(--colors-slate3);\n  --colors-fixed-scale4: var(--colors-slate4);\n  --colors-fixed-scale5: var(--colors-slate5);\n  --colors-fixed-scale6: var(--colors-slate6);\n  --colors-fixed-scale7: var(--colors-slate7);\n  --colors-fixed-scale8: var(--colors-slate8);\n  --colors-fixed-scale9: var(--colors-slate9);\n  --colors-fixed-scale10: var(--colors-slate10);\n  --colors-fixed-scale11: var(--colors-slate11);\n  --colors-fixed-scale12: var(--colors-slate12);\n  --colors-fixed-scaleA1: var(--colors-slateA1);\n  --colors-fixed-scaleA2: var(--colors-slateA2);\n  --colors-fixed-scaleA3: var(--colors-slateA3);\n  --colors-fixed-scaleA4: var(--colors-slateA4);\n  --colors-fixed-scaleA5: var(--colors-slateA5);\n  --colors-fixed-scaleA6: var(--colors-slateA6);\n  --colors-fixed-scaleA7: var(--colors-slateA7);\n  --colors-fixed-scaleA8: var(--colors-slateA8);\n  --colors-fixed-scaleA9: var(--colors-slateA9);\n  --colors-fixed-scaleA10: var(--colors-slateA10);\n  --colors-fixed-scaleA11: var(--colors-slateA11);\n  --colors-fixed-scaleA12: var(--colors-slateA12);\n  --colors-brand-hiContrast: var(--colors-brand-9);\n  --colors-brand-loContrast: var(--colors-brand-4);\n  --colors-scale1: var(--colors-slate1);\n  --colors-scale2: var(--colors-slate2);\n  --colors-scale3: var(--colors-slate3);\n  --colors-scale4: var(--colors-slate4);\n  --colors-scale5: var(--colors-slate5);\n  --colors-scale6: var(--colors-slate6);\n  --colors-scale7: var(--colors-slate7);\n  --colors-scale8: var(--colors-slate8);\n  --colors-scale9: var(--colors-slate9);\n  --colors-scale10: var(--colors-slate10);\n  --colors-scale11: var(--colors-slate11);\n  --colors-scale12: var(--colors-slate12);\n  --colors-scaleA1: var(--colors-slateA1);\n  --colors-scaleA2: var(--colors-slateA2);\n  --colors-scaleA3: var(--colors-slateA3);\n  --colors-scaleA4: var(--colors-slateA4);\n  --colors-scaleA5: var(--colors-slateA5);\n  --colors-scaleA6: var(--colors-slateA6);\n  --colors-scaleA7: var(--colors-slateA7);\n  --colors-scaleA8: var(--colors-slateA8);\n  --colors-scaleA9: var(--colors-slateA9);\n  --colors-scaleA10: var(--colors-slateA10);\n  --colors-scaleA11: var(--colors-slateA11);\n  --colors-scaleA12: var(--colors-slateA12);\n}\n\n.dark {\n  --colors-amber1: hsl(36, 100%, 6.1%);\n  --colors-amber2: hsl(35, 100%, 7.6%);\n  --colors-amber3: hsl(32, 100%, 10.2%);\n  --colors-amber4: hsl(32, 100%, 12.4%);\n  --colors-amber5: hsl(33, 100%, 14.6%);\n  --colors-amber6: hsl(35, 100%, 17.1%);\n  --colors-amber7: hsl(35, 91.0%, 21.6%);\n  --colors-amber8: hsl(36, 100%, 25.5%);\n  --colors-amber9: hsl(39, 100%, 57.0%);\n  --colors-amber10: hsl(43, 100%, 64.0%);\n  --colors-amber11: hsl(39, 90.0%, 49.8%);\n  --colors-amber12: hsl(39, 97.0%, 93.2%);\n  --colors-amberA1: hsla(0, 0%, 0%, 0);\n  --colors-amberA2: hsla(31, 100%, 49.7%, 0.036);\n  --colors-amberA3: hsla(27, 100%, 49.9%, 0.094);\n  --colors-amberA4: hsla(29, 100%, 50.0%, 0.143);\n  --colors-amberA5: hsla(31, 100%, 50.0%, 0.192);\n  --colors-amberA6: hsla(35, 100%, 50.0%, 0.250);\n  --colors-amberA7: hsla(34, 99.6%, 52.9%, 0.331);\n  --colors-amberA8: hsla(36, 100%, 50.0%, 0.442);\n  --colors-amberA9: hsla(40, 100%, 57.2%, 0.980);\n  --colors-amberA10: hsla(44, 100%, 64.2%, 0.980);\n  --colors-amberA11: hsla(39, 99.9%, 52.7%, 0.938);\n  --colors-amberA12: hsla(45, 100%, 94.2%, 0.980);\n  --colors-blue1: hsl(212, 35.0%, 9.2%);\n  --colors-blue2: hsl(216, 50.0%, 11.8%);\n  --colors-blue3: hsl(214, 59.4%, 15.3%);\n  --colors-blue4: hsl(214, 65.8%, 17.9%);\n  --colors-blue5: hsl(213, 71.2%, 20.2%);\n  --colors-blue6: hsl(212, 77.4%, 23.1%);\n  --colors-blue7: hsl(211, 85.1%, 27.4%);\n  --colors-blue8: hsl(211, 89.7%, 34.1%);\n  --colors-blue9: hsl(206, 100%, 50.0%);\n  --colors-blue10: hsl(209, 100%, 60.6%);\n  --colors-blue11: hsl(210, 100%, 66.1%);\n  --colors-blue12: hsl(206, 98.0%, 95.8%);\n  --colors-blueA1: hsla(0, 0%, 0%, 0);\n  --colors-blueA2: hsla(221, 97.8%, 52.4%, 0.059);\n  --colors-blueA3: hsla(215, 99.3%, 54.2%, 0.135);\n  --colors-blueA4: hsla(215, 99.3%, 53.8%, 0.198);\n  --colors-blueA5: hsla(213, 99.4%, 52.8%, 0.252);\n  --colors-blueA6: hsla(212, 99.9%, 51.7%, 0.323);\n  --colors-blueA7: hsla(211, 100%, 50.7%, 0.435);\n  --colors-blueA8: hsla(211, 99.8%, 50.9%, 0.597);\n  --colors-blueA9: hsla(205, 100%, 50.0%, 0.980);\n  --colors-blueA10: hsla(208, 100%, 60.7%, 0.980);\n  --colors-blueA11: hsla(209, 100%, 66.3%, 0.980);\n  --colors-blueA12: hsla(196, 100%, 96.8%, 0.980);\n  --colors-bronze1: hsl(17, 10.0%, 8.8%);\n  --colors-bronze2: hsl(15, 14.8%, 10.6%);\n  --colors-bronze3: hsl(15, 16.3%, 14.3%);\n  --colors-bronze4: hsl(16, 17.1%, 17.2%);\n  --colors-bronze5: hsl(16, 17.6%, 19.6%);\n  --colors-bronze6: hsl(16, 18.1%, 22.9%);\n  --colors-bronze7: hsl(17, 18.8%, 28.8%);\n  --colors-bronze8: hsl(17, 19.6%, 38.0%);\n  --colors-bronze9: hsl(17, 20.0%, 54.0%);\n  --colors-bronze10: hsl(18, 24.0%, 59.0%);\n  --colors-bronze11: hsl(18, 35.0%, 68.5%);\n  --colors-bronze12: hsl(18, 57.0%, 94.1%);\n  --colors-bronzeA1: hsla(0, 0%, 0%, 0);\n  --colors-bronzeA2: hsla(20, 88.2%, 74.2%, 0.027);\n  --colors-bronzeA3: hsla(10, 99.4%, 83.0%, 0.074);\n  --colors-bronzeA4: hsla(18, 96.0%, 81.1%, 0.114);\n  --colors-bronzeA5: hsla(18, 99.4%, 81.7%, 0.148);\n  --colors-bronzeA6: hsla(15, 98.1%, 82.4%, 0.192);\n  --colors-bronzeA7: hsla(16, 99.2%, 82.9%, 0.270);\n  --colors-bronzeA8: hsla(18, 99.5%, 82.6%, 0.396);\n  --colors-bronzeA9: hsla(18, 99.3%, 85.0%, 0.592);\n  --colors-bronzeA10: hsla(18, 99.6%, 85.2%, 0.657);\n  --colors-bronzeA11: hsla(17, 99.9%, 86.1%, 0.774);\n  --colors-bronzeA12: hsla(20, 99.8%, 96.4%, 0.974);\n  --colors-brown1: hsl(22, 15.0%, 8.7%);\n  --colors-brown2: hsl(20, 28.3%, 10.4%);\n  --colors-brown3: hsl(20, 28.0%, 14.0%);\n  --colors-brown4: hsl(21, 28.4%, 16.5%);\n  --colors-brown5: hsl(22, 28.7%, 18.9%);\n  --colors-brown6: hsl(23, 29.0%, 22.3%);\n  --colors-brown7: hsl(25, 29.5%, 27.8%);\n  --colors-brown8: hsl(27, 30.1%, 35.9%);\n  --colors-brown9: hsl(28, 34.0%, 51.0%);\n  --colors-brown10: hsl(28, 41.4%, 55.8%);\n  --colors-brown11: hsl(28, 60.0%, 64.5%);\n  --colors-brown12: hsl(30, 67.0%, 94.0%);\n  --colors-brownA1: hsla(0, 0%, 0%, 0);\n  --colors-brownA2: hsla(22, 99.6%, 53.6%, 0.035);\n  --colors-brownA3: hsla(18, 97.8%, 69.0%, 0.088);\n  --colors-brownA4: hsla(21, 98.2%, 71.0%, 0.123);\n  --colors-brownA5: hsla(25, 98.4%, 72.1%, 0.158);\n  --colors-brownA6: hsla(25, 98.7%, 73.5%, 0.206);\n  --colors-brownA7: hsla(25, 99.0%, 74.6%, 0.289);\n  --colors-brownA8: hsla(28, 99.2%, 75.3%, 0.407);\n  --colors-brownA9: hsla(28, 100%, 74.8%, 0.642);\n  --colors-brownA10: hsla(28, 99.9%, 74.9%, 0.712);\n  --colors-brownA11: hsla(28, 99.9%, 74.9%, 0.843);\n  --colors-brownA12: hsla(32, 98.2%, 95.7%, 0.979);\n  --colors-crimson1: hsl(335, 20.0%, 9.6%);\n  --colors-crimson2: hsl(335, 32.2%, 11.6%);\n  --colors-crimson3: hsl(335, 42.5%, 16.5%);\n  --colors-crimson4: hsl(335, 47.2%, 19.3%);\n  --colors-crimson5: hsl(335, 50.9%, 21.8%);\n  --colors-crimson6: hsl(335, 55.7%, 25.3%);\n  --colors-crimson7: hsl(336, 62.9%, 30.8%);\n  --colors-crimson8: hsl(336, 74.9%, 39.0%);\n  --colors-crimson9: hsl(336, 80.0%, 57.8%);\n  --colors-crimson10: hsl(339, 84.1%, 62.6%);\n  --colors-crimson11: hsl(341, 90.0%, 67.3%);\n  --colors-crimson12: hsl(332, 87.0%, 96.0%);\n  --colors-crimsonA1: hsla(0, 0%, 0%, 0);\n  --colors-crimsonA2: hsla(336, 96.8%, 53.2%, 0.045);\n  --colors-crimsonA3: hsla(335, 98.7%, 59.3%, 0.138);\n  --colors-crimsonA4: hsla(336, 99.1%, 59.9%, 0.191);\n  --colors-crimsonA5: hsla(335, 99.4%, 59.4%, 0.244);\n  --colors-crimsonA6: hsla(335, 99.4%, 59.4%, 0.315);\n  --colors-crimsonA7: hsla(336, 99.5%, 57.8%, 0.439);\n  --colors-crimsonA8: hsla(336, 99.9%, 55.4%, 0.642);\n  --colors-crimsonA9: hsla(336, 99.9%, 62.8%, 0.903);\n  --colors-crimsonA10: hsla(339, 99.9%, 66.3%, 0.934);\n  --colors-crimsonA11: hsla(341, 99.9%, 69.5%, 0.965);\n  --colors-crimsonA12: hsla(327, 100%, 97.1%, 0.980);\n  --colors-cyan1: hsl(192, 60.0%, 7.2%);\n  --colors-cyan2: hsl(192, 71.4%, 8.2%);\n  --colors-cyan3: hsl(192, 75.9%, 10.8%);\n  --colors-cyan4: hsl(192, 79.3%, 12.8%);\n  --colors-cyan5: hsl(192, 82.5%, 14.6%);\n  --colors-cyan6: hsl(192, 86.6%, 16.9%);\n  --colors-cyan7: hsl(192, 92.6%, 20.1%);\n  --colors-cyan8: hsl(192, 100%, 24.5%);\n  --colors-cyan9: hsl(190, 95.0%, 39.0%);\n  --colors-cyan10: hsl(188, 100%, 40.0%);\n  --colors-cyan11: hsl(186, 100%, 42.2%);\n  --colors-cyan12: hsl(185, 73.0%, 93.2%);\n  --colors-cyanA1: hsla(0, 0%, 0%, 0);\n  --colors-cyanA2: hsla(196, 100%, 50.0%, 0.031);\n  --colors-cyanA3: hsla(192, 98.0%, 50.9%, 0.085);\n  --colors-cyanA4: hsla(194, 99.6%, 51.3%, 0.133);\n  --colors-cyanA5: hsla(192, 99.5%, 51.3%, 0.173);\n  --colors-cyanA6: hsla(193, 99.7%, 50.4%, 0.226);\n  --colors-cyanA7: hsla(192, 100%, 50.0%, 0.310);\n  --colors-cyanA8: hsla(193, 100%, 50.0%, 0.425);\n  --colors-cyanA9: hsla(190, 99.8%, 50.8%, 0.731);\n  --colors-cyanA10: hsla(188, 100%, 50.0%, 0.775);\n  --colors-cyanA11: hsla(186, 100%, 49.9%, 0.824);\n  --colors-cyanA12: hsla(185, 99.8%, 95.1%, 0.978);\n  --colors-gold1: hsl(44, 9.0%, 8.3%);\n  --colors-gold2: hsl(43, 14.3%, 9.6%);\n  --colors-gold3: hsl(42, 15.5%, 13.0%);\n  --colors-gold4: hsl(41, 16.4%, 15.6%);\n  --colors-gold5: hsl(41, 16.9%, 17.8%);\n  --colors-gold6: hsl(40, 17.6%, 20.8%);\n  --colors-gold7: hsl(38, 18.5%, 26.4%);\n  --colors-gold8: hsl(36, 19.6%, 35.1%);\n  --colors-gold9: hsl(36, 20.0%, 49.5%);\n  --colors-gold10: hsl(36, 22.3%, 54.5%);\n  --colors-gold11: hsl(35, 30.0%, 64.0%);\n  --colors-gold12: hsl(49, 52.0%, 93.8%);\n  --colors-goldA1: hsla(0, 0%, 0%, 0);\n  --colors-goldA2: hsla(40, 93.7%, 70.6%, 0.022);\n  --colors-goldA3: hsla(40, 97.5%, 80.6%, 0.065);\n  --colors-goldA4: hsla(40, 95.9%, 80.8%, 0.100);\n  --colors-goldA5: hsla(38, 97.3%, 82.1%, 0.130);\n  --colors-goldA6: hsla(39, 97.2%, 82.5%, 0.169);\n  --colors-goldA7: hsla(37, 99.3%, 82.4%, 0.246);\n  --colors-goldA8: hsla(35, 98.7%, 82.2%, 0.363);\n  --colors-goldA9: hsla(36, 99.7%, 82.8%, 0.552);\n  --colors-goldA10: hsla(35, 99.2%, 83.7%, 0.613);\n  --colors-goldA11: hsla(35, 99.3%, 85.3%, 0.725);\n  --colors-goldA12: hsla(49, 98.6%, 96.7%, 0.966);\n  --colors-grass1: hsl(146, 30.0%, 7.4%);\n  --colors-grass2: hsl(136, 33.3%, 8.8%);\n  --colors-grass3: hsl(137, 36.0%, 11.4%);\n  --colors-grass4: hsl(137, 37.6%, 13.7%);\n  --colors-grass5: hsl(136, 38.7%, 16.0%);\n  --colors-grass6: hsl(135, 39.6%, 19.1%);\n  --colors-grass7: hsl(134, 40.3%, 23.8%);\n  --colors-grass8: hsl(131, 40.1%, 30.8%);\n  --colors-grass9: hsl(131, 41.0%, 46.5%);\n  --colors-grass10: hsl(131, 39.0%, 52.1%);\n  --colors-grass11: hsl(131, 43.0%, 57.2%);\n  --colors-grass12: hsl(137, 72.0%, 94.0%);\n  --colors-grassA1: hsla(0, 0%, 0%, 0);\n  --colors-grassA2: hsla(107, 97.2%, 61.9%, 0.022);\n  --colors-grassA3: hsla(128, 96.5%, 69.8%, 0.066);\n  --colors-grassA4: hsla(130, 100%, 70.2%, 0.100);\n  --colors-grassA5: hsla(130, 98.2%, 69.1%, 0.140);\n  --colors-grassA6: hsla(132, 99.9%, 69.3%, 0.187);\n  --colors-grassA7: hsla(132, 99.9%, 69.8%, 0.261);\n  --colors-grassA8: hsla(130, 99.6%, 70.5%, 0.370);\n  --colors-grassA9: hsla(130, 99.7%, 70.6%, 0.618);\n  --colors-grassA10: hsla(131, 100%, 73.5%, 0.674);\n  --colors-grassA11: hsla(130, 99.7%, 75.6%, 0.731);\n  --colors-grassA12: hsla(137, 100%, 95.8%, 0.980);\n  --colors-gray1: hsl(0, 0%, 8.5%);\n  --colors-gray2: hsl(0, 0%, 11.0%);\n  --colors-gray3: hsl(0, 0%, 13.6%);\n  --colors-gray4: hsl(0, 0%, 15.8%);\n  --colors-gray5: hsl(0, 0%, 17.9%);\n  --colors-gray6: hsl(0, 0%, 20.5%);\n  --colors-gray7: hsl(0, 0%, 24.3%);\n  --colors-gray8: hsl(0, 0%, 31.2%);\n  --colors-gray9: hsl(0, 0%, 43.9%);\n  --colors-gray10: hsl(0, 0%, 49.4%);\n  --colors-gray11: hsl(0, 0%, 62.8%);\n  --colors-gray12: hsl(0, 0%, 93.0%);\n  --colors-grayA1: hsla(0, 0%, 100%, 0);\n  --colors-grayA2: hsla(0, 0%, 100%, 0.026);\n  --colors-grayA3: hsla(0, 0%, 100%, 0.056);\n  --colors-grayA4: hsla(0, 0%, 100%, 0.077);\n  --colors-grayA5: hsla(0, 0%, 100%, 0.103);\n  --colors-grayA6: hsla(0, 0%, 100%, 0.129);\n  --colors-grayA7: hsla(0, 0%, 100%, 0.172);\n  --colors-grayA8: hsla(0, 0%, 100%, 0.249);\n  --colors-grayA9: hsla(0, 0%, 100%, 0.386);\n  --colors-grayA10: hsla(0, 0%, 100%, 0.446);\n  --colors-grayA11: hsla(0, 0%, 100%, 0.592);\n  --colors-grayA12: hsla(0, 0%, 100%, 0.923);\n  --colors-green1: hsl(146, 30.0%, 7.4%);\n  --colors-green2: hsl(155, 44.2%, 8.4%);\n  --colors-green3: hsl(155, 46.7%, 10.9%);\n  --colors-green4: hsl(154, 48.4%, 12.9%);\n  --colors-green5: hsl(154, 49.7%, 14.9%);\n  --colors-green6: hsl(154, 50.9%, 17.6%);\n  --colors-green7: hsl(153, 51.8%, 21.8%);\n  --colors-green8: hsl(151, 51.7%, 28.4%);\n  --colors-green9: hsl(151, 55.0%, 41.5%);\n  --colors-green10: hsl(151, 49.3%, 46.5%);\n  --colors-green11: hsl(151, 50.0%, 53.2%);\n  --colors-green12: hsl(137, 72.0%, 94.0%);\n  --colors-greenA1: hsla(0, 0%, 0%, 0);\n  --colors-greenA2: hsla(169, 100%, 48.5%, 0.027);\n  --colors-greenA3: hsla(162, 98.7%, 57.9%, 0.070);\n  --colors-greenA4: hsla(158, 98.6%, 59.7%, 0.105);\n  --colors-greenA5: hsla(158, 98.6%, 60.7%, 0.140);\n  --colors-greenA6: hsla(156, 99.9%, 62.0%, 0.187);\n  --colors-greenA7: hsla(154, 99.5%, 63.1%, 0.257);\n  --colors-greenA8: hsla(152, 99.7%, 64.2%, 0.370);\n  --colors-greenA9: hsla(151, 99.7%, 63.8%, 0.605);\n  --colors-greenA10: hsla(152, 99.9%, 66.5%, 0.661);\n  --colors-greenA11: hsla(151, 99.7%, 69.2%, 0.740);\n  --colors-greenA12: hsla(137, 100%, 95.8%, 0.980);\n  --colors-indigo1: hsl(229, 24.0%, 10.0%);\n  --colors-indigo2: hsl(230, 36.4%, 12.9%);\n  --colors-indigo3: hsl(228, 43.3%, 17.5%);\n  --colors-indigo4: hsl(227, 47.2%, 21.0%);\n  --colors-indigo5: hsl(227, 50.0%, 24.1%);\n  --colors-indigo6: hsl(226, 52.9%, 28.2%);\n  --colors-indigo7: hsl(226, 56.0%, 34.5%);\n  --colors-indigo8: hsl(226, 58.2%, 44.1%);\n  --colors-indigo9: hsl(226, 70.0%, 55.5%);\n  --colors-indigo10: hsl(227, 75.2%, 61.6%);\n  --colors-indigo11: hsl(228, 100%, 75.9%);\n  --colors-indigo12: hsl(226, 83.0%, 96.3%);\n  --colors-indigoA1: hsla(0, 0%, 0%, 0);\n  --colors-indigoA2: hsla(234, 97.4%, 59.9%, 0.059);\n  --colors-indigoA3: hsla(228, 99.2%, 61.7%, 0.144);\n  --colors-indigoA4: hsla(227, 99.7%, 62.0%, 0.211);\n  --colors-indigoA5: hsla(227, 99.2%, 62.3%, 0.270);\n  --colors-indigoA6: hsla(226, 99.9%, 62.1%, 0.350);\n  --colors-indigoA7: hsla(226, 99.9%, 62.0%, 0.471);\n  --colors-indigoA8: hsla(226, 99.9%, 62.1%, 0.655);\n  --colors-indigoA9: hsla(226, 99.9%, 63.6%, 0.848);\n  --colors-indigoA10: hsla(227, 99.8%, 67.7%, 0.893);\n  --colors-indigoA11: hsla(227, 100%, 76.3%, 0.980);\n  --colors-indigoA12: hsla(226, 100%, 97.5%, 0.980);\n  --colors-lime1: hsl(75, 55.0%, 6.0%);\n  --colors-lime2: hsl(74, 56.8%, 7.3%);\n  --colors-lime3: hsl(78, 50.2%, 9.9%);\n  --colors-lime4: hsl(79, 50.3%, 12.1%);\n  --colors-lime5: hsl(79, 52.6%, 14.2%);\n  --colors-lime6: hsl(78, 55.7%, 16.7%);\n  --colors-lime7: hsl(77, 59.7%, 20.1%);\n  --colors-lime8: hsl(75, 64.8%, 24.5%);\n  --colors-lime9: hsl(81, 67.0%, 50.0%);\n  --colors-lime10: hsl(75, 85.0%, 60.0%);\n  --colors-lime11: hsl(81, 70.0%, 43.8%);\n  --colors-lime12: hsl(84, 79.0%, 92.6%);\n  --colors-limeA1: hsla(0, 0%, 0%, 0);\n  --colors-limeA2: hsla(75, 96.4%, 59.6%, 0.022);\n  --colors-limeA3: hsla(88, 98.0%, 70.4%, 0.061);\n  --colors-limeA4: hsla(81, 97.8%, 67.4%, 0.096);\n  --colors-limeA5: hsla(82, 98.4%, 65.6%, 0.135);\n  --colors-limeA6: hsla(79, 99.7%, 64.3%, 0.182);\n  --colors-limeA7: hsla(77, 99.1%, 62.1%, 0.252);\n  --colors-limeA8: hsla(75, 100%, 60.0%, 0.342);\n  --colors-limeA9: hsla(81, 99.8%, 59.7%, 0.819);\n  --colors-limeA10: hsla(75, 99.8%, 63.7%, 0.936);\n  --colors-limeA11: hsla(81, 99.9%, 58.7%, 0.719);\n  --colors-limeA12: hsla(83, 100%, 94.2%, 0.980);\n  --colors-mauve1: hsl(246, 6.0%, 9.0%);\n  --colors-mauve2: hsl(240, 5.1%, 11.6%);\n  --colors-mauve3: hsl(241, 5.0%, 14.3%);\n  --colors-mauve4: hsl(242, 4.9%, 16.5%);\n  --colors-mauve5: hsl(243, 4.9%, 18.8%);\n  --colors-mauve6: hsl(244, 4.9%, 21.5%);\n  --colors-mauve7: hsl(245, 4.9%, 25.4%);\n  --colors-mauve8: hsl(247, 4.8%, 32.5%);\n  --colors-mauve9: hsl(252, 4.0%, 45.2%);\n  --colors-mauve10: hsl(247, 3.4%, 50.7%);\n  --colors-mauve11: hsl(253, 4.0%, 63.7%);\n  --colors-mauve12: hsl(256, 6.0%, 93.2%);\n  --colors-mauveA1: hsla(0, 0%, 0%, 0);\n  --colors-mauveA2: hsla(240, 76.7%, 91.2%, 0.031);\n  --colors-mauveA3: hsla(240, 86.0%, 95.8%, 0.061);\n  --colors-mauveA4: hsla(240, 91.8%, 94.7%, 0.087);\n  --colors-mauveA5: hsla(240, 91.5%, 95.8%, 0.113);\n  --colors-mauveA6: hsla(240, 92.0%, 93.8%, 0.148);\n  --colors-mauveA7: hsla(240, 94.8%, 95.3%, 0.191);\n  --colors-mauveA8: hsla(249, 98.1%, 95.2%, 0.273);\n  --colors-mauveA9: hsla(248, 97.6%, 96.2%, 0.416);\n  --colors-mauveA10: hsla(248, 95.5%, 96.6%, 0.477);\n  --colors-mauveA11: hsla(250, 98.0%, 98.0%, 0.615);\n  --colors-mauveA12: hsla(240, 93.9%, 99.6%, 0.931);\n  --colors-mint1: hsl(173, 50.0%, 6.6%);\n  --colors-mint2: hsl(176, 73.0%, 7.3%);\n  --colors-mint3: hsl(175, 79.3%, 8.9%);\n  --colors-mint4: hsl(174, 84.8%, 10.3%);\n  --colors-mint5: hsl(174, 90.2%, 11.9%);\n  --colors-mint6: hsl(173, 96.0%, 13.8%);\n  --colors-mint7: hsl(172, 100%, 16.8%);\n  --colors-mint8: hsl(170, 100%, 21.4%);\n  --colors-mint9: hsl(167, 65.0%, 66.0%);\n  --colors-mint10: hsl(163, 80.0%, 77.0%);\n  --colors-mint11: hsl(167, 70.0%, 48.0%);\n  --colors-mint12: hsl(165, 80.0%, 94.8%);\n  --colors-mintA1: hsla(0, 0%, 0%, 0);\n  --colors-mintA2: hsla(180, 100%, 49.2%, 0.031);\n  --colors-mintA3: hsla(176, 100%, 49.7%, 0.070);\n  --colors-mintA4: hsla(173, 100%, 49.7%, 0.105);\n  --colors-mintA5: hsla(173, 100%, 49.8%, 0.144);\n  --colors-mintA6: hsla(172, 100%, 49.8%, 0.192);\n  --colors-mintA7: hsla(171, 100%, 49.9%, 0.266);\n  --colors-mintA8: hsla(169, 100%, 49.9%, 0.366);\n  --colors-mintA9: hsla(167, 99.8%, 75.0%, 0.870);\n  --colors-mintA10: hsla(163, 99.9%, 80.7%, 0.948);\n  --colors-mintA11: hsla(167, 99.9%, 58.7%, 0.796);\n  --colors-mintA12: hsla(169, 100%, 96.2%, 0.980);\n  --colors-olive1: hsl(110, 5.0%, 8.6%);\n  --colors-olive2: hsl(105, 7.4%, 10.6%);\n  --colors-olive3: hsl(106, 6.4%, 13.1%);\n  --colors-olive4: hsl(106, 5.8%, 15.3%);\n  --colors-olive5: hsl(107, 5.3%, 17.4%);\n  --colors-olive6: hsl(107, 4.9%, 19.9%);\n  --colors-olive7: hsl(108, 4.4%, 23.6%);\n  --colors-olive8: hsl(110, 3.8%, 30.6%);\n  --colors-olive9: hsl(110, 6.0%, 42.5%);\n  --colors-olive10: hsl(111, 4.8%, 48.2%);\n  --colors-olive11: hsl(110, 5.0%, 61.8%);\n  --colors-olive12: hsl(110, 6.0%, 93.0%);\n  --colors-oliveA1: hsla(0, 0%, 0%, 0);\n  --colors-oliveA2: hsla(91, 97.0%, 84.0%, 0.026);\n  --colors-oliveA3: hsla(101, 87.4%, 87.7%, 0.057);\n  --colors-oliveA4: hsla(92, 91.8%, 94.1%, 0.078);\n  --colors-oliveA5: hsla(101, 92.6%, 93.5%, 0.104);\n  --colors-oliveA6: hsla(102, 91.1%, 94.6%, 0.130);\n  --colors-oliveA7: hsla(102, 92.5%, 95.9%, 0.173);\n  --colors-oliveA8: hsla(107, 100%, 96.5%, 0.250);\n  --colors-oliveA9: hsla(110, 98.3%, 94.1%, 0.397);\n  --colors-oliveA10: hsla(109, 99.6%, 95.3%, 0.457);\n  --colors-oliveA11: hsla(113, 95.3%, 97.2%, 0.600);\n  --colors-oliveA12: hsla(120, 93.5%, 99.6%, 0.927);\n  --colors-orange1: hsl(30, 70.0%, 7.2%);\n  --colors-orange2: hsl(28, 100%, 8.4%);\n  --colors-orange3: hsl(26, 91.1%, 11.6%);\n  --colors-orange4: hsl(25, 88.3%, 14.1%);\n  --colors-orange5: hsl(24, 87.6%, 16.6%);\n  --colors-orange6: hsl(24, 88.6%, 19.8%);\n  --colors-orange7: hsl(24, 92.4%, 24.0%);\n  --colors-orange8: hsl(25, 100%, 29.0%);\n  --colors-orange9: hsl(24, 94.0%, 50.0%);\n  --colors-orange10: hsl(24, 100%, 58.5%);\n  --colors-orange11: hsl(24, 100%, 62.2%);\n  --colors-orange12: hsl(24, 97.0%, 93.2%);\n  --colors-orangeA1: hsla(0, 0%, 0%, 0);\n  --colors-orangeA2: hsla(13, 100%, 49.7%, 0.054);\n  --colors-orangeA3: hsla(20, 100%, 49.7%, 0.117);\n  --colors-orangeA4: hsla(23, 100%, 49.8%, 0.166);\n  --colors-orangeA5: hsla(23, 99.4%, 50.1%, 0.215);\n  --colors-orangeA6: hsla(23, 99.8%, 51.1%, 0.286);\n  --colors-orangeA7: hsla(23, 99.7%, 50.6%, 0.389);\n  --colors-orangeA8: hsla(24, 100%, 49.9%, 0.523);\n  --colors-orangeA9: hsla(24, 99.9%, 51.6%, 0.965);\n  --colors-orangeA10: hsla(25, 100%, 58.6%, 0.980);\n  --colors-orangeA11: hsla(24, 100%, 62.4%, 0.980);\n  --colors-orangeA12: hsla(26, 100%, 94.2%, 0.980);\n  --colors-pink1: hsl(318, 25.0%, 9.6%);\n  --colors-pink2: hsl(319, 32.2%, 11.6%);\n  --colors-pink3: hsl(319, 41.0%, 16.0%);\n  --colors-pink4: hsl(320, 45.4%, 18.7%);\n  --colors-pink5: hsl(320, 49.0%, 21.1%);\n  --colors-pink6: hsl(321, 53.6%, 24.4%);\n  --colors-pink7: hsl(321, 61.1%, 29.7%);\n  --colors-pink8: hsl(322, 74.9%, 37.5%);\n  --colors-pink9: hsl(322, 65.0%, 54.5%);\n  --colors-pink10: hsl(323, 72.8%, 59.2%);\n  --colors-pink11: hsl(325, 90.0%, 66.4%);\n  --colors-pink12: hsl(322, 90.0%, 95.8%);\n  --colors-pinkA1: hsla(0, 0%, 0%, 0);\n  --colors-pinkA2: hsla(320, 98.1%, 64.1%, 0.036);\n  --colors-pinkA3: hsla(320, 99.1%, 63.1%, 0.121);\n  --colors-pinkA4: hsla(320, 99.5%, 62.7%, 0.170);\n  --colors-pinkA5: hsla(319, 99.7%, 61.5%, 0.219);\n  --colors-pinkA6: hsla(322, 99.4%, 60.8%, 0.291);\n  --colors-pinkA7: hsla(321, 99.6%, 58.7%, 0.407);\n  --colors-pinkA8: hsla(322, 99.7%, 55.4%, 0.608);\n  --colors-pinkA9: hsla(322, 100%, 64.6%, 0.817);\n  --colors-pinkA10: hsla(323, 100%, 66.3%, 0.875);\n  --colors-pinkA11: hsla(325, 99.9%, 68.6%, 0.960);\n  --colors-pinkA12: hsla(314, 100%, 96.9%, 0.980);\n  --colors-plum1: hsl(301, 20.0%, 9.4%);\n  --colors-plum2: hsl(300, 29.8%, 11.2%);\n  --colors-plum3: hsl(298, 34.4%, 15.3%);\n  --colors-plum4: hsl(297, 36.8%, 18.3%);\n  --colors-plum5: hsl(296, 38.5%, 21.1%);\n  --colors-plum6: hsl(295, 40.4%, 24.7%);\n  --colors-plum7: hsl(294, 42.7%, 30.6%);\n  --colors-plum8: hsl(292, 45.1%, 40.0%);\n  --colors-plum9: hsl(292, 45.0%, 51.0%);\n  --colors-plum10: hsl(295, 50.0%, 55.4%);\n  --colors-plum11: hsl(300, 60.0%, 62.0%);\n  --colors-plum12: hsl(296, 74.0%, 95.7%);\n  --colors-plumA1: hsla(0, 0%, 0%, 0);\n  --colors-plumA2: hsla(300, 96.4%, 58.4%, 0.036);\n  --colors-plumA3: hsla(300, 99.4%, 67.1%, 0.102);\n  --colors-plumA4: hsla(295, 99.8%, 66.3%, 0.155);\n  --colors-plumA5: hsla(295, 99.4%, 67.1%, 0.204);\n  --colors-plumA6: hsla(294, 99.0%, 67.8%, 0.262);\n  --colors-plumA7: hsla(294, 99.9%, 67.7%, 0.363);\n  --colors-plumA8: hsla(292, 99.8%, 67.5%, 0.527);\n  --colors-plumA9: hsla(292, 99.9%, 69.2%, 0.695);\n  --colors-plumA10: hsla(295, 99.9%, 70.8%, 0.748);\n  --colors-plumA11: hsla(300, 99.8%, 72.9%, 0.828);\n  --colors-plumA12: hsla(300, 100%, 97.1%, 0.980);\n  --colors-purple1: hsl(284, 20.0%, 9.6%);\n  --colors-purple2: hsl(283, 30.0%, 11.8%);\n  --colors-purple3: hsl(281, 37.5%, 16.5%);\n  --colors-purple4: hsl(280, 41.2%, 20.0%);\n  --colors-purple5: hsl(279, 43.8%, 23.3%);\n  --colors-purple6: hsl(277, 46.4%, 27.5%);\n  --colors-purple7: hsl(275, 49.3%, 34.6%);\n  --colors-purple8: hsl(272, 52.1%, 45.9%);\n  --colors-purple9: hsl(272, 51.0%, 54.0%);\n  --colors-purple10: hsl(273, 57.3%, 59.1%);\n  --colors-purple11: hsl(275, 80.0%, 71.0%);\n  --colors-purple12: hsl(279, 75.0%, 95.7%);\n  --colors-purpleA1: hsla(0, 0%, 0%, 0);\n  --colors-purpleA2: hsla(280, 96.5%, 57.5%, 0.045);\n  --colors-purpleA3: hsla(279, 98.7%, 62.8%, 0.129);\n  --colors-purpleA4: hsla(279, 99.1%, 64.0%, 0.191);\n  --colors-purpleA5: hsla(278, 99.8%, 64.2%, 0.248);\n  --colors-purpleA6: hsla(276, 99.6%, 64.6%, 0.328);\n  --colors-purpleA7: hsla(274, 99.9%, 64.6%, 0.456);\n  --colors-purpleA8: hsla(272, 99.7%, 64.6%, 0.660);\n  --colors-purpleA9: hsla(272, 99.9%, 69.1%, 0.748);\n  --colors-purpleA10: hsla(273, 100%, 71.3%, 0.801);\n  --colors-purpleA11: hsla(275, 99.9%, 75.3%, 0.934);\n  --colors-purpleA12: hsla(286, 100%, 97.1%, 0.980);\n  --colors-red1: hsl(353, 23.0%, 9.8%);\n  --colors-red2: hsl(357, 34.4%, 12.0%);\n  --colors-red3: hsl(356, 43.4%, 16.4%);\n  --colors-red4: hsl(356, 47.6%, 19.2%);\n  --colors-red5: hsl(356, 51.1%, 21.9%);\n  --colors-red6: hsl(356, 55.2%, 25.9%);\n  --colors-red7: hsl(357, 60.2%, 31.8%);\n  --colors-red8: hsl(358, 65.0%, 40.4%);\n  --colors-red9: hsl(358, 75.0%, 59.0%);\n  --colors-red10: hsl(358, 85.3%, 64.0%);\n  --colors-red11: hsl(358, 100%, 69.5%);\n  --colors-red12: hsl(351, 89.0%, 96.0%);\n  --colors-redA1: hsla(0, 0%, 0%, 0);\n  --colors-redA2: hsla(5, 98.5%, 53.8%, 0.045);\n  --colors-redA3: hsla(359, 99.1%, 61.1%, 0.130);\n  --colors-redA4: hsla(358, 98.8%, 61.0%, 0.184);\n  --colors-redA5: hsla(357, 99.6%, 60.3%, 0.237);\n  --colors-redA6: hsla(358, 99.6%, 60.3%, 0.322);\n  --colors-redA7: hsla(357, 100%, 59.5%, 0.442);\n  --colors-redA8: hsla(358, 99.8%, 59.1%, 0.621);\n  --colors-redA9: hsla(358, 100%, 65.5%, 0.884);\n  --colors-redA10: hsla(358, 100%, 67.5%, 0.942);\n  --colors-redA11: hsla(358, 100%, 69.7%, 0.980);\n  --colors-redA12: hsla(352, 100%, 97.1%, 0.980);\n  --colors-sage1: hsl(155, 7.0%, 8.4%);\n  --colors-sage2: hsl(150, 7.4%, 10.6%);\n  --colors-sage3: hsl(150, 6.7%, 13.1%);\n  --colors-sage4: hsl(150, 6.4%, 15.3%);\n  --colors-sage5: hsl(150, 6.1%, 17.4%);\n  --colors-sage6: hsl(150, 5.8%, 19.9%);\n  --colors-sage7: hsl(150, 5.5%, 23.6%);\n  --colors-sage8: hsl(150, 5.1%, 30.6%);\n  --colors-sage9: hsl(155, 6.0%, 42.5%);\n  --colors-sage10: hsl(153, 4.8%, 48.2%);\n  --colors-sage11: hsl(155, 5.0%, 61.8%);\n  --colors-sage12: hsl(155, 6.0%, 93.0%);\n  --colors-sageA1: hsla(0, 0%, 0%, 0);\n  --colors-sageA2: hsla(123, 94.4%, 91.4%, 0.026);\n  --colors-sageA3: hsla(123, 82.9%, 91.0%, 0.057);\n  --colors-sageA4: hsla(124, 97.9%, 94.5%, 0.082);\n  --colors-sageA5: hsla(125, 90.0%, 95.2%, 0.104);\n  --colors-sageA6: hsla(142, 95.1%, 94.8%, 0.134);\n  --colors-sageA7: hsla(143, 92.8%, 95.7%, 0.173);\n  --colors-sageA8: hsla(146, 94.7%, 95.3%, 0.255);\n  --colors-sageA9: hsla(151, 98.2%, 94.4%, 0.397);\n  --colors-sageA10: hsla(148, 99.5%, 95.5%, 0.457);\n  --colors-sageA11: hsla(152, 95.1%, 97.3%, 0.600);\n  --colors-sageA12: hsla(149, 93.3%, 99.6%, 0.927);\n  --colors-sand1: hsl(61, 2.0%, 8.3%);\n  --colors-sand2: hsl(60, 3.7%, 10.6%);\n  --colors-sand3: hsl(58, 3.7%, 13.1%);\n  --colors-sand4: hsl(57, 3.6%, 15.3%);\n  --colors-sand5: hsl(56, 3.7%, 17.4%);\n  --colors-sand6: hsl(55, 3.7%, 19.9%);\n  --colors-sand7: hsl(53, 3.7%, 23.6%);\n  --colors-sand8: hsl(50, 3.8%, 30.6%);\n  --colors-sand9: hsl(50, 4.0%, 42.7%);\n  --colors-sand10: hsl(52, 3.1%, 48.3%);\n  --colors-sand11: hsl(50, 4.0%, 61.8%);\n  --colors-sand12: hsl(56, 4.0%, 92.8%);\n  --colors-sandA1: hsla(0, 0%, 0%, 0);\n  --colors-sandA2: hsla(60, 89.8%, 91.4%, 0.026);\n  --colors-sandA3: hsla(60, 95.5%, 92.5%, 0.056);\n  --colors-sandA4: hsla(60, 75.6%, 96.4%, 0.078);\n  --colors-sandA5: hsla(60, 81.9%, 95.2%, 0.104);\n  --colors-sandA6: hsla(41, 87.6%, 94.8%, 0.134);\n  --colors-sandA7: hsla(60, 95.4%, 96.2%, 0.172);\n  --colors-sandA8: hsla(49, 93.5%, 95.7%, 0.254);\n  --colors-sandA9: hsla(52, 97.3%, 96.2%, 0.391);\n  --colors-sandA10: hsla(52, 97.8%, 96.7%, 0.451);\n  --colors-sandA11: hsla(51, 97.0%, 97.8%, 0.597);\n  --colors-sandA12: hsla(60, 88.7%, 99.8%, 0.923);\n  --colors-sky1: hsl(205, 45.0%, 8.6%);\n  --colors-sky2: hsl(202, 71.4%, 9.6%);\n  --colors-sky3: hsl(201, 74.6%, 12.2%);\n  --colors-sky4: hsl(201, 77.4%, 14.4%);\n  --colors-sky5: hsl(200, 80.3%, 16.5%);\n  --colors-sky6: hsl(200, 84.1%, 18.9%);\n  --colors-sky7: hsl(199, 90.2%, 22.1%);\n  --colors-sky8: hsl(198, 100%, 26.1%);\n  --colors-sky9: hsl(193, 98.0%, 70.0%);\n  --colors-sky10: hsl(192, 100%, 77.0%);\n  --colors-sky11: hsl(192, 85.0%, 55.8%);\n  --colors-sky12: hsl(198, 98.0%, 95.8%);\n  --colors-skyA1: hsla(0, 0%, 0%, 0);\n  --colors-skyA2: hsla(208, 100%, 49.8%, 0.045);\n  --colors-skyA3: hsla(201, 100%, 49.8%, 0.099);\n  --colors-skyA4: hsla(201, 100%, 50.0%, 0.148);\n  --colors-skyA5: hsla(200, 100%, 49.8%, 0.198);\n  --colors-skyA6: hsla(199, 100%, 49.9%, 0.256);\n  --colors-skyA7: hsla(199, 100%, 49.9%, 0.337);\n  --colors-skyA8: hsla(199, 100%, 50.0%, 0.453);\n  --colors-skyA9: hsla(192, 100%, 70.8%, 0.980);\n  --colors-skyA10: hsla(190, 100%, 77.6%, 0.980);\n  --colors-skyA11: hsla(192, 99.9%, 59.6%, 0.924);\n  --colors-skyA12: hsla(189, 100%, 96.8%, 0.980);\n  --colors-slate1: hsl(200, 7.0%, 8.8%);\n  --colors-slate2: hsl(195, 7.1%, 11.0%);\n  --colors-slate3: hsl(197, 6.8%, 13.6%);\n  --colors-slate4: hsl(198, 6.6%, 15.8%);\n  --colors-slate5: hsl(199, 6.4%, 17.9%);\n  --colors-slate6: hsl(201, 6.2%, 20.5%);\n  --colors-slate7: hsl(203, 6.0%, 24.3%);\n  --colors-slate8: hsl(207, 5.6%, 31.6%);\n  --colors-slate9: hsl(206, 6.0%, 43.9%);\n  --colors-slate10: hsl(206, 5.2%, 49.5%);\n  --colors-slate11: hsl(206, 6.0%, 63.0%);\n  --colors-slate12: hsl(210, 6.0%, 93.0%);\n  --colors-slateA1: hsla(0, 0%, 0%, 0);\n  --colors-slateA2: hsla(181, 98.9%, 91.8%, 0.026);\n  --colors-slateA3: hsla(182, 86.7%, 91.4%, 0.057);\n  --colors-slateA4: hsla(209, 86.7%, 93.9%, 0.083);\n  --colors-slateA5: hsla(200, 90.3%, 93.4%, 0.109);\n  --colors-slateA6: hsla(209, 95.3%, 93.5%, 0.139);\n  --colors-slateA7: hsla(204, 98.5%, 93.9%, 0.182);\n  --colors-slateA8: hsla(209, 94.0%, 94.7%, 0.265);\n  --colors-slateA9: hsla(207, 97.3%, 94.0%, 0.412);\n  --colors-slateA10: hsla(209, 99.4%, 95.2%, 0.472);\n  --colors-slateA11: hsla(208, 98.7%, 96.8%, 0.615);\n  --colors-slateA12: hsla(211, 86.7%, 99.6%, 0.927);\n  --colors-teal1: hsl(168, 48.0%, 6.5%);\n  --colors-teal2: hsl(169, 77.8%, 7.1%);\n  --colors-teal3: hsl(170, 76.1%, 9.2%);\n  --colors-teal4: hsl(171, 75.8%, 11.0%);\n  --colors-teal5: hsl(171, 75.7%, 12.8%);\n  --colors-teal6: hsl(172, 75.8%, 15.1%);\n  --colors-teal7: hsl(172, 76.7%, 18.6%);\n  --colors-teal8: hsl(173, 80.2%, 23.7%);\n  --colors-teal9: hsl(173, 80.0%, 36.0%);\n  --colors-teal10: hsl(174, 83.9%, 38.2%);\n  --colors-teal11: hsl(174, 90.0%, 40.7%);\n  --colors-teal12: hsl(166, 73.0%, 93.1%);\n  --colors-tealA1: hsla(0, 0%, 0%, 0);\n  --colors-tealA2: hsla(171, 100%, 49.2%, 0.031);\n  --colors-tealA3: hsla(172, 100%, 49.7%, 0.070);\n  --colors-tealA4: hsla(175, 100%, 49.7%, 0.105);\n  --colors-tealA5: hsla(174, 98.9%, 50.1%, 0.140);\n  --colors-tealA6: hsla(174, 100%, 51.8%, 0.187);\n  --colors-tealA7: hsla(173, 99.6%, 53.2%, 0.257);\n  --colors-tealA8: hsla(174, 99.6%, 53.3%, 0.366);\n  --colors-tealA9: hsla(173, 99.9%, 54.6%, 0.609);\n  --colors-tealA10: hsla(174, 99.9%, 53.8%, 0.670);\n  --colors-tealA11: hsla(174, 100%, 52.0%, 0.748);\n  --colors-tealA12: hsla(166, 98.6%, 95.0%, 0.979);\n  --colors-tomato1: hsl(10, 23.0%, 9.4%);\n  --colors-tomato2: hsl(9, 44.8%, 11.4%);\n  --colors-tomato3: hsl(8, 52.0%, 15.3%);\n  --colors-tomato4: hsl(7, 56.3%, 18.0%);\n  --colors-tomato5: hsl(7, 60.1%, 20.6%);\n  --colors-tomato6: hsl(8, 64.8%, 24.0%);\n  --colors-tomato7: hsl(8, 71.2%, 29.1%);\n  --colors-tomato8: hsl(10, 80.2%, 35.7%);\n  --colors-tomato9: hsl(10, 78.0%, 54.0%);\n  --colors-tomato10: hsl(10, 81.7%, 59.0%);\n  --colors-tomato11: hsl(10, 85.0%, 62.8%);\n  --colors-tomato12: hsl(10, 89.0%, 96.0%);\n  --colors-tomatoA1: hsla(0, 0%, 0%, 0);\n  --colors-tomatoA2: hsla(5, 100%, 49.6%, 0.058);\n  --colors-tomatoA3: hsla(6, 99.6%, 54.9%, 0.133);\n  --colors-tomatoA4: hsla(6, 99.2%, 55.4%, 0.191);\n  --colors-tomatoA5: hsla(6, 99.5%, 55.8%, 0.244);\n  --colors-tomatoA6: hsla(7, 99.7%, 55.9%, 0.319);\n  --colors-tomatoA7: hsla(8, 99.8%, 54.8%, 0.434);\n  --colors-tomatoA8: hsla(10, 99.8%, 53.5%, 0.598);\n  --colors-tomatoA9: hsla(10, 100%, 59.7%, 0.885);\n  --colors-tomatoA10: hsla(10, 100%, 63.6%, 0.916);\n  --colors-tomatoA11: hsla(10, 99.7%, 66.4%, 0.939);\n  --colors-tomatoA12: hsla(12, 100%, 97.1%, 0.980);\n  --colors-violet1: hsl(250, 20.0%, 10.2%);\n  --colors-violet2: hsl(255, 30.3%, 12.9%);\n  --colors-violet3: hsl(253, 37.0%, 18.4%);\n  --colors-violet4: hsl(252, 40.1%, 22.5%);\n  --colors-violet5: hsl(252, 42.2%, 26.2%);\n  --colors-violet6: hsl(251, 44.3%, 31.1%);\n  --colors-violet7: hsl(250, 46.8%, 38.9%);\n  --colors-violet8: hsl(250, 51.8%, 51.2%);\n  --colors-violet9: hsl(252, 56.0%, 57.5%);\n  --colors-violet10: hsl(251, 63.2%, 63.2%);\n  --colors-violet11: hsl(250, 95.0%, 76.8%);\n  --colors-violet12: hsl(252, 87.0%, 96.4%);\n  --colors-violetA1: hsla(0, 0%, 0%, 0);\n  --colors-violetA2: hsla(258, 98.2%, 61.0%, 0.054);\n  --colors-violetA3: hsla(252, 98.8%, 65.8%, 0.148);\n  --colors-violetA4: hsla(253, 99.7%, 65.7%, 0.219);\n  --colors-violetA5: hsla(252, 99.7%, 66.4%, 0.286);\n  --colors-violetA6: hsla(251, 99.7%, 66.2%, 0.371);\n  --colors-violetA7: hsla(250, 99.7%, 66.3%, 0.514);\n  --colors-violetA8: hsla(250, 99.7%, 66.1%, 0.733);\n  --colors-violetA9: hsla(252, 99.9%, 70.3%, 0.786);\n  --colors-violetA10: hsla(251, 99.9%, 72.9%, 0.844);\n  --colors-violetA11: hsla(250, 100%, 77.9%, 0.980);\n  --colors-violetA12: hsla(254, 100%, 97.5%, 0.980);\n  --colors-yellow1: hsl(45, 100%, 5.5%);\n  --colors-yellow2: hsl(46, 100%, 6.7%);\n  --colors-yellow3: hsl(45, 100%, 8.7%);\n  --colors-yellow4: hsl(45, 100%, 10.4%);\n  --colors-yellow5: hsl(47, 100%, 12.1%);\n  --colors-yellow6: hsl(49, 100%, 14.3%);\n  --colors-yellow7: hsl(49, 90.3%, 18.4%);\n  --colors-yellow8: hsl(50, 100%, 22.0%);\n  --colors-yellow9: hsl(53, 92.0%, 50.0%);\n  --colors-yellow10: hsl(54, 100%, 68.0%);\n  --colors-yellow11: hsl(48, 100%, 47.0%);\n  --colors-yellow12: hsl(53, 100%, 91.0%);\n  --colors-yellowA1: hsla(0, 0%, 0%, 0);\n  --colors-yellowA2: hsla(49, 100%, 49.1%, 0.027);\n  --colors-yellowA3: hsla(45, 100%, 49.7%, 0.071);\n  --colors-yellowA4: hsla(46, 100%, 49.7%, 0.111);\n  --colors-yellowA5: hsla(47, 100%, 49.9%, 0.150);\n  --colors-yellowA6: hsla(51, 100%, 49.8%, 0.199);\n  --colors-yellowA7: hsla(51, 99.8%, 53.6%, 0.269);\n  --colors-yellowA8: hsla(51, 100%, 49.9%, 0.371);\n  --colors-yellowA9: hsla(53, 100%, 52.0%, 0.956);\n  --colors-yellowA10: hsla(56, 100%, 68.4%, 0.980);\n  --colors-yellowA11: hsla(48, 100%, 50.0%, 0.934);\n  --colors-yellowA12: hsla(60, 100%, 91.8%, 0.980);\n  --colors-brand1: hsla(153, 75%, 6%, 1);\n  --colors-brand2: hsla(153, 73%, 7%, 1);\n  --colors-brand3: hsla(154, 69%, 9%, 1);\n  --colors-brand4: hsla(154, 67%, 11%, 1);\n  --colors-brand5: hsla(154, 66%, 13%, 1);\n  --colors-brand6: var(--colors-sky6);\n  --colors-brand7: var(--colors-sky7);\n  --colors-brand8: var(--colors-sky8);\n  --colors-brand9: var(--colors-sky9);\n  --colors-brand10: var(--colors-sky10);\n  --colors-brand11: var(--colors-sky11);\n  --colors-brand12: var(--colors-sky-12);\n  --colors-scale1: var(--colors-gray1);\n  --colors-scale2: var(--colors-gray2);\n  --colors-scale3: var(--colors-gray3);\n  --colors-scale4: var(--colors-gray4);\n  --colors-scale5: var(--colors-gray5);\n  --colors-scale6: var(--colors-gray6);\n  --colors-scale7: var(--colors-gray7);\n  --colors-scale8: var(--colors-gray8);\n  --colors-scale9: var(--colors-gray9);\n  --colors-scale10: var(--colors-gray10);\n  --colors-scale11: #bbbbbb;\n  --colors-scale12: var(--colors-gray12);\n  --colors-scaleA1: var(--colors-grayA1);\n  --colors-scaleA2: var(--colors-grayA2);\n  --colors-scaleA3: var(--colors-grayA3);\n  --colors-scaleA4: var(--colors-grayA4);\n  --colors-scaleA5: var(--colors-grayA5);\n  --colors-scaleA6: var(--colors-grayA6);\n  --colors-scaleA7: var(--colors-grayA7);\n  --colors-scaleA8: var(--colors-grayA8);\n  --colors-scaleA9: var(--colors-grayA9);\n  --colors-scaleA10: var(--colors-grayA10);\n  --colors-scaleA11: var(--colors-grayA11);\n  --colors-scaleA12: var(--colors-grayA12);\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(147 197 253 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(147 197 253 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(147 197 253 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.pointer-events-none {\n  pointer-events: none;\n}\n.pointer-events-auto {\n  pointer-events: auto;\n}\n.\\!visible {\n  visibility: visible !important;\n}\n.visible {\n  visibility: visible;\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.inset-0 {\n  inset: 0px;\n}\n.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}\n.inset-y-1 {\n  top: 0.25rem;\n  bottom: 0.25rem;\n}\n.inset-y-1\\.5 {\n  top: 0.375rem;\n  bottom: 0.375rem;\n}\n.left-0 {\n  left: 0px;\n}\n.left-1\\/2 {\n  left: 50%;\n}\n.left-3 {\n  left: 0.75rem;\n}\n.left-4 {\n  left: 1rem;\n}\n.right-0 {\n  right: 0px;\n}\n.right-2 {\n  right: 0.5rem;\n}\n.right-3 {\n  right: 0.75rem;\n}\n.right-6 {\n  right: 1.5rem;\n}\n.top-0 {\n  top: 0px;\n}\n.top-1\\/2 {\n  top: 50%;\n}\n.top-2\\/4 {\n  top: 50%;\n}\n.top-4 {\n  top: 1rem;\n}\n.z-10 {\n  z-index: 10;\n}\n.order-1 {\n  order: 1;\n}\n.order-2 {\n  order: 2;\n}\n.order-first {\n  order: -9999;\n}\n.order-last {\n  order: 9999;\n}\n.col-span-12 {\n  grid-column: span 12 / span 12;\n}\n.col-span-4 {\n  grid-column: span 4 / span 4;\n}\n.col-span-5 {\n  grid-column: span 5 / span 5;\n}\n.col-span-7 {\n  grid-column: span 7 / span 7;\n}\n.col-span-8 {\n  grid-column: span 8 / span 8;\n}\n.m-0 {\n  margin: 0px;\n}\n.m-auto {\n  margin: auto;\n}\n.mx-8 {\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.my-3 {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.my-6 {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.my-8 {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.-ml-0 {\n  margin-left: -0px;\n}\n.-ml-0\\.5 {\n  margin-left: -0.125rem;\n}\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mb-8 {\n  margin-bottom: 2rem;\n}\n.ml-2 {\n  margin-left: 0.5rem;\n}\n.mr-1 {\n  margin-right: 0.25rem;\n}\n.mr-1\\.5 {\n  margin-right: 0.375rem;\n}\n.mr-3 {\n  margin-right: 0.75rem;\n}\n.mr-3\\.5 {\n  margin-right: 0.875rem;\n}\n.mr-4 {\n  margin-right: 1rem;\n}\n.mr-5 {\n  margin-right: 1.25rem;\n}\n.mt-0 {\n  margin-top: 0px;\n}\n.mt-0\\.5 {\n  margin-top: 0.125rem;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.box-border {\n  box-sizing: border-box;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.inline {\n  display: inline;\n}\n.\\!flex {\n  display: flex !important;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.grid {\n  display: grid;\n}\n.contents {\n  display: contents;\n}\n.\\!hidden {\n  display: none !important;\n}\n.hidden {\n  display: none;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-12 {\n  height: 3rem;\n}\n.h-2 {\n  height: 0.5rem;\n}\n.h-3 {\n  height: 0.75rem;\n}\n.h-3\\.5 {\n  height: 0.875rem;\n}\n.h-32 {\n  height: 8rem;\n}\n.h-4 {\n  height: 1rem;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-64 {\n  height: 16rem;\n}\n.h-7 {\n  height: 1.75rem;\n}\n.h-full {\n  height: 100%;\n}\n.h-px {\n  height: 1px;\n}\n.h-screen {\n  height: 100vh;\n}\n.max-h-0 {\n  max-height: 0px;\n}\n.max-h-60 {\n  max-height: 15rem;\n}\n.max-h-screen {\n  max-height: 100vh;\n}\n.w-10 {\n  width: 2.5rem;\n}\n.w-11 {\n  width: 2.75rem;\n}\n.w-12 {\n  width: 3rem;\n}\n.w-2 {\n  width: 0.5rem;\n}\n.w-3 {\n  width: 0.75rem;\n}\n.w-3\\.5 {\n  width: 0.875rem;\n}\n.w-3\\/4 {\n  width: 75%;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-40 {\n  width: 10rem;\n}\n.w-48 {\n  width: 12rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-6\\/12 {\n  width: 50%;\n}\n.w-64 {\n  width: 16rem;\n}\n.w-7 {\n  width: 1.75rem;\n}\n.w-80 {\n  width: 20rem;\n}\n.w-96 {\n  width: 24rem;\n}\n.w-auto {\n  width: auto;\n}\n.w-full {\n  width: 100%;\n}\n.w-listbox {\n  width: var(--width-listbox);;\n}\n.w-px {\n  width: 1px;\n}\n.w-screen {\n  width: 100vw;\n}\n.min-w-fit {\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.max-w-2xl {\n  max-width: 42rem;\n}\n.max-w-3xl {\n  max-width: 48rem;\n}\n.max-w-6xl {\n  max-width: 72rem;\n}\n.max-w-7xl {\n  max-width: 80rem;\n}\n.max-w-full {\n  max-width: 100%;\n}\n.max-w-md {\n  max-width: 28rem;\n}\n.max-w-xl {\n  max-width: 36rem;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.grow {\n  flex-grow: 1;\n}\n.origin-dropdown {\n  -webkit-transform-origin: var(--radix-dropdown-menu-content-transform-origin);\n          transform-origin: var(--radix-dropdown-menu-content-transform-origin);\n}\n.origin-popover {\n  -webkit-transform-origin: var(--radix-popover-menu-content-transform-origin);;\n          transform-origin: var(--radix-popover-menu-content-transform-origin);;\n}\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-0 {\n  --tw-translate-x: 0px;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-3 {\n  --tw-translate-x: 0.75rem;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-5 {\n  --tw-translate-x: 1.25rem;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-0 {\n  --tw-rotate: 0deg;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@-webkit-keyframes dropdownFadeIn {\n\n  0% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes dropdownFadeIn {\n\n  0% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n.animate-dropdownFadeIn {\n  -webkit-animation: dropdownFadeIn 0.1s ease-out;\n          animation: dropdownFadeIn 0.1s ease-out;\n}\n@-webkit-keyframes dropdownFadeOut {\n\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n    opacity: 0;\n  }\n}\n@keyframes dropdownFadeOut {\n\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n    opacity: 0;\n  }\n}\n.animate-dropdownFadeOut {\n  -webkit-animation: dropdownFadeOut 0.1s ease-out;\n          animation: dropdownFadeOut 0.1s ease-out;\n}\n@-webkit-keyframes fadeIn {\n\n  0% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n\n  0% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n.animate-fade-in {\n  -webkit-animation: fadeIn 300ms;\n          animation: fadeIn 300ms;\n}\n@-webkit-keyframes spin {\n\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.animate-spin {\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n.cursor-auto {\n  cursor: auto;\n}\n.cursor-not-allowed {\n  cursor: not-allowed;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.select-none {\n  -webkit-user-select: none;\n          user-select: none;\n}\n.resize {\n  resize: both;\n}\n.appearance-none {\n  -webkit-appearance: none;\n          appearance: none;\n}\n.grid-flow-row {\n  grid-auto-flow: row;\n}\n.grid-cols-12 {\n  grid-template-columns: repeat(12, minmax(0, 1fr));\n}\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.place-items-center {\n  place-items: center;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.items-baseline {\n  align-items: baseline;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.justify-evenly {\n  justify-content: space-evenly;\n}\n.gap-1 {\n  gap: 0.25rem;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.gap-6 {\n  gap: 1.5rem;\n}\n.gap-8 {\n  gap: 2rem;\n}\n.-space-x-0 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(-0px * var(--tw-space-x-reverse));\n  margin-left: calc(-0px * calc(1 - var(--tw-space-x-reverse)));\n}\n.-space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(-0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(-0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.-space-x-10 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(-2.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(-2.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.-space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(-0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(-0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.-space-x-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(-0.75rem * var(--tw-space-x-reverse));\n  margin-left: calc(-0.75rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.-space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(-1rem * var(--tw-space-x-reverse));\n  margin-left: calc(-1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.-space-x-5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(-1.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(-1.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.-space-x-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(-1.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(-1.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.-space-x-7 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(-1.75rem * var(--tw-space-x-reverse));\n  margin-left: calc(-1.75rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.-space-x-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(-2rem * var(--tw-space-x-reverse));\n  margin-left: calc(-2rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.-space-x-9 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(-2.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(-2.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.-space-y-0 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(-0px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(-0px * var(--tw-space-y-reverse));\n}\n.-space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(-0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(-0.25rem * var(--tw-space-y-reverse));\n}\n.-space-y-10 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(-2.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(-2.5rem * var(--tw-space-y-reverse));\n}\n.-space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(-0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(-0.5rem * var(--tw-space-y-reverse));\n}\n.-space-y-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(-0.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(-0.75rem * var(--tw-space-y-reverse));\n}\n.-space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(-1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(-1rem * var(--tw-space-y-reverse));\n}\n.-space-y-5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(-1.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(-1.25rem * var(--tw-space-y-reverse));\n}\n.-space-y-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(-1.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(-1.5rem * var(--tw-space-y-reverse));\n}\n.-space-y-7 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(-1.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(-1.75rem * var(--tw-space-y-reverse));\n}\n.-space-y-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(-2rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(-2rem * var(--tw-space-y-reverse));\n}\n.-space-y-9 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(-2.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(-2.25rem * var(--tw-space-y-reverse));\n}\n.-space-y-px > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(-1px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(-1px * var(--tw-space-y-reverse));\n}\n.space-x-0 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0px * var(--tw-space-x-reverse));\n  margin-left: calc(0px * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-10 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(2.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(2.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.75rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-7 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1.75rem * var(--tw-space-x-reverse));\n  margin-left: calc(1.75rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(2rem * var(--tw-space-x-reverse));\n  margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-9 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(2.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(2.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-0 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0px * var(--tw-space-y-reverse));\n}\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n.space-y-12 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(3rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(3rem * var(--tw-space-y-reverse));\n}\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n.space-y-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n.space-y-5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));\n}\n.space-y-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\n}\n.space-y-7 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.75rem * var(--tw-space-y-reverse));\n}\n.space-y-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(2rem * var(--tw-space-y-reverse));\n}\n.space-y-9 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(2.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(2.25rem * var(--tw-space-y-reverse));\n}\n.overflow-auto {\n  overflow: auto;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.overflow-y-scroll {\n  overflow-y: scroll;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.break-all {\n  word-break: break-all;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-0 {\n  border-width: 0px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-b-2 {\n  border-bottom-width: 2px;\n}\n.border-l {\n  border-left-width: 1px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-solid {\n  border-style: solid;\n}\n.border-dashed {\n  border-style: dashed;\n}\n.border-none {\n  border-style: none;\n}\n.border-amber-300 {\n  border-color: var(--colors-amber3);\n}\n.border-amber-700 {\n  border-color: var(--colors-amber7);\n}\n.border-blue-700 {\n  border-color: var(--colors-blue7);\n}\n.border-brand-600 {\n  border-color: var(--colors-brand6);\n}\n.border-brand-700 {\n  border-color: var(--colors-brand7);\n}\n.border-brand-900 {\n  border-color: var(--colors-brand9);\n}\n.border-bronze-700 {\n  border-color: var(--colors-bronze7);\n}\n.border-brown-700 {\n  border-color: var(--colors-brown7);\n}\n.border-crimson-700 {\n  border-color: var(--colors-crimson7);\n}\n.border-cyan-700 {\n  border-color: var(--colors-cyan7);\n}\n.border-gold-700 {\n  border-color: var(--colors-gold7);\n}\n.border-grass-700 {\n  border-color: var(--colors-grass7);\n}\n.border-gray-100 {\n  border-color: var(--colors-gray1);\n}\n.border-gray-200 {\n  border-color: var(--colors-gray2);\n}\n.border-gray-400 {\n  border-color: var(--colors-gray4);\n}\n.border-gray-700 {\n  border-color: var(--colors-gray7);\n}\n.border-green-700 {\n  border-color: var(--colors-green7);\n}\n.border-indigo-700 {\n  border-color: var(--colors-indigo7);\n}\n.border-lime-700 {\n  border-color: var(--colors-lime7);\n}\n.border-mauve-700 {\n  border-color: var(--colors-mauve7);\n}\n.border-mint-700 {\n  border-color: var(--colors-mint7);\n}\n.border-olive-700 {\n  border-color: var(--colors-olive7);\n}\n.border-orange-700 {\n  border-color: var(--colors-orange7);\n}\n.border-pink-700 {\n  border-color: var(--colors-pink7);\n}\n.border-plum-700 {\n  border-color: var(--colors-plum7);\n}\n.border-purple-700 {\n  border-color: var(--colors-purple7);\n}\n.border-red-700 {\n  border-color: var(--colors-red7);\n}\n.border-sage-700 {\n  border-color: var(--colors-sage7);\n}\n.border-sand-700 {\n  border-color: var(--colors-sand7);\n}\n.border-scale-1200 {\n  border-color: var(--colors-scale12);\n}\n.border-scale-300 {\n  border-color: var(--colors-scale3);\n}\n.border-scale-400 {\n  border-color: var(--colors-scale4);\n}\n.border-scale-500 {\n  border-color: var(--colors-scale5);\n}\n.border-scale-600 {\n  border-color: var(--colors-scale6);\n}\n.border-scale-700 {\n  border-color: var(--colors-scale7);\n}\n.border-scale-900 {\n  border-color: var(--colors-scale9);\n}\n.border-sky-700 {\n  border-color: var(--colors-sky7);\n}\n.border-slate-700 {\n  border-color: var(--colors-slate7);\n}\n.border-teal-100 {\n  border-color: var(--colors-teal1);\n}\n.border-teal-700 {\n  border-color: var(--colors-teal7);\n}\n.border-tomato-700 {\n  border-color: var(--colors-tomato7);\n}\n.border-transparent {\n  border-color: transparent;\n}\n.border-violet-700 {\n  border-color: var(--colors-violet7);\n}\n.border-yellow-700 {\n  border-color: var(--colors-yellow7);\n}\n.border-opacity-0 {\n  --tw-border-opacity: 0;\n}\n.border-opacity-100 {\n  --tw-border-opacity: 1;\n}\n.border-opacity-50 {\n  --tw-border-opacity: 0.5;\n}\n.bg-amber-100 {\n  background-color: var(--colors-amber1);\n}\n.bg-amber-200 {\n  background-color: var(--colors-amber2);\n}\n.bg-amber-300 {\n  background-color: var(--colors-amber3);\n}\n.bg-blue-200 {\n  background-color: var(--colors-blue2);\n}\n.bg-brand-200 {\n  background-color: var(--colors-brand2);\n}\n.bg-brand-300 {\n  background-color: var(--colors-brand3);\n}\n.bg-brand-900 {\n  background-color: var(--colors-brand9);\n}\n.bg-brand-fixed-900 {\n  background-color: var(--colors-fixed-brand9);\n}\n.bg-bronze-200 {\n  background-color: var(--colors-bronze2);\n}\n.bg-brown-200 {\n  background-color: var(--colors-brown2);\n}\n.bg-crimson-200 {\n  background-color: var(--colors-crimson2);\n}\n.bg-cyan-200 {\n  background-color: var(--colors-cyan2);\n}\n.bg-gold-200 {\n  background-color: var(--colors-gold2);\n}\n.bg-grass-200 {\n  background-color: var(--colors-grass2);\n}\n.bg-gray-100 {\n  background-color: var(--colors-gray1);\n}\n.bg-gray-200 {\n  background-color: var(--colors-gray2);\n}\n.bg-gray-300 {\n  background-color: var(--colors-gray3);\n}\n.bg-green-200 {\n  background-color: var(--colors-green2);\n}\n.bg-green-900 {\n  background-color: var(--colors-green9);\n}\n.bg-indigo-200 {\n  background-color: var(--colors-indigo2);\n}\n.bg-lime-200 {\n  background-color: var(--colors-lime2);\n}\n.bg-mauve-200 {\n  background-color: var(--colors-mauve2);\n}\n.bg-mint-200 {\n  background-color: var(--colors-mint2);\n}\n.bg-olive-200 {\n  background-color: var(--colors-olive2);\n}\n.bg-orange-200 {\n  background-color: var(--colors-orange2);\n}\n.bg-pink-200 {\n  background-color: var(--colors-pink2);\n}\n.bg-plum-200 {\n  background-color: var(--colors-plum2);\n}\n.bg-purple-200 {\n  background-color: var(--colors-purple2);\n}\n.bg-purple-600 {\n  background-color: var(--colors-purple6);\n}\n.bg-red-100 {\n  background-color: var(--colors-red1);\n}\n.bg-red-200 {\n  background-color: var(--colors-red2);\n}\n.bg-red-300 {\n  background-color: var(--colors-red3);\n}\n.bg-sage-200 {\n  background-color: var(--colors-sage2);\n}\n.bg-sand-200 {\n  background-color: var(--colors-sand2);\n}\n.bg-scale-100 {\n  background-color: var(--colors-scale1);\n}\n.bg-scale-1200 {\n  background-color: var(--colors-scale12);\n}\n.bg-scale-200 {\n  background-color: var(--colors-scale2);\n}\n.bg-scale-300 {\n  background-color: var(--colors-scale3);\n}\n.bg-scale-400 {\n  background-color: var(--colors-scale4);\n}\n.bg-scale-500 {\n  background-color: var(--colors-scale5);\n}\n.bg-scale-600 {\n  background-color: var(--colors-scale6);\n}\n.bg-scaleA-200 {\n  background-color: var(--colors-scalea2);\n}\n.bg-sky-200 {\n  background-color: var(--colors-sky2);\n}\n.bg-slate-200 {\n  background-color: var(--colors-slate2);\n}\n.bg-teal-200 {\n  background-color: var(--colors-teal2);\n}\n.bg-tomato-200 {\n  background-color: var(--colors-tomato2);\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-violet-200 {\n  background-color: var(--colors-violet2);\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-yellow-200 {\n  background-color: var(--colors-yellow2);\n}\n.bg-opacity-0 {\n  --tw-bg-opacity: 0;\n}\n.bg-opacity-10 {\n  --tw-bg-opacity: 0.1;\n}\n.bg-none {\n  background-image: none;\n}\n.fill-current {\n  fill: currentColor;\n}\n.fill-red-400 {\n  fill: var(--colors-red4);\n}\n.object-cover {\n  object-fit: cover;\n}\n.p-0 {\n  padding: 0px;\n}\n.p-0\\.5 {\n  padding: 0.125rem;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-8 {\n  padding: 2rem;\n}\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.px-2\\.5 {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-0 {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.py-0\\.5 {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.py-1\\.5 {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n.py-12 {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.pb-0 {\n  padding-bottom: 0px;\n}\n.pb-0\\.5 {\n  padding-bottom: 0.125rem;\n}\n.pl-10 {\n  padding-left: 2.5rem;\n}\n.pl-2 {\n  padding-left: 0.5rem;\n}\n.pl-3 {\n  padding-left: 0.75rem;\n}\n.pl-6 {\n  padding-left: 1.5rem;\n}\n.pl-7 {\n  padding-left: 1.75rem;\n}\n.pl-8 {\n  padding-left: 2rem;\n}\n.pr-1 {\n  padding-right: 0.25rem;\n}\n.pr-2 {\n  padding-right: 0.5rem;\n}\n.pr-3 {\n  padding-right: 0.75rem;\n}\n.pr-4 {\n  padding-right: 1rem;\n}\n.pr-9 {\n  padding-right: 2.25rem;\n}\n.pt-4 {\n  padding-top: 1rem;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-right {\n  text-align: right;\n}\n.indent-px {\n  text-indent: 1px;\n}\n.font-mono {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n.font-sans {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-light {\n  font-weight: 300;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-normal {\n  font-weight: 400;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.leading-4 {\n  line-height: 1rem;\n}\n.leading-none {\n  line-height: 1;\n}\n.text-amber-1100 {\n  color: var(--colors-amber11);\n}\n.text-amber-1200 {\n  color: var(--colors-amber12);\n}\n.text-amber-900 {\n  color: var(--colors-amber9);\n}\n.text-blue-1100 {\n  color: var(--colors-blue11);\n}\n.text-blue-1200 {\n  color: var(--colors-blue12);\n}\n.text-blue-900 {\n  color: var(--colors-blue9);\n}\n.text-brand-1100 {\n  color: var(--colors-brand11);\n}\n.text-brand-1200 {\n  color: var(--colors-brand12);\n}\n.text-brand-200 {\n  color: var(--colors-brand2);\n}\n.text-brand-700 {\n  color: var(--colors-brand7);\n}\n.text-brand-900 {\n  color: var(--colors-brand9);\n}\n.text-bronze-1100 {\n  color: var(--colors-bronze11);\n}\n.text-brown-1100 {\n  color: var(--colors-brown11);\n}\n.text-crimson-1100 {\n  color: var(--colors-crimson11);\n}\n.text-cyan-1100 {\n  color: var(--colors-cyan11);\n}\n.text-gold-1100 {\n  color: var(--colors-gold11);\n}\n.text-grass-1100 {\n  color: var(--colors-grass11);\n}\n.text-gray-1100 {\n  color: var(--colors-gray11);\n}\n.text-gray-300 {\n  color: var(--colors-gray3);\n}\n.text-gray-400 {\n  color: var(--colors-gray4);\n}\n.text-gray-500 {\n  color: var(--colors-gray5);\n}\n.text-gray-600 {\n  color: var(--colors-gray6);\n}\n.text-gray-700 {\n  color: var(--colors-gray7);\n}\n.text-green-1100 {\n  color: var(--colors-green11);\n}\n.text-green-500 {\n  color: var(--colors-green5);\n}\n.text-indigo-1100 {\n  color: var(--colors-indigo11);\n}\n.text-lime-1100 {\n  color: var(--colors-lime11);\n}\n.text-lo-contrast {\n  color: var(--colors-fixed-scale1);\n}\n.text-mauve-1100 {\n  color: var(--colors-mauve11);\n}\n.text-mint-1100 {\n  color: var(--colors-mint11);\n}\n.text-olive-1100 {\n  color: var(--colors-olive11);\n}\n.text-orange-1100 {\n  color: var(--colors-orange11);\n}\n.text-pink-1100 {\n  color: var(--colors-pink11);\n}\n.text-plum-1100 {\n  color: var(--colors-plum11);\n}\n.text-purple-1100 {\n  color: var(--colors-purple11);\n}\n.text-purple-600 {\n  color: var(--colors-purple6);\n}\n.text-red-1100 {\n  color: var(--colors-red11);\n}\n.text-red-1200 {\n  color: var(--colors-red12);\n}\n.text-red-500 {\n  color: var(--colors-red5);\n}\n.text-red-900 {\n  color: var(--colors-red9);\n}\n.text-sage-1100 {\n  color: var(--colors-sage11);\n}\n.text-sand-1100 {\n  color: var(--colors-sand11);\n}\n.text-scale-1100 {\n  color: var(--colors-scale11);\n}\n.text-scale-1200 {\n  color: var(--colors-scale12);\n}\n.text-scale-200 {\n  color: var(--colors-scale2);\n}\n.text-scale-500 {\n  color: var(--colors-scale5);\n}\n.text-scale-600 {\n  color: var(--colors-scale6);\n}\n.text-scale-700 {\n  color: var(--colors-scale7);\n}\n.text-scale-800 {\n  color: var(--colors-scale8);\n}\n.text-scale-900 {\n  color: var(--colors-scale9);\n}\n.text-sky-1100 {\n  color: var(--colors-sky11);\n}\n.text-slate-1100 {\n  color: var(--colors-slate11);\n}\n.text-teal-1100 {\n  color: var(--colors-teal11);\n}\n.text-tomato-1100 {\n  color: var(--colors-tomato11);\n}\n.text-tomato-900 {\n  color: var(--colors-tomato9);\n}\n.text-violet-1100 {\n  color: var(--colors-violet11);\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-yellow-1100 {\n  color: var(--colors-yellow11);\n}\n.text-yellow-500 {\n  color: var(--colors-yellow5);\n}\n.text-yellow-600 {\n  color: var(--colors-yellow6);\n}\n.underline {\n  text-decoration-line: underline;\n}\n.line-through {\n  text-decoration-line: line-through;\n}\n.placeholder-scale-800::-webkit-input-placeholder {\n  color: var(--colors-scale8);\n}\n.placeholder-scale-800::placeholder {\n  color: var(--colors-scale8);\n}\n.opacity-0 {\n  opacity: 0;\n}\n.opacity-40 {\n  opacity: 0.4;\n}\n.opacity-50 {\n  opacity: 0.5;\n}\n.opacity-75 {\n  opacity: 0.75;\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-none {\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.outline {\n  outline-style: solid;\n}\n.outline-0 {\n  outline-width: 0px;\n}\n.outline-offset-1 {\n  outline-offset: 1px;\n}\n.ring-0 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.ring-scale-1100 {\n  --tw-ring-color: var(--colors-scale11);\n}\n.ring-scale-1200 {\n  --tw-ring-color: var(--colors-scale12);\n}\n.filter {\n  -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n.duration-500 {\n  transition-duration: 500ms;\n}\n.duration-700 {\n  transition-duration: 700ms;\n}\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.dropdown-content[data-state='open'] {\n  -webkit-animation: fadeIn 50ms ease-out;\n          animation: fadeIn 50ms ease-out;\n}\n.dropdown-content[data-state='closed'] {\n  -webkit-animation: fadeOut 50ms ease-in;\n          animation: fadeOut 50ms ease-in;\n}\n[data-state='open'] .accordion-content-animation {\n  -webkit-animation: slideDown 200ms ease-out;\n          animation: slideDown 200ms ease-out;\n}\n[data-state='closed'] .accordion-content-animation {\n  -webkit-animation: slideUp 200ms ease-in;\n          animation: slideUp 200ms ease-in;\n}\n.text-code {\n  margin: 0 0.2em;\n  padding: 0.2em 0.4em 0.1em;\n  background: hsla(0, 0%, 58.8%, 0.1);\n  border: 1px solid hsla(0, 0%, 39.2%, 0.2);\n  border-radius: 3px;\n}\n.no-scrollbar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.no-scrollbar::-webkit-scrollbar {\n  display: none;\n}\n.mask-fadeout-right {\n  -webkit-mask-image: linear-gradient(to right, white 98%, transparent 100%);\n  mask-image: linear-gradient(to right, white 98%, transparent 100%);\n}\n.mask-fadeout-left {\n  -webkit-mask-image: linear-gradient(to left, white 98%, transparent 100%);\n  mask-image: linear-gradient(to left, white 98%, transparent 100%);\n}\ninput[type=\"number\"]::-webkit-outer-spin-button, input[type=\"number\"]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.bordershadow-amber-700 {\n  box-shadow: \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka8) 0px 1px 1px 0px, \n                var(--colors-amber7) 0px 0px 0px 1px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                rgb(64 68 82 / 8%) 0px 2px 5px 0px;\n                ;\n}\n.bordershadow-brand-fixed-800 {\n  box-shadow: \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka8) 0px 1px 1px 0px, \n                var(--colors-fixed-brand8) 0px 0px 0px 1px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                rgb(64 68 82 / 8%) 0px 2px 5px 0px;\n                ;\n}\n.bordershadow-green-600 {\n  box-shadow: \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka8) 0px 1px 1px 0px, \n                var(--colors-green6) 0px 0px 0px 1px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                rgb(64 68 82 / 8%) 0px 2px 5px 0px;\n                ;\n}\n.bordershadow-red-700 {\n  box-shadow: \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka8) 0px 1px 1px 0px, \n                var(--colors-red7) 0px 0px 0px 1px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                rgb(64 68 82 / 8%) 0px 2px 5px 0px;\n                ;\n}\n.bordershadow-scale-1100 {\n  box-shadow: \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka8) 0px 1px 1px 0px, \n                var(--colors-scale11) 0px 0px 0px 1px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                rgb(64 68 82 / 8%) 0px 2px 5px 0px;\n                ;\n}\n.bordershadow-scale-600 {\n  box-shadow: \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka8) 0px 1px 1px 0px, \n                var(--colors-scale6) 0px 0px 0px 1px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                rgb(64 68 82 / 8%) 0px 2px 5px 0px;\n                ;\n}\n\n.dark,\n.light {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,\n    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,\n    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n}\n\n.dark,\n.light,\n.light .docs-story,\n.dark .docs-story {\n  background-color: var(--colors-scale2);\n  /* background: #181818; */\n}\n\n/* \nhtml {\n\t background: #009688;\n}\n html, body {\n\t height: 100%;\n}\n body {\n\t display: flex;\n\t align-items: center;\n\t justify-content: center;\n} */\n.spin-loader {\n  border-radius: 80%;\n  display: block;\n  height: 20px;\n  width: 20px;\n  position: relative;\n  -webkit-animation: spin 0.675s linear 0s infinite normal;\n          animation: spin 0.675s linear 0s infinite normal;\n  /* background: #26a69a; */\n}\n.spin-loader:before,\n.spin-loader:after {\n  content: '';\n  display: block;\n  position: absolute;\n}\n.spin-loader:before {\n  border-radius: 0 90px 90px 0;\n  height: 20px;\n  width: 50%;\n  top: 0;\n  right: 0;\n  z-index: 1;\n  background: #005041;\n  opacity: 0.5;\n  background-image: linear-gradient(\n    var(--colors-scale1),\n    var(--colors-scale12)\n  );\n}\n.spin-loader:after {\n  border-radius: 80%;\n  height: 16px;\n  width: 16px;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 1;\n  background: #009688;\n}\n@keyframes spin {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.placeholder\\:text-red-600::-webkit-input-placeholder {\n  color: var(--colors-red6);\n}\n.placeholder\\:text-red-600::placeholder {\n  color: var(--colors-red6);\n}\n.first\\:rounded-tl:first-child {\n  border-top-left-radius: 0.25rem;\n}\n.first\\:rounded-tl-md:first-child {\n  border-top-left-radius: 0.375rem;\n}\n.first\\:rounded-tr:first-child {\n  border-top-right-radius: 0.25rem;\n}\n.first\\:rounded-tr-md:first-child {\n  border-top-right-radius: 0.375rem;\n}\n.last\\:rounded-bl:last-child {\n  border-bottom-left-radius: 0.25rem;\n}\n.last\\:rounded-bl-md:last-child {\n  border-bottom-left-radius: 0.375rem;\n}\n.last\\:rounded-br:last-child {\n  border-bottom-right-radius: 0.25rem;\n}\n.last\\:rounded-br-md:last-child {\n  border-bottom-right-radius: 0.375rem;\n}\n.hover\\:z-50:hover {\n  z-index: 50;\n}\n.hover\\:-translate-y-1:hover {\n  --tw-translate-y: -0.25rem;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.hover\\:border-scale-500:hover {\n  border-color: var(--colors-scale5);\n}\n.hover\\:border-scale-700:hover {\n  border-color: var(--colors-scale7);\n}\n.hover\\:border-scale-900:hover {\n  border-color: var(--colors-scale9);\n}\n.hover\\:border-opacity-100:hover {\n  --tw-border-opacity: 1;\n}\n.hover\\:bg-amber-900:hover {\n  background-color: var(--colors-amber9);\n}\n.hover\\:bg-brand-400:hover {\n  background-color: var(--colors-brand4);\n}\n.hover\\:bg-brand-900:hover {\n  background-color: var(--colors-brand9);\n}\n.hover\\:bg-brand-fixed-800:hover {\n  background-color: var(--colors-fixed-brand8);\n}\n.hover\\:bg-green-800:hover {\n  background-color: var(--colors-green8);\n}\n.hover\\:bg-red-900:hover {\n  background-color: var(--colors-red9);\n}\n.hover\\:bg-scale-1100:hover {\n  background-color: var(--colors-scale11);\n}\n.hover\\:bg-scale-200:hover {\n  background-color: var(--colors-scale2);\n}\n.hover\\:bg-scale-300:hover {\n  background-color: var(--colors-scale3);\n}\n.hover\\:bg-scale-500:hover {\n  background-color: var(--colors-scale5);\n}\n.hover\\:bg-scale-700:hover {\n  background-color: var(--colors-scale7);\n}\n.hover\\:text-brand-800:hover {\n  color: var(--colors-brand8);\n}\n.hover\\:text-hi-contrast:hover {\n  color: var(--colors-fixed-scale12);\n}\n.hover\\:text-lo-contrast:hover {\n  color: var(--colors-fixed-scale1);\n}\n.hover\\:text-scale-1100:hover {\n  color: var(--colors-scale11);\n}\n.hover\\:text-scale-1200:hover {\n  color: var(--colors-scale12);\n}\n.hover\\:opacity-100:hover {\n  opacity: 1;\n}\n.hover\\:shadow-2xl:hover {\n  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.hover\\:bordershadow-amber-900:hover {\n  box-shadow: \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka8) 0px 1px 1px 0px, \n                var(--colors-amber9) 0px 0px 0px 1px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                rgb(64 68 82 / 8%) 0px 2px 5px 0px;\n                ;\n}\n.hover\\:bordershadow-brand-fixed-1000:hover {\n  box-shadow: \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka8) 0px 1px 1px 0px, \n                var(--colors-fixed-brand10) 0px 0px 0px 1px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                rgb(64 68 82 / 8%) 0px 2px 5px 0px;\n                ;\n}\n.hover\\:bordershadow-green-800:hover {\n  box-shadow: \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka8) 0px 1px 1px 0px, \n                var(--colors-green8) 0px 0px 0px 1px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                rgb(64 68 82 / 8%) 0px 2px 5px 0px;\n                ;\n}\n.hover\\:bordershadow-red-900:hover {\n  box-shadow: \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka8) 0px 1px 1px 0px, \n                var(--colors-red9) 0px 0px 0px 1px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                rgb(64 68 82 / 8%) 0px 2px 5px 0px;\n                ;\n}\n.hover\\:bordershadow-scale-700:hover {\n  box-shadow: \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka8) 0px 1px 1px 0px, \n                var(--colors-scale7) 0px 0px 0px 1px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                rgb(64 68 82 / 8%) 0px 2px 5px 0px;\n                ;\n}\n.hover\\:bordershadow-scale-900:hover {\n  box-shadow: \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka8) 0px 1px 1px 0px, \n                var(--colors-scale9) 0px 0px 0px 1px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                rgb(64 68 82 / 8%) 0px 2px 5px 0px;\n                ;\n}\n.focus\\:border-scale-900:focus {\n  border-color: var(--colors-scale9);\n}\n.focus\\:bg-scale-300:focus {\n  background-color: var(--colors-scale3);\n}\n.focus\\:text-scale-1200:focus {\n  color: var(--colors-scale12);\n}\n.focus\\:shadow-md:focus {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus\\:outline-4:focus {\n  outline-width: 4px;\n}\n.focus\\:outline-scale-600:focus {\n  outline-color: var(--colors-scale6);\n}\n.focus\\:ring:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-0:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-2:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-brand-400:focus {\n  --tw-ring-color: var(--colors-brand4);\n}\n.focus\\:ring-current:focus {\n  --tw-ring-color: currentColor;\n}\n.focus\\:ring-red-500:focus {\n  --tw-ring-color: var(--colors-red5);\n}\n.focus\\:ring-scale-400:focus {\n  --tw-ring-color: var(--colors-scale4);\n}\n.focus-visible\\:z-10:focus-visible {\n  z-index: 10;\n}\n.focus-visible\\:z-50:focus-visible {\n  z-index: 50;\n}\n.focus-visible\\:border-green-800:focus-visible {\n  border-color: var(--colors-green8);\n}\n.focus-visible\\:border-scale-900:focus-visible {\n  border-color: var(--colors-scale9);\n}\n.focus-visible\\:text-scale-100:focus-visible {\n  color: var(--colors-scale1);\n}\n.focus-visible\\:outline-4:focus-visible {\n  outline-width: 4px;\n}\n.focus-visible\\:outline-offset-1:focus-visible {\n  outline-offset: 1px;\n}\n.focus-visible\\:outline-amber-700:focus-visible {\n  outline-color: var(--colors-amber7);\n}\n.focus-visible\\:outline-brand-600:focus-visible {\n  outline-color: var(--colors-brand6);\n}\n.focus-visible\\:outline-green-600:focus-visible {\n  outline-color: var(--colors-green6);\n}\n.focus-visible\\:outline-red-700:focus-visible {\n  outline-color: var(--colors-red7);\n}\n.focus-visible\\:outline-scale-700:focus-visible {\n  outline-color: var(--colors-scale7);\n}\n.focus-visible\\:ring:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus-visible\\:ring-1:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus-visible\\:ring-scale-700:focus-visible {\n  --tw-ring-color: var(--colors-scale7);\n}\n.group:first-child .group-first\\:rounded-tl-md {\n  border-top-left-radius: 0.375rem;\n}\n.group:first-child .group-first\\:rounded-tr-md {\n  border-top-right-radius: 0.375rem;\n}\n.group:last-child .group-last\\:rounded-bl-md {\n  border-bottom-left-radius: 0.375rem;\n}\n.group:last-child .group-last\\:rounded-br-md {\n  border-bottom-right-radius: 0.375rem;\n}\n.group:hover .group-hover\\:translate-x-1 {\n  --tw-translate-x: 0.25rem;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.group:hover .group-hover\\:-rotate-3 {\n  --tw-rotate: -3deg;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.group:hover .group-hover\\:scale-110 {\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.group:hover .group-hover\\:border-brand-900 {\n  border-color: var(--colors-brand9);\n}\n.group:hover .group-hover\\:border-scale-900 {\n  border-color: var(--colors-scale9);\n}\n.group:hover .group-hover\\:text-scale-1100 {\n  color: var(--colors-scale11);\n}\n.group:hover .group-hover\\:text-scale-1200 {\n  color: var(--colors-scale12);\n}\n.group:focus .group-focus\\:text-scale-1000 {\n  color: var(--colors-scale10);\n}\n[data-state=\"open\"] .data-open-parent\\:rotate-0 {\n  --tw-rotate: 0deg;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n[data-state=\"closed\"] .data-closed-parent\\:rotate-180 {\n  --tw-rotate: 180deg;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@-webkit-keyframes overlayContentShow {\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(0%, -2%) scale(.96);\n            transform: translate(0%, -2%) scale(.96);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0%, 0%) scale(1);\n            transform: translate(0%, 0%) scale(1);\n  }\n}\n@keyframes overlayContentShow {\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(0%, -2%) scale(.96);\n            transform: translate(0%, -2%) scale(.96);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0%, 0%) scale(1);\n            transform: translate(0%, 0%) scale(1);\n  }\n}\n.data-open\\:animate-dropdown-content-show[data-state=\"open\"] {\n  -webkit-animation: overlayContentShow 100ms cubic-bezier(0.16, 1, 0.3, 1);\n          animation: overlayContentShow 100ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n@-webkit-keyframes fadeInOverlayBg {\n\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 0.75;\n  }\n}\n@keyframes fadeInOverlayBg {\n\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 0.75;\n  }\n}\n.data-open\\:animate-fade-in-overlay-bg[data-state=\"open\"] {\n  -webkit-animation: fadeInOverlayBg 300ms;\n          animation: fadeInOverlayBg 300ms;\n}\n@keyframes overlayContentShow {\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(0%, -2%) scale(.96);\n            transform: translate(0%, -2%) scale(.96);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0%, 0%) scale(1);\n            transform: translate(0%, 0%) scale(1);\n  }\n}\n.data-open\\:animate-overlay-show[data-state=\"open\"] {\n  -webkit-animation: overlayContentShow 300ms cubic-bezier(0.16, 1, 0.3, 1);\n          animation: overlayContentShow 300ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n@-webkit-keyframes panelSlideLeftOut {\n\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform: translate-x-0;\n            transform: translate-x-0;\n    opacity: 1;\n  }\n}\n@keyframes panelSlideLeftOut {\n\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform: translate-x-0;\n            transform: translate-x-0;\n    opacity: 1;\n  }\n}\n.data-open\\:animate-panel-slide-left-out[data-state=\"open\"] {\n  -webkit-animation: panelSlideLeftOut 200ms cubic-bezier(0.87, 0, 0.13, 1);\n          animation: panelSlideLeftOut 200ms cubic-bezier(0.87, 0, 0.13, 1);\n}\n@-webkit-keyframes panelSlideRightOut {\n\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform: translate-x-0;\n            transform: translate-x-0;\n    opacity: 1;\n  }\n}\n@keyframes panelSlideRightOut {\n\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform: translate-x-0;\n            transform: translate-x-0;\n    opacity: 1;\n  }\n}\n.data-open\\:animate-panel-slide-right-out[data-state=\"open\"] {\n  -webkit-animation: panelSlideRightOut 200ms cubic-bezier(0.87, 0, 0.13, 1);\n          animation: panelSlideRightOut 200ms cubic-bezier(0.87, 0, 0.13, 1);\n}\n@-webkit-keyframes slideDown {\n\n  0% {\n    height: 0;\n    opacity: 0;\n  }\n\n  100% {\n    height: var(--radix-accordion-content-height);\n    opacity: 1;\n  }\n}\n@keyframes slideDown {\n\n  0% {\n    height: 0;\n    opacity: 0;\n  }\n\n  100% {\n    height: var(--radix-accordion-content-height);\n    opacity: 1;\n  }\n}\n.data-open\\:animate-slide-down[data-state=\"open\"] {\n  -webkit-animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);\n          animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);\n}\n@-webkit-keyframes slideDownNormal {\n\n  0% {\n    height: 0;\n    opacity: 0;\n  }\n\n  100% {\n    height: inherit;\n    opacity: 1;\n  }\n}\n@keyframes slideDownNormal {\n\n  0% {\n    height: 0;\n    opacity: 0;\n  }\n\n  100% {\n    height: inherit;\n    opacity: 1;\n  }\n}\n.data-open\\:animate-slide-down-normal[data-state=\"open\"] {\n  -webkit-animation: slideDownNormal 300ms cubic-bezier(0.87, 0, 0.13, 1);\n          animation: slideDownNormal 300ms cubic-bezier(0.87, 0, 0.13, 1);\n}\n.data-open\\:border-scale-700[data-state=\"open\"] {\n  border-color: var(--colors-scale7);\n}\n.data-open\\:bg-scale-200[data-state=\"open\"] {\n  background-color: var(--colors-scale2);\n}\n.data-open\\:bg-scale-300[data-state=\"open\"] {\n  background-color: var(--colors-scale3);\n}\n.data-open\\:pb-px[data-state=\"open\"] {\n  padding-bottom: 1px;\n}\n.data-open\\:text-scale-1200[data-state=\"open\"] {\n  color: var(--colors-scale12);\n}\n@-webkit-keyframes overlayContentHide {\n\n  0% {\n    opacity: 1;\n    -webkit-transform: translate(0%, 0%) scale(1);\n            transform: translate(0%, 0%) scale(1);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translate(0%, -2%) scale(.96);\n            transform: translate(0%, -2%) scale(.96);\n  }\n}\n@keyframes overlayContentHide {\n\n  0% {\n    opacity: 1;\n    -webkit-transform: translate(0%, 0%) scale(1);\n            transform: translate(0%, 0%) scale(1);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translate(0%, -2%) scale(.96);\n            transform: translate(0%, -2%) scale(.96);\n  }\n}\n.data-closed\\:animate-dropdown-content-hide[data-state=\"closed\"] {\n  -webkit-animation: overlayContentHide 100ms cubic-bezier(0.16, 1, 0.3, 1);\n          animation: overlayContentHide 100ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n@-webkit-keyframes fadeOutOverlayBg {\n\n  0% {\n    opacity: 0.75;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadeOutOverlayBg {\n\n  0% {\n    opacity: 0.75;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n.data-closed\\:animate-fade-out-overlay-bg[data-state=\"closed\"] {\n  -webkit-animation: fadeOutOverlayBg 300ms;\n          animation: fadeOutOverlayBg 300ms;\n}\n@keyframes overlayContentHide {\n\n  0% {\n    opacity: 1;\n    -webkit-transform: translate(0%, 0%) scale(1);\n            transform: translate(0%, 0%) scale(1);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translate(0%, -2%) scale(.96);\n            transform: translate(0%, -2%) scale(.96);\n  }\n}\n.data-closed\\:animate-overlay-hide[data-state=\"closed\"] {\n  -webkit-animation: overlayContentHide 300ms cubic-bezier(0.16, 1, 0.3, 1);\n          animation: overlayContentHide 300ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n@-webkit-keyframes panelSlideLeftIn {\n\n  0% {\n    -webkit-transform: translate-x-0;\n            transform: translate-x-0;\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    opacity: 0;\n  }\n}\n@keyframes panelSlideLeftIn {\n\n  0% {\n    -webkit-transform: translate-x-0;\n            transform: translate-x-0;\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    opacity: 0;\n  }\n}\n.data-closed\\:animate-panel-slide-left-in[data-state=\"closed\"] {\n  -webkit-animation: panelSlideLeftIn 250ms cubic-bezier(0.87, 0, 0.13, 1);\n          animation: panelSlideLeftIn 250ms cubic-bezier(0.87, 0, 0.13, 1);\n}\n@-webkit-keyframes panelSlideRightIn {\n\n  0% {\n    -webkit-transform: translate-x-0;\n            transform: translate-x-0;\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0;\n  }\n}\n@keyframes panelSlideRightIn {\n\n  0% {\n    -webkit-transform: translate-x-0;\n            transform: translate-x-0;\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0;\n  }\n}\n.data-closed\\:animate-panel-slide-right-in[data-state=\"closed\"] {\n  -webkit-animation: panelSlideRightIn 250ms cubic-bezier(0.87, 0, 0.13, 1);\n          animation: panelSlideRightIn 250ms cubic-bezier(0.87, 0, 0.13, 1);\n}\n@-webkit-keyframes slideUp {\n\n  0% {\n    height: var(--radix-accordion-content-height);\n    opacity: 1;\n  }\n\n  100% {\n    height: 0;\n    opacity: 0;\n  }\n}\n@keyframes slideUp {\n\n  0% {\n    height: var(--radix-accordion-content-height);\n    opacity: 1;\n  }\n\n  100% {\n    height: 0;\n    opacity: 0;\n  }\n}\n.data-closed\\:animate-slide-up[data-state=\"closed\"] {\n  -webkit-animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);\n          animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);\n}\n@-webkit-keyframes slideUpNormal {\n\n  0% {\n    height: inherit;\n    opacity: 1;\n  }\n\n  100% {\n    height: 0;\n    opacity: 0;\n  }\n}\n@keyframes slideUpNormal {\n\n  0% {\n    height: inherit;\n    opacity: 1;\n  }\n\n  100% {\n    height: 0;\n    opacity: 0;\n  }\n}\n.data-closed\\:animate-slide-up-normal[data-state=\"closed\"] {\n  -webkit-animation: slideUpNormal 300ms cubic-bezier(0.87, 0, 0.13, 1);\n          animation: slideUpNormal 300ms cubic-bezier(0.87, 0, 0.13, 1);\n}\n.data-closed\\:opacity-0[data-state=\"closed\"] {\n  opacity: 0;\n}\n.data-show\\:mt-2[data-state=\"show\"] {\n  margin-top: 0.5rem;\n}\n@keyframes slideDownNormal {\n\n  0% {\n    height: 0;\n    opacity: 0;\n  }\n\n  100% {\n    height: inherit;\n    opacity: 1;\n  }\n}\n.data-show\\:animate-slide-down-normal[data-state=\"show\"] {\n  -webkit-animation: slideDownNormal 300ms cubic-bezier(0.87, 0, 0.13, 1);\n          animation: slideDownNormal 300ms cubic-bezier(0.87, 0, 0.13, 1);\n}\n@keyframes slideUpNormal {\n\n  0% {\n    height: inherit;\n    opacity: 1;\n  }\n\n  100% {\n    height: 0;\n    opacity: 0;\n  }\n}\n.data-hide\\:animate-slide-up-normal[data-state=\"hide\"] {\n  -webkit-animation: slideUpNormal 300ms cubic-bezier(0.87, 0, 0.13, 1);\n          animation: slideUpNormal 300ms cubic-bezier(0.87, 0, 0.13, 1);\n}\n.data-checked\\:text-scale-1200[data-state=\"checked\"] {\n  color: var(--colors-scale12);\n}\n.aria-expanded\\:border-scale-900[aria-expanded=\"true\"] {\n  border-color: var(--colors-scale9);\n}\n.aria-expanded\\:ring-2[aria-expanded=\"true\"] {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.aria-expanded\\:ring-scale-400[aria-expanded=\"true\"] {\n  --tw-ring-color: var(--colors-scale4);\n}\n:is(.dark .dark\\:border-dark-500) {\n  --tw-border-opacity: 1;\n  border-color: rgb(68 68 68 / var(--tw-border-opacity));\n}\n:is(.dark .dark\\:border-gray-600) {\n  border-color: var(--colors-gray6);\n}\n:is(.dark .dark\\:border-scale-300) {\n  border-color: var(--colors-scale3);\n}\n:is(.dark .dark\\:border-scale-500) {\n  border-color: var(--colors-scale5);\n}\n:is(.dark .dark\\:border-scale-700) {\n  border-color: var(--colors-scale7);\n}\n:is(.dark .dark\\:border-scale-900) {\n  border-color: var(--colors-scale9);\n}\n:is(.dark .dark\\:border-opacity-100) {\n  --tw-border-opacity: 1;\n}\n:is(.dark .dark\\:border-opacity-50) {\n  --tw-border-opacity: 0.5;\n}\n:is(.dark .dark\\:bg-amber-100) {\n  background-color: var(--colors-amber1);\n}\n:is(.dark .dark\\:bg-blue-100) {\n  background-color: var(--colors-blue1);\n}\n:is(.dark .dark\\:bg-brand-100) {\n  background-color: var(--colors-brand1);\n}\n:is(.dark .dark\\:bg-dark-500) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(68 68 68 / var(--tw-bg-opacity));\n}\n:is(.dark .dark\\:bg-dark-600) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(42 42 42 / var(--tw-bg-opacity));\n}\n:is(.dark .dark\\:bg-red-100) {\n  background-color: var(--colors-red1);\n}\n:is(.dark .dark\\:bg-scale-100) {\n  background-color: var(--colors-scale1);\n}\n:is(.dark .dark\\:bg-scale-200) {\n  background-color: var(--colors-scale2);\n}\n:is(.dark .dark\\:bg-scale-300) {\n  background-color: var(--colors-scale3);\n}\n:is(.dark .dark\\:bg-scale-400) {\n  background-color: var(--colors-scale4);\n}\n:is(.dark .dark\\:bg-scale-500) {\n  background-color: var(--colors-scale5);\n}\n:is(.dark .dark\\:bg-scale-600) {\n  background-color: var(--colors-scale6);\n}\n:is(.dark .dark\\:bg-scale-900) {\n  background-color: var(--colors-scale9);\n}\n:is(.dark .dark\\:bg-white) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n:is(.dark .dark\\:bg-opacity-0) {\n  --tw-bg-opacity: 0;\n}\n:is(.dark .dark\\:text-gray-200) {\n  color: var(--colors-gray2);\n}\n:is(.dark .dark\\:text-gray-300) {\n  color: var(--colors-gray3);\n}\n:is(.dark .dark\\:text-gray-400) {\n  color: var(--colors-gray4);\n}\n:is(.dark .dark\\:text-green-500) {\n  color: var(--colors-green5);\n}\n:is(.dark .dark\\:text-red-500) {\n  color: var(--colors-red5);\n}\n:is(.dark .dark\\:text-white) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n:is(.dark .dark\\:text-yellow-500) {\n  color: var(--colors-yellow5);\n}\n:is(.dark .dark\\:bordershadow-green-700) {\n  box-shadow: \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka8) 0px 1px 1px 0px, \n                var(--colors-green7) 0px 0px 0px 1px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                rgb(64 68 82 / 8%) 0px 2px 5px 0px;\n                ;\n}\n:is(.dark .dark\\:bordershadow-scale-800) {\n  box-shadow: \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka8) 0px 1px 1px 0px, \n                var(--colors-scale8) 0px 0px 0px 1px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                rgb(64 68 82 / 8%) 0px 2px 5px 0px;\n                ;\n}\n:is(.dark .dark\\:hover\\:border-scale-500:hover) {\n  border-color: var(--colors-scale5);\n}\n:is(.dark .dark\\:hover\\:border-scale-700:hover) {\n  border-color: var(--colors-scale7);\n}\n:is(.dark .hover\\:dark\\:border-scale-700):hover {\n  border-color: var(--colors-scale7);\n}\n:is(.dark .dark\\:hover\\:border-opacity-100:hover) {\n  --tw-border-opacity: 1;\n}\n:is(.dark .dark\\:hover\\:bg-scale-500:hover) {\n  background-color: var(--colors-scale5);\n}\n:is(.dark .hover\\:dark\\:bordershadow-green-800):hover {\n  box-shadow: \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka8) 0px 1px 1px 0px, \n                var(--colors-green8) 0px 0px 0px 1px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                rgb(64 68 82 / 8%) 0px 2px 5px 0px;\n                ;\n}\n:is(.dark .hover\\:dark\\:bordershadow-scale-800):hover {\n  box-shadow: \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka8) 0px 1px 1px 0px, \n                var(--colors-scale8) 0px 0px 0px 1px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                rgb(64 68 82 / 8%) 0px 2px 5px 0px;\n                ;\n}\n:is(.dark .hover\\:dark\\:bordershadow-scale-900):hover {\n  box-shadow: \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka8) 0px 1px 1px 0px, \n                var(--colors-scale9) 0px 0px 0px 1px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                var(--colors-blacka1) 0px 0px 0px 0px, \n                rgb(64 68 82 / 8%) 0px 2px 5px 0px;\n                ;\n}\n:is(.dark .dark\\:focus\\:bg-scale-500:focus) {\n  background-color: var(--colors-scale5);\n}\n:is(.dark .dark\\:data-open\\:bg-scale-500[data-state=\"open\"]) {\n  background-color: var(--colors-scale5);\n}\n@media (min-width: 640px) {\n\n  .sm\\:w-full {\n    width: 100%;\n  }\n\n  .sm\\:max-w-lg {\n    max-width: 32rem;\n  }\n\n  .sm\\:max-w-sm {\n    max-width: 24rem;\n  }\n\n  .sm\\:max-w-xs {\n    max-width: 20rem;\n  }\n\n  .sm\\:px-5 {\n    padding-left: 1.25rem;\n    padding-right: 1.25rem;\n  }\n\n  .sm\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .sm\\:align-middle {\n    vertical-align: middle;\n  }\n\n  .sm\\:text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n}\n@media (min-width: 768px) {\n\n  .md\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .md\\:grid {\n    display: grid;\n  }\n\n  .md\\:grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n\n  .md\\:gap-x-4 {\n    -webkit-column-gap: 1rem;\n            column-gap: 1rem;\n  }\n}\n",
          '',
        ]),
          (module.exports = exports)
      },
    './.storybook/preview.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: function () {
            return __namedExportsOrder
          },
          decorators: function () {
            return decorators
          },
          parameters: function () {
            return parameters
          },
        })
      __webpack_require__('./.storybook/preview.css')
      var _src_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/theme/provider.tsx'
        ),
        _src_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './src/theme/default.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__('../../node_modules/react/index.js'),
          __webpack_require__('../../node_modules/react/jsx-runtime.js'))
      const parameters = {
          actions: { argTypesRegex: '^on[A-Z].*' },
          darkMode: {
            darkClass: 'dark',
            lightClass: 'light',
            stylePreview: !0,
          },
        },
        decorators = [
          (Story) =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _src_theme__WEBPACK_IMPORTED_MODULE_3__.f,
              {
                theme: _src_theme__WEBPACK_IMPORTED_MODULE_4__.Z,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story, {}),
              }
            ),
        ],
        __namedExportsOrder = ['parameters', 'decorators']
    },
    './src/theme/default.ts': function (
      __unused_webpack_module,
      __webpack_exports__
    ) {
      'use strict'
      const defaults_border = {
          brand: 'border-brand-600',
          primary: 'border-scale-700',
          secondary: 'border-scale-400',
          alternative: 'border-scale-600 dark:border-scaleDark-200',
        },
        defaults_placeholder = 'placeholder-scale-800',
        defaults_focus =
          '\n    outline-none\n    focus:ring-current focus:ring-2\n  ',
        defaults_focus_visible =
          '\n    outline-none\n    transition-all\n    outline-0\n    focus-visible:outline-4\n    focus-visible:outline-offset-1\n  ',
        defaults_size = {
          text: {
            tiny: 'text-xs',
            small: 'text-sm leading-4',
            medium: 'text-sm',
            large: 'text-base',
            xlarge: 'text-base',
          },
          padding: {
            tiny: 'px-2.5 py-1',
            small: 'px-3 py-2',
            medium: 'px-4 py-2',
            large: 'px-4 py-2',
            xlarge: 'px-6 py-3',
          },
        },
        default__padding_and_text = {
          tiny: `${defaults_size.text.tiny} ${defaults_size.padding.tiny}`,
          small: `${defaults_size.text.small} ${defaults_size.padding.small}`,
          medium: `${defaults_size.text.medium} ${defaults_size.padding.medium}`,
          large: `${defaults_size.text.large} ${defaults_size.padding.large}`,
          xlarge: `${defaults_size.text.xlarge} ${defaults_size.padding.xlarge}`,
        },
        defaultTheme = {
          accordion: {
            variants: {
              default: {
                base: '\n          flex flex-col\n          space-y-3\n        ',
                container:
                  '\n          group\n          first:rounded-tl-md first:rounded-tr-md\n          last:rounded-bl-md last:rounded-br-md\n          overflow-hidden\n        ',
                trigger:
                  '\n          flex flex-row\n          gap-3\n          items-center\n          w-full \n          text-left \n          cursor-pointer \n\n          outline-none\n          focus-visible:ring-1\n          focus-visible:z-50\n          ring-scale-1100\n        ',
                content:
                  '\n          data-open:animate-slide-down\n          data-closed:animate-slide-up\n        ',
                panel: '\n          py-3\n        ',
              },
              bordered: {
                base: '\n          flex flex-col\n          -space-y-px\n        ',
                container:
                  '\n          group\n          border\n          border-scale-700\n          \n          first:rounded-tl-md first:rounded-tr-md\n          last:rounded-bl-md last:rounded-br-md\n        ',
                trigger:
                  '\n          flex flex-row\n          items-center\n          px-6 py-4 \n          w-full \n          text-left \n          cursor-pointer \n          \n          font-medium \n          text-base \n          bg-transparent \n\n          outline-none\n          focus-visible:ring-1\n          focus-visible:z-50\n          ring-scale-1100\n          \n          transition-colors\n          hover:bg-scale-200\n\n          overflow-hidden\n\n          group-first:rounded-tl-md group-first:rounded-tr-md\n          group-last:rounded-bl-md group-last:rounded-br-md\n        ',
                content:
                  '\n          data-open:animate-slide-down\n          data-closed:animate-slide-up\n        ',
                panel:
                  '\n          px-6 py-3\n          border-t border-scale-700\n          bg-scale-200\n        ',
              },
            },
            justified: 'justify-between',
            chevron: {
              base: '\n        text-scale-900\n        rotate-0 group-state-open:rotate-180\n        duration-200\n      ',
              align: { left: 'order-first', right: 'order-last' },
            },
            animate: {
              enter:
                'transition-max-height ease-in-out duration-700 overflow-hidden',
              enterFrom: 'max-h-0',
              enterTo: 'max-h-screen',
              leave:
                'transition-max-height ease-in-out duration-300 overflow-hidden',
              leaveFrom: 'max-h-screen',
              leaveTo: 'max-h-0',
            },
          },
          badge: {
            base: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-opacity-10',
            size: { large: 'px-3 py-0.5 rounded-full text-sm' },
            dot: '-ml-0.5 mr-1.5 h-2 w-2 rounded-full',
            color: {
              brand: 'bg-brand-200 text-brand-1100 border border-brand-700',
              scale: 'bg-scale-200 text-scale-1100 border border-scale-700',
              tomato: 'bg-tomato-200 text-tomato-1100 border border-tomato-700',
              red: 'bg-red-200 text-red-1100 border border-red-700',
              crimson:
                'bg-crimson-200 text-crimson-1100 border border-crimson-700',
              pink: 'bg-pink-200 text-pink-1100 border border-pink-700',
              plum: 'bg-plum-200 text-plum-1100 border border-plum-700',
              purple: 'bg-purple-200 text-purple-1100 border border-purple-700',
              violet: 'bg-violet-200 text-violet-1100 border border-violet-700',
              indigo: 'bg-indigo-200 text-indigo-1100 border border-indigo-700',
              blue: 'bg-blue-200 text-blue-1100 border border-blue-700',
              cyan: 'bg-cyan-200 text-cyan-1100 border border-cyan-700',
              teal: 'bg-teal-200 text-teal-1100 border border-teal-700',
              green: 'bg-green-200 text-green-1100 border border-green-700',
              grass: 'bg-grass-200 text-grass-1100 border border-grass-700',
              brown: 'bg-brown-200 text-brown-1100 border border-brown-700',
              orange: 'bg-orange-200 text-orange-1100 border border-orange-700',
              sky: 'bg-sky-200 text-sky-1100 border border-sky-700',
              mint: 'bg-mint-200 text-mint-1100 border border-mint-700',
              lime: 'bg-lime-200 text-lime-1100 border border-lime-700',
              yellow: 'bg-yellow-200 text-yellow-1100 border border-yellow-700',
              amber: 'bg-amber-200 text-amber-1100 border border-amber-700',
              gold: 'bg-gold-200 text-gold-1100 border border-gold-700',
              bronze: 'bg-bronze-200 text-bronze-1100 border border-bronze-700',
              gray: 'bg-gray-200 text-gray-1100 border border-gray-700',
              mauve: 'bg-mauve-200 text-mauve-1100 border border-mauve-700',
              slate: 'bg-slate-200 text-slate-1100 border border-slate-700',
              sage: 'bg-sage-200 text-sage-1100 border border-sage-700',
              olive: 'bg-olive-200 text-olive-1100 border border-olive-700',
              sand: 'bg-sand-200 text-sand-1100 border border-sand-700',
            },
          },
          alert: {
            base: '\n      relative rounded border py-4 px-6 \n      flex space-x-4 items-start \n    ',
            header: 'block text-sm font-normal mb-1',
            description: 'text-xs',
            variant: {
              danger: {
                base: 'bg-red-200 dark:bg-red-100 btext-red-1200 border-red-700',
                icon: 'text-red-900',
                header: 'text-red-1200',
                description: 'text-red-1100',
              },
              warning: {
                base: 'bg-amber-200 dark:bg-amber-100 border-amber-700',
                icon: 'text-amber-900',
                header: 'text-amber-1200',
                description: 'text-amber-1100',
              },
              info: {
                base: 'bg-blue-200 dark:bg-blue-100 border-blue-700',
                icon: 'text-blue-900',
                header: 'text-blue-1200',
                description: 'text-blue-1100',
              },
              success: {
                base: 'bg-brand-300 dark:bg-brand-100 border-brand-700',
                icon: 'text-brand-900',
                header: 'text-brand-1200',
                description: 'text-brand-1100',
              },
              neutral: {
                base: 'bg-scale-300 dark:bg-scale-300 border-scale-500',
                icon: 'text-scale-900',
                header: 'text-scale-1200',
                description: 'text-scale-1100',
              },
            },
            close:
              '\n      absolute \n      right-6 top-4 \n      p-0 m-0 \n      text-scale-900\n      cursor-pointer transition ease-in-out \n      bg-transparent border-transparent focus:outline-none\n      opacity-50 hover:opacity-100',
          },
          card: {
            base: `\n      bg-white dark:bg-scaleDark-700\n      \n      border\n      ${defaults_border.primary} \n\n      flex flex-col \n      rounded-md shadow-lg overflow-hidden relative\n    `,
            hoverable: 'transition hover:-translate-y-1 hover:shadow-2xl',
            head: `px-8 py-6 flex justify-between \n    border-b\n      ${defaults_border.primary} `,
            content: 'p-8',
          },
          tabs: {
            base: 'w-full justify-between space-y-4',
            underlined: {
              list: `\n        flex items-center border-b \n        ${defaults_border.secondary}\n        `,
              base: ' \n        relative \n        cursor-pointer \n        text-scale-900 \n        flex \n        items-center \n        space-x-2\n        text-center \n        transition\n        focus:outline-none \n        focus-visible:ring \n        focus-visible:ring-scale-700\n        focus-visible:border-scale-900\n      ',
              inactive: '\n        hover:text-scale-1200\n      ',
              active:
                '\n        text-scale-1200\n        border-b-2 border-scale-1200\n      ',
            },
            pills: {
              list: 'flex space-x-1',
              base: ' \n        relative \n        cursor-pointer \n        flex \n        items-center \n        space-x-2\n        text-center \n        transition\n        shadow-sm\n        rounded\n        focus:outline-none \n        focus-visible:ring \n        focus-visible:ring-scale-700\n        focus-visible:border-scale-900\n        ',
              inactive:
                '\n        bg-scale-200\n        border border-scale-700 hover:border-scale-900\n        text-scale-900 hover:text-scale-1200\n      ',
              active:
                '\n        bg-scale-1200\n        text-scale-200\n        border-scale-1200 \n      ',
            },
            block: 'w-full flex items-center justify-center',
            size: { ...default__padding_and_text },
            scrollable:
              'overflow-auto whitespace-nowrap no-scrollbar mask-fadeout-right',
            content: 'focus:outline-none focus:ring text-scale-900',
          },
          button: {
            base: `\n      relative \n      cursor-pointer \n      inline-flex items-center space-x-2 \n      text-center \n      font-regular\n      transition ease-out duration-200 \n      rounded \n      ${defaults_focus_visible}\n      \n    `,
            label: 'truncate',
            container: 'inline-flex font-medium',
            type: {
              primary:
                '\n        bg-brand-fixed-900 hover:bg-brand-fixed-800\n        text-lo-contrast\n        bordershadow-brand-fixed-800 hover:bordershadow-brand-fixed-1000\n        focus-visible:outline-brand-600\n      ',
              secondary:
                '\n        bg-scale-1200 text-scale-200 hover:bg-scale-1100\n        focus-visible:text-scale-100 \n        bordershadow-scale-1100 hover:bordershadow-scale-900\n        focus-visible:outline-brand-600\n      ',
              default:
                '\n        text-scale-1100 \n        border \n        box-border\n        shadow-sm\n        bg-scale-100 hover:bg-scale-300\n        border-scale-600\n        hover:dark:bordershadow-scale-800\n        focus-visible:outline-brand-600\n      ',
              alternative:
                '\n        text-white\n        bg-green-900 hover:bg-green-800\n        bordershadow-green-600 hover:bordershadow-green-800\n        dark:bordershadow-green-700 hover:dark:bordershadow-green-800\n        focus-visible:border-green-800\n        focus-visible:outline-green-600\n      ',
              outline:
                '\n        text-scale-1100 \n        bg-transparent \n        bordershadow-scale-600 hover:bordershadow-scale-700\n        dark:bordershadow-scale-800 hover:dark:bordershadow-scale-900\n        focus-visible:outline-scale-700\n      ',
              dashed:
                '\n        text-scale-1100 \n        border\n        border-dashed\n        border-scale-700 hover:border-scale-900\n        bg-transparent\n        focus-visible:outline-scale-700\n      ',
              link: '\n        text-brand-1100\n        border\n        border-transparent\n        hover:bg-brand-400\n        border-opacity-0\n        bg-opacity-0 dark:bg-opacity-0\n        shadow-none\n        focus-visible:outline-scale-700\n      ',
              text: '\n        text-scale-1100 \n        hover:bg-scale-500\n        shadow-none\n        focus-visible:outline-scale-700\n      ',
              danger:
                '\n        text-red-1100\n        bg-red-300\n        bordershadow-red-700 hover:bordershadow-red-900\n        hover:bg-red-900\n        hover:text-lo-contrast\n        focus-visible:outline-red-700\n      ',
              warning:
                '\n        text-amber-1100\n        bg-amber-300\n        bordershadow-amber-700 hover:bordershadow-amber-900\n        hover:bg-amber-900\n        hover:text-hi-contrast\n        focus-visible:outline-amber-700\n      ',
            },
            block: 'w-full flex items-center justify-center',
            shadow: 'shadow-sm',
            size: { ...default__padding_and_text },
            loading: 'animate-spin',
            disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
          },
          input: {
            base: `\n      block \n      box-border \n      w-full \n      rounded-md \n      shadow-sm \n      transition-all\n      text-scale-1200  \n      border\n      focus:shadow-md\n      ${defaults_focus}\n      focus:border-scale-900\n      focus:ring-scale-400\n      ${defaults_placeholder}\n    `,
            variants: {
              standard:
                '\n        bg-scaleA-200\n        border border-scale-700\n        ',
              error:
                '\n        bg-red-100\n        border border-red-700 \n        focus:ring-red-500\n        placeholder:text-red-600\n       ',
            },
            container: 'relative',
            with_icon: 'pl-10',
            size: { ...default__padding_and_text },
            disabled: 'opacity-50',
            actions_container:
              'absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center',
            textarea_actions_container:
              'absolute inset-y-1.5 right-0 pl-3 pr-1 flex space-x-1 items-start',
            textarea_actions_container_items: 'flex items-center',
          },
          select: {
            base: `\n      block \n      box-border \n      w-full \n      rounded-md \n      shadow-sm \n      transition-all\n      text-scale-1200  \n      border\n      focus:shadow-md\n      ${defaults_focus}\n      focus:border-scale-900\n      focus:ring-scale-400\n      ${defaults_placeholder}\n\n      appearance-none\n      bg-none\n    `,
            variants: {
              standard:
                '\n        bg-scaleA-200\n        border border-scale-700\n        ',
              error:
                '\n        bg-red-100\n        border border-red-700 \n        focus:ring-red-500\n        placeholder:text-red-600\n       ',
            },
            container: 'relative',
            with_icon: 'pl-10',
            size: { ...default__padding_and_text },
            disabled: 'opacity-50',
            actions_container:
              'absolute inset-y-0 right-0 pl-3 pr-1 mr-5 flex items-center',
            chevron_container:
              'absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none',
            chevron: 'h-5 w-5 text-scale-600',
          },
          inputNumber: {
            base: `\n      block\n      box-border \n      w-full \n      rounded-md \n      shadow-sm \n      transition-all\n      text-scale-1200  \n      border\n      focus:shadow-md\n      ${defaults_focus}\n      focus:border-scale-900\n      focus:ring-scale-400\n      ${defaults_placeholder}\n\n      appearance-none\n      bg-none\n    `,
            variants: {
              standard:
                '\n        bg-scaleA-200\n        border border-scale-700\n      ',
              error:
                '\n        bg-red-100\n        border border-red-700 \n        focus:ring-red-500\n        placeholder:text-red-600\n       ',
            },
            disabled: 'opacity-50',
            container: 'relative',
            with_icon: 'pl-10',
            size: { ...default__padding_and_text },
            actions_container:
              'absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center',
          },
          checkbox: {
            base: `\n      bg-transparent \n      ${defaults_focus}\n      focus:ring-scale-400\n      text-brand-900 \n      border-scale-700 \n      shadow-sm\n      rounded\n      cursor-pointer\n    `,
            container: 'flex cursor-pointer leading-none',
            size: {
              tiny: 'h-3 w-3 mt-1 mr-3',
              small: 'h-3.5 w-3.5 mt-0.5 mr-3.5',
              medium: 'h-4 w-4 mt-0.5 mr-3.5',
              large: 'h-5 w-5 mt-0.5 mr-4',
              xlarge: 'h-5 w-5 mt-0.5 mr-4',
            },
            disabled: 'opacity-50',
            label: {
              base: 'text-scale-1100 cursor-pointer',
              ...defaults_size.text,
            },
            label_before: { base: 'text-scale-500', ...defaults_size.text },
            label_after: { base: 'text-scale-500', ...defaults_size.text },
            description: { base: 'text-scale-900', ...defaults_size.text },
            group: 'space-y-3',
          },
          radio: {
            base: `\n      absolute\n      ${defaults_focus}\n      focus:ring-brand-400\n      border-scale-700\n      \n      text-brand-900\n      shadow-sm\n      cursor-pointer\n      peer\n\n      bg-scale-300\n    `,
            hidden: 'absolute opacity-0',
            size: {
              tiny: 'h-3 w-3',
              small: 'h-3.5 w-3.5',
              medium: 'h-4 w-4',
              large: 'h-5 w-5',
              xlarge: 'h-5 w-5',
            },
            variants: {
              cards: {
                container: {
                  base: 'relative cursor-pointer flex',
                  align: {
                    vertical: 'flex flex-col space-y-1',
                    horizontal: 'flex flex-row space-x-2',
                  },
                },
                group: '-space-y-px shadow-sm',
                base: '\n          transition\n          border\n          first:rounded-tl-md first:rounded-tr-md\n          last:rounded-bl-md last:rounded-br-md\n        ',
                size: {
                  tiny: 'px-5 py-3',
                  small: 'px-6 py-4',
                  medium: 'px-6 py-4',
                  large: 'px-8 p-4',
                  xlarge: 'px-8 p-4',
                },
                inactive:
                  '\n          bg-scale-100 dark:bg-scale-400\n          border-scale-500 dark:border-scale-500\n          hover:border-scale-700 hover:dark:border-scale-700\n          hover:bg-scale-200 dark:hover:bg-scale-500\n        ',
                active:
                  '\n          bg-scale-300 dark:bg-scale-600 z-10\n          border-scale-900 dark:border-scale-900 \n          border-1\n        ',
                radio_offset: 'left-4',
              },
              'stacked-cards': {
                container: {
                  base: 'relative cursor-pointer flex items-center justify-between',
                  align: {
                    vertical: 'flex flex-col space-y-1',
                    horizontal: 'flex flex-row space-x-2',
                  },
                },
                group: 'space-y-3',
                base: '\n          transition\n          rounded-md\n          border\n          shadow-sm \n        ',
                size: {
                  tiny: 'px-5 py-3',
                  small: 'px-6 py-4',
                  medium: 'px-6 py-4',
                  large: 'px-8 p-4',
                  xlarge: 'px-8 p-4',
                },
                inactive:
                  '\n          bg-scale-100 dark:bg-scale-400\n          border-scale-500 dark:border-scale-500\n          hover:border-scale-700 hover:dark:border-scale-700\n          hover:bg-scale-200 dark:hover:bg-scale-500\n        ',
                active:
                  '\n          bg-scale-300 dark:bg-scale-600 z-10\n          border-scale-900 dark:border-scale-900 \n          border-1\n        ',
                radio_offset: 'left-4',
              },
              'small-cards': {
                container: {
                  base: 'relative cursor-pointer flex',
                  align: {
                    vertical:
                      'flex flex-col space-y-1 items-center justify-center',
                    horizontal: 'flex flex-row space-x-2',
                  },
                },
                group: 'flex flex-row gap-3',
                base: '\n          transition \n          border\n          rounded-lg \n          grow\n          items-center\n          flex-wrap\n          justify-center\n          shadow-sm\n        ',
                size: {
                  tiny: 'px-5 py-3',
                  small: 'px-6 py-4',
                  medium: 'px-6 py-4',
                  large: 'px-8 p-4',
                  xlarge: 'px-8 p-4',
                },
                inactive:
                  '\n          bg-scale-100 dark:bg-scale-400\n          border-scale-500 dark:border-scale-500\n          hover:border-scale-700 hover:dark:border-scale-700\n          hover:bg-scale-200 dark:hover:bg-scale-500\n        ',
                active:
                  '\n          bg-scale-300 dark:bg-scale-500 z-10\n          border-scale-900 dark:border-scale-900 border-1\n        ',
                radio_offset: 'left-4',
              },
              'large-cards': {
                container: {
                  base: 'relative cursor-pointer flex',
                  align: {
                    vertical: 'flex flex-col space-y-1',
                    horizontal: 'flex flex-row space-x-2',
                  },
                },
                group: 'flex flex-row gap-3',
                base: '\n          transition \n          border border-scale-700 hover:border-scale-900 \n          shadow-sm\n          rounded-lg \n          grow\n        ',
                size: {
                  tiny: 'px-5 py-3',
                  small: 'px-6 py-4',
                  medium: 'px-6 py-4',
                  large: 'px-8 p-4',
                  xlarge: 'px-8 p-4',
                },
                inactive:
                  '\n          bg-scale-100 dark:bg-scale-400\n          border-scale-500 dark:border-scale-500\n          hover:border-scale-700 hover:dark:border-scale-700\n          hover:bg-scale-200 dark:hover:bg-scale-500\n        ',
                active:
                  '\n          bg-scale-300 dark:bg-scale-600 z-10\n          border-scale-900 dark:border-scale-900 \n          border-1\n        ',
                radio_offset: 'left-4',
              },
              list: {
                container: {
                  base: 'relative cursor-pointer flex',
                  size: {
                    tiny: 'pl-6',
                    small: 'pl-6',
                    medium: 'pl-7',
                    large: 'pl-10',
                    xlarge: 'pl-10',
                  },
                  align: {
                    vertical: 'flex flex-col space-y-1',
                    horizontal: 'flex flex-row space-x-2',
                  },
                },
                group: 'space-y-4',
                base: '',
                size: {
                  tiny: '0',
                  small: '0',
                  medium: '0',
                  large: '0',
                  xlarge: '0',
                },
                active: '',
                radio_offset: 'left-0',
              },
            },
            label: {
              base: 'text-scale-1100 cursor-pointer',
              ...defaults_size.text,
            },
            label_before: { base: 'text-scale-500', ...defaults_size.text },
            label_after: { base: 'text-scale-500', ...defaults_size.text },
            description: { base: 'text-scale-900', ...defaults_size.text },
            optionalLabel: { base: 'text-scale-900', ...defaults_size.text },
            disabled: 'opacity-50 cursor-auto border-dashed',
          },
          sidepanel: {
            base: '\n      bg-scale-100 dark:bg-scale-300\n      flex flex-col \n      fixed \n      inset-y-0 \n      max-w-full \n      h-screen\n      border-l border-overlay-border\n      shadow-xl\n    ',
            header:
              '\n      space-y-1 py-4 px-4 bg-overlay-bg sm:px-6 \n      border-b border-overlay-border\n    ',
            contents:
              '\n      relative \n      flex-1 \n      overflow-y-auto\n    ',
            content: '\n      px-4 sm:px-6\n    ',
            footer:
              '\n      flex justify-end gap-2\n      p-4 bg-overlay-bg\n      border-t border-overlay-border\n    ',
            size: {
              medium: 'w-screen max-w-md h-full',
              large: 'w-screen max-w-2xl h-full',
            },
            align: {
              left: '\n        left-0\n        data-open:animate-panel-slide-left-out \n        data-closed:animate-panel-slide-left-in\n      ',
              right:
                '\n        right-0\n        data-open:animate-panel-slide-right-out \n        data-closed:animate-panel-slide-right-in\n      ',
            },
            seperator:
              '\n      w-full\n      h-px\n      my-2\n      bg-scale-300 dark:bg-scale-500\n    ',
            overlay:
              '\n      fixed\n      bg-scale-300\n      dark:bg-scale-100\n      h-full w-full\n      left-0\n      top-0 \n      opacity-75\n      data-closed:animate-fade-out-overlay-bg \n      data-open:animate-fade-in-overlay-bg\n    ',
            trigger:
              '\n      border-none bg-transparent p-0 focus:ring-0\n    ',
          },
          toggle: {
            base: `\n      p-0 relative \n      inline-flex flex-shrink-0 \n      border-2 border-transparent \n      rounded-full \n      cursor-pointer\n      transition-colors ease-in-out duration-200\n      ${defaults_focus}\n      focus:ring-scale-400\n      bg-scale-500\n\n      hover:bg-scale-700\n    `,
            active:
              '\n      bg-brand-900    \n      hover:bg-brand-900    \n    ',
            handle_container: {
              tiny: 'h-4 w-7',
              small: 'h-6 w-11',
              medium: 'h-6 w-11',
              large: 'h-7 w-12',
              xlarge: 'h-7 w-12',
            },
            handle: {
              base: '\n        inline-block h-5 w-5 \n        rounded-full \n        bg-scale-100\n        dark:bg-scale-900\n        shadow ring-0 \n        transition \n        ease-in-out duration-200\n      ',
              tiny: 'h-3 w-3',
              small: 'h-5 w-5',
              medium: 'h-5 w-5',
              large: 'h-6 w-6',
              xlarge: 'h-6 w-6',
            },
            handle_active: {
              tiny: ' translate-x-3 dark:bg-white',
              small: 'translate-x-5 dark:bg-white',
              medium: 'translate-x-5 dark:bg-white',
              large: 'translate-x-5 dark:bg-white',
              xlarge: 'translate-x-5 dark:bg-white',
            },
            disabled: 'opacity-75 cursor-not-allowed',
          },
          form_layout: {
            container: 'grid gap-2',
            flex: {
              left: {
                base: 'flex flex-row gap-6',
                content: '',
                labels: 'order-2',
                data_input: 'order-1',
              },
              right: {
                base: 'flex flex-row gap-6 justify-between',
                content: 'order-last',
                labels: '',
                data_input: 'text-right',
              },
            },
            responsive: 'md:grid md:grid-cols-12 md:gap-x-4',
            non_responsive: 'grid grid-cols-12 gap-2',
            labels_horizontal_layout:
              'flex flex-row space-x-2 justify-between col-span-12',
            labels_vertical_layout: 'flex flex-col space-y-2 col-span-4',
            data_input_horizontal_layout: 'col-span-12',
            non_box_data_input_spacing_vertical: 'my-3',
            non_box_data_input_spacing_horizontal: 'my-3 md:mt-0 mb-3',
            data_input_vertical_layout: 'col-span-8',
            data_input_vertical_layout__align_right: 'text-right',
            label: {
              base: 'block text-scale-1100',
              size: { ...defaults_size.text },
            },
            label_optional: {
              base: 'text-scale-900',
              size: { ...defaults_size.text },
            },
            description: {
              base: 'mt-2 text-scale-900',
              size: { ...defaults_size.text },
            },
            label_before: {
              base: 'text-scale-500 ',
              size: { ...defaults_size.text },
            },
            label_after: {
              base: 'text-scale-500',
              size: { ...defaults_size.text },
            },
            error: {
              base: '\n        text-red-900 \n        transition-all\n        data-show:mt-2\n        data-show:animate-slide-down-normal\n        data-hide:animate-slide-up-normal\n      ',
              size: { ...defaults_size.text },
            },
            size: {
              tiny: 'text-xs',
              small: 'text-sm leading-4',
              medium: 'text-sm',
              large: 'text-base',
              xlarge: 'text-base',
            },
          },
          dropdown: {
            trigger:
              '\n      flex\n\n      border-none \n      rounded\n      bg-transparent p-0\n      outline-none\n      outline-offset-1\n      transition-all\n      focus:outline-4\n      focus:outline-scale-600\n    ',
            item_nested:
              '\n      border-none\n      focus:outline-none\n      focus:bg-scale-300 dark:focus:bg-scale-500\n      focus:text-scale-1200\n      data-open:bg-scale-300 dark:data-open:bg-scale-500\n      data-open:text-scale-1200\n    ',
            content:
              '\n      bg-scale-100 dark:bg-scale-300\n      border border-scale-300 dark:border-scale-500\n      rounded\n      shadow-lg\n      py-1.5\n\n      origin-dropdown\n      data-open:animate-dropdown-content-show\n      data-closed:animate-dropdown-content-hide\n      min-w-fit\n    ',
            size: {
              tiny: 'w-40',
              small: 'w-48',
              medium: 'w-64',
              large: 'w-80',
              xlarge: 'w-96',
              content: 'w-auto',
            },
            arrow: '\n      fill-current\n      border-0 border-t\n    ',
            item: '\n      group\n      relative\n      text-xs\n      text-scale-1100\n      px-4 py-1.5 flex items-center space-x-2\n      cursor-pointer\n      focus:bg-scale-300 dark:focus:bg-scale-500\n      focus:text-scale-1200\n      border-none\n      focus:outline-none\n    ',
            label:
              '\n      text-scale-900\n      px-4 flex items-center space-x-2 py-1.5\n      text-xs\n    ',
            seperator:
              '\n      w-full\n      h-px\n      my-2\n      bg-scale-300 dark:bg-scale-500\n    ',
            misc: '\n      px-4 py-1.5\n    ',
            check:
              '\n      absolute left-3\n      flex items-center\n      data-checked:text-scale-1200\n    ',
            input: '\n      flex items-center space-x-0 pl-8 pr-4\n    ',
            right_slot:
              '\n      text-scale-900\n      group-focus:text-scale-1000\n      absolute\n      -translate-y-1/2\n      right-2\n      top-1/2\n    ',
          },
          popover: {
            trigger:
              '\n      flex\n      border-none \n  \n      rounded\n      bg-transparent\n      p-0\n      outline-none\n      outline-offset-1\n      transition-all\n      focus:outline-4\n      focus:outline-scale-600\n\n    ',
            content:
              '\n      bg-scale-100 dark:bg-scale-300\n      border border-scale-300 dark:border-scale-500\n      rounded\n      shadow-lg\n      data-open:animate-dropdown-content-show\n      data-closed:animate-dropdown-content-hide\n      min-w-fit\n\n      origin-popover \n      data-open:animate-dropdown-content-show\n      data-closed:animate-dropdown-content-hide\n    ',
            size: {
              tiny: 'w-40',
              small: 'w-48',
              medium: 'w-64',
              large: 'w-80',
              xlarge: 'w-96',
              content: 'w-auto',
            },
            header:
              '\n      bg-scale-200 dark:bg-scale-400\n      space-y-1 py-1.5 px-3\n      border-b border-scale-300 dark:border-scale-500\n    ',
            footer:
              '\n      bg-scale-200 dark:bg-scale-400\n      py-1.5 px-3\n      border-t border-scale-300 dark:border-scale-500\n    ',
            close:
              '\n      transition\n      text-scale-900 hover:text-scale-1100\n    ',
            seperator:
              '\n      w-full\n      h-px\n      my-2\n      bg-scale-300 dark:bg-scale-500\n    ',
          },
          menu: {
            item: {
              base: '\n        cursor-pointer\n        flex space-x-3 items-center\n        outline-none\n        focus-visible:ring-1 ring-scale-1200 focus-visible:z-10 \n        group\n      ',
              content: {
                base: 'transition truncate text-sm w-full',
                normal: 'text-scale-1100 group-hover:text-scale-1200',
                active: 'text-scale-1200 font-semibold',
              },
              icon: {
                base: 'transition truncate text-sm',
                normal: 'text-scale-900 group-hover:text-scale-1100',
                active: 'text-scale-1200',
              },
              variants: {
                text: {
                  base: '\n            py-1\n          ',
                  normal:
                    '\n            font-normal\n            border-scale-500\n            group-hover:border-scale-900',
                  active:
                    '\n            font-semibold\n            text-scale-900\n            z-10\n          ',
                },
                border: {
                  base: '\n            px-4 py-1\n          ',
                  normal:
                    '\n            border-l\n            font-normal\n            border-scale-500\n            group-hover:border-scale-900',
                  active:
                    '\n            font-semibold\n\n            text-scale-900\n            z-10\n\n            border-l\n            border-brand-900\n            group-hover:border-brand-900\n          ',
                  rounded: 'rounded-md',
                },
                pills: {
                  base: '\n            px-3 py-1\n          ',
                  normal:
                    '\n            font-normal\n            border-scale-500\n            group-hover:border-scale-900',
                  active:
                    '\n            font-semibold\n            bg-scale-400\n            dark:bg-scale-300\n            text-scale-900\n            z-10\n\n            rounded-md\n          ',
                },
              },
            },
            group: {
              base: '\n        flex space-x-3 \n        mb-2\n        font-normal\n      ',
              icon: 'text-scale-900',
              content: 'text-sm text-scale-900 w-full',
              variants: { text: '', pills: 'px-3', border: '' },
            },
          },
          modal: {
            base: '\n      relative\n      bg-scale-100 dark:bg-scale-300\n      my-4\n      border border-scale-300 dark:border-scale-500\n      rounded-md \n      shadow-xl \n      data-open:animate-overlay-show \n      data-closed:animate-overlay-hide  \n      \n    ',
            header:
              '\n      bg-scale-200 dark:bg-scale-400\n      space-y-1 py-3 px-4 sm:px-5 \n      border-b border-scale-300 dark:border-scale-500\n    ',
            footer:
              '\n      flex justify-end gap-2\n      py-3 px-5 \n      border-t border-scale-300 dark:border-scale-500\n    ',
            size: {
              tiny: 'sm:align-middle sm:w-full sm:max-w-xs',
              small: 'sm:align-middle sm:w-full sm:max-w-sm',
              medium: 'sm:align-middle sm:w-full sm:max-w-lg',
              large: 'sm:align-middle sm:w-full max-w-xl',
              xlarge: 'sm:align-middle sm:w-full max-w-3xl',
              xxlarge: 'sm:align-middle sm:w-full max-w-6xl',
              xxxlarge: 'sm:align-middle sm:w-full max-w-7xl',
            },
            overlay:
              '\n      fixed\n      bg-scale-300\n      dark:bg-scale-100\n      h-full w-full\n      left-0\n      top-0 \n      opacity-75\n      data-closed:animate-fade-out-overlay-bg \n      data-open:animate-fade-in-overlay-bg\n    ',
            scroll_overlay:
              '\n      fixed\n      inset-0\n      grid\n      place-items-center\n      overflow-y-auto\n      data-open:animate-overlay-show data-closed:animate-overlay-hide  \n    ',
            seperator:
              '\n      w-full\n      h-px\n      my-2\n      bg-scale-300 dark:bg-scale-500\n    ',
            content: 'px-5',
          },
          auth: {
            base: 'w-full',
            label: 'block text-sm font-medium text-scale-1100',
          },
          divider: {
            span: 'text-sm text-scale-1100 inline-block px-2;',
            base: 'w-full flex items-center whitespace-nowrap',
            vertical: 'bg-gray-200 dark:bg-dark-500 w-px h-inherit',
            light: 'bg-gray-100 dark:bg-dark-600',
            no_text:
              '\n    border-gray-200 dark:border-dark-500 \n    border-b-1 border-b-solid\n    ',
            orientation: {
              left: '\n      border-b border-solid\n      top-2/4\n      relative inline-block w-full\n      ',
              center:
                '\n        border-gray-200 dark:border-dark-500;\n        border-solid border-b-2 top-2/4\n        content relative inline-block w-6/12\n        ',
              right:
                '      \n      border-gray-200 dark:border-dark-500\n      border-b border-solid\n      top-2/4\n      relative inline-block w-full\n      ',
            },
          },
          typography: {
            title: {
              base: 'text-scale-1200 font-medium dark:text-white',
              level: {
                1: 'text-5xl',
                2: 'text-4xl',
                3: 'text-2xl',
                4: 'text-lg',
                5: 'text-base',
              },
            },
            text: {
              base: 'text-sm leading-4 text-scale-1100',
              small: 'text-xs leading-4 text-scale-1100',
              type: {
                secondary: '\n      text-scale-1100\n      ',
                success: '\n      text-green-500 dark:text-green-500\n      ',
                warning: '\n      text-yellow-500 dark:text-yellow-500\n      ',
                danger: '\n      text-red-500 dark:text-red-500\n      ',
              },
              disable:
                '\n      text-gray-300 dark:text-gray-400\n      cursor-not-allowed pointer-events-none\n      ',
              underline: 'underline',
              strikethrough: 'line-through',
              mark: 'p-0 text-yellow-600',
              code: 'bg-gray-300 border border-gray-400 rounded-sm p-1 px-2 pb-0.5',
            },
            link: 'text-sm leading-4 text-scale-1100',
          },
          space: {
            base: 'flex',
            block: 'block',
            row: 'space-x-2 flex flex-row items-center',
            col: 'space-y-2 flex flex-col',
            'wsb-space-y-0': 'space-y-0',
            'wsb-space-y-1': 'space-y-1',
            'wsb-space-y-2': 'space-y-2',
            'wsb-space-y-3': 'space-y-3',
            'wsb-space-y-4': 'space-y-4',
            'wsb-space-y-5': 'space-y-5',
            'wsb-space-y-6': 'space-y-6',
            'wsb-space-y-7': 'space-y-7',
            'wsb-space-y-8': 'space-y-8',
            'wsb-space-y-9': 'space-y-9',
            'wsb-space-y-10': 'space-x-10',
            'wsb-space-x-0': 'space-x-0',
            'wsb-space-x-1': 'space-x-1',
            'wsb-space-x-2': 'space-x-2',
            'wsb-space-x-3': 'space-x-3',
            'wsb-space-x-4': 'space-x-4',
            'wsb-space-x-5': 'space-x-5',
            'wsb-space-x-6': 'space-x-6',
            'wsb-space-x-7': 'space-x-7',
            'wsb-space-x-8': 'space-x-8',
            'wsb-space-x-9': 'space-x-9',
            'wsb-space-x-10': 'space-x-10',
            'wsb-minus-space-y-0': '-space-y-0',
            'wsb-minus-space-y-1': '-space-y-1',
            'wsb-minus-space-y-2': '-space-y-2',
            'wsb-minus-space-y-3': '-space-y-3',
            'wsb-minus-space-y-4': '-space-y-4',
            'wsb-minus-space-y-5': '-space-y-5',
            'wsb-minus-space-y-6': '-space-y-6',
            'wsb-minus-space-y-7': '-space-y-7',
            'wsb-minus-space-y-8': '-space-y-8',
            'wsb-minus-space-y-9': '-space-y-9',
            'wsb-minus-space-y-10': '-space-y-10',
            'wsb-minus-space-x-0': '-space-x-0',
            'wsb-minus-space-x-1': '-space-x-1',
            'wsb-minus-space-x-2': '-space-x-2',
            'wsb-minus-space-x-3': '-space-x-3',
            'wsb-minus-space-x-4': '-space-x-4',
            'wsb-minus-space-x-5': '-space-x-5',
            'wsb-minus-space-x-6': '-space-x-6',
            'wsb-minus-space-x-7': '-space-x-7',
            'wsb-minus-space-x-8': '-space-x-8',
            'wsb-minus-space-x-9': '-space-x-9',
            'wsb-minus-space-x-10': '-space-x-10',
          },
          listbox: {
            base: `\n      block \n      box-border \n      w-full \n      rounded-md \n      shadow-sm \n      text-scale-1200  \n      border\n      focus:shadow-md\n      ${defaults_focus}\n      focus:border-scale-900\n      focus:ring-scale-400\n      ${defaults_placeholder}\n      indent-px\n      transition-all\n      bg-none\n    `,
            container: 'relative',
            label: 'truncate',
            variants: {
              standard:
                '\n        bg-scaleA-200\n        border border-scale-700\n\n        aria-expanded:border-scale-900\n        aria-expanded:ring-scale-400\n        aria-expanded:ring-2\n        ',
              error:
                '\n        bg-red-100\n        border border-red-700 \n        focus:ring-red-500\n        placeholder:text-red-600\n       ',
            },
            options_container_animate:
              '\n      transition\n      data-open:animate-slide-down \n      data-open:opacity-1\n      data-closed:animate-slide-up\n      data-closed:opacity-0\n    ',
            options_container:
              '\n      bg-scale-100 dark:bg-scale-300 \n      shadow-lg \n      border border-solid \n      border-gray-100 dark:border-gray-600 max-h-60 \n      rounded-md py-1 text-base \n      sm:text-sm z-10 overflow-hidden overflow-y-scroll\n\n      origin-dropdown\n      data-open:animate-dropdown-content-show\n      data-closed:animate-dropdown-content-hide\n    ',
            with_icon: 'pl-10',
            addOnBefore:
              '\n    w-full flex flex-row items-center space-x-3\n    ',
            size: { ...default__padding_and_text },
            disabled: 'opacity-50',
            actions_container:
              'absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center',
            chevron_container:
              'absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none',
            chevron: 'h-5 w-5 text-scale-600',
            option:
              '\n      w-listbox\n      transition cursor-pointer select-none relative py-2 pl-3 pr-9 \n      text-scale-900\n      text-sm\n\n      focus:bg-scale-300 dark:focus:bg-scale-500\n      focus:text-scale-1200\n      border-none\n      focus:outline-none\n    ',
            option_active: 'text-scale-1200 bg-scale-600',
            option_disabled: 'cursor-not-allowed opacity-50',
            option_inner: 'flex items-center space-x-3',
            option_check:
              'absolute inset-y-0 right-0 flex items-center pr-3 text-brand-900',
            option_check_active: 'text-brand-900',
            option_check_icon: 'h-5 w-5',
          },
          collapsible: {
            content:
              '\n      data-open:animate-slide-down-normal\n      data-closed:animate-slide-up-normal\n    ',
          },
          inputErrorIcon: {
            base: '\n      flex items-center \n      right-3 pr-2 pl-2 \n      inset-y-0 \n      pointer-events-none\n      text-red-900\n    ',
          },
          inputIconContainer: {
            base: '\n    absolute inset-y-0 \n    left-0 pl-3 flex \n    items-center pointer-events-none\n    text-scale-1100\n    ',
          },
          icon: {
            container:
              'flex-shrink-0 flex items-center justify-center rounded-full p-3',
          },
          loading: {
            base: 'relative',
            content: {
              base: 'transition-opacity duration-300',
              active: 'opacity-40',
            },
            spinner:
              '\n      absolute\n      text-brand-900 animate-spin\n      inset-0\n      m-auto\n    ',
          },
        }
      __webpack_exports__.Z = defaultTheme
    },
    './src/theme/provider.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, {
        N: function () {
          return ThemeContext
        },
        f: function () {
          return ThemeProvider
        },
      })
      var react = __webpack_require__('../../node_modules/react/index.js'),
        theme_default = __webpack_require__('./src/theme/default.ts')
      function isObject(item) {
        return item && 'object' == typeof item && !Array.isArray(item)
      }
      function mergeDeep(target) {
        for (
          var _len = arguments.length,
            sources = new Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        )
          sources[_key - 1] = arguments[_key]
        if (0 === sources.length) return target
        const source = sources.shift()
        if (isObject(target) && isObject(source))
          for (const key in source)
            isObject(source[key])
              ? (target[key] || Object.assign(target, { [key]: {} }),
                mergeDeep(target[key], source[key]))
              : Object.assign(target, { [key]: source[key] })
        return mergeDeep(target, ...sources)
      }
      var jsx_runtime = __webpack_require__(
        '../../node_modules/react/jsx-runtime.js'
      )
      const ThemeContext = (0, react.createContext)({ theme: theme_default.Z }),
        ThemeProvider = (_ref) => {
          let { children: children, theme: customTheme } = _ref
          const mergedTheme = mergeDeep(theme_default.Z, customTheme),
            value = (0, react.useMemo)(() => ({ theme: mergedTheme }), [])
          return (0, jsx_runtime.jsx)(ThemeContext.Provider, {
            value: value,
            children: children,
          })
        }
      ThemeProvider.displayName = 'ThemeProvider'
      try {
        ;(ThemeProvider.displayName = 'ThemeProvider'),
          (ThemeProvider.__docgenInfo = {
            description: '',
            displayName: 'ThemeProvider',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'object' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/theme/provider.tsx#ThemeProvider'] = {
              docgenInfo: ThemeProvider.__docgenInfo,
              name: 'ThemeProvider',
              path: 'src/theme/provider.tsx#ThemeProvider',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './.storybook/preview.css': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          '../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        content = __webpack_require__(
          '../../node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./.storybook/preview.css'
        )
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.id, content, '']])
      var options = { insert: 'head', singleton: !1 }
      api(content, options)
      module.exports = content.locals || {}
    },
    './src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$':
      function (module, __unused_webpack_exports, __webpack_require__) {
        var map = {
          './components/Avatar/Avatar.stories': [
            './src/components/Avatar/Avatar.stories.tsx',
            5989,
          ],
          './components/Avatar/Avatar.stories.tsx': [
            './src/components/Avatar/Avatar.stories.tsx',
            5989,
          ],
          './components/Breadcrumb/Breadcrumb.stories': [
            './src/components/Breadcrumb/Breadcrumb.stories.tsx',
            9357,
          ],
          './components/Breadcrumb/Breadcrumb.stories.tsx': [
            './src/components/Breadcrumb/Breadcrumb.stories.tsx',
            9357,
          ],
          './components/Card/Card.stories': [
            './src/components/Card/Card.stories.tsx',
            7518,
          ],
          './components/Card/Card.stories.tsx': [
            './src/components/Card/Card.stories.tsx',
            7518,
          ],
          './components/Collapsible/Collapsible.stories': [
            './src/components/Collapsible/Collapsible.stories.tsx',
            9215,
          ],
          './components/Collapsible/Collapsible.stories.tsx': [
            './src/components/Collapsible/Collapsible.stories.tsx',
            9215,
          ],
          './components/ContextMenu/ContextMenu.stories': [
            './src/components/ContextMenu/ContextMenu.stories.tsx',
            5523,
            4154,
            2899,
          ],
          './components/ContextMenu/ContextMenu.stories.tsx': [
            './src/components/ContextMenu/ContextMenu.stories.tsx',
            5523,
            4154,
            2899,
          ],
          './components/Dropdown/Dropdown.stories': [
            './src/components/Dropdown/Dropdown.stories.tsx',
            5523,
            4154,
            3944,
            5693,
            9451,
          ],
          './components/Dropdown/Dropdown.stories.tsx': [
            './src/components/Dropdown/Dropdown.stories.tsx',
            5523,
            4154,
            3944,
            5693,
            9451,
          ],
          './components/Form/Form.stories': [
            './src/components/Form/Form.stories.tsx',
            5523,
            4154,
            1235,
            3343,
            1567,
            5693,
            7969,
          ],
          './components/Form/Form.stories.tsx': [
            './src/components/Form/Form.stories.tsx',
            5523,
            4154,
            1235,
            3343,
            1567,
            5693,
            7969,
          ],
          './components/Icon/Icon.stories': [
            './src/components/Icon/Icon.stories.tsx',
            870,
          ],
          './components/Icon/Icon.stories.tsx': [
            './src/components/Icon/Icon.stories.tsx',
            870,
          ],
          './components/Image/Image.stories': [
            './src/components/Image/Image.stories.tsx',
            3358,
          ],
          './components/Image/Image.stories.tsx': [
            './src/components/Image/Image.stories.tsx',
            3358,
          ],
          './components/Input/Input.stories': [
            './src/components/Input/Input.stories.tsx',
            5693,
            1195,
          ],
          './components/Input/Input.stories.tsx': [
            './src/components/Input/Input.stories.tsx',
            5693,
            1195,
          ],
          './components/InputNumber/InputNumber.stories': [
            './src/components/InputNumber/InputNumber.stories.tsx',
            9740,
          ],
          './components/InputNumber/InputNumber.stories.tsx': [
            './src/components/InputNumber/InputNumber.stories.tsx',
            9740,
          ],
          './components/InputOld/Input.stories': [
            './src/components/InputOld/Input.stories.js',
            7930,
          ],
          './components/InputOld/Input.stories.js': [
            './src/components/InputOld/Input.stories.js',
            7930,
          ],
          './components/Listbox/SelectStyled.stories': [
            './src/components/Listbox/SelectStyled.stories.tsx',
            5523,
            4154,
            1235,
            5750,
          ],
          './components/Listbox/SelectStyled.stories.tsx': [
            './src/components/Listbox/SelectStyled.stories.tsx',
            5523,
            4154,
            1235,
            5750,
          ],
          './components/Loading/Loading.stories': [
            './src/components/Loading/Loading.stories.tsx',
            783,
          ],
          './components/Loading/Loading.stories.tsx': [
            './src/components/Loading/Loading.stories.tsx',
            783,
          ],
          './components/Menu/Menu.stories': [
            './src/components/Menu/Menu.stories.tsx',
            8377,
          ],
          './components/Menu/Menu.stories.tsx': [
            './src/components/Menu/Menu.stories.tsx',
            8377,
          ],
          './components/Modal/Modal.stories': [
            './src/components/Modal/Modal.stories.tsx',
            5523,
            4154,
            3343,
            5693,
            3668,
          ],
          './components/Modal/Modal.stories.tsx': [
            './src/components/Modal/Modal.stories.tsx',
            5523,
            4154,
            3343,
            5693,
            3668,
          ],
          './components/Popover/Popover.stories': [
            './src/components/Popover/Popover.stories.tsx',
            5523,
            3268,
            5693,
            9705,
          ],
          './components/Popover/Popover.stories.tsx': [
            './src/components/Popover/Popover.stories.tsx',
            5523,
            3268,
            5693,
            9705,
          ],
          './components/Radio/Radio.stories': [
            './src/components/Radio/Radio.stories.tsx',
            9495,
          ],
          './components/Radio/Radio.stories.tsx': [
            './src/components/Radio/Radio.stories.tsx',
            9495,
          ],
          './components/RadioOld/Radio.stories': [
            './src/components/RadioOld/Radio.stories.js',
            6622,
          ],
          './components/RadioOld/Radio.stories.js': [
            './src/components/RadioOld/Radio.stories.js',
            6622,
          ],
          './components/Select/Select.stories': [
            './src/components/Select/Select.stories.tsx',
            7531,
          ],
          './components/Select/Select.stories.tsx': [
            './src/components/Select/Select.stories.tsx',
            7531,
          ],
          './components/SidePanel/SidePanel.stories': [
            './src/components/SidePanel/SidePanel.stories.tsx',
            5523,
            7374,
          ],
          './components/SidePanel/SidePanel.stories.tsx': [
            './src/components/SidePanel/SidePanel.stories.tsx',
            5523,
            7374,
          ],
          './components/Tabs/Tabs.stories': [
            './src/components/Tabs/Tabs.stories.tsx',
            8620,
          ],
          './components/Tabs/Tabs.stories.tsx': [
            './src/components/Tabs/Tabs.stories.tsx',
            8620,
          ],
          './components/Textarea/Textarea.stories': [
            './src/components/Textarea/Textarea.stories.js',
            4679,
          ],
          './components/Textarea/Textarea.stories.js': [
            './src/components/Textarea/Textarea.stories.js',
            4679,
          ],
          './components/Toast/Toast.stories': [
            './src/components/Toast/Toast.stories.tsx',
            5972,
            1190,
          ],
          './components/Toast/Toast.stories.tsx': [
            './src/components/Toast/Toast.stories.tsx',
            5972,
            1190,
          ],
          './components/Toggle/Toggle.stories': [
            './src/components/Toggle/Toggle.stories.tsx',
            2228,
          ],
          './components/Toggle/Toggle.stories.tsx': [
            './src/components/Toggle/Toggle.stories.tsx',
            2228,
          ],
          './components/Upload/Upload.stories': [
            './src/components/Upload/Upload.stories.tsx',
            3852,
          ],
          './components/Upload/Upload.stories.tsx': [
            './src/components/Upload/Upload.stories.tsx',
            3852,
          ],
          './stories/Accordion.stories': [
            './src/stories/Accordion.stories.tsx',
            9460,
          ],
          './stories/Accordion.stories.tsx': [
            './src/stories/Accordion.stories.tsx',
            9460,
          ],
          './stories/Alert.stories': ['./src/stories/Alert.stories.tsx', 6941],
          './stories/Alert.stories.tsx': [
            './src/stories/Alert.stories.tsx',
            6941,
          ],
          './stories/Auth.stories': [
            './src/stories/Auth.stories.tsx',
            4282,
            5693,
            2053,
          ],
          './stories/Auth.stories.tsx': [
            './src/stories/Auth.stories.tsx',
            4282,
            5693,
            2053,
          ],
          './stories/Badge.stories': ['./src/stories/Badge.stories.tsx', 5270],
          './stories/Badge.stories.tsx': [
            './src/stories/Badge.stories.tsx',
            5270,
          ],
          './stories/Button.stories': [
            './src/stories/Button.stories.tsx',
            8256,
          ],
          './stories/Button.stories.tsx': [
            './src/stories/Button.stories.tsx',
            8256,
          ],
          './stories/Checkbox.stories': [
            './src/stories/Checkbox.stories.tsx',
            59,
          ],
          './stories/Checkbox.stories.tsx': [
            './src/stories/Checkbox.stories.tsx',
            59,
          ],
          './stories/Divider.stories': [
            './src/stories/Divider.stories.tsx',
            4100,
          ],
          './stories/Divider.stories.tsx': [
            './src/stories/Divider.stories.tsx',
            4100,
          ],
          './stories/Typography.stories': [
            './src/stories/Typography.stories.tsx',
            5366,
            1454,
          ],
          './stories/Typography.stories.tsx': [
            './src/stories/Typography.stories.tsx',
            5366,
            1454,
          ],
        }
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req))
            return Promise.resolve().then(function () {
              var e = new Error("Cannot find module '" + req + "'")
              throw ((e.code = 'MODULE_NOT_FOUND'), e)
            })
          var ids = map[req],
            id = ids[0]
          return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(
            function () {
              return __webpack_require__(id)
            }
          )
        }
        ;(webpackAsyncContext.keys = function () {
          return Object.keys(map)
        }),
          (webpackAsyncContext.id =
            './src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$'),
          (module.exports = webpackAsyncContext)
      },
    './src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$':
      function (module, __unused_webpack_exports, __webpack_require__) {
        var map = {
          './components/Introduction/Introduction.stories.mdx': [
            './src/components/Introduction/Introduction.stories.mdx',
            5487,
            2127,
          ],
        }
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req))
            return Promise.resolve().then(function () {
              var e = new Error("Cannot find module '" + req + "'")
              throw ((e.code = 'MODULE_NOT_FOUND'), e)
            })
          var ids = map[req],
            id = ids[0]
          return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(
            function () {
              return __webpack_require__(id)
            }
          )
        }
        ;(webpackAsyncContext.keys = function () {
          return Object.keys(map)
        }),
          (webpackAsyncContext.id =
            './src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$'),
          (module.exports = webpackAsyncContext)
      },
    './storybook-config-entry.js': function (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      var dist = __webpack_require__(
          '../../node_modules/@storybook/global/dist/index.mjs'
        ),
        external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__(
          '@storybook/preview-api'
        ),
        external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject =
          __STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,
        external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject =
          __STORYBOOK_MODULE_CHANNEL_WEBSOCKET__
      const importers = [
        async (path) => {
          if (
            !/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.mdx)$/.exec(
              path
            )
          )
            return
          const pathRemainder = path.substring(6)
          return __webpack_require__(
            './src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$'
          )('./' + pathRemainder)
        },
        async (path) => {
          if (
            !/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(
              path
            )
          )
            return
          const pathRemainder = path.substring(6)
          return __webpack_require__(
            './src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$'
          )('./' + pathRemainder)
        },
      ]
      const { SERVER_CHANNEL_URL: SERVER_CHANNEL_URL } = dist.global,
        channel = (0,
        external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject.createChannel)(
          { page: 'preview' }
        )
      if (
        (external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),
        SERVER_CHANNEL_URL)
      ) {
        const serverChannel = (0,
        external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject.createChannel)(
          { url: SERVER_CHANNEL_URL }
        )
        external_STORYBOOK_MODULE_PREVIEW_API_.addons.setServerChannel(
          serverChannel
        ),
          (window.__STORYBOOK_SERVER_CHANNEL__ = serverChannel)
      }
      const preview = new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb()
      ;(window.__STORYBOOK_PREVIEW__ = preview),
        (window.__STORYBOOK_STORY_STORE__ = preview.storyStore),
        (window.__STORYBOOK_ADDONS_CHANNEL__ = channel),
        (window.__STORYBOOK_CLIENT_API__ =
          new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({
            storyStore: preview.storyStore,
          })),
        preview.initialize({
          importFn: async function importFn(path) {
            for (let i = 0; i < importers.length; i++) {
              const moduleExports = await ((x = () => importers[i](path)), x())
              if (moduleExports) return moduleExports
            }
            var x
          },
          getProjectAnnotations: () =>
            (0, external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([
              __webpack_require__(
                '../../node_modules/@storybook/react/preview.js'
              ),
              __webpack_require__(
                '../../node_modules/@storybook/addon-links/dist/preview.mjs'
              ),
              __webpack_require__(
                '../../node_modules/@storybook/addon-essentials/dist/docs/preview.mjs'
              ),
              __webpack_require__(
                '../../node_modules/@storybook/addon-essentials/dist/actions/preview.mjs'
              ),
              __webpack_require__(
                '../../node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs'
              ),
              __webpack_require__(
                '../../node_modules/@storybook/addon-essentials/dist/measure/preview.mjs'
              ),
              __webpack_require__(
                '../../node_modules/@storybook/addon-essentials/dist/outline/preview.mjs'
              ),
              __webpack_require__(
                '../../node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs'
              ),
              __webpack_require__('./.storybook/preview.js'),
            ]),
        })
    },
    '@storybook/channels': function (module) {
      'use strict'
      module.exports = __STORYBOOK_MODULE_CHANNELS__
    },
    '@storybook/client-logger': function (module) {
      'use strict'
      module.exports = __STORYBOOK_MODULE_CLIENT_LOGGER__
    },
    '@storybook/core-events': function (module) {
      'use strict'
      module.exports = __STORYBOOK_MODULE_CORE_EVENTS__
    },
    '@storybook/preview-api': function (module) {
      'use strict'
      module.exports = __STORYBOOK_MODULE_PREVIEW_API__
    },
  },
  function (__webpack_require__) {
    __webpack_require__.O(0, [3312], function () {
      return (
        (moduleId = './storybook-config-entry.js'),
        __webpack_require__((__webpack_require__.s = moduleId))
      )
      var moduleId
    })
    __webpack_require__.O()
  },
])
