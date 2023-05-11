/*! For license information please see 5366.e4e72d8f.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunkui = self.webpackChunkui || []).push([
  [5366],
  {
    '../../node_modules/bail/index.js': function (module) {
      'use strict'
      module.exports = function bail(err) {
        if (err) throw err
      }
    },
    '../../node_modules/ccount/index.js': function (module) {
      'use strict'
      module.exports = function ccount(source, character) {
        var index,
          value = String(source),
          count = 0
        if ('string' != typeof character) throw new Error('Expected character')
        index = value.indexOf(character)
        for (; -1 !== index; )
          count++, (index = value.indexOf(character, index + character.length))
        return count
      }
    },
    '../../node_modules/extend/index.js': function (module) {
      'use strict'
      var hasOwn = Object.prototype.hasOwnProperty,
        toStr = Object.prototype.toString,
        defineProperty = Object.defineProperty,
        gOPD = Object.getOwnPropertyDescriptor,
        isArray = function isArray(arr) {
          return 'function' == typeof Array.isArray
            ? Array.isArray(arr)
            : '[object Array]' === toStr.call(arr)
        },
        isPlainObject = function isPlainObject(obj) {
          if (!obj || '[object Object]' !== toStr.call(obj)) return !1
          var key,
            hasOwnConstructor = hasOwn.call(obj, 'constructor'),
            hasIsPrototypeOf =
              obj.constructor &&
              obj.constructor.prototype &&
              hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')
          if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf)
            return !1
          for (key in obj);
          return void 0 === key || hasOwn.call(obj, key)
        },
        setProperty = function setProperty(target, options) {
          defineProperty && '__proto__' === options.name
            ? defineProperty(target, options.name, {
                enumerable: !0,
                configurable: !0,
                value: options.newValue,
                writable: !0,
              })
            : (target[options.name] = options.newValue)
        },
        getProperty = function getProperty(obj, name) {
          if ('__proto__' === name) {
            if (!hasOwn.call(obj, name)) return
            if (gOPD) return gOPD(obj, name).value
          }
          return obj[name]
        }
      module.exports = function extend() {
        var options,
          name,
          src,
          copy,
          copyIsArray,
          clone,
          target = arguments[0],
          i = 1,
          length = arguments.length,
          deep = !1
        for (
          'boolean' == typeof target &&
            ((deep = target), (target = arguments[1] || {}), (i = 2)),
            (null == target ||
              ('object' != typeof target && 'function' != typeof target)) &&
              (target = {});
          i < length;
          ++i
        )
          if (null != (options = arguments[i]))
            for (name in options)
              (src = getProperty(target, name)),
                target !== (copy = getProperty(options, name)) &&
                  (deep &&
                  copy &&
                  (isPlainObject(copy) || (copyIsArray = isArray(copy)))
                    ? (copyIsArray
                        ? ((copyIsArray = !1),
                          (clone = src && isArray(src) ? src : []))
                        : (clone = src && isPlainObject(src) ? src : {}),
                      setProperty(target, {
                        name: name,
                        newValue: extend(deep, clone, copy),
                      }))
                    : void 0 !== copy &&
                      setProperty(target, { name: name, newValue: copy }))
        return target
      }
    },
    '../../node_modules/is-buffer/index.js': function (module) {
      module.exports = function isBuffer(obj) {
        return (
          null != obj &&
          null != obj.constructor &&
          'function' == typeof obj.constructor.isBuffer &&
          obj.constructor.isBuffer(obj)
        )
      }
    },
    '../../node_modules/markdown-table/index.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var repeat = __webpack_require__(
        '../../node_modules/repeat-string/index.js'
      )
      module.exports = function markdownTable(table, options) {
        var cells,
          columnIndex,
          columnLength,
          largest,
          size,
          cell,
          lines,
          line,
          before,
          after,
          code,
          settings = options || {},
          padding = !1 !== settings.padding,
          start = !1 !== settings.delimiterStart,
          end = !1 !== settings.delimiterEnd,
          align = (settings.align || []).concat(),
          alignDelimiters = !1 !== settings.alignDelimiters,
          alignments = [],
          stringLength = settings.stringLength || defaultStringLength,
          rowIndex = -1,
          rowLength = table.length,
          cellMatrix = [],
          sizeMatrix = [],
          row = [],
          sizes = [],
          longestCellByColumn = [],
          mostCellsPerRow = 0
        for (; ++rowIndex < rowLength; ) {
          for (
            columnIndex = -1,
              row = [],
              sizes = [],
              (columnLength = (cells = table[rowIndex]).length) >
                mostCellsPerRow && (mostCellsPerRow = columnLength);
            ++columnIndex < columnLength;

          )
            (cell = null == (value = cells[columnIndex]) ? '' : String(value)),
              !0 === alignDelimiters &&
                ((size = stringLength(cell)),
                (sizes[columnIndex] = size),
                (void 0 === (largest = longestCellByColumn[columnIndex]) ||
                  size > largest) &&
                  (longestCellByColumn[columnIndex] = size)),
              row.push(cell)
          ;(cellMatrix[rowIndex] = row), (sizeMatrix[rowIndex] = sizes)
        }
        var value
        if (
          ((columnIndex = -1),
          (columnLength = mostCellsPerRow),
          'object' == typeof align && 'length' in align)
        )
          for (; ++columnIndex < columnLength; )
            alignments[columnIndex] = toAlignment(align[columnIndex])
        else
          for (code = toAlignment(align); ++columnIndex < columnLength; )
            alignments[columnIndex] = code
        ;(columnIndex = -1),
          (columnLength = mostCellsPerRow),
          (row = []),
          (sizes = [])
        for (; ++columnIndex < columnLength; )
          (before = ''),
            (after = ''),
            (code = alignments[columnIndex]) === l
              ? (before = colon)
              : code === r
              ? (after = colon)
              : code === c && ((before = colon), (after = colon)),
            (size = alignDelimiters
              ? Math.max(
                  1,
                  longestCellByColumn[columnIndex] -
                    before.length -
                    after.length
                )
              : 1),
            (cell = before + repeat(dash, size) + after),
            !0 === alignDelimiters &&
              ((size = before.length + size + after.length) >
                longestCellByColumn[columnIndex] &&
                (longestCellByColumn[columnIndex] = size),
              (sizes[columnIndex] = size)),
            (row[columnIndex] = cell)
        cellMatrix.splice(1, 0, row),
          sizeMatrix.splice(1, 0, sizes),
          (rowIndex = -1),
          (rowLength = cellMatrix.length),
          (lines = [])
        for (; ++rowIndex < rowLength; ) {
          for (
            row = cellMatrix[rowIndex],
              sizes = sizeMatrix[rowIndex],
              columnIndex = -1,
              columnLength = mostCellsPerRow,
              line = [];
            ++columnIndex < columnLength;

          )
            (cell = row[columnIndex] || ''),
              (before = ''),
              (after = ''),
              !0 === alignDelimiters &&
                ((size =
                  longestCellByColumn[columnIndex] - (sizes[columnIndex] || 0)),
                (code = alignments[columnIndex]) === r
                  ? (before = repeat(space, size))
                  : code === c
                  ? size % 2 == 0
                    ? (after = before = repeat(space, size / 2))
                    : ((before = repeat(space, size / 2 + 0.5)),
                      (after = repeat(space, size / 2 - 0.5)))
                  : (after = repeat(space, size))),
              !0 === start && 0 === columnIndex && line.push(verticalBar),
              !0 !== padding ||
                (!1 === alignDelimiters && '' === cell) ||
                (!0 !== start && 0 === columnIndex) ||
                line.push(space),
              !0 === alignDelimiters && line.push(before),
              line.push(cell),
              !0 === alignDelimiters && line.push(after),
              !0 === padding && line.push(space),
              (!0 !== end && columnIndex === columnLength - 1) ||
                line.push(verticalBar)
          ;(line = line.join('')),
            !1 === end && (line = line.replace(trailingWhitespace, '')),
            lines.push(line)
        }
        return lines.join(lineFeed)
      }
      var trailingWhitespace = / +$/,
        space = ' ',
        lineFeed = '\n',
        dash = '-',
        colon = ':',
        verticalBar = '|',
        x = 0,
        C = 67,
        L = 76,
        R = 82,
        c = 99,
        l = 108,
        r = 114
      function defaultStringLength(value) {
        return value.length
      }
      function toAlignment(value) {
        var code = 'string' == typeof value ? value.charCodeAt(0) : x
        return code === L || code === l
          ? l
          : code === R || code === r
          ? r
          : code === C || code === c
          ? c
          : x
      }
    },
    '../../node_modules/mdast-add-list-metadata/index.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      var visitWithParents = __webpack_require__(
        '../../node_modules/unist-util-visit-parents/index.js'
      )
      module.exports = function addListMetadata() {
        return function (ast) {
          return (
            visitWithParents(ast, 'list', function (listNode, parents) {
              var i,
                n,
                depth = 0
              for (i = 0, n = parents.length; i < n; i++)
                'list' === parents[i].type && (depth += 1)
              for (i = 0, n = listNode.children.length; i < n; i++) {
                var child = listNode.children[i]
                ;(child.index = i), (child.ordered = listNode.ordered)
              }
              listNode.depth = depth
            }),
            ast
          )
        }
      }
    },
    '../../node_modules/mdast-util-find-and-replace/index.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      module.exports = function findAndReplace(tree, find, replace, options) {
        var settings, schema
        'string' == typeof find || (find && 'function' == typeof find.exec)
          ? (schema = [[find, replace]])
          : ((schema = find), (options = replace))
        return (
          search(
            tree,
            (settings = options || {}),
            (function handlerFactory(pairs) {
              var pair = pairs[0]
              return handler
              function handler(node, parent) {
                var position,
                  match,
                  subhandler,
                  value,
                  find = pair[0],
                  replace = pair[1],
                  nodes = [],
                  start = 0,
                  index = parent.children.indexOf(node)
                for (
                  find.lastIndex = 0, match = find.exec(node.value);
                  match &&
                  ((position = match.index),
                  !1 !==
                    (value = replace.apply(
                      null,
                      [].concat(match, {
                        index: match.index,
                        input: match.input,
                      })
                    )) &&
                    (start !== position &&
                      nodes.push({
                        type: 'text',
                        value: node.value.slice(start, position),
                      }),
                    'string' == typeof value &&
                      value.length > 0 &&
                      (value = { type: 'text', value: value }),
                    value && (nodes = [].concat(nodes, value)),
                    (start = position + match[0].length)),
                  find.global);

                )
                  match = find.exec(node.value)
                if (
                  (void 0 === position
                    ? ((nodes = [node]), index--)
                    : (start < node.value.length &&
                        nodes.push({
                          type: 'text',
                          value: node.value.slice(start),
                        }),
                      nodes.unshift(index, 1),
                      splice.apply(parent.children, nodes)),
                  pairs.length > 1)
                )
                  for (
                    subhandler = handlerFactory(pairs.slice(1)), position = -1;
                    ++position < nodes.length;

                  )
                    'text' === (node = nodes[position]).type
                      ? subhandler(node, parent)
                      : search(node, settings, subhandler)
                return index + nodes.length + 1
              }
            })(
              (function toPairs(schema) {
                var key,
                  index,
                  result = []
                if ('object' != typeof schema)
                  throw new Error('Expected array or object as schema')
                if ('length' in schema)
                  for (index = -1; ++index < schema.length; )
                    result.push([
                      toExpression(schema[index][0]),
                      toFunction(schema[index][1]),
                    ])
                else
                  for (key in schema)
                    result.push([toExpression(key), toFunction(schema[key])])
                return result
              })(schema)
            )
          ),
          tree
        )
      }
      var visit = __webpack_require__(
          '../../node_modules/mdast-util-find-and-replace/node_modules/unist-util-visit-parents/index.js'
        ),
        convert = __webpack_require__(
          '../../node_modules/unist-util-is/convert.js'
        ),
        escape = __webpack_require__(
          '../../node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js'
        ),
        splice = [].splice
      function search(tree, settings, handler) {
        var ignored = convert(settings.ignore || [])
        return (
          visit(tree, 'text', function visitor(node, parents) {
            var parent,
              grandparent,
              index = -1
            for (; ++index < parents.length; ) {
              if (
                ((parent = parents[index]),
                ignored(
                  parent,
                  grandparent ? grandparent.children.indexOf(parent) : void 0,
                  grandparent
                ))
              )
                return
              grandparent = parent
            }
            return handler(node, grandparent)
          }),
          []
        )
      }
      function toExpression(find) {
        return 'string' == typeof find ? new RegExp(escape(find), 'g') : find
      }
      function toFunction(replace) {
        return 'function' == typeof replace
          ? replace
          : function returner() {
              return replace
            }
      }
    },
    '../../node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js':
      function (module) {
        'use strict'
        module.exports = (string) => {
          if ('string' != typeof string)
            throw new TypeError('Expected a string')
          return string
            .replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            .replace(/-/g, '\\x2d')
        }
      },
    '../../node_modules/mdast-util-find-and-replace/node_modules/unist-util-visit-parents/color.browser.js':
      function (module) {
        module.exports = function identity(d) {
          return d
        }
      },
    '../../node_modules/mdast-util-find-and-replace/node_modules/unist-util-visit-parents/index.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        'use strict'
        module.exports = visitParents
        var convert = __webpack_require__(
            '../../node_modules/unist-util-is/convert.js'
          ),
          color = __webpack_require__(
            '../../node_modules/mdast-util-find-and-replace/node_modules/unist-util-visit-parents/color.browser.js'
          ),
          CONTINUE = !0,
          SKIP = 'skip',
          EXIT = !1
        function visitParents(tree, test, visitor, reverse) {
          var step, is
          'function' == typeof test &&
            'function' != typeof visitor &&
            ((reverse = visitor), (visitor = test), (test = null)),
            (is = convert(test)),
            (step = reverse ? -1 : 1),
            (function factory(node, index, parents) {
              var name,
                value = 'object' == typeof node && null !== node ? node : {}
              'string' == typeof value.type &&
                ((name =
                  'string' == typeof value.tagName
                    ? value.tagName
                    : 'string' == typeof value.name
                    ? value.name
                    : void 0),
                (visit.displayName =
                  'node (' +
                  color(value.type + (name ? '<' + name + '>' : '')) +
                  ')'))
              return visit
              function visit() {
                var subresult,
                  offset,
                  grandparents = parents.concat(node),
                  result = []
                if (
                  (!test ||
                    is(node, index, parents[parents.length - 1] || null)) &&
                  ((result = (function toResult(value) {
                    if (
                      null !== value &&
                      'object' == typeof value &&
                      'length' in value
                    )
                      return value
                    if ('number' == typeof value) return [CONTINUE, value]
                    return [value]
                  })(visitor(node, parents))),
                  result[0] === EXIT)
                )
                  return result
                if (node.children && result[0] !== SKIP)
                  for (
                    offset = (reverse ? node.children.length : -1) + step;
                    offset > -1 && offset < node.children.length;

                  ) {
                    if (
                      (subresult = factory(
                        node.children[offset],
                        offset,
                        grandparents
                      )())[0] === EXIT
                    )
                      return subresult
                    offset =
                      'number' == typeof subresult[1]
                        ? subresult[1]
                        : offset + step
                  }
                return result
              }
            })(tree, null, [])()
        }
        ;(visitParents.CONTINUE = CONTINUE),
          (visitParents.SKIP = SKIP),
          (visitParents.EXIT = EXIT)
      },
    '../../node_modules/mdast-util-gfm-autolink-literal/from-markdown.js':
      function (__unused_webpack_module, exports, __webpack_require__) {
        var ccount = __webpack_require__('../../node_modules/ccount/index.js'),
          findAndReplace = __webpack_require__(
            '../../node_modules/mdast-util-find-and-replace/index.js'
          ),
          unicodePunctuation = __webpack_require__(
            '../../node_modules/micromark/dist/character/unicode-punctuation.js'
          ),
          unicodeWhitespace = __webpack_require__(
            '../../node_modules/micromark/dist/character/unicode-whitespace.js'
          )
        function enterLiteralAutolinkValue(token) {
          this.config.enter.autolinkProtocol.call(this, token)
        }
        function findUrl($0, protocol, domain, path, match) {
          var parts,
            result,
            prefix = ''
          return (
            !!previous(match) &&
            (/^w/i.test(protocol) &&
              ((domain = protocol + domain),
              (protocol = ''),
              (prefix = 'http://')),
            !!(function isCorrectDomain(domain) {
              var parts = domain.split('.')
              if (
                parts.length < 2 ||
                (parts[parts.length - 1] &&
                  (/_/.test(parts[parts.length - 1]) ||
                    !/[a-zA-Z\d]/.test(parts[parts.length - 1]))) ||
                (parts[parts.length - 2] &&
                  (/_/.test(parts[parts.length - 2]) ||
                    !/[a-zA-Z\d]/.test(parts[parts.length - 2])))
              )
                return !1
              return !0
            })(domain) &&
              !!(parts = (function splitUrl(url) {
                var closingParenIndex,
                  openingParens,
                  closingParens,
                  trail = /[!"&'),.:;<>?\]}]+$/.exec(url)
                if (trail)
                  for (
                    url = url.slice(0, trail.index),
                      closingParenIndex = (trail = trail[0]).indexOf(')'),
                      openingParens = ccount(url, '('),
                      closingParens = ccount(url, ')');
                    -1 !== closingParenIndex && openingParens > closingParens;

                  )
                    (url += trail.slice(0, closingParenIndex + 1)),
                      (closingParenIndex = (trail = trail.slice(
                        closingParenIndex + 1
                      )).indexOf(')')),
                      closingParens++
                return [url, trail]
              })(domain + path))[0] &&
              ((result = {
                type: 'link',
                title: null,
                url: prefix + protocol + parts[0],
                children: [{ type: 'text', value: protocol + parts[0] }],
              }),
              parts[1] &&
                (result = [result, { type: 'text', value: parts[1] }]),
              result))
          )
        }
        function findEmail($0, atext, label, match) {
          return (
            !(!previous(match, !0) || /[_-]$/.test(label)) && {
              type: 'link',
              title: null,
              url: 'mailto:' + atext + '@' + label,
              children: [{ type: 'text', value: atext + '@' + label }],
            }
          )
        }
        function previous(match, email) {
          var code = match.input.charCodeAt(match.index - 1)
          return (
            (code != code ||
              unicodeWhitespace(code) ||
              unicodePunctuation(code)) &&
            (!email || 47 !== code)
          )
        }
        ;(exports.transforms = [
          function transformGfmAutolinkLiterals(tree) {
            findAndReplace(
              tree,
              [
                [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/i, findUrl],
                [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/, findEmail],
              ],
              { ignore: ['link', 'linkReference'] }
            )
          },
        ]),
          (exports.enter = {
            literalAutolink: function enterLiteralAutolink(token) {
              this.enter(
                { type: 'link', title: null, url: '', children: [] },
                token
              )
            },
            literalAutolinkEmail: enterLiteralAutolinkValue,
            literalAutolinkHttp: enterLiteralAutolinkValue,
            literalAutolinkWww: enterLiteralAutolinkValue,
          }),
          (exports.exit = {
            literalAutolink: function exitLiteralAutolink(token) {
              this.exit(token)
            },
            literalAutolinkEmail: function exitLiteralAutolinkEmail(token) {
              this.config.exit.autolinkEmail.call(this, token)
            },
            literalAutolinkHttp: function exitLiteralAutolinkHttp(token) {
              this.config.exit.autolinkProtocol.call(this, token)
            },
            literalAutolinkWww: function exitLiteralAutolinkWww(token) {
              this.config.exit.data.call(this, token),
                (this.stack[this.stack.length - 1].url =
                  'http://' + this.sliceSerialize(token))
            },
          })
      },
    '../../node_modules/mdast-util-gfm-autolink-literal/to-markdown.js':
      function (__unused_webpack_module, exports) {
        var notInConstruct = ['autolink', 'link', 'image', 'label']
        exports.unsafe = [
          {
            character: '@',
            before: '[+\\-.\\w]',
            after: '[\\-.\\w]',
            inConstruct: 'phrasing',
            notInConstruct: notInConstruct,
          },
          {
            character: '.',
            before: '[Ww]',
            after: '[\\-.\\w]',
            inConstruct: 'phrasing',
            notInConstruct: notInConstruct,
          },
          {
            character: ':',
            before: '[ps]',
            after: '\\/',
            inConstruct: 'phrasing',
            notInConstruct: notInConstruct,
          },
        ]
      },
    '../../node_modules/mdast-util-gfm-strikethrough/from-markdown.js':
      function (__unused_webpack_module, exports) {
        ;(exports.canContainEols = ['delete']),
          (exports.enter = {
            strikethrough: function enterStrikethrough(token) {
              this.enter({ type: 'delete', children: [] }, token)
            },
          }),
          (exports.exit = {
            strikethrough: function exitStrikethrough(token) {
              this.exit(token)
            },
          })
      },
    '../../node_modules/mdast-util-gfm-strikethrough/to-markdown.js': function (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      var phrasing = __webpack_require__(
        '../../node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js'
      )
      function handleDelete(node, _, context) {
        var exit = context.enter('emphasis'),
          value = phrasing(node, context, { before: '~', after: '~' })
        return exit(), '~~' + value + '~~'
      }
      ;(exports.unsafe = [{ character: '~', inConstruct: 'phrasing' }]),
        (exports.handlers = { delete: handleDelete }),
        (handleDelete.peek = function peekDelete() {
          return '~'
        })
    },
    '../../node_modules/mdast-util-gfm-table/from-markdown.js': function (
      __unused_webpack_module,
      exports
    ) {
      function exit(token) {
        this.exit(token)
      }
      function enterCell(token) {
        this.enter({ type: 'tableCell', children: [] }, token)
      }
      function replace($0, $1) {
        return '|' === $1 ? $1 : $0
      }
      ;(exports.enter = {
        table: function enterTable(token) {
          this.enter(
            { type: 'table', align: token._align, children: [] },
            token
          ),
            this.setData('inTable', !0)
        },
        tableData: enterCell,
        tableHeader: enterCell,
        tableRow: function enterRow(token) {
          this.enter({ type: 'tableRow', children: [] }, token)
        },
      }),
        (exports.exit = {
          codeText: function exitCodeText(token) {
            var value = this.resume()
            this.getData('inTable') &&
              (value = value.replace(/\\([\\|])/g, replace))
            ;(this.stack[this.stack.length - 1].value = value), this.exit(token)
          },
          table: function exitTable(token) {
            this.exit(token), this.setData('inTable')
          },
          tableData: exit,
          tableHeader: exit,
          tableRow: exit,
        })
    },
    '../../node_modules/mdast-util-gfm-table/to-markdown.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      var phrasing = __webpack_require__(
          '../../node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js'
        ),
        defaultInlineCode = __webpack_require__(
          '../../node_modules/mdast-util-to-markdown/lib/handle/inline-code.js'
        ),
        markdownTable = __webpack_require__(
          '../../node_modules/markdown-table/index.js'
        )
      module.exports = function toMarkdown(options) {
        var settings = options || {},
          padding = settings.tableCellPadding,
          alignDelimiters = settings.tablePipeAlign,
          stringLength = settings.stringLength,
          around = padding ? ' ' : '|'
        return {
          unsafe: [
            { character: '\r', inConstruct: 'tableCell' },
            { character: '\n', inConstruct: 'tableCell' },
            { atBreak: !0, character: '|', after: '[\t :-]' },
            { character: '|', inConstruct: 'tableCell' },
            { atBreak: !0, character: ':', after: '-' },
            { atBreak: !0, character: '-', after: '[:|-]' },
          ],
          handlers: {
            table: function handleTable(node, _, context) {
              return serializeData(
                (function handleTableAsData(node, context) {
                  var children = node.children,
                    index = -1,
                    length = children.length,
                    result = [],
                    subexit = context.enter('table')
                  for (; ++index < length; )
                    result[index] = handleTableRowAsData(
                      children[index],
                      context
                    )
                  return subexit(), result
                })(node, context),
                node.align
              )
            },
            tableRow: function handleTableRow(node, _, context) {
              var value = serializeData([handleTableRowAsData(node, context)])
              return value.slice(0, value.indexOf('\n'))
            },
            tableCell: handleTableCell,
            inlineCode: function inlineCodeWithTable(node, parent, context) {
              var value = defaultInlineCode(node, parent, context)
              ;-1 !== context.stack.indexOf('tableCell') &&
                (value = value.replace(/\|/g, '\\$&'))
              return value
            },
          },
        }
        function handleTableCell(node, _, context) {
          var exit = context.enter('tableCell'),
            value = phrasing(node, context, { before: around, after: around })
          return exit(), value
        }
        function serializeData(matrix, align) {
          return markdownTable(matrix, {
            align: align,
            alignDelimiters: alignDelimiters,
            padding: padding,
            stringLength: stringLength,
          })
        }
        function handleTableRowAsData(node, context) {
          for (
            var children = node.children,
              index = -1,
              length = children.length,
              result = [],
              subexit = context.enter('tableRow');
            ++index < length;

          )
            result[index] = handleTableCell(children[index], 0, context)
          return subexit(), result
        }
      }
    },
    '../../node_modules/mdast-util-gfm-task-list-item/from-markdown.js':
      function (__unused_webpack_module, exports) {
        function exitCheck(token) {
          this.stack[this.stack.length - 2].checked =
            'taskListCheckValueChecked' === token.type
        }
        exports.exit = {
          taskListCheckValueChecked: exitCheck,
          taskListCheckValueUnchecked: exitCheck,
          paragraph: function exitParagraphWithTaskListItem(token) {
            var firstParaghraph,
              parent = this.stack[this.stack.length - 2],
              node = this.stack[this.stack.length - 1],
              siblings = parent.children,
              head = node.children[0],
              index = -1
            if (
              parent &&
              'listItem' === parent.type &&
              'boolean' == typeof parent.checked &&
              head &&
              'text' === head.type
            ) {
              for (; ++index < siblings.length; )
                if ('paragraph' === siblings[index].type) {
                  firstParaghraph = siblings[index]
                  break
                }
              firstParaghraph === node &&
                ((head.value = head.value.slice(1)),
                0 === head.value.length
                  ? node.children.shift()
                  : (head.position.start.column++,
                    head.position.start.offset++,
                    (node.position.start = Object.assign(
                      {},
                      head.position.start
                    ))))
            }
            this.exit(token)
          },
        }
      },
    '../../node_modules/mdast-util-gfm-task-list-item/to-markdown.js':
      function (__unused_webpack_module, exports, __webpack_require__) {
        var defaultListItem = __webpack_require__(
          '../../node_modules/mdast-util-to-markdown/lib/handle/list-item.js'
        )
        ;(exports.unsafe = [{ atBreak: !0, character: '-', after: '[:|-]' }]),
          (exports.handlers = {
            listItem: function listItemWithTaskListItem(node, parent, context) {
              var value = defaultListItem(node, parent, context),
                head = node.children[0]
              'boolean' == typeof node.checked &&
                head &&
                'paragraph' === head.type &&
                (value = value.replace(
                  /^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,
                  function check($0) {
                    return $0 + '[' + (node.checked ? 'x' : ' ') + '] '
                  }
                ))
              return value
            },
          })
      },
    '../../node_modules/mdast-util-gfm/from-markdown.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      var autolinkLiteral = __webpack_require__(
          '../../node_modules/mdast-util-gfm-autolink-literal/from-markdown.js'
        ),
        strikethrough = __webpack_require__(
          '../../node_modules/mdast-util-gfm-strikethrough/from-markdown.js'
        ),
        table = __webpack_require__(
          '../../node_modules/mdast-util-gfm-table/from-markdown.js'
        ),
        taskListItem = __webpack_require__(
          '../../node_modules/mdast-util-gfm-task-list-item/from-markdown.js'
        ),
        own = {}.hasOwnProperty
      function extension(config, extension) {
        var key, left, right
        for (key in extension)
          (left = own.call(config, key) ? config[key] : (config[key] = {})),
            (right = extension[key]),
            'canContainEols' === key || 'transforms' === key
              ? (config[key] = [].concat(left, right))
              : Object.assign(left, right)
      }
      module.exports = (function configure(extensions) {
        var config = { transforms: [], canContainEols: [] },
          length = extensions.length,
          index = -1
        for (; ++index < length; ) extension(config, extensions[index])
        return config
      })([autolinkLiteral, strikethrough, table, taskListItem])
    },
    '../../node_modules/mdast-util-gfm/to-markdown.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      var autolinkLiteral = __webpack_require__(
          '../../node_modules/mdast-util-gfm-autolink-literal/to-markdown.js'
        ),
        strikethrough = __webpack_require__(
          '../../node_modules/mdast-util-gfm-strikethrough/to-markdown.js'
        ),
        table = __webpack_require__(
          '../../node_modules/mdast-util-gfm-table/to-markdown.js'
        ),
        taskListItem = __webpack_require__(
          '../../node_modules/mdast-util-gfm-task-list-item/to-markdown.js'
        ),
        configure = __webpack_require__(
          '../../node_modules/mdast-util-to-markdown/lib/configure.js'
        )
      module.exports = function toMarkdown(options) {
        var config = configure(
          { handlers: {}, join: [], unsafe: [], options: {} },
          {
            extensions: [
              autolinkLiteral,
              strikethrough,
              table(options),
              taskListItem,
            ],
          }
        )
        return Object.assign(config.options, {
          handlers: config.handlers,
          join: config.join,
          unsafe: config.unsafe,
        })
      }
    },
    '../../node_modules/mdast-util-to-markdown/lib/configure.js': function (
      module
    ) {
      module.exports = function configure(base, extension) {
        var key,
          index = -1
        if (extension.extensions)
          for (; ++index < extension.extensions.length; )
            configure(base, extension.extensions[index])
        for (key in extension)
          'extensions' === key ||
            ('unsafe' === key || 'join' === key
              ? (base[key] = base[key].concat(extension[key] || []))
              : 'handlers' === key
              ? (base[key] = Object.assign(base[key], extension[key] || {}))
              : (base.options[key] = extension[key]))
        return base
      }
    },
    '../../node_modules/mdast-util-to-markdown/lib/handle/inline-code.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        ;(module.exports = inlineCode),
          (inlineCode.peek = function inlineCodePeek() {
            return '`'
          })
        var patternCompile = __webpack_require__(
          '../../node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js'
        )
        function inlineCode(node, parent, context) {
          for (
            var pattern,
              expression,
              match,
              position,
              value = node.value || '',
              sequence = '`',
              index = -1;
            new RegExp('(^|[^`])' + sequence + '([^`]|$)').test(value);

          )
            sequence += '`'
          for (
            /[^ \r\n]/.test(value) &&
            (/[ \r\n`]/.test(value.charAt(0)) ||
              /[ \r\n`]/.test(value.charAt(value.length - 1))) &&
            (value = ' ' + value + ' ');
            ++index < context.unsafe.length;

          )
            if ((pattern = context.unsafe[index]).atBreak)
              for (
                expression = patternCompile(pattern);
                (match = expression.exec(value));

              )
                (position = match.index),
                  10 === value.charCodeAt(position) &&
                    13 === value.charCodeAt(position - 1) &&
                    position--,
                  (value =
                    value.slice(0, position) +
                    ' ' +
                    value.slice(match.index + 1))
          return sequence + value + sequence
        }
      },
    '../../node_modules/mdast-util-to-markdown/lib/handle/list-item.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        module.exports = function listItem(node, parent, context) {
          var size,
            value,
            exit,
            bullet = checkBullet(context),
            listItemIndent = checkListItemIndent(context)
          parent &&
            parent.ordered &&
            (bullet =
              (parent.start > -1 ? parent.start : 1) +
              (!1 === context.options.incrementListMarker
                ? 0
                : parent.children.indexOf(node)) +
              '.')
          ;(size = bullet.length + 1),
            ('tab' === listItemIndent ||
              ('mixed' === listItemIndent &&
                ((parent && parent.spread) || node.spread))) &&
              (size = 4 * Math.ceil(size / 4))
          return (
            (exit = context.enter('listItem')),
            (value = indentLines(
              flow(node, context),
              function map(line, index, blank) {
                if (index) return (blank ? '' : repeat(' ', size)) + line
                return (
                  (blank
                    ? bullet
                    : bullet + repeat(' ', size - bullet.length)) + line
                )
              }
            )),
            exit(),
            value
          )
        }
        var repeat = __webpack_require__(
            '../../node_modules/repeat-string/index.js'
          ),
          checkBullet = __webpack_require__(
            '../../node_modules/mdast-util-to-markdown/lib/util/check-bullet.js'
          ),
          checkListItemIndent = __webpack_require__(
            '../../node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js'
          ),
          flow = __webpack_require__(
            '../../node_modules/mdast-util-to-markdown/lib/util/container-flow.js'
          ),
          indentLines = __webpack_require__(
            '../../node_modules/mdast-util-to-markdown/lib/util/indent-lines.js'
          )
      },
    '../../node_modules/mdast-util-to-markdown/lib/util/check-bullet.js':
      function (module) {
        module.exports = function checkBullet(context) {
          var marker = context.options.bullet || '*'
          if ('*' !== marker && '+' !== marker && '-' !== marker)
            throw new Error(
              'Cannot serialize items with `' +
                marker +
                '` for `options.bullet`, expected `*`, `+`, or `-`'
            )
          return marker
        }
      },
    '../../node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js':
      function (module) {
        module.exports = function checkListItemIndent(context) {
          var style = context.options.listItemIndent || 'tab'
          if (1 === style || '1' === style) return 'one'
          if ('tab' !== style && 'one' !== style && 'mixed' !== style)
            throw new Error(
              'Cannot serialize items with `' +
                style +
                '` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`'
            )
          return style
        }
      },
    '../../node_modules/mdast-util-to-markdown/lib/util/container-flow.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        module.exports = function flow(parent, context) {
          var child,
            children = parent.children || [],
            results = [],
            index = -1
          for (; ++index < children.length; )
            (child = children[index]),
              results.push(
                context.handle(child, parent, context, {
                  before: '\n',
                  after: '\n',
                })
              ),
              index + 1 < children.length &&
                results.push(between(child, children[index + 1]))
          return results.join('')
          function between(left, right) {
            for (
              var result, index = -1;
              ++index < context.join.length &&
              !0 !==
                (result = context.join[index](left, right, parent, context)) &&
              1 !== result;

            ) {
              if ('number' == typeof result)
                return repeat('\n', 1 + Number(result))
              if (!1 === result) return '\n\n\x3c!----\x3e\n\n'
            }
            return '\n\n'
          }
        }
        var repeat = __webpack_require__(
          '../../node_modules/repeat-string/index.js'
        )
      },
    '../../node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js':
      function (module) {
        module.exports = function phrasing(parent, context, safeOptions) {
          var after,
            handle,
            child,
            children = parent.children || [],
            results = [],
            index = -1,
            before = safeOptions.before
          for (; ++index < children.length; )
            (child = children[index]),
              index + 1 < children.length
                ? ((handle =
                    context.handle.handlers[children[index + 1].type]) &&
                    handle.peek &&
                    (handle = handle.peek),
                  (after = handle
                    ? handle(children[index + 1], parent, context, {
                        before: '',
                        after: '',
                      }).charAt(0)
                    : ''))
                : (after = safeOptions.after),
              results.length > 0 &&
                ('\r' === before || '\n' === before) &&
                'html' === child.type &&
                ((results[results.length - 1] = results[
                  results.length - 1
                ].replace(/(\r?\n|\r)$/, ' ')),
                (before = ' ')),
              results.push(
                context.handle(child, parent, context, {
                  before: before,
                  after: after,
                })
              ),
              (before = results[results.length - 1].slice(-1))
          return results.join('')
        }
      },
    '../../node_modules/mdast-util-to-markdown/lib/util/indent-lines.js':
      function (module) {
        module.exports = function indentLines(value, map) {
          var match,
            result = [],
            start = 0,
            line = 0
          for (; (match = eol.exec(value)); )
            one(value.slice(start, match.index)),
              result.push(match[0]),
              (start = match.index + match[0].length),
              line++
          return one(value.slice(start)), result.join('')
          function one(value) {
            result.push(map(value, line, !value))
          }
        }
        var eol = /\r?\n|\r/g
      },
    '../../node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js':
      function (module) {
        module.exports = function patternCompile(pattern) {
          var before, after
          pattern._compiled ||
            ((before = pattern.before ? '(?:' + pattern.before + ')' : ''),
            (after = pattern.after ? '(?:' + pattern.after + ')' : ''),
            pattern.atBreak && (before = '[\\r\\n][\\t ]*' + before),
            (pattern._compiled = new RegExp(
              (before ? '(' + before + ')' : '') +
                (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? '\\' : '') +
                pattern.character +
                (after || ''),
              'g'
            )))
          return pattern._compiled
        }
      },
    '../../node_modules/mdast-util-to-string/index.js': function (module) {
      'use strict'
      function toString(node) {
        return (
          (node &&
            (node.value ||
              node.alt ||
              node.title ||
              ('children' in node && all(node.children)) ||
              ('length' in node && all(node)))) ||
          ''
        )
      }
      function all(values) {
        for (var result = [], index = -1; ++index < values.length; )
          result[index] = toString(values[index])
        return result.join('')
      }
      module.exports = toString
    },
    '../../node_modules/micromark-extension-gfm-autolink-literal/index.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        module.exports = __webpack_require__(
          '../../node_modules/micromark-extension-gfm-autolink-literal/syntax.js'
        )
      },
    '../../node_modules/micromark-extension-gfm-autolink-literal/syntax.js':
      function (__unused_webpack_module, exports, __webpack_require__) {
        var asciiAlpha = __webpack_require__(
            '../../node_modules/micromark/dist/character/ascii-alpha.js'
          ),
          asciiAlphanumeric = __webpack_require__(
            '../../node_modules/micromark/dist/character/ascii-alphanumeric.js'
          ),
          asciiControl = __webpack_require__(
            '../../node_modules/micromark/dist/character/ascii-control.js'
          ),
          markdownLineEnding = __webpack_require__(
            '../../node_modules/micromark/dist/character/markdown-line-ending.js'
          ),
          unicodePunctuation = __webpack_require__(
            '../../node_modules/micromark/dist/character/unicode-punctuation.js'
          ),
          unicodeWhitespace = __webpack_require__(
            '../../node_modules/micromark/dist/character/unicode-whitespace.js'
          ),
          www = {
            tokenize: function tokenizeWww(effects, ok, nok) {
              return function start(code) {
                return effects.consume(code), w2
              }
              function w2(code) {
                return 87 === code || code - 32 == 87
                  ? (effects.consume(code), w3)
                  : nok(code)
              }
              function w3(code) {
                return 87 === code || code - 32 == 87
                  ? (effects.consume(code), dot)
                  : nok(code)
              }
              function dot(code) {
                return 46 === code ? (effects.consume(code), after) : nok(code)
              }
              function after(code) {
                return null === code || markdownLineEnding(code)
                  ? nok(code)
                  : ok(code)
              }
            },
            partial: !0,
          },
          domain = {
            tokenize: function tokenizeDomain(effects, ok, nok) {
              var hasUnderscoreInLastSegment, hasUnderscoreInLastLastSegment
              return domain
              function domain(code) {
                return 38 === code
                  ? effects.check(
                      namedCharacterReference,
                      done,
                      punctuationContinuation
                    )(code)
                  : 46 === code || 95 === code
                  ? effects.check(
                      punctuation,
                      done,
                      punctuationContinuation
                    )(code)
                  : asciiControl(code) ||
                    unicodeWhitespace(code) ||
                    (45 !== code && unicodePunctuation(code))
                  ? done(code)
                  : (effects.consume(code), domain)
              }
              function punctuationContinuation(code) {
                return 46 === code
                  ? ((hasUnderscoreInLastLastSegment =
                      hasUnderscoreInLastSegment),
                    (hasUnderscoreInLastSegment = void 0),
                    effects.consume(code),
                    domain)
                  : (95 === code && (hasUnderscoreInLastSegment = !0),
                    effects.consume(code),
                    domain)
              }
              function done(code) {
                return hasUnderscoreInLastLastSegment ||
                  hasUnderscoreInLastSegment
                  ? nok(code)
                  : ok(code)
              }
            },
            partial: !0,
          },
          path = {
            tokenize: function tokenizePath(effects, ok) {
              var balance = 0
              return inPath
              function inPath(code) {
                return 38 === code
                  ? effects.check(
                      namedCharacterReference,
                      ok,
                      continuedPunctuation
                    )(code)
                  : (40 === code && balance++,
                    41 === code
                      ? effects.check(
                          punctuation,
                          parenAtPathEnd,
                          continuedPunctuation
                        )(code)
                      : pathEnd(code)
                      ? ok(code)
                      : trailingPunctuation(code)
                      ? effects.check(
                          punctuation,
                          ok,
                          continuedPunctuation
                        )(code)
                      : (effects.consume(code), inPath))
              }
              function continuedPunctuation(code) {
                return effects.consume(code), inPath
              }
              function parenAtPathEnd(code) {
                return --balance < 0 ? ok(code) : continuedPunctuation(code)
              }
            },
            partial: !0,
          },
          punctuation = {
            tokenize: function tokenizePunctuation(effects, ok, nok) {
              return function start(code) {
                return effects.consume(code), after
              }
              function after(code) {
                return trailingPunctuation(code)
                  ? (effects.consume(code), after)
                  : pathEnd(code)
                  ? ok(code)
                  : nok(code)
              }
            },
            partial: !0,
          },
          namedCharacterReference = {
            tokenize: function tokenizeNamedCharacterReference(
              effects,
              ok,
              nok
            ) {
              return function start(code) {
                return effects.consume(code), inside
              }
              function inside(code) {
                return asciiAlpha(code)
                  ? (effects.consume(code), inside)
                  : 59 === code
                  ? (effects.consume(code), after)
                  : nok(code)
              }
              function after(code) {
                return pathEnd(code) ? ok(code) : nok(code)
              }
            },
            partial: !0,
          },
          wwwAutolink = {
            tokenize: function tokenizeWwwAutolink(effects, ok, nok) {
              var self = this
              return function start(code) {
                if (
                  (87 !== code && code - 32 != 87) ||
                  !previousWww(self.previous) ||
                  previous(self.events)
                )
                  return nok(code)
                return (
                  effects.enter('literalAutolink'),
                  effects.enter('literalAutolinkWww'),
                  effects.check(
                    www,
                    effects.attempt(domain, effects.attempt(path, done), nok),
                    nok
                  )(code)
                )
              }
              function done(code) {
                return (
                  effects.exit('literalAutolinkWww'),
                  effects.exit('literalAutolink'),
                  ok(code)
                )
              }
            },
            previous: previousWww,
          },
          httpAutolink = {
            tokenize: function tokenizeHttpAutolink(effects, ok, nok) {
              var self = this
              return function start(code) {
                if (
                  (72 !== code && code - 32 != 72) ||
                  !previousHttp(self.previous) ||
                  previous(self.events)
                )
                  return nok(code)
                return (
                  effects.enter('literalAutolink'),
                  effects.enter('literalAutolinkHttp'),
                  effects.consume(code),
                  t1
                )
              }
              function t1(code) {
                return 84 === code || code - 32 == 84
                  ? (effects.consume(code), t2)
                  : nok(code)
              }
              function t2(code) {
                return 84 === code || code - 32 == 84
                  ? (effects.consume(code), p)
                  : nok(code)
              }
              function p(code) {
                return 80 === code || code - 32 == 80
                  ? (effects.consume(code), s)
                  : nok(code)
              }
              function s(code) {
                return 83 === code || code - 32 == 83
                  ? (effects.consume(code), colon)
                  : colon(code)
              }
              function colon(code) {
                return 58 === code ? (effects.consume(code), slash1) : nok(code)
              }
              function slash1(code) {
                return 47 === code ? (effects.consume(code), slash2) : nok(code)
              }
              function slash2(code) {
                return 47 === code ? (effects.consume(code), after) : nok(code)
              }
              function after(code) {
                return asciiControl(code) ||
                  unicodeWhitespace(code) ||
                  unicodePunctuation(code)
                  ? nok(code)
                  : effects.attempt(
                      domain,
                      effects.attempt(path, done),
                      nok
                    )(code)
              }
              function done(code) {
                return (
                  effects.exit('literalAutolinkHttp'),
                  effects.exit('literalAutolink'),
                  ok(code)
                )
              }
            },
            previous: previousHttp,
          },
          emailAutolink = {
            tokenize: function tokenizeEmailAutolink(effects, ok, nok) {
              var hasDot,
                self = this
              return function start(code) {
                if (
                  !gfmAtext(code) ||
                  !previousEmail(self.previous) ||
                  previous(self.events)
                )
                  return nok(code)
                return (
                  effects.enter('literalAutolink'),
                  effects.enter('literalAutolinkEmail'),
                  atext(code)
                )
              }
              function atext(code) {
                return gfmAtext(code)
                  ? (effects.consume(code), atext)
                  : 64 === code
                  ? (effects.consume(code), label)
                  : nok(code)
              }
              function label(code) {
                return 46 === code
                  ? effects.check(punctuation, done, dotContinuation)(code)
                  : 45 === code || 95 === code
                  ? effects.check(
                      punctuation,
                      nok,
                      dashOrUnderscoreContinuation
                    )(code)
                  : asciiAlphanumeric(code)
                  ? (effects.consume(code), label)
                  : done(code)
              }
              function dotContinuation(code) {
                return effects.consume(code), (hasDot = !0), label
              }
              function dashOrUnderscoreContinuation(code) {
                return effects.consume(code), afterDashOrUnderscore
              }
              function afterDashOrUnderscore(code) {
                return 46 === code
                  ? effects.check(punctuation, nok, dotContinuation)(code)
                  : label(code)
              }
              function done(code) {
                return hasDot
                  ? (effects.exit('literalAutolinkEmail'),
                    effects.exit('literalAutolink'),
                    ok(code))
                  : nok(code)
              }
            },
            previous: previousEmail,
          },
          text = {}
        exports.text = text
        for (var code = 48; code < 123; )
          (text[code] = emailAutolink),
            58 === ++code ? (code = 65) : 91 === code && (code = 97)
        function trailingPunctuation(code) {
          return (
            33 === code ||
            34 === code ||
            39 === code ||
            41 === code ||
            42 === code ||
            44 === code ||
            46 === code ||
            58 === code ||
            59 === code ||
            60 === code ||
            63 === code ||
            95 === code ||
            126 === code
          )
        }
        function pathEnd(code) {
          return null === code || code < 0 || 32 === code || 60 === code
        }
        function gfmAtext(code) {
          return (
            43 === code ||
            45 === code ||
            46 === code ||
            95 === code ||
            asciiAlphanumeric(code)
          )
        }
        function previousWww(code) {
          return (
            null === code ||
            code < 0 ||
            32 === code ||
            40 === code ||
            42 === code ||
            95 === code ||
            126 === code
          )
        }
        function previousHttp(code) {
          return null === code || !asciiAlpha(code)
        }
        function previousEmail(code) {
          return 47 !== code && previousHttp(code)
        }
        function previous(events) {
          for (var index = events.length; index--; )
            if (
              ('labelLink' === events[index][1].type ||
                'labelImage' === events[index][1].type) &&
              !events[index][1]._balanced
            )
              return !0
        }
        ;(text[43] = emailAutolink),
          (text[45] = emailAutolink),
          (text[46] = emailAutolink),
          (text[95] = emailAutolink),
          (text[72] = [emailAutolink, httpAutolink]),
          (text[104] = [emailAutolink, httpAutolink]),
          (text[87] = [emailAutolink, wwwAutolink]),
          (text[119] = [emailAutolink, wwwAutolink])
      },
    '../../node_modules/micromark-extension-gfm-strikethrough/index.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        module.exports = function create(options) {
          var single = (options || {}).singleTilde,
            tokenizer = {
              tokenize: function tokenizeStrikethrough(effects, ok, nok) {
                var previous = this.previous,
                  events = this.events,
                  size = 0
                return start
                function start(code) {
                  return 126 !== code ||
                    (126 === previous &&
                      'characterEscape' !== events[events.length - 1][1].type)
                    ? nok(code)
                    : (effects.enter('strikethroughSequenceTemporary'),
                      more(code))
                }
                function more(code) {
                  var token,
                    after,
                    before = classifyCharacter(previous)
                  return 126 === code
                    ? size > 1
                      ? nok(code)
                      : (effects.consume(code), size++, more)
                    : size < 2 && !single
                    ? nok(code)
                    : ((token = effects.exit('strikethroughSequenceTemporary')),
                      (after = classifyCharacter(code)),
                      (token._open = !after || (2 === after && before)),
                      (token._close = !before || (2 === before && after)),
                      ok(code))
                }
              },
              resolveAll: function resolveAllStrikethrough(events, context) {
                var strikethrough,
                  text,
                  open,
                  nextEvents,
                  index = -1
                for (; ++index < events.length; )
                  if (
                    'enter' === events[index][0] &&
                    'strikethroughSequenceTemporary' ===
                      events[index][1].type &&
                    events[index][1]._close
                  )
                    for (open = index; open--; )
                      if (
                        'exit' === events[open][0] &&
                        'strikethroughSequenceTemporary' ===
                          events[open][1].type &&
                        events[open][1]._open &&
                        events[index][1].end.offset -
                          events[index][1].start.offset ==
                          events[open][1].end.offset -
                            events[open][1].start.offset
                      ) {
                        ;(events[index][1].type = 'strikethroughSequence'),
                          (events[open][1].type = 'strikethroughSequence'),
                          (strikethrough = {
                            type: 'strikethrough',
                            start: shallow(events[open][1].start),
                            end: shallow(events[index][1].end),
                          }),
                          (text = {
                            type: 'strikethroughText',
                            start: shallow(events[open][1].end),
                            end: shallow(events[index][1].start),
                          }),
                          (nextEvents = [
                            ['enter', strikethrough, context],
                            ['enter', events[open][1], context],
                            ['exit', events[open][1], context],
                            ['enter', text, context],
                          ]),
                          chunkedSplice(
                            nextEvents,
                            nextEvents.length,
                            0,
                            resolveAll(
                              context.parser.constructs.insideSpan.null,
                              events.slice(open + 1, index),
                              context
                            )
                          ),
                          chunkedSplice(nextEvents, nextEvents.length, 0, [
                            ['exit', text, context],
                            ['enter', events[index][1], context],
                            ['exit', events[index][1], context],
                            ['exit', strikethrough, context],
                          ]),
                          chunkedSplice(
                            events,
                            open - 1,
                            index - open + 3,
                            nextEvents
                          ),
                          (index = open + nextEvents.length - 2)
                        break
                      }
                return (function removeRemainingSequences(events) {
                  var index = -1,
                    length = events.length
                  for (; ++index < length; )
                    'strikethroughSequenceTemporary' ===
                      events[index][1].type && (events[index][1].type = 'data')
                  return events
                })(events)
              },
            }
          null == single && (single = !0)
          return { text: { 126: tokenizer }, insideSpan: { null: tokenizer } }
        }
        var classifyCharacter = __webpack_require__(
            '../../node_modules/micromark/dist/util/classify-character.js'
          ),
          chunkedSplice = __webpack_require__(
            '../../node_modules/micromark/dist/util/chunked-splice.js'
          ),
          resolveAll = __webpack_require__(
            '../../node_modules/micromark/dist/util/resolve-all.js'
          ),
          shallow = __webpack_require__(
            '../../node_modules/micromark/dist/util/shallow.js'
          )
      },
    '../../node_modules/micromark-extension-gfm-table/index.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      module.exports = __webpack_require__(
        '../../node_modules/micromark-extension-gfm-table/syntax.js'
      )
    },
    '../../node_modules/micromark-extension-gfm-table/syntax.js': function (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      exports.flow = {
        null: {
          tokenize: function tokenizeTable(effects, ok, nok) {
            var seenDelimiter,
              hasDash,
              align = [],
              tableHeaderCount = 0
            return function start(code) {
              if (null === code || -5 === code || -4 === code || -3 === code)
                return nok(code)
              if (
                ((effects.enter('table')._align = align),
                effects.enter('tableHead'),
                effects.enter('tableRow'),
                124 === code)
              )
                return cellDividerHead(code)
              return (
                tableHeaderCount++,
                effects.enter('temporaryTableCellContent'),
                inCellContentHead(code)
              )
            }
            function cellDividerHead(code) {
              return (
                effects.enter('tableCellDivider'),
                effects.consume(code),
                effects.exit('tableCellDivider'),
                (seenDelimiter = !0),
                cellBreakHead
              )
            }
            function cellBreakHead(code) {
              return null === code || -5 === code || -4 === code || -3 === code
                ? (function atRowEndHead(code) {
                    if (null === code) return nok(code)
                    return (
                      effects.exit('tableRow'),
                      effects.exit('tableHead'),
                      effects.enter('lineEnding'),
                      effects.consume(code),
                      effects.exit('lineEnding'),
                      effects.check(
                        setextUnderlineMini,
                        nok,
                        createSpace(effects, rowStartDelimiter, 'linePrefix', 4)
                      )
                    )
                  })(code)
                : -2 === code || -1 === code || 32 === code
                ? (effects.enter('whitespace'),
                  effects.consume(code),
                  inWhitespaceHead)
                : (seenDelimiter &&
                    ((seenDelimiter = void 0), tableHeaderCount++),
                  124 === code
                    ? cellDividerHead(code)
                    : (effects.enter('temporaryTableCellContent'),
                      inCellContentHead(code)))
            }
            function inWhitespaceHead(code) {
              return -2 === code || -1 === code || 32 === code
                ? (effects.consume(code), inWhitespaceHead)
                : (effects.exit('whitespace'), cellBreakHead(code))
            }
            function inCellContentHead(code) {
              return null === code || code < 0 || 32 === code || 124 === code
                ? (effects.exit('temporaryTableCellContent'),
                  cellBreakHead(code))
                : (effects.consume(code),
                  92 === code ? inCellContentEscapeHead : inCellContentHead)
            }
            function inCellContentEscapeHead(code) {
              return 92 === code || 124 === code
                ? (effects.consume(code), inCellContentHead)
                : inCellContentHead(code)
            }
            function rowStartDelimiter(code) {
              return null === code || code < 0 || 32 === code
                ? nok(code)
                : (effects.enter('tableDelimiterRow'),
                  atDelimiterRowBreak(code))
            }
            function atDelimiterRowBreak(code) {
              return null === code || -5 === code || -4 === code || -3 === code
                ? rowEndDelimiter(code)
                : -2 === code || -1 === code || 32 === code
                ? (effects.enter('whitespace'),
                  effects.consume(code),
                  inWhitespaceDelimiter)
                : 45 === code
                ? (effects.enter('tableDelimiterFiller'),
                  effects.consume(code),
                  (hasDash = !0),
                  align.push(null),
                  inFillerDelimiter)
                : 58 === code
                ? (effects.enter('tableDelimiterAlignment'),
                  effects.consume(code),
                  effects.exit('tableDelimiterAlignment'),
                  align.push('left'),
                  afterLeftAlignment)
                : 124 === code
                ? (effects.enter('tableCellDivider'),
                  effects.consume(code),
                  effects.exit('tableCellDivider'),
                  atDelimiterRowBreak)
                : nok(code)
            }
            function inWhitespaceDelimiter(code) {
              return -2 === code || -1 === code || 32 === code
                ? (effects.consume(code), inWhitespaceDelimiter)
                : (effects.exit('whitespace'), atDelimiterRowBreak(code))
            }
            function inFillerDelimiter(code) {
              return 45 === code
                ? (effects.consume(code), inFillerDelimiter)
                : (effects.exit('tableDelimiterFiller'),
                  58 === code
                    ? (effects.enter('tableDelimiterAlignment'),
                      effects.consume(code),
                      effects.exit('tableDelimiterAlignment'),
                      (align[align.length - 1] =
                        'left' === align[align.length - 1]
                          ? 'center'
                          : 'right'),
                      afterRightAlignment)
                    : atDelimiterRowBreak(code))
            }
            function afterLeftAlignment(code) {
              return 45 === code
                ? (effects.enter('tableDelimiterFiller'),
                  effects.consume(code),
                  (hasDash = !0),
                  inFillerDelimiter)
                : nok(code)
            }
            function afterRightAlignment(code) {
              return null === code || -5 === code || -4 === code || -3 === code
                ? rowEndDelimiter(code)
                : -2 === code || -1 === code || 32 === code
                ? (effects.enter('whitespace'),
                  effects.consume(code),
                  inWhitespaceDelimiter)
                : 124 === code
                ? (effects.enter('tableCellDivider'),
                  effects.consume(code),
                  effects.exit('tableCellDivider'),
                  atDelimiterRowBreak)
                : nok(code)
            }
            function rowEndDelimiter(code) {
              return (
                effects.exit('tableDelimiterRow'),
                hasDash && tableHeaderCount === align.length
                  ? null === code
                    ? tableClose(code)
                    : effects.check(
                        nextPrefixedOrBlank,
                        tableClose,
                        tableContinue
                      )(code)
                  : nok(code)
              )
            }
            function tableClose(code) {
              return effects.exit('table'), ok(code)
            }
            function tableContinue(code) {
              return (
                effects.enter('lineEnding'),
                effects.consume(code),
                effects.exit('lineEnding'),
                createSpace(effects, bodyStart, 'linePrefix', 4)
              )
            }
            function bodyStart(code) {
              return effects.enter('tableBody'), rowStartBody(code)
            }
            function rowStartBody(code) {
              return (
                effects.enter('tableRow'),
                124 === code
                  ? cellDividerBody(code)
                  : (effects.enter('temporaryTableCellContent'),
                    inCellContentBody(code))
              )
            }
            function cellDividerBody(code) {
              return (
                effects.enter('tableCellDivider'),
                effects.consume(code),
                effects.exit('tableCellDivider'),
                cellBreakBody
              )
            }
            function cellBreakBody(code) {
              return null === code || -5 === code || -4 === code || -3 === code
                ? (function atRowEndBody(code) {
                    if ((effects.exit('tableRow'), null === code))
                      return tableBodyClose(code)
                    return effects.check(
                      nextPrefixedOrBlank,
                      tableBodyClose,
                      tableBodyContinue
                    )(code)
                  })(code)
                : -2 === code || -1 === code || 32 === code
                ? (effects.enter('whitespace'),
                  effects.consume(code),
                  inWhitespaceBody)
                : 124 === code
                ? cellDividerBody(code)
                : (effects.enter('temporaryTableCellContent'),
                  inCellContentBody(code))
            }
            function inWhitespaceBody(code) {
              return -2 === code || -1 === code || 32 === code
                ? (effects.consume(code), inWhitespaceBody)
                : (effects.exit('whitespace'), cellBreakBody(code))
            }
            function inCellContentBody(code) {
              return null === code || code < 0 || 32 === code || 124 === code
                ? (effects.exit('temporaryTableCellContent'),
                  cellBreakBody(code))
                : (effects.consume(code),
                  92 === code ? inCellContentEscapeBody : inCellContentBody)
            }
            function inCellContentEscapeBody(code) {
              return 92 === code || 124 === code
                ? (effects.consume(code), inCellContentBody)
                : inCellContentBody(code)
            }
            function tableBodyClose(code) {
              return effects.exit('tableBody'), tableClose(code)
            }
            function tableBodyContinue(code) {
              return (
                effects.enter('lineEnding'),
                effects.consume(code),
                effects.exit('lineEnding'),
                createSpace(effects, rowStartBody, 'linePrefix', 4)
              )
            }
          },
          resolve: function resolveTable(events, context) {
            var token,
              inHead,
              inDelimiterRow,
              inRow,
              cell,
              content,
              text,
              contentStart,
              contentEnd,
              cellStart,
              length = events.length,
              index = -1
            for (; ++index < length; )
              (token = events[index][1]),
                inRow &&
                  ('temporaryTableCellContent' === token.type &&
                    ((contentStart = contentStart || index),
                    (contentEnd = index)),
                  ('tableCellDivider' !== token.type &&
                    'tableRow' !== token.type) ||
                    !contentEnd ||
                    ((text = {
                      type: 'chunkText',
                      start: (content = {
                        type: 'tableContent',
                        start: events[contentStart][1].start,
                        end: events[contentEnd][1].end,
                      }).start,
                      end: content.end,
                      contentType: 'text',
                    }),
                    events.splice(
                      contentStart,
                      contentEnd - contentStart + 1,
                      ['enter', content, context],
                      ['enter', text, context],
                      ['exit', text, context],
                      ['exit', content, context]
                    ),
                    (index -= contentEnd - contentStart - 3),
                    (length = events.length),
                    (contentStart = void 0),
                    (contentEnd = void 0))),
                'exit' === events[index][0] &&
                  cellStart &&
                  cellStart + 1 < index &&
                  ('tableCellDivider' === token.type ||
                    ('tableRow' === token.type &&
                      (cellStart + 3 < index ||
                        'whitespace' !== events[cellStart][1].type))) &&
                  ((cell = {
                    type: inDelimiterRow
                      ? 'tableDelimiter'
                      : inHead
                      ? 'tableHeader'
                      : 'tableData',
                    start: events[cellStart][1].start,
                    end: events[index][1].end,
                  }),
                  events.splice(
                    index + ('tableCellDivider' === token.type ? 1 : 0),
                    0,
                    ['exit', cell, context]
                  ),
                  events.splice(cellStart, 0, ['enter', cell, context]),
                  (index += 2),
                  (length = events.length),
                  (cellStart = index + 1)),
                'tableRow' === token.type &&
                  (inRow = 'enter' === events[index][0]) &&
                  (cellStart = index + 1),
                'tableDelimiterRow' === token.type &&
                  (inDelimiterRow = 'enter' === events[index][0]) &&
                  (cellStart = index + 1),
                'tableHead' === token.type &&
                  (inHead = 'enter' === events[index][0])
            return events
          },
          interruptible: !0,
        },
      }
      var createSpace = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-space.js'
        ),
        setextUnderlineMini = {
          tokenize: function tokenizeSetextUnderlineMini(effects, ok, nok) {
            return function start(code) {
              if (45 !== code) return nok(code)
              return effects.enter('setextUnderline'), sequence(code)
            }
            function sequence(code) {
              return 45 === code
                ? (effects.consume(code), sequence)
                : whitespace(code)
            }
            function whitespace(code) {
              return -2 === code || -1 === code || 32 === code
                ? (effects.consume(code), whitespace)
                : null === code || -5 === code || -4 === code || -3 === code
                ? ok(code)
                : nok(code)
            }
          },
          partial: !0,
        },
        nextPrefixedOrBlank = {
          tokenize: function tokenizeNextPrefixedOrBlank(effects, ok, nok) {
            var size = 0
            return function start(code) {
              return effects.enter('check'), effects.consume(code), whitespace
            }
            function whitespace(code) {
              return -1 === code || 32 === code
                ? (effects.consume(code), 4 === ++size ? ok : whitespace)
                : null === code || code < 0
                ? ok(code)
                : nok(code)
            }
          },
          partial: !0,
        }
    },
    '../../node_modules/micromark-extension-gfm-task-list-item/index.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        module.exports = __webpack_require__(
          '../../node_modules/micromark-extension-gfm-task-list-item/syntax.js'
        )
      },
    '../../node_modules/micromark-extension-gfm-task-list-item/syntax.js':
      function (__unused_webpack_module, exports, __webpack_require__) {
        var markdownLineEndingOrSpace = __webpack_require__(
            '../../node_modules/micromark/dist/character/markdown-line-ending-or-space.js'
          ),
          spaceFactory = __webpack_require__(
            '../../node_modules/micromark/dist/tokenize/factory-space.js'
          ),
          prefixSize = __webpack_require__(
            '../../node_modules/micromark/dist/util/prefix-size.js'
          ),
          tasklistCheck = {
            tokenize: function tokenizeTasklistCheck(effects, ok, nok) {
              var self = this
              return function open(code) {
                if (
                  91 !== code ||
                  null !== self.previous ||
                  !self._gfmTasklistFirstContentOfListItem
                )
                  return nok(code)
                return (
                  effects.enter('taskListCheck'),
                  effects.enter('taskListCheckMarker'),
                  effects.consume(code),
                  effects.exit('taskListCheckMarker'),
                  inside
                )
              }
              function inside(code) {
                return -2 === code || 32 === code
                  ? (effects.enter('taskListCheckValueUnchecked'),
                    effects.consume(code),
                    effects.exit('taskListCheckValueUnchecked'),
                    close)
                  : 88 === code || 120 === code
                  ? (effects.enter('taskListCheckValueChecked'),
                    effects.consume(code),
                    effects.exit('taskListCheckValueChecked'),
                    close)
                  : nok(code)
              }
              function close(code) {
                return 93 === code
                  ? (effects.enter('taskListCheckMarker'),
                    effects.consume(code),
                    effects.exit('taskListCheckMarker'),
                    effects.exit('taskListCheck'),
                    effects.check({ tokenize: spaceThenNonSpace }, ok, nok))
                  : nok(code)
              }
            },
          }
        function spaceThenNonSpace(effects, ok, nok) {
          var self = this
          return spaceFactory(
            effects,
            function after(code) {
              return prefixSize(self.events, 'whitespace') &&
                null !== code &&
                !markdownLineEndingOrSpace(code)
                ? ok(code)
                : nok(code)
            },
            'whitespace'
          )
        }
        exports.text = { 91: tasklistCheck }
      },
    '../../node_modules/micromark-extension-gfm/index.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      module.exports = __webpack_require__(
        '../../node_modules/micromark-extension-gfm/syntax.js'
      )
    },
    '../../node_modules/micromark-extension-gfm/syntax.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      var combine = __webpack_require__(
          '../../node_modules/micromark/dist/util/combine-extensions.js'
        ),
        autolink = __webpack_require__(
          '../../node_modules/micromark-extension-gfm-autolink-literal/index.js'
        ),
        strikethrough = __webpack_require__(
          '../../node_modules/micromark-extension-gfm-strikethrough/index.js'
        ),
        table = __webpack_require__(
          '../../node_modules/micromark-extension-gfm-table/index.js'
        ),
        tasklist = __webpack_require__(
          '../../node_modules/micromark-extension-gfm-task-list-item/index.js'
        )
      module.exports = function create(options) {
        return combine([autolink, strikethrough(options), table, tasklist])
      }
    },
    '../../node_modules/micromark/dist/character/ascii-alpha.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var asciiAlpha = __webpack_require__(
        '../../node_modules/micromark/dist/util/regex-check.js'
      )(/[A-Za-z]/)
      module.exports = asciiAlpha
    },
    '../../node_modules/micromark/dist/character/ascii-alphanumeric.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        'use strict'
        var asciiAlphanumeric = __webpack_require__(
          '../../node_modules/micromark/dist/util/regex-check.js'
        )(/[\dA-Za-z]/)
        module.exports = asciiAlphanumeric
      },
    '../../node_modules/micromark/dist/character/ascii-atext.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var asciiAtext = __webpack_require__(
        '../../node_modules/micromark/dist/util/regex-check.js'
      )(/[#-'*+\--9=?A-Z^-~]/)
      module.exports = asciiAtext
    },
    '../../node_modules/micromark/dist/character/ascii-control.js': function (
      module
    ) {
      'use strict'
      module.exports = function asciiControl(code) {
        return code < 32 || 127 === code
      }
    },
    '../../node_modules/micromark/dist/character/ascii-digit.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var asciiDigit = __webpack_require__(
        '../../node_modules/micromark/dist/util/regex-check.js'
      )(/\d/)
      module.exports = asciiDigit
    },
    '../../node_modules/micromark/dist/character/ascii-hex-digit.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var asciiHexDigit = __webpack_require__(
        '../../node_modules/micromark/dist/util/regex-check.js'
      )(/[\dA-Fa-f]/)
      module.exports = asciiHexDigit
    },
    '../../node_modules/micromark/dist/character/ascii-punctuation.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        'use strict'
        var asciiPunctuation = __webpack_require__(
          '../../node_modules/micromark/dist/util/regex-check.js'
        )(/[!-/:-@[-`{-~]/)
        module.exports = asciiPunctuation
      },
    '../../node_modules/micromark/dist/character/markdown-line-ending-or-space.js':
      function (module) {
        'use strict'
        module.exports = function markdownLineEndingOrSpace(code) {
          return code < 0 || 32 === code
        }
      },
    '../../node_modules/micromark/dist/character/markdown-line-ending.js':
      function (module) {
        'use strict'
        module.exports = function markdownLineEnding(code) {
          return code < -2
        }
      },
    '../../node_modules/micromark/dist/character/markdown-space.js': function (
      module
    ) {
      'use strict'
      module.exports = function markdownSpace(code) {
        return -2 === code || -1 === code || 32 === code
      }
    },
    '../../node_modules/micromark/dist/character/unicode-punctuation.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        'use strict'
        var unicodePunctuationRegex = __webpack_require__(
            '../../node_modules/micromark/dist/constant/unicode-punctuation-regex.js'
          ),
          unicodePunctuation = __webpack_require__(
            '../../node_modules/micromark/dist/util/regex-check.js'
          )(unicodePunctuationRegex)
        module.exports = unicodePunctuation
      },
    '../../node_modules/micromark/dist/character/unicode-whitespace.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        'use strict'
        var unicodeWhitespace = __webpack_require__(
          '../../node_modules/micromark/dist/util/regex-check.js'
        )(/\s/)
        module.exports = unicodeWhitespace
      },
    '../../node_modules/micromark/dist/constant/assign.js': function (module) {
      'use strict'
      var assign = Object.assign
      module.exports = assign
    },
    '../../node_modules/micromark/dist/constant/from-char-code.js': function (
      module
    ) {
      'use strict'
      var fromCharCode = String.fromCharCode
      module.exports = fromCharCode
    },
    '../../node_modules/micromark/dist/constant/has-own-property.js': function (
      module
    ) {
      'use strict'
      var own = {}.hasOwnProperty
      module.exports = own
    },
    '../../node_modules/micromark/dist/constant/html-block-names.js': function (
      module
    ) {
      'use strict'
      module.exports = [
        'address',
        'article',
        'aside',
        'base',
        'basefont',
        'blockquote',
        'body',
        'caption',
        'center',
        'col',
        'colgroup',
        'dd',
        'details',
        'dialog',
        'dir',
        'div',
        'dl',
        'dt',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'frame',
        'frameset',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hr',
        'html',
        'iframe',
        'legend',
        'li',
        'link',
        'main',
        'menu',
        'menuitem',
        'nav',
        'noframes',
        'ol',
        'optgroup',
        'option',
        'p',
        'param',
        'section',
        'source',
        'summary',
        'table',
        'tbody',
        'td',
        'tfoot',
        'th',
        'thead',
        'title',
        'tr',
        'track',
        'ul',
      ]
    },
    '../../node_modules/micromark/dist/constant/html-raw-names.js': function (
      module
    ) {
      'use strict'
      module.exports = ['pre', 'script', 'style', 'textarea']
    },
    '../../node_modules/micromark/dist/constant/splice.js': function (module) {
      'use strict'
      var splice = [].splice
      module.exports = splice
    },
    '../../node_modules/micromark/dist/constant/unicode-punctuation-regex.js':
      function (module) {
        'use strict'
        module.exports =
          /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
      },
    '../../node_modules/micromark/dist/constructs.js': function (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 })
      var text$1 = __webpack_require__(
          '../../node_modules/micromark/dist/initialize/text.js'
        ),
        attention = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/attention.js'
        ),
        autolink = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/autolink.js'
        ),
        blockQuote = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/block-quote.js'
        ),
        characterEscape = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/character-escape.js'
        ),
        characterReference = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/character-reference.js'
        ),
        codeFenced = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/code-fenced.js'
        ),
        codeIndented = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/code-indented.js'
        ),
        codeText = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/code-text.js'
        ),
        definition = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/definition.js'
        ),
        hardBreakEscape = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/hard-break-escape.js'
        ),
        headingAtx = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/heading-atx.js'
        ),
        htmlFlow = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/html-flow.js'
        ),
        htmlText = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/html-text.js'
        ),
        labelEnd = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/label-end.js'
        ),
        labelStartImage = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/label-start-image.js'
        ),
        labelStartLink = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/label-start-link.js'
        ),
        lineEnding = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/line-ending.js'
        ),
        list = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/list.js'
        ),
        setextUnderline = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/setext-underline.js'
        ),
        thematicBreak = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/thematic-break.js'
        ),
        document = {
          42: list,
          43: list,
          45: list,
          48: list,
          49: list,
          50: list,
          51: list,
          52: list,
          53: list,
          54: list,
          55: list,
          56: list,
          57: list,
          62: blockQuote,
        },
        contentInitial = { 91: definition },
        flowInitial = {
          '-2': codeIndented,
          '-1': codeIndented,
          32: codeIndented,
        },
        flow = {
          35: headingAtx,
          42: thematicBreak,
          45: [setextUnderline, thematicBreak],
          60: htmlFlow,
          61: setextUnderline,
          95: thematicBreak,
          96: codeFenced,
          126: codeFenced,
        },
        string = { 38: characterReference, 92: characterEscape },
        text = {
          '-5': lineEnding,
          '-4': lineEnding,
          '-3': lineEnding,
          33: labelStartImage,
          38: characterReference,
          42: attention,
          60: [autolink, htmlText],
          91: labelStartLink,
          92: [hardBreakEscape, characterEscape],
          93: labelEnd,
          95: attention,
          96: codeText,
        },
        insideSpan = { null: [attention, text$1.resolver] }
      ;(exports.contentInitial = contentInitial),
        (exports.disable = { null: [] }),
        (exports.document = document),
        (exports.flow = flow),
        (exports.flowInitial = flowInitial),
        (exports.insideSpan = insideSpan),
        (exports.string = string),
        (exports.text = text)
    },
    '../../node_modules/micromark/dist/initialize/content.js': function (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 })
      var markdownLineEnding = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending.js'
        ),
        factorySpace = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-space.js'
        ),
        tokenize = function initializeContent(effects) {
          var previous,
            contentStart = effects.attempt(
              this.parser.constructs.contentInitial,
              function afterContentStartConstruct(code) {
                if (null === code) return void effects.consume(code)
                return (
                  effects.enter('lineEnding'),
                  effects.consume(code),
                  effects.exit('lineEnding'),
                  factorySpace(effects, contentStart, 'linePrefix')
                )
              },
              function paragraphInitial(code) {
                return effects.enter('paragraph'), lineStart(code)
              }
            )
          return contentStart
          function lineStart(code) {
            var token = effects.enter('chunkText', {
              contentType: 'text',
              previous: previous,
            })
            return (
              previous && (previous.next = token),
              (previous = token),
              data(code)
            )
          }
          function data(code) {
            return null === code
              ? (effects.exit('chunkText'),
                effects.exit('paragraph'),
                void effects.consume(code))
              : markdownLineEnding(code)
              ? (effects.consume(code), effects.exit('chunkText'), lineStart)
              : (effects.consume(code), data)
          }
        }
      exports.tokenize = tokenize
    },
    '../../node_modules/micromark/dist/initialize/document.js': function (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 })
      var markdownLineEnding = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending.js'
        ),
        factorySpace = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-space.js'
        ),
        partialBlankLine = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/partial-blank-line.js'
        ),
        tokenize = function initializeDocument(effects) {
          var inspectResult,
            childFlow,
            childToken,
            self = this,
            stack = [],
            continued = 0,
            inspectConstruct = {
              tokenize: function tokenizeInspect(effects, ok) {
                var subcontinued = 0
                return (inspectResult = {}), inspectStart
                function inspectStart(code) {
                  return subcontinued < stack.length
                    ? ((self.containerState = stack[subcontinued][1]),
                      effects.attempt(
                        stack[subcontinued][0].continuation,
                        inspectContinue,
                        inspectLess
                      )(code))
                    : childFlow.currentConstruct &&
                      childFlow.currentConstruct.concrete
                    ? ((inspectResult.flowContinue = !0), inspectDone(code))
                    : ((self.interrupt =
                        childFlow.currentConstruct &&
                        childFlow.currentConstruct.interruptible),
                      (self.containerState = {}),
                      effects.attempt(
                        containerConstruct,
                        inspectFlowEnd,
                        inspectDone
                      )(code))
                }
                function inspectContinue(code) {
                  return (
                    subcontinued++,
                    self.containerState._closeFlow
                      ? inspectFlowEnd(code)
                      : inspectStart(code)
                  )
                }
                function inspectLess(code) {
                  return childFlow.currentConstruct &&
                    childFlow.currentConstruct.lazy
                    ? ((self.containerState = {}),
                      effects.attempt(
                        containerConstruct,
                        inspectFlowEnd,
                        effects.attempt(
                          lazyFlowConstruct,
                          inspectFlowEnd,
                          effects.check(
                            partialBlankLine,
                            inspectFlowEnd,
                            inspectLazy
                          )
                        )
                      )(code))
                    : inspectFlowEnd(code)
                }
                function inspectLazy(code) {
                  return (
                    (subcontinued = stack.length),
                    (inspectResult.lazy = !0),
                    (inspectResult.flowContinue = !0),
                    inspectDone(code)
                  )
                }
                function inspectFlowEnd(code) {
                  return (inspectResult.flowEnd = !0), inspectDone(code)
                }
                function inspectDone(code) {
                  return (
                    (inspectResult.continued = subcontinued),
                    (self.interrupt = self.containerState = void 0),
                    ok(code)
                  )
                }
              },
              partial: !0,
            }
          return start
          function start(code) {
            return continued < stack.length
              ? ((self.containerState = stack[continued][1]),
                effects.attempt(
                  stack[continued][0].continuation,
                  documentContinue,
                  documentContinued
                )(code))
              : documentContinued(code)
          }
          function documentContinue(code) {
            return continued++, start(code)
          }
          function documentContinued(code) {
            return inspectResult && inspectResult.flowContinue
              ? flowStart(code)
              : ((self.interrupt =
                  childFlow &&
                  childFlow.currentConstruct &&
                  childFlow.currentConstruct.interruptible),
                (self.containerState = {}),
                effects.attempt(
                  containerConstruct,
                  containerContinue,
                  flowStart
                )(code))
          }
          function containerContinue(code) {
            return (
              stack.push([self.currentConstruct, self.containerState]),
              (self.containerState = void 0),
              documentContinued(code)
            )
          }
          function flowStart(code) {
            return null === code
              ? (exitContainers(0, !0), void effects.consume(code))
              : ((childFlow = childFlow || self.parser.flow(self.now())),
                effects.enter('chunkFlow', {
                  contentType: 'flow',
                  previous: childToken,
                  _tokenizer: childFlow,
                }),
                flowContinue(code))
          }
          function flowContinue(code) {
            return null === code
              ? (continueFlow(effects.exit('chunkFlow')), flowStart(code))
              : markdownLineEnding(code)
              ? (effects.consume(code),
                continueFlow(effects.exit('chunkFlow')),
                effects.check(inspectConstruct, documentAfterPeek))
              : (effects.consume(code), flowContinue)
          }
          function documentAfterPeek(code) {
            return (
              exitContainers(
                inspectResult.continued,
                inspectResult && inspectResult.flowEnd
              ),
              (continued = 0),
              start(code)
            )
          }
          function continueFlow(token) {
            childToken && (childToken.next = token),
              (childToken = token),
              (childFlow.lazy = inspectResult && inspectResult.lazy),
              childFlow.defineSkip(token.start),
              childFlow.write(self.sliceStream(token))
          }
          function exitContainers(size, end) {
            var index = stack.length
            for (
              childFlow &&
              end &&
              (childFlow.write([null]), (childToken = childFlow = void 0));
              index-- > size;

            )
              (self.containerState = stack[index][1]),
                stack[index][0].exit.call(self, effects)
            stack.length = size
          }
        },
        containerConstruct = {
          tokenize: function tokenizeContainer(effects, ok, nok) {
            return factorySpace(
              effects,
              effects.attempt(this.parser.constructs.document, ok, nok),
              'linePrefix',
              this.parser.constructs.disable.null.indexOf('codeIndented') > -1
                ? void 0
                : 4
            )
          },
        },
        lazyFlowConstruct = {
          tokenize: function tokenizeLazyFlow(effects, ok, nok) {
            return factorySpace(
              effects,
              effects.lazy(this.parser.constructs.flow, ok, nok),
              'linePrefix',
              this.parser.constructs.disable.null.indexOf('codeIndented') > -1
                ? void 0
                : 4
            )
          },
        }
      exports.tokenize = tokenize
    },
    '../../node_modules/micromark/dist/initialize/flow.js': function (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 })
      var content = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/content.js'
        ),
        factorySpace = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-space.js'
        ),
        partialBlankLine = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/partial-blank-line.js'
        ),
        tokenize = function initializeFlow(effects) {
          var self = this,
            initial = effects.attempt(
              partialBlankLine,
              function atBlankEnding(code) {
                if (null === code) return void effects.consume(code)
                return (
                  effects.enter('lineEndingBlank'),
                  effects.consume(code),
                  effects.exit('lineEndingBlank'),
                  (self.currentConstruct = void 0),
                  initial
                )
              },
              effects.attempt(
                this.parser.constructs.flowInitial,
                afterConstruct,
                factorySpace(
                  effects,
                  effects.attempt(
                    this.parser.constructs.flow,
                    afterConstruct,
                    effects.attempt(content, afterConstruct)
                  ),
                  'linePrefix'
                )
              )
            )
          return initial
          function afterConstruct(code) {
            if (null !== code)
              return (
                effects.enter('lineEnding'),
                effects.consume(code),
                effects.exit('lineEnding'),
                (self.currentConstruct = void 0),
                initial
              )
            effects.consume(code)
          }
        }
      exports.tokenize = tokenize
    },
    '../../node_modules/micromark/dist/initialize/text.js': function (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict'
      Object.defineProperty(exports, '__esModule', { value: !0 })
      var assign = __webpack_require__(
          '../../node_modules/micromark/dist/constant/assign.js'
        ),
        shallow = __webpack_require__(
          '../../node_modules/micromark/dist/util/shallow.js'
        ),
        text = initializeFactory('text'),
        string = initializeFactory('string'),
        resolver = { resolveAll: createResolver() }
      function initializeFactory(field) {
        return {
          tokenize: function initializeText(effects) {
            var self = this,
              constructs = this.parser.constructs[field],
              text = effects.attempt(constructs, start, notText)
            return start
            function start(code) {
              return atBreak(code) ? text(code) : notText(code)
            }
            function notText(code) {
              if (null !== code)
                return effects.enter('data'), effects.consume(code), data
              effects.consume(code)
            }
            function data(code) {
              return atBreak(code)
                ? (effects.exit('data'), text(code))
                : (effects.consume(code), data)
            }
            function atBreak(code) {
              var list = constructs[code],
                index = -1
              if (null === code) return !0
              if (list)
                for (; ++index < list.length; )
                  if (
                    !list[index].previous ||
                    list[index].previous.call(self, self.previous)
                  )
                    return !0
            }
          },
          resolveAll: createResolver(
            'text' === field ? resolveAllLineSuffixes : void 0
          ),
        }
      }
      function createResolver(extraResolver) {
        return function resolveAllText(events, context) {
          var enter,
            index = -1
          for (; ++index <= events.length; )
            void 0 === enter
              ? events[index] &&
                'data' === events[index][1].type &&
                ((enter = index), index++)
              : (events[index] && 'data' === events[index][1].type) ||
                (index !== enter + 2 &&
                  ((events[enter][1].end = events[index - 1][1].end),
                  events.splice(enter + 2, index - enter - 2),
                  (index = enter + 2)),
                (enter = void 0))
          return extraResolver ? extraResolver(events, context) : events
        }
      }
      function resolveAllLineSuffixes(events, context) {
        for (
          var chunks,
            data,
            chunk,
            index,
            bufferIndex,
            size,
            tabs,
            token,
            eventIndex = -1;
          ++eventIndex <= events.length;

        )
          if (
            (eventIndex === events.length ||
              'lineEnding' === events[eventIndex][1].type) &&
            'data' === events[eventIndex - 1][1].type
          ) {
            for (
              data = events[eventIndex - 1][1],
                index = (chunks = context.sliceStream(data)).length,
                bufferIndex = -1,
                size = 0,
                tabs = void 0;
              index--;

            )
              if ('string' == typeof (chunk = chunks[index])) {
                for (
                  bufferIndex = chunk.length;
                  32 === chunk.charCodeAt(bufferIndex - 1);

                )
                  size++, bufferIndex--
                if (bufferIndex) break
                bufferIndex = -1
              } else if (-2 === chunk) (tabs = !0), size++
              else if (-1 !== chunk) {
                index++
                break
              }
            size &&
              ((token = {
                type:
                  eventIndex === events.length || tabs || size < 2
                    ? 'lineSuffix'
                    : 'hardBreakTrailing',
                start: {
                  line: data.end.line,
                  column: data.end.column - size,
                  offset: data.end.offset - size,
                  _index: data.start._index + index,
                  _bufferIndex: index
                    ? bufferIndex
                    : data.start._bufferIndex + bufferIndex,
                },
                end: shallow(data.end),
              }),
              (data.end = shallow(token.start)),
              data.start.offset === data.end.offset
                ? assign(data, token)
                : (events.splice(
                    eventIndex,
                    0,
                    ['enter', token, context],
                    ['exit', token, context]
                  ),
                  (eventIndex += 2))),
              eventIndex++
          }
        return events
      }
      ;(exports.resolver = resolver),
        (exports.string = string),
        (exports.text = text)
    },
    '../../node_modules/micromark/dist/parse.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var content = __webpack_require__(
          '../../node_modules/micromark/dist/initialize/content.js'
        ),
        document = __webpack_require__(
          '../../node_modules/micromark/dist/initialize/document.js'
        ),
        flow = __webpack_require__(
          '../../node_modules/micromark/dist/initialize/flow.js'
        ),
        text = __webpack_require__(
          '../../node_modules/micromark/dist/initialize/text.js'
        ),
        combineExtensions = __webpack_require__(
          '../../node_modules/micromark/dist/util/combine-extensions.js'
        ),
        createTokenizer = __webpack_require__(
          '../../node_modules/micromark/dist/util/create-tokenizer.js'
        ),
        miniflat = __webpack_require__(
          '../../node_modules/micromark/dist/util/miniflat.js'
        ),
        constructs = __webpack_require__(
          '../../node_modules/micromark/dist/constructs.js'
        )
      module.exports = function parse(options) {
        var parser = {
          defined: [],
          constructs: combineExtensions(
            [constructs].concat(miniflat((options || {}).extensions))
          ),
          content: create(content),
          document: create(document),
          flow: create(flow),
          string: create(text.string),
          text: create(text.text),
        }
        return parser
        function create(initializer) {
          return function creator(from) {
            return createTokenizer(parser, initializer, from)
          }
        }
      }
    },
    '../../node_modules/micromark/dist/postprocess.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var subtokenize = __webpack_require__(
        '../../node_modules/micromark/dist/util/subtokenize.js'
      )
      module.exports = function postprocess(events) {
        for (; !subtokenize(events); );
        return events
      }
    },
    '../../node_modules/micromark/dist/preprocess.js': function (module) {
      'use strict'
      var search = /[\0\t\n\r]/g
      module.exports = function preprocess() {
        var atCarriageReturn,
          start = !0,
          column = 1,
          buffer = ''
        return function preprocessor(value, encoding, end) {
          var match,
            next,
            startPosition,
            endPosition,
            code,
            chunks = []
          ;(value = buffer + value.toString(encoding)),
            (startPosition = 0),
            (buffer = ''),
            start &&
              (65279 === value.charCodeAt(0) && startPosition++,
              (start = void 0))
          for (; startPosition < value.length; ) {
            if (
              ((search.lastIndex = startPosition),
              (endPosition = (match = search.exec(value))
                ? match.index
                : value.length),
              (code = value.charCodeAt(endPosition)),
              !match)
            ) {
              buffer = value.slice(startPosition)
              break
            }
            if (
              10 === code &&
              startPosition === endPosition &&
              atCarriageReturn
            )
              chunks.push(-3), (atCarriageReturn = void 0)
            else if (
              (atCarriageReturn &&
                (chunks.push(-5), (atCarriageReturn = void 0)),
              startPosition < endPosition &&
                (chunks.push(value.slice(startPosition, endPosition)),
                (column += endPosition - startPosition)),
              0 === code)
            )
              chunks.push(65533), column++
            else if (9 === code)
              for (
                next = 4 * Math.ceil(column / 4), chunks.push(-2);
                column++ < next;

              )
                chunks.push(-1)
            else
              10 === code
                ? (chunks.push(-4), (column = 1))
                : ((atCarriageReturn = !0), (column = 1))
            startPosition = endPosition + 1
          }
          end &&
            (atCarriageReturn && chunks.push(-5),
            buffer && chunks.push(buffer),
            chunks.push(null))
          return chunks
        }
      }
    },
    '../../node_modules/micromark/dist/tokenize/attention.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var chunkedPush = __webpack_require__(
          '../../node_modules/micromark/dist/util/chunked-push.js'
        ),
        chunkedSplice = __webpack_require__(
          '../../node_modules/micromark/dist/util/chunked-splice.js'
        ),
        classifyCharacter = __webpack_require__(
          '../../node_modules/micromark/dist/util/classify-character.js'
        ),
        movePoint = __webpack_require__(
          '../../node_modules/micromark/dist/util/move-point.js'
        ),
        resolveAll = __webpack_require__(
          '../../node_modules/micromark/dist/util/resolve-all.js'
        ),
        shallow = __webpack_require__(
          '../../node_modules/micromark/dist/util/shallow.js'
        ),
        attention = {
          name: 'attention',
          tokenize: function tokenizeAttention(effects, ok) {
            var marker,
              before = classifyCharacter(this.previous)
            return function start(code) {
              return (
                effects.enter('attentionSequence'),
                (marker = code),
                sequence(code)
              )
            }
            function sequence(code) {
              var token, after, open, close
              return code === marker
                ? (effects.consume(code), sequence)
                : ((token = effects.exit('attentionSequence')),
                  (open =
                    !(after = classifyCharacter(code)) ||
                    (2 === after && before)),
                  (close = !before || (2 === before && after)),
                  (token._open =
                    42 === marker ? open : open && (before || !close)),
                  (token._close =
                    42 === marker ? close : close && (after || !open)),
                  ok(code))
            }
          },
          resolveAll: function resolveAllAttention(events, context) {
            var open,
              group,
              text,
              openingSequence,
              closingSequence,
              use,
              nextEvents,
              offset,
              index = -1
            for (; ++index < events.length; )
              if (
                'enter' === events[index][0] &&
                'attentionSequence' === events[index][1].type &&
                events[index][1]._close
              )
                for (open = index; open--; )
                  if (
                    'exit' === events[open][0] &&
                    'attentionSequence' === events[open][1].type &&
                    events[open][1]._open &&
                    context.sliceSerialize(events[open][1]).charCodeAt(0) ===
                      context.sliceSerialize(events[index][1]).charCodeAt(0)
                  ) {
                    if (
                      (events[open][1]._close || events[index][1]._open) &&
                      (events[index][1].end.offset -
                        events[index][1].start.offset) %
                        3 &&
                      !(
                        (events[open][1].end.offset -
                          events[open][1].start.offset +
                          events[index][1].end.offset -
                          events[index][1].start.offset) %
                        3
                      )
                    )
                      continue
                    ;(openingSequence = {
                      type:
                        (use =
                          events[open][1].end.offset -
                            events[open][1].start.offset >
                            1 &&
                          events[index][1].end.offset -
                            events[index][1].start.offset >
                            1
                            ? 2
                            : 1) > 1
                          ? 'strongSequence'
                          : 'emphasisSequence',
                      start: movePoint(shallow(events[open][1].end), -use),
                      end: shallow(events[open][1].end),
                    }),
                      (closingSequence = {
                        type: use > 1 ? 'strongSequence' : 'emphasisSequence',
                        start: shallow(events[index][1].start),
                        end: movePoint(shallow(events[index][1].start), use),
                      }),
                      (text = {
                        type: use > 1 ? 'strongText' : 'emphasisText',
                        start: shallow(events[open][1].end),
                        end: shallow(events[index][1].start),
                      }),
                      (group = {
                        type: use > 1 ? 'strong' : 'emphasis',
                        start: shallow(openingSequence.start),
                        end: shallow(closingSequence.end),
                      }),
                      (events[open][1].end = shallow(openingSequence.start)),
                      (events[index][1].start = shallow(closingSequence.end)),
                      (nextEvents = []),
                      events[open][1].end.offset -
                        events[open][1].start.offset &&
                        (nextEvents = chunkedPush(nextEvents, [
                          ['enter', events[open][1], context],
                          ['exit', events[open][1], context],
                        ])),
                      (nextEvents = chunkedPush(nextEvents, [
                        ['enter', group, context],
                        ['enter', openingSequence, context],
                        ['exit', openingSequence, context],
                        ['enter', text, context],
                      ])),
                      (nextEvents = chunkedPush(
                        nextEvents,
                        resolveAll(
                          context.parser.constructs.insideSpan.null,
                          events.slice(open + 1, index),
                          context
                        )
                      )),
                      (nextEvents = chunkedPush(nextEvents, [
                        ['exit', text, context],
                        ['enter', closingSequence, context],
                        ['exit', closingSequence, context],
                        ['exit', group, context],
                      ])),
                      events[index][1].end.offset -
                      events[index][1].start.offset
                        ? ((offset = 2),
                          (nextEvents = chunkedPush(nextEvents, [
                            ['enter', events[index][1], context],
                            ['exit', events[index][1], context],
                          ])))
                        : (offset = 0),
                      chunkedSplice(
                        events,
                        open - 1,
                        index - open + 3,
                        nextEvents
                      ),
                      (index = open + nextEvents.length - offset - 2)
                    break
                  }
            index = -1
            for (; ++index < events.length; )
              'attentionSequence' === events[index][1].type &&
                (events[index][1].type = 'data')
            return events
          },
        }
      module.exports = attention
    },
    '../../node_modules/micromark/dist/tokenize/autolink.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var asciiAlpha = __webpack_require__(
          '../../node_modules/micromark/dist/character/ascii-alpha.js'
        ),
        asciiAlphanumeric = __webpack_require__(
          '../../node_modules/micromark/dist/character/ascii-alphanumeric.js'
        ),
        asciiAtext = __webpack_require__(
          '../../node_modules/micromark/dist/character/ascii-atext.js'
        ),
        asciiControl = __webpack_require__(
          '../../node_modules/micromark/dist/character/ascii-control.js'
        ),
        autolink = {
          name: 'autolink',
          tokenize: function tokenizeAutolink(effects, ok, nok) {
            var size = 1
            return function start(code) {
              return (
                effects.enter('autolink'),
                effects.enter('autolinkMarker'),
                effects.consume(code),
                effects.exit('autolinkMarker'),
                effects.enter('autolinkProtocol'),
                open
              )
            }
            function open(code) {
              return asciiAlpha(code)
                ? (effects.consume(code), schemeOrEmailAtext)
                : asciiAtext(code)
                ? emailAtext(code)
                : nok(code)
            }
            function schemeOrEmailAtext(code) {
              return 43 === code ||
                45 === code ||
                46 === code ||
                asciiAlphanumeric(code)
                ? schemeInsideOrEmailAtext(code)
                : emailAtext(code)
            }
            function schemeInsideOrEmailAtext(code) {
              return 58 === code
                ? (effects.consume(code), urlInside)
                : (43 === code ||
                    45 === code ||
                    46 === code ||
                    asciiAlphanumeric(code)) &&
                  size++ < 32
                ? (effects.consume(code), schemeInsideOrEmailAtext)
                : emailAtext(code)
            }
            function urlInside(code) {
              return 62 === code
                ? (effects.exit('autolinkProtocol'), end(code))
                : 32 === code || 60 === code || asciiControl(code)
                ? nok(code)
                : (effects.consume(code), urlInside)
            }
            function emailAtext(code) {
              return 64 === code
                ? (effects.consume(code), (size = 0), emailAtSignOrDot)
                : asciiAtext(code)
                ? (effects.consume(code), emailAtext)
                : nok(code)
            }
            function emailAtSignOrDot(code) {
              return asciiAlphanumeric(code) ? emailLabel(code) : nok(code)
            }
            function emailLabel(code) {
              return 46 === code
                ? (effects.consume(code), (size = 0), emailAtSignOrDot)
                : 62 === code
                ? ((effects.exit('autolinkProtocol').type = 'autolinkEmail'),
                  end(code))
                : emailValue(code)
            }
            function emailValue(code) {
              return (45 === code || asciiAlphanumeric(code)) && size++ < 63
                ? (effects.consume(code), 45 === code ? emailValue : emailLabel)
                : nok(code)
            }
            function end(code) {
              return (
                effects.enter('autolinkMarker'),
                effects.consume(code),
                effects.exit('autolinkMarker'),
                effects.exit('autolink'),
                ok
              )
            }
          },
        }
      module.exports = autolink
    },
    '../../node_modules/micromark/dist/tokenize/block-quote.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var markdownSpace = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-space.js'
        ),
        factorySpace = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-space.js'
        ),
        blockQuote = {
          name: 'blockQuote',
          tokenize: function tokenizeBlockQuoteStart(effects, ok, nok) {
            var self = this
            return function start(code) {
              if (62 === code)
                return (
                  self.containerState.open ||
                    (effects.enter('blockQuote', { _container: !0 }),
                    (self.containerState.open = !0)),
                  effects.enter('blockQuotePrefix'),
                  effects.enter('blockQuoteMarker'),
                  effects.consume(code),
                  effects.exit('blockQuoteMarker'),
                  after
                )
              return nok(code)
            }
            function after(code) {
              return markdownSpace(code)
                ? (effects.enter('blockQuotePrefixWhitespace'),
                  effects.consume(code),
                  effects.exit('blockQuotePrefixWhitespace'),
                  effects.exit('blockQuotePrefix'),
                  ok)
                : (effects.exit('blockQuotePrefix'), ok(code))
            }
          },
          continuation: {
            tokenize: function tokenizeBlockQuoteContinuation(
              effects,
              ok,
              nok
            ) {
              return factorySpace(
                effects,
                effects.attempt(blockQuote, ok, nok),
                'linePrefix',
                this.parser.constructs.disable.null.indexOf('codeIndented') > -1
                  ? void 0
                  : 4
              )
            },
          },
          exit: function exit(effects) {
            effects.exit('blockQuote')
          },
        }
      module.exports = blockQuote
    },
    '../../node_modules/micromark/dist/tokenize/character-escape.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var asciiPunctuation = __webpack_require__(
          '../../node_modules/micromark/dist/character/ascii-punctuation.js'
        ),
        characterEscape = {
          name: 'characterEscape',
          tokenize: function tokenizeCharacterEscape(effects, ok, nok) {
            return function start(code) {
              return (
                effects.enter('characterEscape'),
                effects.enter('escapeMarker'),
                effects.consume(code),
                effects.exit('escapeMarker'),
                open
              )
            }
            function open(code) {
              return asciiPunctuation(code)
                ? (effects.enter('characterEscapeValue'),
                  effects.consume(code),
                  effects.exit('characterEscapeValue'),
                  effects.exit('characterEscape'),
                  ok)
                : nok(code)
            }
          },
        }
      module.exports = characterEscape
    },
    '../../node_modules/micromark/dist/tokenize/character-reference.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        'use strict'
        var decodeEntity = __webpack_require__(
            '../../node_modules/parse-entities/decode-entity.browser.js'
          ),
          asciiAlphanumeric = __webpack_require__(
            '../../node_modules/micromark/dist/character/ascii-alphanumeric.js'
          ),
          asciiDigit = __webpack_require__(
            '../../node_modules/micromark/dist/character/ascii-digit.js'
          ),
          asciiHexDigit = __webpack_require__(
            '../../node_modules/micromark/dist/character/ascii-hex-digit.js'
          )
        function _interopDefaultLegacy(e) {
          return e && 'object' == typeof e && 'default' in e
            ? e
            : { default: e }
        }
        var decodeEntity__default = _interopDefaultLegacy(decodeEntity),
          characterReference = {
            name: 'characterReference',
            tokenize: function tokenizeCharacterReference(effects, ok, nok) {
              var max,
                test,
                self = this,
                size = 0
              return function start(code) {
                return (
                  effects.enter('characterReference'),
                  effects.enter('characterReferenceMarker'),
                  effects.consume(code),
                  effects.exit('characterReferenceMarker'),
                  open
                )
              }
              function open(code) {
                return 35 === code
                  ? (effects.enter('characterReferenceMarkerNumeric'),
                    effects.consume(code),
                    effects.exit('characterReferenceMarkerNumeric'),
                    numeric)
                  : (effects.enter('characterReferenceValue'),
                    (max = 31),
                    (test = asciiAlphanumeric),
                    value(code))
              }
              function numeric(code) {
                return 88 === code || 120 === code
                  ? (effects.enter('characterReferenceMarkerHexadecimal'),
                    effects.consume(code),
                    effects.exit('characterReferenceMarkerHexadecimal'),
                    effects.enter('characterReferenceValue'),
                    (max = 6),
                    (test = asciiHexDigit),
                    value)
                  : (effects.enter('characterReferenceValue'),
                    (max = 7),
                    (test = asciiDigit),
                    value(code))
              }
              function value(code) {
                var token
                return 59 === code && size
                  ? ((token = effects.exit('characterReferenceValue')),
                    test !== asciiAlphanumeric ||
                    decodeEntity__default.default(self.sliceSerialize(token))
                      ? (effects.enter('characterReferenceMarker'),
                        effects.consume(code),
                        effects.exit('characterReferenceMarker'),
                        effects.exit('characterReference'),
                        ok)
                      : nok(code))
                  : test(code) && size++ < max
                  ? (effects.consume(code), value)
                  : nok(code)
              }
            },
          }
        module.exports = characterReference
      },
    '../../node_modules/micromark/dist/tokenize/code-fenced.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var markdownLineEnding = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending.js'
        ),
        markdownLineEndingOrSpace = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending-or-space.js'
        ),
        prefixSize = __webpack_require__(
          '../../node_modules/micromark/dist/util/prefix-size.js'
        ),
        factorySpace = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-space.js'
        ),
        codeFenced = {
          name: 'codeFenced',
          tokenize: function tokenizeCodeFenced(effects, ok, nok) {
            var marker,
              self = this,
              closingFenceConstruct = {
                tokenize: function tokenizeClosingFence(effects, ok, nok) {
                  var size = 0
                  return factorySpace(
                    effects,
                    closingSequenceStart,
                    'linePrefix',
                    this.parser.constructs.disable.null.indexOf(
                      'codeIndented'
                    ) > -1
                      ? void 0
                      : 4
                  )
                  function closingSequenceStart(code) {
                    return (
                      effects.enter('codeFencedFence'),
                      effects.enter('codeFencedFenceSequence'),
                      closingSequence(code)
                    )
                  }
                  function closingSequence(code) {
                    return code === marker
                      ? (effects.consume(code), size++, closingSequence)
                      : size < sizeOpen
                      ? nok(code)
                      : (effects.exit('codeFencedFenceSequence'),
                        factorySpace(
                          effects,
                          closingSequenceEnd,
                          'whitespace'
                        )(code))
                  }
                  function closingSequenceEnd(code) {
                    return null === code || markdownLineEnding(code)
                      ? (effects.exit('codeFencedFence'), ok(code))
                      : nok(code)
                  }
                },
                partial: !0,
              },
              initialPrefix = prefixSize(this.events, 'linePrefix'),
              sizeOpen = 0
            return function start(code) {
              return (
                effects.enter('codeFenced'),
                effects.enter('codeFencedFence'),
                effects.enter('codeFencedFenceSequence'),
                (marker = code),
                sequenceOpen(code)
              )
            }
            function sequenceOpen(code) {
              return code === marker
                ? (effects.consume(code), sizeOpen++, sequenceOpen)
                : (effects.exit('codeFencedFenceSequence'),
                  sizeOpen < 3
                    ? nok(code)
                    : factorySpace(effects, infoOpen, 'whitespace')(code))
            }
            function infoOpen(code) {
              return null === code || markdownLineEnding(code)
                ? openAfter(code)
                : (effects.enter('codeFencedFenceInfo'),
                  effects.enter('chunkString', { contentType: 'string' }),
                  info(code))
            }
            function info(code) {
              return null === code || markdownLineEndingOrSpace(code)
                ? (effects.exit('chunkString'),
                  effects.exit('codeFencedFenceInfo'),
                  factorySpace(effects, infoAfter, 'whitespace')(code))
                : 96 === code && code === marker
                ? nok(code)
                : (effects.consume(code), info)
            }
            function infoAfter(code) {
              return null === code || markdownLineEnding(code)
                ? openAfter(code)
                : (effects.enter('codeFencedFenceMeta'),
                  effects.enter('chunkString', { contentType: 'string' }),
                  meta(code))
            }
            function meta(code) {
              return null === code || markdownLineEnding(code)
                ? (effects.exit('chunkString'),
                  effects.exit('codeFencedFenceMeta'),
                  openAfter(code))
                : 96 === code && code === marker
                ? nok(code)
                : (effects.consume(code), meta)
            }
            function openAfter(code) {
              return (
                effects.exit('codeFencedFence'),
                self.interrupt ? ok(code) : content(code)
              )
            }
            function content(code) {
              return null === code
                ? after(code)
                : markdownLineEnding(code)
                ? (effects.enter('lineEnding'),
                  effects.consume(code),
                  effects.exit('lineEnding'),
                  effects.attempt(
                    closingFenceConstruct,
                    after,
                    initialPrefix
                      ? factorySpace(
                          effects,
                          content,
                          'linePrefix',
                          initialPrefix + 1
                        )
                      : content
                  ))
                : (effects.enter('codeFlowValue'), contentContinue(code))
            }
            function contentContinue(code) {
              return null === code || markdownLineEnding(code)
                ? (effects.exit('codeFlowValue'), content(code))
                : (effects.consume(code), contentContinue)
            }
            function after(code) {
              return effects.exit('codeFenced'), ok(code)
            }
          },
          concrete: !0,
        }
      module.exports = codeFenced
    },
    '../../node_modules/micromark/dist/tokenize/code-indented.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var markdownLineEnding = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending.js'
        ),
        chunkedSplice = __webpack_require__(
          '../../node_modules/micromark/dist/util/chunked-splice.js'
        ),
        prefixSize = __webpack_require__(
          '../../node_modules/micromark/dist/util/prefix-size.js'
        ),
        factorySpace = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-space.js'
        ),
        codeIndented = {
          name: 'codeIndented',
          tokenize: function tokenizeCodeIndented(effects, ok, nok) {
            return effects.attempt(indentedContentConstruct, afterPrefix, nok)
            function afterPrefix(code) {
              return null === code
                ? ok(code)
                : markdownLineEnding(code)
                ? effects.attempt(
                    indentedContentConstruct,
                    afterPrefix,
                    ok
                  )(code)
                : (effects.enter('codeFlowValue'), content(code))
            }
            function content(code) {
              return null === code || markdownLineEnding(code)
                ? (effects.exit('codeFlowValue'), afterPrefix(code))
                : (effects.consume(code), content)
            }
          },
          resolve: function resolveCodeIndented(events, context) {
            var code = {
              type: 'codeIndented',
              start: events[0][1].start,
              end: events[events.length - 1][1].end,
            }
            return (
              chunkedSplice(events, 0, 0, [['enter', code, context]]),
              chunkedSplice(events, events.length, 0, [
                ['exit', code, context],
              ]),
              events
            )
          },
        },
        indentedContentConstruct = {
          tokenize: function tokenizeIndentedContent(effects, ok, nok) {
            var self = this
            return factorySpace(
              effects,
              function afterPrefix(code) {
                if (markdownLineEnding(code))
                  return (
                    effects.enter('lineEnding'),
                    effects.consume(code),
                    effects.exit('lineEnding'),
                    factorySpace(effects, afterPrefix, 'linePrefix', 5)
                  )
                return prefixSize(self.events, 'linePrefix') < 4
                  ? nok(code)
                  : ok(code)
              },
              'linePrefix',
              5
            )
          },
          partial: !0,
        }
      module.exports = codeIndented
    },
    '../../node_modules/micromark/dist/tokenize/code-text.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var markdownLineEnding = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending.js'
        ),
        codeText = {
          name: 'codeText',
          tokenize: function tokenizeCodeText(effects, ok, nok) {
            var size,
              token,
              sizeOpen = 0
            return function start(code) {
              return (
                effects.enter('codeText'),
                effects.enter('codeTextSequence'),
                openingSequence(code)
              )
            }
            function openingSequence(code) {
              return 96 === code
                ? (effects.consume(code), sizeOpen++, openingSequence)
                : (effects.exit('codeTextSequence'), gap(code))
            }
            function gap(code) {
              return null === code
                ? nok(code)
                : 96 === code
                ? ((token = effects.enter('codeTextSequence')),
                  (size = 0),
                  closingSequence(code))
                : 32 === code
                ? (effects.enter('space'),
                  effects.consume(code),
                  effects.exit('space'),
                  gap)
                : markdownLineEnding(code)
                ? (effects.enter('lineEnding'),
                  effects.consume(code),
                  effects.exit('lineEnding'),
                  gap)
                : (effects.enter('codeTextData'), data(code))
            }
            function data(code) {
              return null === code ||
                32 === code ||
                96 === code ||
                markdownLineEnding(code)
                ? (effects.exit('codeTextData'), gap(code))
                : (effects.consume(code), data)
            }
            function closingSequence(code) {
              return 96 === code
                ? (effects.consume(code), size++, closingSequence)
                : size === sizeOpen
                ? (effects.exit('codeTextSequence'),
                  effects.exit('codeText'),
                  ok(code))
                : ((token.type = 'codeTextData'), data(code))
            }
          },
          resolve: function resolveCodeText(events) {
            var index,
              enter,
              tailExitIndex = events.length - 4,
              headEnterIndex = 3
            if (
              !(
                ('lineEnding' !== events[headEnterIndex][1].type &&
                  'space' !== events[headEnterIndex][1].type) ||
                ('lineEnding' !== events[tailExitIndex][1].type &&
                  'space' !== events[tailExitIndex][1].type)
              )
            )
              for (index = headEnterIndex; ++index < tailExitIndex; )
                if ('codeTextData' === events[index][1].type) {
                  ;(events[tailExitIndex][1].type = events[
                    headEnterIndex
                  ][1].type =
                    'codeTextPadding'),
                    (headEnterIndex += 2),
                    (tailExitIndex -= 2)
                  break
                }
            ;(index = headEnterIndex - 1), tailExitIndex++
            for (; ++index <= tailExitIndex; )
              void 0 === enter
                ? index !== tailExitIndex &&
                  'lineEnding' !== events[index][1].type &&
                  (enter = index)
                : (index !== tailExitIndex &&
                    'lineEnding' !== events[index][1].type) ||
                  ((events[enter][1].type = 'codeTextData'),
                  index !== enter + 2 &&
                    ((events[enter][1].end = events[index - 1][1].end),
                    events.splice(enter + 2, index - enter - 2),
                    (tailExitIndex -= index - enter - 2),
                    (index = enter + 2)),
                  (enter = void 0))
            return events
          },
          previous: function previous(code) {
            return (
              96 !== code ||
              'characterEscape' === this.events[this.events.length - 1][1].type
            )
          },
        }
      module.exports = codeText
    },
    '../../node_modules/micromark/dist/tokenize/content.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var markdownLineEnding = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending.js'
        ),
        prefixSize = __webpack_require__(
          '../../node_modules/micromark/dist/util/prefix-size.js'
        ),
        subtokenize = __webpack_require__(
          '../../node_modules/micromark/dist/util/subtokenize.js'
        ),
        factorySpace = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-space.js'
        ),
        content = {
          tokenize: function tokenizeContent(effects, ok) {
            var previous
            return function start(code) {
              return (
                effects.enter('content'),
                (previous = effects.enter('chunkContent', {
                  contentType: 'content',
                })),
                data(code)
              )
            }
            function data(code) {
              return null === code
                ? contentEnd(code)
                : markdownLineEnding(code)
                ? effects.check(
                    continuationConstruct,
                    contentContinue,
                    contentEnd
                  )(code)
                : (effects.consume(code), data)
            }
            function contentEnd(code) {
              return (
                effects.exit('chunkContent'), effects.exit('content'), ok(code)
              )
            }
            function contentContinue(code) {
              return (
                effects.consume(code),
                effects.exit('chunkContent'),
                (previous = previous.next =
                  effects.enter('chunkContent', {
                    contentType: 'content',
                    previous: previous,
                  })),
                data
              )
            }
          },
          resolve: function resolveContent(events) {
            return subtokenize(events), events
          },
          interruptible: !0,
          lazy: !0,
        },
        continuationConstruct = {
          tokenize: function tokenizeContinuation(effects, ok, nok) {
            var self = this
            return function startLookahead(code) {
              return (
                effects.enter('lineEnding'),
                effects.consume(code),
                effects.exit('lineEnding'),
                factorySpace(effects, prefixed, 'linePrefix')
              )
            }
            function prefixed(code) {
              return null === code || markdownLineEnding(code)
                ? nok(code)
                : self.parser.constructs.disable.null.indexOf('codeIndented') >
                    -1 || prefixSize(self.events, 'linePrefix') < 4
                ? effects.interrupt(self.parser.constructs.flow, nok, ok)(code)
                : ok(code)
            }
          },
          partial: !0,
        }
      module.exports = content
    },
    '../../node_modules/micromark/dist/tokenize/definition.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var markdownLineEnding = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending.js'
        ),
        markdownLineEndingOrSpace = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending-or-space.js'
        ),
        normalizeIdentifier = __webpack_require__(
          '../../node_modules/micromark/dist/util/normalize-identifier.js'
        ),
        factoryDestination = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-destination.js'
        ),
        factoryLabel = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-label.js'
        ),
        factorySpace = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-space.js'
        ),
        factoryWhitespace = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-whitespace.js'
        ),
        factoryTitle = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-title.js'
        ),
        definition = {
          name: 'definition',
          tokenize: function tokenizeDefinition(effects, ok, nok) {
            var identifier,
              self = this
            return function start(code) {
              return (
                effects.enter('definition'),
                factoryLabel.call(
                  self,
                  effects,
                  labelAfter,
                  nok,
                  'definitionLabel',
                  'definitionLabelMarker',
                  'definitionLabelString'
                )(code)
              )
            }
            function labelAfter(code) {
              return (
                (identifier = normalizeIdentifier(
                  self
                    .sliceSerialize(self.events[self.events.length - 1][1])
                    .slice(1, -1)
                )),
                58 === code
                  ? (effects.enter('definitionMarker'),
                    effects.consume(code),
                    effects.exit('definitionMarker'),
                    factoryWhitespace(
                      effects,
                      factoryDestination(
                        effects,
                        effects.attempt(
                          titleConstruct,
                          factorySpace(effects, after, 'whitespace'),
                          factorySpace(effects, after, 'whitespace')
                        ),
                        nok,
                        'definitionDestination',
                        'definitionDestinationLiteral',
                        'definitionDestinationLiteralMarker',
                        'definitionDestinationRaw',
                        'definitionDestinationString'
                      )
                    ))
                  : nok(code)
              )
            }
            function after(code) {
              return null === code || markdownLineEnding(code)
                ? (effects.exit('definition'),
                  self.parser.defined.indexOf(identifier) < 0 &&
                    self.parser.defined.push(identifier),
                  ok(code))
                : nok(code)
            }
          },
        },
        titleConstruct = {
          tokenize: function tokenizeTitle(effects, ok, nok) {
            return function start(code) {
              return markdownLineEndingOrSpace(code)
                ? factoryWhitespace(effects, before)(code)
                : nok(code)
            }
            function before(code) {
              return 34 === code || 39 === code || 40 === code
                ? factoryTitle(
                    effects,
                    factorySpace(effects, after, 'whitespace'),
                    nok,
                    'definitionTitle',
                    'definitionTitleMarker',
                    'definitionTitleString'
                  )(code)
                : nok(code)
            }
            function after(code) {
              return null === code || markdownLineEnding(code)
                ? ok(code)
                : nok(code)
            }
          },
          partial: !0,
        }
      module.exports = definition
    },
    '../../node_modules/micromark/dist/tokenize/factory-destination.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        'use strict'
        var asciiControl = __webpack_require__(
            '../../node_modules/micromark/dist/character/ascii-control.js'
          ),
          markdownLineEndingOrSpace = __webpack_require__(
            '../../node_modules/micromark/dist/character/markdown-line-ending-or-space.js'
          ),
          markdownLineEnding = __webpack_require__(
            '../../node_modules/micromark/dist/character/markdown-line-ending.js'
          )
        module.exports = function destinationFactory(
          effects,
          ok,
          nok,
          type,
          literalType,
          literalMarkerType,
          rawType,
          stringType,
          max
        ) {
          var limit = max || 1 / 0,
            balance = 0
          return function start(code) {
            if (60 === code)
              return (
                effects.enter(type),
                effects.enter(literalType),
                effects.enter(literalMarkerType),
                effects.consume(code),
                effects.exit(literalMarkerType),
                destinationEnclosedBefore
              )
            if (asciiControl(code) || 41 === code) return nok(code)
            return (
              effects.enter(type),
              effects.enter(rawType),
              effects.enter(stringType),
              effects.enter('chunkString', { contentType: 'string' }),
              destinationRaw(code)
            )
          }
          function destinationEnclosedBefore(code) {
            return 62 === code
              ? (effects.enter(literalMarkerType),
                effects.consume(code),
                effects.exit(literalMarkerType),
                effects.exit(literalType),
                effects.exit(type),
                ok)
              : (effects.enter(stringType),
                effects.enter('chunkString', { contentType: 'string' }),
                destinationEnclosed(code))
          }
          function destinationEnclosed(code) {
            return 62 === code
              ? (effects.exit('chunkString'),
                effects.exit(stringType),
                destinationEnclosedBefore(code))
              : null === code || 60 === code || markdownLineEnding(code)
              ? nok(code)
              : (effects.consume(code),
                92 === code ? destinationEnclosedEscape : destinationEnclosed)
          }
          function destinationEnclosedEscape(code) {
            return 60 === code || 62 === code || 92 === code
              ? (effects.consume(code), destinationEnclosed)
              : destinationEnclosed(code)
          }
          function destinationRaw(code) {
            return 40 === code
              ? ++balance > limit
                ? nok(code)
                : (effects.consume(code), destinationRaw)
              : 41 === code
              ? balance--
                ? (effects.consume(code), destinationRaw)
                : (effects.exit('chunkString'),
                  effects.exit(stringType),
                  effects.exit(rawType),
                  effects.exit(type),
                  ok(code))
              : null === code || markdownLineEndingOrSpace(code)
              ? balance
                ? nok(code)
                : (effects.exit('chunkString'),
                  effects.exit(stringType),
                  effects.exit(rawType),
                  effects.exit(type),
                  ok(code))
              : asciiControl(code)
              ? nok(code)
              : (effects.consume(code),
                92 === code ? destinationRawEscape : destinationRaw)
          }
          function destinationRawEscape(code) {
            return 40 === code || 41 === code || 92 === code
              ? (effects.consume(code), destinationRaw)
              : destinationRaw(code)
          }
        }
      },
    '../../node_modules/micromark/dist/tokenize/factory-label.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var markdownLineEnding = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending.js'
        ),
        markdownSpace = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-space.js'
        )
      module.exports = function labelFactory(
        effects,
        ok,
        nok,
        type,
        markerType,
        stringType
      ) {
        var data,
          self = this,
          size = 0
        return function start(code) {
          return (
            effects.enter(type),
            effects.enter(markerType),
            effects.consume(code),
            effects.exit(markerType),
            effects.enter(stringType),
            atBreak
          )
        }
        function atBreak(code) {
          return null === code ||
            91 === code ||
            (93 === code && !data) ||
            (94 === code &&
              !size &&
              '_hiddenFootnoteSupport' in self.parser.constructs) ||
            size > 999
            ? nok(code)
            : 93 === code
            ? (effects.exit(stringType),
              effects.enter(markerType),
              effects.consume(code),
              effects.exit(markerType),
              effects.exit(type),
              ok)
            : markdownLineEnding(code)
            ? (effects.enter('lineEnding'),
              effects.consume(code),
              effects.exit('lineEnding'),
              atBreak)
            : (effects.enter('chunkString', { contentType: 'string' }),
              label(code))
        }
        function label(code) {
          return null === code ||
            91 === code ||
            93 === code ||
            markdownLineEnding(code) ||
            size++ > 999
            ? (effects.exit('chunkString'), atBreak(code))
            : (effects.consume(code),
              (data = data || !markdownSpace(code)),
              92 === code ? labelEscape : label)
        }
        function labelEscape(code) {
          return 91 === code || 92 === code || 93 === code
            ? (effects.consume(code), size++, label)
            : label(code)
        }
      }
    },
    '../../node_modules/micromark/dist/tokenize/factory-space.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var markdownSpace = __webpack_require__(
        '../../node_modules/micromark/dist/character/markdown-space.js'
      )
      module.exports = function spaceFactory(effects, ok, type, max) {
        var limit = max ? max - 1 : 1 / 0,
          size = 0
        return function start(code) {
          if (markdownSpace(code)) return effects.enter(type), prefix(code)
          return ok(code)
        }
        function prefix(code) {
          return markdownSpace(code) && size++ < limit
            ? (effects.consume(code), prefix)
            : (effects.exit(type), ok(code))
        }
      }
    },
    '../../node_modules/micromark/dist/tokenize/factory-title.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var markdownLineEnding = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending.js'
        ),
        factorySpace = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-space.js'
        )
      module.exports = function titleFactory(
        effects,
        ok,
        nok,
        type,
        markerType,
        stringType
      ) {
        var marker
        return function start(code) {
          return (
            effects.enter(type),
            effects.enter(markerType),
            effects.consume(code),
            effects.exit(markerType),
            (marker = 40 === code ? 41 : code),
            atFirstTitleBreak
          )
        }
        function atFirstTitleBreak(code) {
          return code === marker
            ? (effects.enter(markerType),
              effects.consume(code),
              effects.exit(markerType),
              effects.exit(type),
              ok)
            : (effects.enter(stringType), atTitleBreak(code))
        }
        function atTitleBreak(code) {
          return code === marker
            ? (effects.exit(stringType), atFirstTitleBreak(marker))
            : null === code
            ? nok(code)
            : markdownLineEnding(code)
            ? (effects.enter('lineEnding'),
              effects.consume(code),
              effects.exit('lineEnding'),
              factorySpace(effects, atTitleBreak, 'linePrefix'))
            : (effects.enter('chunkString', { contentType: 'string' }),
              title(code))
        }
        function title(code) {
          return code === marker || null === code || markdownLineEnding(code)
            ? (effects.exit('chunkString'), atTitleBreak(code))
            : (effects.consume(code), 92 === code ? titleEscape : title)
        }
        function titleEscape(code) {
          return code === marker || 92 === code
            ? (effects.consume(code), title)
            : title(code)
        }
      }
    },
    '../../node_modules/micromark/dist/tokenize/factory-whitespace.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        'use strict'
        var markdownLineEnding = __webpack_require__(
            '../../node_modules/micromark/dist/character/markdown-line-ending.js'
          ),
          markdownSpace = __webpack_require__(
            '../../node_modules/micromark/dist/character/markdown-space.js'
          ),
          factorySpace = __webpack_require__(
            '../../node_modules/micromark/dist/tokenize/factory-space.js'
          )
        module.exports = function whitespaceFactory(effects, ok) {
          var seen
          return function start(code) {
            if (markdownLineEnding(code))
              return (
                effects.enter('lineEnding'),
                effects.consume(code),
                effects.exit('lineEnding'),
                (seen = !0),
                start
              )
            if (markdownSpace(code))
              return factorySpace(
                effects,
                start,
                seen ? 'linePrefix' : 'lineSuffix'
              )(code)
            return ok(code)
          }
        }
      },
    '../../node_modules/micromark/dist/tokenize/hard-break-escape.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        'use strict'
        var markdownLineEnding = __webpack_require__(
            '../../node_modules/micromark/dist/character/markdown-line-ending.js'
          ),
          hardBreakEscape = {
            name: 'hardBreakEscape',
            tokenize: function tokenizeHardBreakEscape(effects, ok, nok) {
              return function start(code) {
                return (
                  effects.enter('hardBreakEscape'),
                  effects.enter('escapeMarker'),
                  effects.consume(code),
                  open
                )
              }
              function open(code) {
                return markdownLineEnding(code)
                  ? (effects.exit('escapeMarker'),
                    effects.exit('hardBreakEscape'),
                    ok(code))
                  : nok(code)
              }
            },
          }
        module.exports = hardBreakEscape
      },
    '../../node_modules/micromark/dist/tokenize/heading-atx.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var markdownLineEnding = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending.js'
        ),
        markdownLineEndingOrSpace = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending-or-space.js'
        ),
        markdownSpace = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-space.js'
        ),
        chunkedSplice = __webpack_require__(
          '../../node_modules/micromark/dist/util/chunked-splice.js'
        ),
        factorySpace = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-space.js'
        ),
        headingAtx = {
          name: 'headingAtx',
          tokenize: function tokenizeHeadingAtx(effects, ok, nok) {
            var self = this,
              size = 0
            return function start(code) {
              return (
                effects.enter('atxHeading'),
                effects.enter('atxHeadingSequence'),
                fenceOpenInside(code)
              )
            }
            function fenceOpenInside(code) {
              return 35 === code && size++ < 6
                ? (effects.consume(code), fenceOpenInside)
                : null === code || markdownLineEndingOrSpace(code)
                ? (effects.exit('atxHeadingSequence'),
                  self.interrupt ? ok(code) : headingBreak(code))
                : nok(code)
            }
            function headingBreak(code) {
              return 35 === code
                ? (effects.enter('atxHeadingSequence'), sequence(code))
                : null === code || markdownLineEnding(code)
                ? (effects.exit('atxHeading'), ok(code))
                : markdownSpace(code)
                ? factorySpace(effects, headingBreak, 'whitespace')(code)
                : (effects.enter('atxHeadingText'), data(code))
            }
            function sequence(code) {
              return 35 === code
                ? (effects.consume(code), sequence)
                : (effects.exit('atxHeadingSequence'), headingBreak(code))
            }
            function data(code) {
              return null === code ||
                35 === code ||
                markdownLineEndingOrSpace(code)
                ? (effects.exit('atxHeadingText'), headingBreak(code))
                : (effects.consume(code), data)
            }
          },
          resolve: function resolveHeadingAtx(events, context) {
            var content,
              text,
              contentEnd = events.length - 2,
              contentStart = 3
            'whitespace' === events[contentStart][1].type && (contentStart += 2)
            contentEnd - 2 > contentStart &&
              'whitespace' === events[contentEnd][1].type &&
              (contentEnd -= 2)
            'atxHeadingSequence' === events[contentEnd][1].type &&
              (contentStart === contentEnd - 1 ||
                (contentEnd - 4 > contentStart &&
                  'whitespace' === events[contentEnd - 2][1].type)) &&
              (contentEnd -= contentStart + 1 === contentEnd ? 2 : 4)
            contentEnd > contentStart &&
              ((content = {
                type: 'atxHeadingText',
                start: events[contentStart][1].start,
                end: events[contentEnd][1].end,
              }),
              (text = {
                type: 'chunkText',
                start: events[contentStart][1].start,
                end: events[contentEnd][1].end,
                contentType: 'text',
              }),
              chunkedSplice(
                events,
                contentStart,
                contentEnd - contentStart + 1,
                [
                  ['enter', content, context],
                  ['enter', text, context],
                  ['exit', text, context],
                  ['exit', content, context],
                ]
              ))
            return events
          },
        }
      module.exports = headingAtx
    },
    '../../node_modules/micromark/dist/tokenize/html-flow.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var asciiAlpha = __webpack_require__(
          '../../node_modules/micromark/dist/character/ascii-alpha.js'
        ),
        asciiAlphanumeric = __webpack_require__(
          '../../node_modules/micromark/dist/character/ascii-alphanumeric.js'
        ),
        markdownLineEnding = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending.js'
        ),
        markdownLineEndingOrSpace = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending-or-space.js'
        ),
        markdownSpace = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-space.js'
        ),
        fromCharCode = __webpack_require__(
          '../../node_modules/micromark/dist/constant/from-char-code.js'
        ),
        htmlBlockNames = __webpack_require__(
          '../../node_modules/micromark/dist/constant/html-block-names.js'
        ),
        htmlRawNames = __webpack_require__(
          '../../node_modules/micromark/dist/constant/html-raw-names.js'
        ),
        partialBlankLine = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/partial-blank-line.js'
        ),
        htmlFlow = {
          name: 'htmlFlow',
          tokenize: function tokenizeHtmlFlow(effects, ok, nok) {
            var kind,
              startTag,
              buffer,
              index,
              marker,
              self = this
            return function start(code) {
              return (
                effects.enter('htmlFlow'),
                effects.enter('htmlFlowData'),
                effects.consume(code),
                open
              )
            }
            function open(code) {
              return 33 === code
                ? (effects.consume(code), declarationStart)
                : 47 === code
                ? (effects.consume(code), tagCloseStart)
                : 63 === code
                ? (effects.consume(code),
                  (kind = 3),
                  self.interrupt ? ok : continuationDeclarationInside)
                : asciiAlpha(code)
                ? (effects.consume(code),
                  (buffer = fromCharCode(code)),
                  (startTag = !0),
                  tagName)
                : nok(code)
            }
            function declarationStart(code) {
              return 45 === code
                ? (effects.consume(code), (kind = 2), commentOpenInside)
                : 91 === code
                ? (effects.consume(code),
                  (kind = 5),
                  (buffer = 'CDATA['),
                  (index = 0),
                  cdataOpenInside)
                : asciiAlpha(code)
                ? (effects.consume(code),
                  (kind = 4),
                  self.interrupt ? ok : continuationDeclarationInside)
                : nok(code)
            }
            function commentOpenInside(code) {
              return 45 === code
                ? (effects.consume(code),
                  self.interrupt ? ok : continuationDeclarationInside)
                : nok(code)
            }
            function cdataOpenInside(code) {
              return code === buffer.charCodeAt(index++)
                ? (effects.consume(code),
                  index === buffer.length
                    ? self.interrupt
                      ? ok
                      : continuation
                    : cdataOpenInside)
                : nok(code)
            }
            function tagCloseStart(code) {
              return asciiAlpha(code)
                ? (effects.consume(code),
                  (buffer = fromCharCode(code)),
                  tagName)
                : nok(code)
            }
            function tagName(code) {
              return null === code ||
                47 === code ||
                62 === code ||
                markdownLineEndingOrSpace(code)
                ? 47 !== code &&
                  startTag &&
                  htmlRawNames.indexOf(buffer.toLowerCase()) > -1
                  ? ((kind = 1), self.interrupt ? ok(code) : continuation(code))
                  : htmlBlockNames.indexOf(buffer.toLowerCase()) > -1
                  ? ((kind = 6),
                    47 === code
                      ? (effects.consume(code), basicSelfClosing)
                      : self.interrupt
                      ? ok(code)
                      : continuation(code))
                  : ((kind = 7),
                    self.interrupt
                      ? nok(code)
                      : startTag
                      ? completeAttributeNameBefore(code)
                      : completeClosingTagAfter(code))
                : 45 === code || asciiAlphanumeric(code)
                ? (effects.consume(code),
                  (buffer += fromCharCode(code)),
                  tagName)
                : nok(code)
            }
            function basicSelfClosing(code) {
              return 62 === code
                ? (effects.consume(code), self.interrupt ? ok : continuation)
                : nok(code)
            }
            function completeClosingTagAfter(code) {
              return markdownSpace(code)
                ? (effects.consume(code), completeClosingTagAfter)
                : completeEnd(code)
            }
            function completeAttributeNameBefore(code) {
              return 47 === code
                ? (effects.consume(code), completeEnd)
                : 58 === code || 95 === code || asciiAlpha(code)
                ? (effects.consume(code), completeAttributeName)
                : markdownSpace(code)
                ? (effects.consume(code), completeAttributeNameBefore)
                : completeEnd(code)
            }
            function completeAttributeName(code) {
              return 45 === code ||
                46 === code ||
                58 === code ||
                95 === code ||
                asciiAlphanumeric(code)
                ? (effects.consume(code), completeAttributeName)
                : completeAttributeNameAfter(code)
            }
            function completeAttributeNameAfter(code) {
              return 61 === code
                ? (effects.consume(code), completeAttributeValueBefore)
                : markdownSpace(code)
                ? (effects.consume(code), completeAttributeNameAfter)
                : completeAttributeNameBefore(code)
            }
            function completeAttributeValueBefore(code) {
              return null === code ||
                60 === code ||
                61 === code ||
                62 === code ||
                96 === code
                ? nok(code)
                : 34 === code || 39 === code
                ? (effects.consume(code),
                  (marker = code),
                  completeAttributeValueQuoted)
                : markdownSpace(code)
                ? (effects.consume(code), completeAttributeValueBefore)
                : ((marker = void 0), completeAttributeValueUnquoted(code))
            }
            function completeAttributeValueQuoted(code) {
              return code === marker
                ? (effects.consume(code), completeAttributeValueQuotedAfter)
                : null === code || markdownLineEnding(code)
                ? nok(code)
                : (effects.consume(code), completeAttributeValueQuoted)
            }
            function completeAttributeValueUnquoted(code) {
              return null === code ||
                34 === code ||
                39 === code ||
                60 === code ||
                61 === code ||
                62 === code ||
                96 === code ||
                markdownLineEndingOrSpace(code)
                ? completeAttributeNameAfter(code)
                : (effects.consume(code), completeAttributeValueUnquoted)
            }
            function completeAttributeValueQuotedAfter(code) {
              return 47 === code || 62 === code || markdownSpace(code)
                ? completeAttributeNameBefore(code)
                : nok(code)
            }
            function completeEnd(code) {
              return 62 === code
                ? (effects.consume(code), completeAfter)
                : nok(code)
            }
            function completeAfter(code) {
              return markdownSpace(code)
                ? (effects.consume(code), completeAfter)
                : null === code || markdownLineEnding(code)
                ? continuation(code)
                : nok(code)
            }
            function continuation(code) {
              return 45 === code && 2 === kind
                ? (effects.consume(code), continuationCommentInside)
                : 60 === code && 1 === kind
                ? (effects.consume(code), continuationRawTagOpen)
                : 62 === code && 4 === kind
                ? (effects.consume(code), continuationClose)
                : 63 === code && 3 === kind
                ? (effects.consume(code), continuationDeclarationInside)
                : 93 === code && 5 === kind
                ? (effects.consume(code), continuationCharacterDataInside)
                : !markdownLineEnding(code) || (6 !== kind && 7 !== kind)
                ? null === code || markdownLineEnding(code)
                  ? continuationAtLineEnding(code)
                  : (effects.consume(code), continuation)
                : effects.check(
                    nextBlankConstruct,
                    continuationClose,
                    continuationAtLineEnding
                  )(code)
            }
            function continuationAtLineEnding(code) {
              return effects.exit('htmlFlowData'), htmlContinueStart(code)
            }
            function htmlContinueStart(code) {
              return null === code
                ? done(code)
                : markdownLineEnding(code)
                ? (effects.enter('lineEnding'),
                  effects.consume(code),
                  effects.exit('lineEnding'),
                  htmlContinueStart)
                : (effects.enter('htmlFlowData'), continuation(code))
            }
            function continuationCommentInside(code) {
              return 45 === code
                ? (effects.consume(code), continuationDeclarationInside)
                : continuation(code)
            }
            function continuationRawTagOpen(code) {
              return 47 === code
                ? (effects.consume(code), (buffer = ''), continuationRawEndTag)
                : continuation(code)
            }
            function continuationRawEndTag(code) {
              return 62 === code &&
                htmlRawNames.indexOf(buffer.toLowerCase()) > -1
                ? (effects.consume(code), continuationClose)
                : asciiAlpha(code) && buffer.length < 8
                ? (effects.consume(code),
                  (buffer += fromCharCode(code)),
                  continuationRawEndTag)
                : continuation(code)
            }
            function continuationCharacterDataInside(code) {
              return 93 === code
                ? (effects.consume(code), continuationDeclarationInside)
                : continuation(code)
            }
            function continuationDeclarationInside(code) {
              return 62 === code
                ? (effects.consume(code), continuationClose)
                : continuation(code)
            }
            function continuationClose(code) {
              return null === code || markdownLineEnding(code)
                ? (effects.exit('htmlFlowData'), done(code))
                : (effects.consume(code), continuationClose)
            }
            function done(code) {
              return effects.exit('htmlFlow'), ok(code)
            }
          },
          resolveTo: function resolveToHtmlFlow(events) {
            var index = events.length
            for (
              ;
              index-- &&
              ('enter' !== events[index][0] ||
                'htmlFlow' !== events[index][1].type);

            );
            index > 1 &&
              'linePrefix' === events[index - 2][1].type &&
              ((events[index][1].start = events[index - 2][1].start),
              (events[index + 1][1].start = events[index - 2][1].start),
              events.splice(index - 2, 2))
            return events
          },
          concrete: !0,
        },
        nextBlankConstruct = {
          tokenize: function tokenizeNextBlank(effects, ok, nok) {
            return function start(code) {
              return (
                effects.exit('htmlFlowData'),
                effects.enter('lineEndingBlank'),
                effects.consume(code),
                effects.exit('lineEndingBlank'),
                effects.attempt(partialBlankLine, ok, nok)
              )
            }
          },
          partial: !0,
        }
      module.exports = htmlFlow
    },
    '../../node_modules/micromark/dist/tokenize/html-text.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var asciiAlpha = __webpack_require__(
          '../../node_modules/micromark/dist/character/ascii-alpha.js'
        ),
        asciiAlphanumeric = __webpack_require__(
          '../../node_modules/micromark/dist/character/ascii-alphanumeric.js'
        ),
        markdownLineEnding = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending.js'
        ),
        markdownLineEndingOrSpace = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending-or-space.js'
        ),
        markdownSpace = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-space.js'
        ),
        factorySpace = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-space.js'
        ),
        htmlText = {
          name: 'htmlText',
          tokenize: function tokenizeHtmlText(effects, ok, nok) {
            var marker,
              buffer,
              index,
              returnState,
              self = this
            return function start(code) {
              return (
                effects.enter('htmlText'),
                effects.enter('htmlTextData'),
                effects.consume(code),
                open
              )
            }
            function open(code) {
              return 33 === code
                ? (effects.consume(code), declarationOpen)
                : 47 === code
                ? (effects.consume(code), tagCloseStart)
                : 63 === code
                ? (effects.consume(code), instruction)
                : asciiAlpha(code)
                ? (effects.consume(code), tagOpen)
                : nok(code)
            }
            function declarationOpen(code) {
              return 45 === code
                ? (effects.consume(code), commentOpen)
                : 91 === code
                ? (effects.consume(code),
                  (buffer = 'CDATA['),
                  (index = 0),
                  cdataOpen)
                : asciiAlpha(code)
                ? (effects.consume(code), declaration)
                : nok(code)
            }
            function commentOpen(code) {
              return 45 === code
                ? (effects.consume(code), commentStart)
                : nok(code)
            }
            function commentStart(code) {
              return null === code || 62 === code
                ? nok(code)
                : 45 === code
                ? (effects.consume(code), commentStartDash)
                : comment(code)
            }
            function commentStartDash(code) {
              return null === code || 62 === code ? nok(code) : comment(code)
            }
            function comment(code) {
              return null === code
                ? nok(code)
                : 45 === code
                ? (effects.consume(code), commentClose)
                : markdownLineEnding(code)
                ? ((returnState = comment), atLineEnding(code))
                : (effects.consume(code), comment)
            }
            function commentClose(code) {
              return 45 === code ? (effects.consume(code), end) : comment(code)
            }
            function cdataOpen(code) {
              return code === buffer.charCodeAt(index++)
                ? (effects.consume(code),
                  index === buffer.length ? cdata : cdataOpen)
                : nok(code)
            }
            function cdata(code) {
              return null === code
                ? nok(code)
                : 93 === code
                ? (effects.consume(code), cdataClose)
                : markdownLineEnding(code)
                ? ((returnState = cdata), atLineEnding(code))
                : (effects.consume(code), cdata)
            }
            function cdataClose(code) {
              return 93 === code
                ? (effects.consume(code), cdataEnd)
                : cdata(code)
            }
            function cdataEnd(code) {
              return 62 === code
                ? end(code)
                : 93 === code
                ? (effects.consume(code), cdataEnd)
                : cdata(code)
            }
            function declaration(code) {
              return null === code || 62 === code
                ? end(code)
                : markdownLineEnding(code)
                ? ((returnState = declaration), atLineEnding(code))
                : (effects.consume(code), declaration)
            }
            function instruction(code) {
              return null === code
                ? nok(code)
                : 63 === code
                ? (effects.consume(code), instructionClose)
                : markdownLineEnding(code)
                ? ((returnState = instruction), atLineEnding(code))
                : (effects.consume(code), instruction)
            }
            function instructionClose(code) {
              return 62 === code ? end(code) : instruction(code)
            }
            function tagCloseStart(code) {
              return asciiAlpha(code)
                ? (effects.consume(code), tagClose)
                : nok(code)
            }
            function tagClose(code) {
              return 45 === code || asciiAlphanumeric(code)
                ? (effects.consume(code), tagClose)
                : tagCloseBetween(code)
            }
            function tagCloseBetween(code) {
              return markdownLineEnding(code)
                ? ((returnState = tagCloseBetween), atLineEnding(code))
                : markdownSpace(code)
                ? (effects.consume(code), tagCloseBetween)
                : end(code)
            }
            function tagOpen(code) {
              return 45 === code || asciiAlphanumeric(code)
                ? (effects.consume(code), tagOpen)
                : 47 === code || 62 === code || markdownLineEndingOrSpace(code)
                ? tagOpenBetween(code)
                : nok(code)
            }
            function tagOpenBetween(code) {
              return 47 === code
                ? (effects.consume(code), end)
                : 58 === code || 95 === code || asciiAlpha(code)
                ? (effects.consume(code), tagOpenAttributeName)
                : markdownLineEnding(code)
                ? ((returnState = tagOpenBetween), atLineEnding(code))
                : markdownSpace(code)
                ? (effects.consume(code), tagOpenBetween)
                : end(code)
            }
            function tagOpenAttributeName(code) {
              return 45 === code ||
                46 === code ||
                58 === code ||
                95 === code ||
                asciiAlphanumeric(code)
                ? (effects.consume(code), tagOpenAttributeName)
                : tagOpenAttributeNameAfter(code)
            }
            function tagOpenAttributeNameAfter(code) {
              return 61 === code
                ? (effects.consume(code), tagOpenAttributeValueBefore)
                : markdownLineEnding(code)
                ? ((returnState = tagOpenAttributeNameAfter),
                  atLineEnding(code))
                : markdownSpace(code)
                ? (effects.consume(code), tagOpenAttributeNameAfter)
                : tagOpenBetween(code)
            }
            function tagOpenAttributeValueBefore(code) {
              return null === code ||
                60 === code ||
                61 === code ||
                62 === code ||
                96 === code
                ? nok(code)
                : 34 === code || 39 === code
                ? (effects.consume(code),
                  (marker = code),
                  tagOpenAttributeValueQuoted)
                : markdownLineEnding(code)
                ? ((returnState = tagOpenAttributeValueBefore),
                  atLineEnding(code))
                : markdownSpace(code)
                ? (effects.consume(code), tagOpenAttributeValueBefore)
                : (effects.consume(code),
                  (marker = void 0),
                  tagOpenAttributeValueUnquoted)
            }
            function tagOpenAttributeValueQuoted(code) {
              return code === marker
                ? (effects.consume(code), tagOpenAttributeValueQuotedAfter)
                : null === code
                ? nok(code)
                : markdownLineEnding(code)
                ? ((returnState = tagOpenAttributeValueQuoted),
                  atLineEnding(code))
                : (effects.consume(code), tagOpenAttributeValueQuoted)
            }
            function tagOpenAttributeValueQuotedAfter(code) {
              return 62 === code ||
                47 === code ||
                markdownLineEndingOrSpace(code)
                ? tagOpenBetween(code)
                : nok(code)
            }
            function tagOpenAttributeValueUnquoted(code) {
              return null === code ||
                34 === code ||
                39 === code ||
                60 === code ||
                61 === code ||
                96 === code
                ? nok(code)
                : 62 === code || markdownLineEndingOrSpace(code)
                ? tagOpenBetween(code)
                : (effects.consume(code), tagOpenAttributeValueUnquoted)
            }
            function atLineEnding(code) {
              return (
                effects.exit('htmlTextData'),
                effects.enter('lineEnding'),
                effects.consume(code),
                effects.exit('lineEnding'),
                factorySpace(
                  effects,
                  afterPrefix,
                  'linePrefix',
                  self.parser.constructs.disable.null.indexOf('codeIndented') >
                    -1
                    ? void 0
                    : 4
                )
              )
            }
            function afterPrefix(code) {
              return effects.enter('htmlTextData'), returnState(code)
            }
            function end(code) {
              return 62 === code
                ? (effects.consume(code),
                  effects.exit('htmlTextData'),
                  effects.exit('htmlText'),
                  ok)
                : nok(code)
            }
          },
        }
      module.exports = htmlText
    },
    '../../node_modules/micromark/dist/tokenize/label-end.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var markdownLineEndingOrSpace = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending-or-space.js'
        ),
        chunkedPush = __webpack_require__(
          '../../node_modules/micromark/dist/util/chunked-push.js'
        ),
        chunkedSplice = __webpack_require__(
          '../../node_modules/micromark/dist/util/chunked-splice.js'
        ),
        normalizeIdentifier = __webpack_require__(
          '../../node_modules/micromark/dist/util/normalize-identifier.js'
        ),
        resolveAll = __webpack_require__(
          '../../node_modules/micromark/dist/util/resolve-all.js'
        ),
        shallow = __webpack_require__(
          '../../node_modules/micromark/dist/util/shallow.js'
        ),
        factoryDestination = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-destination.js'
        ),
        factoryLabel = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-label.js'
        ),
        factoryTitle = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-title.js'
        ),
        factoryWhitespace = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-whitespace.js'
        ),
        labelEnd = {
          name: 'labelEnd',
          tokenize: function tokenizeLabelEnd(effects, ok, nok) {
            var labelStart,
              defined,
              self = this,
              index = self.events.length
            for (; index--; )
              if (
                ('labelImage' === self.events[index][1].type ||
                  'labelLink' === self.events[index][1].type) &&
                !self.events[index][1]._balanced
              ) {
                labelStart = self.events[index][1]
                break
              }
            return function start(code) {
              if (!labelStart) return nok(code)
              return labelStart._inactive
                ? balanced(code)
                : ((defined =
                    self.parser.defined.indexOf(
                      normalizeIdentifier(
                        self.sliceSerialize({
                          start: labelStart.end,
                          end: self.now(),
                        })
                      )
                    ) > -1),
                  effects.enter('labelEnd'),
                  effects.enter('labelMarker'),
                  effects.consume(code),
                  effects.exit('labelMarker'),
                  effects.exit('labelEnd'),
                  afterLabelEnd)
            }
            function afterLabelEnd(code) {
              return 40 === code
                ? effects.attempt(
                    resourceConstruct,
                    ok,
                    defined ? ok : balanced
                  )(code)
                : 91 === code
                ? effects.attempt(
                    fullReferenceConstruct,
                    ok,
                    defined
                      ? effects.attempt(
                          collapsedReferenceConstruct,
                          ok,
                          balanced
                        )
                      : balanced
                  )(code)
                : defined
                ? ok(code)
                : balanced(code)
            }
            function balanced(code) {
              return (labelStart._balanced = !0), nok(code)
            }
          },
          resolveTo: function resolveToLabelEnd(events, context) {
            var group,
              label,
              text,
              token,
              open,
              close,
              media,
              index = events.length,
              offset = 0
            for (; index--; )
              if (((token = events[index][1]), open)) {
                if (
                  'link' === token.type ||
                  ('labelLink' === token.type && token._inactive)
                )
                  break
                'enter' === events[index][0] &&
                  'labelLink' === token.type &&
                  (token._inactive = !0)
              } else if (close) {
                if (
                  'enter' === events[index][0] &&
                  ('labelImage' === token.type || 'labelLink' === token.type) &&
                  !token._balanced &&
                  ((open = index), 'labelLink' !== token.type)
                ) {
                  offset = 2
                  break
                }
              } else 'labelEnd' === token.type && (close = index)
            return (
              (group = {
                type: 'labelLink' === events[open][1].type ? 'link' : 'image',
                start: shallow(events[open][1].start),
                end: shallow(events[events.length - 1][1].end),
              }),
              (label = {
                type: 'label',
                start: shallow(events[open][1].start),
                end: shallow(events[close][1].end),
              }),
              (text = {
                type: 'labelText',
                start: shallow(events[open + offset + 2][1].end),
                end: shallow(events[close - 2][1].start),
              }),
              (media = chunkedPush(
                (media = [
                  ['enter', group, context],
                  ['enter', label, context],
                ]),
                events.slice(open + 1, open + offset + 3)
              )),
              (media = chunkedPush(media, [['enter', text, context]])),
              (media = chunkedPush(
                media,
                resolveAll(
                  context.parser.constructs.insideSpan.null,
                  events.slice(open + offset + 4, close - 3),
                  context
                )
              )),
              (media = chunkedPush(media, [
                ['exit', text, context],
                events[close - 2],
                events[close - 1],
                ['exit', label, context],
              ])),
              (media = chunkedPush(media, events.slice(close + 1))),
              (media = chunkedPush(media, [['exit', group, context]])),
              chunkedSplice(events, open, events.length, media),
              events
            )
          },
          resolveAll: function resolveAllLabelEnd(events) {
            var token,
              index = -1
            for (; ++index < events.length; )
              (token = events[index][1])._used ||
                ('labelImage' !== token.type &&
                  'labelLink' !== token.type &&
                  'labelEnd' !== token.type) ||
                (events.splice(index + 1, 'labelImage' === token.type ? 4 : 2),
                (token.type = 'data'),
                index++)
            return events
          },
        },
        resourceConstruct = {
          tokenize: function tokenizeResource(effects, ok, nok) {
            return function start(code) {
              return (
                effects.enter('resource'),
                effects.enter('resourceMarker'),
                effects.consume(code),
                effects.exit('resourceMarker'),
                factoryWhitespace(effects, open)
              )
            }
            function open(code) {
              return 41 === code
                ? end(code)
                : factoryDestination(
                    effects,
                    destinationAfter,
                    nok,
                    'resourceDestination',
                    'resourceDestinationLiteral',
                    'resourceDestinationLiteralMarker',
                    'resourceDestinationRaw',
                    'resourceDestinationString',
                    3
                  )(code)
            }
            function destinationAfter(code) {
              return markdownLineEndingOrSpace(code)
                ? factoryWhitespace(effects, between)(code)
                : end(code)
            }
            function between(code) {
              return 34 === code || 39 === code || 40 === code
                ? factoryTitle(
                    effects,
                    factoryWhitespace(effects, end),
                    nok,
                    'resourceTitle',
                    'resourceTitleMarker',
                    'resourceTitleString'
                  )(code)
                : end(code)
            }
            function end(code) {
              return 41 === code
                ? (effects.enter('resourceMarker'),
                  effects.consume(code),
                  effects.exit('resourceMarker'),
                  effects.exit('resource'),
                  ok)
                : nok(code)
            }
          },
        },
        fullReferenceConstruct = {
          tokenize: function tokenizeFullReference(effects, ok, nok) {
            var self = this
            return function start(code) {
              return factoryLabel.call(
                self,
                effects,
                afterLabel,
                nok,
                'reference',
                'referenceMarker',
                'referenceString'
              )(code)
            }
            function afterLabel(code) {
              return self.parser.defined.indexOf(
                normalizeIdentifier(
                  self
                    .sliceSerialize(self.events[self.events.length - 1][1])
                    .slice(1, -1)
                )
              ) < 0
                ? nok(code)
                : ok(code)
            }
          },
        },
        collapsedReferenceConstruct = {
          tokenize: function tokenizeCollapsedReference(effects, ok, nok) {
            return function start(code) {
              return (
                effects.enter('reference'),
                effects.enter('referenceMarker'),
                effects.consume(code),
                effects.exit('referenceMarker'),
                open
              )
            }
            function open(code) {
              return 93 === code
                ? (effects.enter('referenceMarker'),
                  effects.consume(code),
                  effects.exit('referenceMarker'),
                  effects.exit('reference'),
                  ok)
                : nok(code)
            }
          },
        }
      module.exports = labelEnd
    },
    '../../node_modules/micromark/dist/tokenize/label-start-image.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        'use strict'
        var labelStartImage = {
          name: 'labelStartImage',
          tokenize: function tokenizeLabelStartImage(effects, ok, nok) {
            var self = this
            return function start(code) {
              return (
                effects.enter('labelImage'),
                effects.enter('labelImageMarker'),
                effects.consume(code),
                effects.exit('labelImageMarker'),
                open
              )
            }
            function open(code) {
              return 91 === code
                ? (effects.enter('labelMarker'),
                  effects.consume(code),
                  effects.exit('labelMarker'),
                  effects.exit('labelImage'),
                  after)
                : nok(code)
            }
            function after(code) {
              return 94 === code &&
                '_hiddenFootnoteSupport' in self.parser.constructs
                ? nok(code)
                : ok(code)
            }
          },
          resolveAll: __webpack_require__(
            '../../node_modules/micromark/dist/tokenize/label-end.js'
          ).resolveAll,
        }
        module.exports = labelStartImage
      },
    '../../node_modules/micromark/dist/tokenize/label-start-link.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var labelStartLink = {
        name: 'labelStartLink',
        tokenize: function tokenizeLabelStartLink(effects, ok, nok) {
          var self = this
          return function start(code) {
            return (
              effects.enter('labelLink'),
              effects.enter('labelMarker'),
              effects.consume(code),
              effects.exit('labelMarker'),
              effects.exit('labelLink'),
              after
            )
          }
          function after(code) {
            return 94 === code &&
              '_hiddenFootnoteSupport' in self.parser.constructs
              ? nok(code)
              : ok(code)
          }
        },
        resolveAll: __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/label-end.js'
        ).resolveAll,
      }
      module.exports = labelStartLink
    },
    '../../node_modules/micromark/dist/tokenize/line-ending.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var factorySpace = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-space.js'
        ),
        lineEnding = {
          name: 'lineEnding',
          tokenize: function tokenizeLineEnding(effects, ok) {
            return function start(code) {
              return (
                effects.enter('lineEnding'),
                effects.consume(code),
                effects.exit('lineEnding'),
                factorySpace(effects, ok, 'linePrefix')
              )
            }
          },
        }
      module.exports = lineEnding
    },
    '../../node_modules/micromark/dist/tokenize/list.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var asciiDigit = __webpack_require__(
          '../../node_modules/micromark/dist/character/ascii-digit.js'
        ),
        markdownSpace = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-space.js'
        ),
        prefixSize = __webpack_require__(
          '../../node_modules/micromark/dist/util/prefix-size.js'
        ),
        sizeChunks = __webpack_require__(
          '../../node_modules/micromark/dist/util/size-chunks.js'
        ),
        factorySpace = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-space.js'
        ),
        partialBlankLine = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/partial-blank-line.js'
        ),
        thematicBreak = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/thematic-break.js'
        ),
        list = {
          name: 'list',
          tokenize: function tokenizeListStart(effects, ok, nok) {
            var self = this,
              initialSize = prefixSize(self.events, 'linePrefix'),
              size = 0
            return function start(code) {
              var kind =
                self.containerState.type ||
                (42 === code || 43 === code || 45 === code
                  ? 'listUnordered'
                  : 'listOrdered')
              if (
                'listUnordered' === kind
                  ? !self.containerState.marker ||
                    code === self.containerState.marker
                  : asciiDigit(code)
              ) {
                if (
                  (self.containerState.type ||
                    ((self.containerState.type = kind),
                    effects.enter(kind, { _container: !0 })),
                  'listUnordered' === kind)
                )
                  return (
                    effects.enter('listItemPrefix'),
                    42 === code || 45 === code
                      ? effects.check(thematicBreak, nok, atMarker)(code)
                      : atMarker(code)
                  )
                if (!self.interrupt || 49 === code)
                  return (
                    effects.enter('listItemPrefix'),
                    effects.enter('listItemValue'),
                    inside(code)
                  )
              }
              return nok(code)
            }
            function inside(code) {
              return asciiDigit(code) && ++size < 10
                ? (effects.consume(code), inside)
                : (!self.interrupt || size < 2) &&
                  (self.containerState.marker
                    ? code === self.containerState.marker
                    : 41 === code || 46 === code)
                ? (effects.exit('listItemValue'), atMarker(code))
                : nok(code)
            }
            function atMarker(code) {
              return (
                effects.enter('listItemMarker'),
                effects.consume(code),
                effects.exit('listItemMarker'),
                (self.containerState.marker =
                  self.containerState.marker || code),
                effects.check(
                  partialBlankLine,
                  self.interrupt ? nok : onBlank,
                  effects.attempt(
                    listItemPrefixWhitespaceConstruct,
                    endOfPrefix,
                    otherPrefix
                  )
                )
              )
            }
            function onBlank(code) {
              return (
                (self.containerState.initialBlankLine = !0),
                initialSize++,
                endOfPrefix(code)
              )
            }
            function otherPrefix(code) {
              return markdownSpace(code)
                ? (effects.enter('listItemPrefixWhitespace'),
                  effects.consume(code),
                  effects.exit('listItemPrefixWhitespace'),
                  endOfPrefix)
                : nok(code)
            }
            function endOfPrefix(code) {
              return (
                (self.containerState.size =
                  initialSize +
                  sizeChunks(self.sliceStream(effects.exit('listItemPrefix')))),
                ok(code)
              )
            }
          },
          continuation: {
            tokenize: function tokenizeListContinuation(effects, ok, nok) {
              var self = this
              return (
                (self.containerState._closeFlow = void 0),
                effects.check(
                  partialBlankLine,
                  function onBlank(code) {
                    return (
                      (self.containerState.furtherBlankLines =
                        self.containerState.furtherBlankLines ||
                        self.containerState.initialBlankLine),
                      factorySpace(
                        effects,
                        ok,
                        'listItemIndent',
                        self.containerState.size + 1
                      )(code)
                    )
                  },
                  function notBlank(code) {
                    if (
                      self.containerState.furtherBlankLines ||
                      !markdownSpace(code)
                    )
                      return (
                        (self.containerState.furtherBlankLines =
                          self.containerState.initialBlankLine =
                            void 0),
                        notInCurrentItem(code)
                      )
                    return (
                      (self.containerState.furtherBlankLines =
                        self.containerState.initialBlankLine =
                          void 0),
                      effects.attempt(
                        indentConstruct,
                        ok,
                        notInCurrentItem
                      )(code)
                    )
                  }
                )
              )
              function notInCurrentItem(code) {
                return (
                  (self.containerState._closeFlow = !0),
                  (self.interrupt = void 0),
                  factorySpace(
                    effects,
                    effects.attempt(list, ok, nok),
                    'linePrefix',
                    self.parser.constructs.disable.null.indexOf(
                      'codeIndented'
                    ) > -1
                      ? void 0
                      : 4
                  )(code)
                )
              }
            },
          },
          exit: function tokenizeListEnd(effects) {
            effects.exit(this.containerState.type)
          },
        },
        listItemPrefixWhitespaceConstruct = {
          tokenize: function tokenizeListItemPrefixWhitespace(
            effects,
            ok,
            nok
          ) {
            var self = this
            return factorySpace(
              effects,
              function afterPrefix(code) {
                return markdownSpace(code) ||
                  !prefixSize(self.events, 'listItemPrefixWhitespace')
                  ? nok(code)
                  : ok(code)
              },
              'listItemPrefixWhitespace',
              self.parser.constructs.disable.null.indexOf('codeIndented') > -1
                ? void 0
                : 5
            )
          },
          partial: !0,
        },
        indentConstruct = {
          tokenize: function tokenizeIndent(effects, ok, nok) {
            var self = this
            return factorySpace(
              effects,
              function afterPrefix(code) {
                return prefixSize(self.events, 'listItemIndent') ===
                  self.containerState.size
                  ? ok(code)
                  : nok(code)
              },
              'listItemIndent',
              self.containerState.size + 1
            )
          },
          partial: !0,
        }
      module.exports = list
    },
    '../../node_modules/micromark/dist/tokenize/partial-blank-line.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        'use strict'
        var markdownLineEnding = __webpack_require__(
            '../../node_modules/micromark/dist/character/markdown-line-ending.js'
          ),
          factorySpace = __webpack_require__(
            '../../node_modules/micromark/dist/tokenize/factory-space.js'
          ),
          partialBlankLine = {
            tokenize: function tokenizePartialBlankLine(effects, ok, nok) {
              return factorySpace(
                effects,
                function afterWhitespace(code) {
                  return null === code || markdownLineEnding(code)
                    ? ok(code)
                    : nok(code)
                },
                'linePrefix'
              )
            },
            partial: !0,
          }
        module.exports = partialBlankLine
      },
    '../../node_modules/micromark/dist/tokenize/setext-underline.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var markdownLineEnding = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending.js'
        ),
        shallow = __webpack_require__(
          '../../node_modules/micromark/dist/util/shallow.js'
        ),
        factorySpace = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-space.js'
        ),
        setextUnderline = {
          name: 'setextUnderline',
          tokenize: function tokenizeSetextUnderline(effects, ok, nok) {
            var marker,
              paragraph,
              self = this,
              index = self.events.length
            for (; index--; )
              if (
                'lineEnding' !== self.events[index][1].type &&
                'linePrefix' !== self.events[index][1].type &&
                'content' !== self.events[index][1].type
              ) {
                paragraph = 'paragraph' === self.events[index][1].type
                break
              }
            return function start(code) {
              if (!self.lazy && (self.interrupt || paragraph))
                return (
                  effects.enter('setextHeadingLine'),
                  effects.enter('setextHeadingLineSequence'),
                  (marker = code),
                  closingSequence(code)
                )
              return nok(code)
            }
            function closingSequence(code) {
              return code === marker
                ? (effects.consume(code), closingSequence)
                : (effects.exit('setextHeadingLineSequence'),
                  factorySpace(effects, closingSequenceEnd, 'lineSuffix')(code))
            }
            function closingSequenceEnd(code) {
              return null === code || markdownLineEnding(code)
                ? (effects.exit('setextHeadingLine'), ok(code))
                : nok(code)
            }
          },
          resolveTo: function resolveToSetextUnderline(events, context) {
            var content,
              text,
              definition,
              heading,
              index = events.length
            for (; index--; )
              if ('enter' === events[index][0]) {
                if ('content' === events[index][1].type) {
                  content = index
                  break
                }
                'paragraph' === events[index][1].type && (text = index)
              } else
                'content' === events[index][1].type && events.splice(index, 1),
                  definition ||
                    'definition' !== events[index][1].type ||
                    (definition = index)
            ;(heading = {
              type: 'setextHeading',
              start: shallow(events[text][1].start),
              end: shallow(events[events.length - 1][1].end),
            }),
              (events[text][1].type = 'setextHeadingText'),
              definition
                ? (events.splice(text, 0, ['enter', heading, context]),
                  events.splice(definition + 1, 0, [
                    'exit',
                    events[content][1],
                    context,
                  ]),
                  (events[content][1].end = shallow(events[definition][1].end)))
                : (events[content][1] = heading)
            return events.push(['exit', heading, context]), events
          },
        }
      module.exports = setextUnderline
    },
    '../../node_modules/micromark/dist/tokenize/thematic-break.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var markdownLineEnding = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending.js'
        ),
        markdownSpace = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-space.js'
        ),
        factorySpace = __webpack_require__(
          '../../node_modules/micromark/dist/tokenize/factory-space.js'
        ),
        thematicBreak = {
          name: 'thematicBreak',
          tokenize: function tokenizeThematicBreak(effects, ok, nok) {
            var marker,
              size = 0
            return function start(code) {
              return (
                effects.enter('thematicBreak'), (marker = code), atBreak(code)
              )
            }
            function atBreak(code) {
              return code === marker
                ? (effects.enter('thematicBreakSequence'), sequence(code))
                : markdownSpace(code)
                ? factorySpace(effects, atBreak, 'whitespace')(code)
                : size < 3 || (null !== code && !markdownLineEnding(code))
                ? nok(code)
                : (effects.exit('thematicBreak'), ok(code))
            }
            function sequence(code) {
              return code === marker
                ? (effects.consume(code), size++, sequence)
                : (effects.exit('thematicBreakSequence'), atBreak(code))
            }
          },
        }
      module.exports = thematicBreak
    },
    '../../node_modules/micromark/dist/util/chunked-push.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var chunkedSplice = __webpack_require__(
        '../../node_modules/micromark/dist/util/chunked-splice.js'
      )
      module.exports = function chunkedPush(list, items) {
        return list.length
          ? (chunkedSplice(list, list.length, 0, items), list)
          : items
      }
    },
    '../../node_modules/micromark/dist/util/chunked-splice.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var splice = __webpack_require__(
        '../../node_modules/micromark/dist/constant/splice.js'
      )
      module.exports = function chunkedSplice(list, start, remove, items) {
        var parameters,
          end = list.length,
          chunkStart = 0
        if (
          ((start =
            start < 0
              ? -start > end
                ? 0
                : end + start
              : start > end
              ? end
              : start),
          (remove = remove > 0 ? remove : 0),
          items.length < 1e4)
        )
          (parameters = Array.from(items)).unshift(start, remove),
            splice.apply(list, parameters)
        else
          for (
            remove && splice.apply(list, [start, remove]);
            chunkStart < items.length;

          )
            (parameters = items.slice(chunkStart, chunkStart + 1e4)).unshift(
              start,
              0
            ),
              splice.apply(list, parameters),
              (chunkStart += 1e4),
              (start += 1e4)
      }
    },
    '../../node_modules/micromark/dist/util/classify-character.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var markdownLineEndingOrSpace = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending-or-space.js'
        ),
        unicodePunctuation = __webpack_require__(
          '../../node_modules/micromark/dist/character/unicode-punctuation.js'
        ),
        unicodeWhitespace = __webpack_require__(
          '../../node_modules/micromark/dist/character/unicode-whitespace.js'
        )
      module.exports = function classifyCharacter(code) {
        return null === code ||
          markdownLineEndingOrSpace(code) ||
          unicodeWhitespace(code)
          ? 1
          : unicodePunctuation(code)
          ? 2
          : void 0
      }
    },
    '../../node_modules/micromark/dist/util/combine-extensions.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var hasOwnProperty = __webpack_require__(
          '../../node_modules/micromark/dist/constant/has-own-property.js'
        ),
        chunkedSplice = __webpack_require__(
          '../../node_modules/micromark/dist/util/chunked-splice.js'
        ),
        miniflat = __webpack_require__(
          '../../node_modules/micromark/dist/util/miniflat.js'
        )
      function extension(all, extension) {
        var hook, left, right, code
        for (hook in extension)
          for (code in ((left = hasOwnProperty.call(all, hook)
            ? all[hook]
            : (all[hook] = {})),
          (right = extension[hook])))
            left[code] = constructs(
              miniflat(right[code]),
              hasOwnProperty.call(left, code) ? left[code] : []
            )
      }
      function constructs(list, existing) {
        for (var index = -1, before = []; ++index < list.length; )
          ('after' === list[index].add ? existing : before).push(list[index])
        return chunkedSplice(existing, 0, 0, before), existing
      }
      module.exports = function combineExtensions(extensions) {
        for (var all = {}, index = -1; ++index < extensions.length; )
          extension(all, extensions[index])
        return all
      }
    },
    '../../node_modules/micromark/dist/util/create-tokenizer.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var assign = __webpack_require__(
          '../../node_modules/micromark/dist/constant/assign.js'
        ),
        markdownLineEnding = __webpack_require__(
          '../../node_modules/micromark/dist/character/markdown-line-ending.js'
        ),
        chunkedPush = __webpack_require__(
          '../../node_modules/micromark/dist/util/chunked-push.js'
        ),
        chunkedSplice = __webpack_require__(
          '../../node_modules/micromark/dist/util/chunked-splice.js'
        ),
        miniflat = __webpack_require__(
          '../../node_modules/micromark/dist/util/miniflat.js'
        ),
        resolveAll = __webpack_require__(
          '../../node_modules/micromark/dist/util/resolve-all.js'
        ),
        serializeChunks = __webpack_require__(
          '../../node_modules/micromark/dist/util/serialize-chunks.js'
        ),
        shallow = __webpack_require__(
          '../../node_modules/micromark/dist/util/shallow.js'
        ),
        sliceChunks = __webpack_require__(
          '../../node_modules/micromark/dist/util/slice-chunks.js'
        )
      module.exports = function createTokenizer(parser, initialize, from) {
        var point = from ? shallow(from) : { line: 1, column: 1, offset: 0 },
          columnStart = {},
          resolveAllConstructs = [],
          chunks = [],
          stack = [],
          effects = {
            consume: function consume(code) {
              markdownLineEnding(code)
                ? (point.line++,
                  (point.column = 1),
                  (point.offset += -3 === code ? 2 : 1),
                  accountForPotentialSkip())
                : -1 !== code && (point.column++, point.offset++)
              point._bufferIndex < 0
                ? point._index++
                : (point._bufferIndex++,
                  point._bufferIndex === chunks[point._index].length &&
                    ((point._bufferIndex = -1), point._index++))
              context.previous = code
            },
            enter: function enter(type, fields) {
              var token = fields || {}
              return (
                (token.type = type),
                (token.start = now()),
                context.events.push(['enter', token, context]),
                stack.push(token),
                token
              )
            },
            exit: function exit(type) {
              var token = stack.pop()
              return (
                (token.end = now()),
                context.events.push(['exit', token, context]),
                token
              )
            },
            attempt: constructFactory(function onsuccessfulconstruct(
              construct,
              info
            ) {
              addResult(construct, info.from)
            }),
            check: constructFactory(onsuccessfulcheck),
            interrupt: constructFactory(onsuccessfulcheck, { interrupt: !0 }),
            lazy: constructFactory(onsuccessfulcheck, { lazy: !0 }),
          },
          context = {
            previous: null,
            events: [],
            parser: parser,
            sliceStream: sliceStream,
            sliceSerialize: function sliceSerialize(token) {
              return serializeChunks(sliceStream(token))
            },
            now: now,
            defineSkip: function skip(value) {
              ;(columnStart[value.line] = value.column),
                accountForPotentialSkip()
            },
            write: function write(slice) {
              if (
                ((chunks = chunkedPush(chunks, slice)),
                main(),
                null !== chunks[chunks.length - 1])
              )
                return []
              return (
                addResult(initialize, 0),
                (context.events = resolveAll(
                  resolveAllConstructs,
                  context.events,
                  context
                )),
                context.events
              )
            },
          },
          state = initialize.tokenize.call(context, effects)
        return (
          initialize.resolveAll && resolveAllConstructs.push(initialize),
          (point._index = 0),
          (point._bufferIndex = -1),
          context
        )
        function sliceStream(token) {
          return sliceChunks(chunks, token)
        }
        function now() {
          return shallow(point)
        }
        function main() {
          for (var chunkIndex, chunk; point._index < chunks.length; )
            if ('string' == typeof (chunk = chunks[point._index]))
              for (
                chunkIndex = point._index,
                  point._bufferIndex < 0 && (point._bufferIndex = 0);
                point._index === chunkIndex &&
                point._bufferIndex < chunk.length;

              )
                go(chunk.charCodeAt(point._bufferIndex))
            else go(chunk)
        }
        function go(code) {
          state = state(code)
        }
        function onsuccessfulcheck(construct, info) {
          info.restore()
        }
        function constructFactory(onreturn, fields) {
          return function hook(constructs, returnState, bogusState) {
            var listOfConstructs, constructIndex, currentConstruct, info
            return constructs.tokenize || 'length' in constructs
              ? handleListOfConstructs(miniflat(constructs))
              : function handleMapOfConstructs(code) {
                  if (code in constructs || null in constructs)
                    return handleListOfConstructs(
                      constructs.null
                        ? miniflat(constructs[code]).concat(
                            miniflat(constructs.null)
                          )
                        : constructs[code]
                    )(code)
                  return bogusState(code)
                }
            function handleListOfConstructs(list) {
              return (
                (listOfConstructs = list),
                handleConstruct(list[(constructIndex = 0)])
              )
            }
            function handleConstruct(construct) {
              return function start(code) {
                ;(info = (function store() {
                  var startPoint = now(),
                    startPrevious = context.previous,
                    startCurrentConstruct = context.currentConstruct,
                    startEventsIndex = context.events.length,
                    startStack = Array.from(stack)
                  return { restore: restore, from: startEventsIndex }
                  function restore() {
                    ;(point = startPoint),
                      (context.previous = startPrevious),
                      (context.currentConstruct = startCurrentConstruct),
                      (context.events.length = startEventsIndex),
                      (stack = startStack),
                      accountForPotentialSkip()
                  }
                })()),
                  (currentConstruct = construct),
                  construct.partial || (context.currentConstruct = construct)
                if (
                  construct.name &&
                  context.parser.constructs.disable.null.indexOf(
                    construct.name
                  ) > -1
                )
                  return nok()
                return construct.tokenize.call(
                  fields ? assign({}, context, fields) : context,
                  effects,
                  ok,
                  nok
                )(code)
              }
            }
            function ok(code) {
              return onreturn(currentConstruct, info), returnState
            }
            function nok(code) {
              return (
                info.restore(),
                ++constructIndex < listOfConstructs.length
                  ? handleConstruct(listOfConstructs[constructIndex])
                  : bogusState
              )
            }
          }
        }
        function addResult(construct, from) {
          construct.resolveAll &&
            resolveAllConstructs.indexOf(construct) < 0 &&
            resolveAllConstructs.push(construct),
            construct.resolve &&
              chunkedSplice(
                context.events,
                from,
                context.events.length - from,
                construct.resolve(context.events.slice(from), context)
              ),
            construct.resolveTo &&
              (context.events = construct.resolveTo(context.events, context))
        }
        function accountForPotentialSkip() {
          point.line in columnStart &&
            point.column < 2 &&
            ((point.column = columnStart[point.line]),
            (point.offset += columnStart[point.line] - 1))
        }
      }
    },
    '../../node_modules/micromark/dist/util/miniflat.js': function (module) {
      'use strict'
      module.exports = function miniflat(value) {
        return null == value ? [] : 'length' in value ? value : [value]
      }
    },
    '../../node_modules/micromark/dist/util/move-point.js': function (module) {
      'use strict'
      module.exports = function movePoint(point, offset) {
        return (
          (point.column += offset),
          (point.offset += offset),
          (point._bufferIndex += offset),
          point
        )
      }
    },
    '../../node_modules/micromark/dist/util/normalize-identifier.js': function (
      module
    ) {
      'use strict'
      module.exports = function normalizeIdentifier(value) {
        return value
          .replace(/[\t\n\r ]+/g, ' ')
          .replace(/^ | $/g, '')
          .toLowerCase()
          .toUpperCase()
      }
    },
    '../../node_modules/micromark/dist/util/prefix-size.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var sizeChunks = __webpack_require__(
        '../../node_modules/micromark/dist/util/size-chunks.js'
      )
      module.exports = function prefixSize(events, type) {
        var tail = events[events.length - 1]
        return tail && tail[1].type === type
          ? sizeChunks(tail[2].sliceStream(tail[1]))
          : 0
      }
    },
    '../../node_modules/micromark/dist/util/regex-check.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var fromCharCode = __webpack_require__(
        '../../node_modules/micromark/dist/constant/from-char-code.js'
      )
      module.exports = function regexCheck(regex) {
        return function check(code) {
          return regex.test(fromCharCode(code))
        }
      }
    },
    '../../node_modules/micromark/dist/util/resolve-all.js': function (module) {
      'use strict'
      module.exports = function resolveAll(constructs, events, context) {
        for (
          var resolve, called = [], index = -1;
          ++index < constructs.length;

        )
          (resolve = constructs[index].resolveAll) &&
            called.indexOf(resolve) < 0 &&
            ((events = resolve(events, context)), called.push(resolve))
        return events
      }
    },
    '../../node_modules/micromark/dist/util/safe-from-int.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var fromCharCode = __webpack_require__(
        '../../node_modules/micromark/dist/constant/from-char-code.js'
      )
      module.exports = function safeFromInt(value, base) {
        var code = parseInt(value, base)
        return code < 9 ||
          11 === code ||
          (code > 13 && code < 32) ||
          (code > 126 && code < 160) ||
          (code > 55295 && code < 57344) ||
          (code > 64975 && code < 65008) ||
          65535 == (65535 & code) ||
          65534 == (65535 & code) ||
          code > 1114111
          ? '�'
          : fromCharCode(code)
      }
    },
    '../../node_modules/micromark/dist/util/serialize-chunks.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var fromCharCode = __webpack_require__(
        '../../node_modules/micromark/dist/constant/from-char-code.js'
      )
      module.exports = function serializeChunks(chunks) {
        for (
          var chunk, value, atTab, index = -1, result = [];
          ++index < chunks.length;

        ) {
          if ('string' == typeof (chunk = chunks[index])) value = chunk
          else if (-5 === chunk) value = '\r'
          else if (-4 === chunk) value = '\n'
          else if (-3 === chunk) value = '\r\n'
          else if (-2 === chunk) value = '\t'
          else if (-1 === chunk) {
            if (atTab) continue
            value = ' '
          } else value = fromCharCode(chunk)
          ;(atTab = -2 === chunk), result.push(value)
        }
        return result.join('')
      }
    },
    '../../node_modules/micromark/dist/util/shallow.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var assign = __webpack_require__(
        '../../node_modules/micromark/dist/constant/assign.js'
      )
      module.exports = function shallow(object) {
        return assign({}, object)
      }
    },
    '../../node_modules/micromark/dist/util/size-chunks.js': function (module) {
      'use strict'
      module.exports = function sizeChunks(chunks) {
        for (var index = -1, size = 0; ++index < chunks.length; )
          size += 'string' == typeof chunks[index] ? chunks[index].length : 1
        return size
      }
    },
    '../../node_modules/micromark/dist/util/slice-chunks.js': function (
      module
    ) {
      'use strict'
      module.exports = function sliceChunks(chunks, token) {
        var view,
          startIndex = token.start._index,
          startBufferIndex = token.start._bufferIndex,
          endIndex = token.end._index,
          endBufferIndex = token.end._bufferIndex
        return (
          startIndex === endIndex
            ? (view = [
                chunks[startIndex].slice(startBufferIndex, endBufferIndex),
              ])
            : ((view = chunks.slice(startIndex, endIndex)),
              startBufferIndex > -1 &&
                (view[0] = view[0].slice(startBufferIndex)),
              endBufferIndex > 0 &&
                view.push(chunks[endIndex].slice(0, endBufferIndex))),
          view
        )
      }
    },
    '../../node_modules/micromark/dist/util/subtokenize.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var assign = __webpack_require__(
          '../../node_modules/micromark/dist/constant/assign.js'
        ),
        chunkedSplice = __webpack_require__(
          '../../node_modules/micromark/dist/util/chunked-splice.js'
        ),
        shallow = __webpack_require__(
          '../../node_modules/micromark/dist/util/shallow.js'
        )
      function subcontent(events, eventIndex) {
        for (
          var stream,
            previous,
            index,
            entered,
            end,
            adjust,
            token = events[eventIndex][1],
            context = events[eventIndex][2],
            startPosition = eventIndex - 1,
            startPositions = [],
            tokenizer =
              token._tokenizer ||
              context.parser[token.contentType](token.start),
            childEvents = tokenizer.events,
            jumps = [],
            gaps = {};
          token;

        ) {
          for (; events[++startPosition][1] !== token; );
          startPositions.push(startPosition),
            token._tokenizer ||
              ((stream = context.sliceStream(token)),
              token.next || stream.push(null),
              previous && tokenizer.defineSkip(token.start),
              token.isInFirstContentOfListItem &&
                (tokenizer._gfmTasklistFirstContentOfListItem = !0),
              tokenizer.write(stream),
              token.isInFirstContentOfListItem &&
                (tokenizer._gfmTasklistFirstContentOfListItem = void 0)),
            (previous = token),
            (token = token.next)
        }
        for (token = previous, index = childEvents.length; index--; )
          'enter' === childEvents[index][0]
            ? (entered = !0)
            : entered &&
              childEvents[index][1].type === childEvents[index - 1][1].type &&
              childEvents[index][1].start.line !==
                childEvents[index][1].end.line &&
              (add(childEvents.slice(index + 1, end)),
              (token._tokenizer = token.next = void 0),
              (token = token.previous),
              (end = index + 1))
        for (
          tokenizer.events = token._tokenizer = token.next = void 0,
            add(childEvents.slice(0, end)),
            index = -1,
            adjust = 0;
          ++index < jumps.length;

        )
          (gaps[adjust + jumps[index][0]] = adjust + jumps[index][1]),
            (adjust += jumps[index][1] - jumps[index][0] - 1)
        return gaps
        function add(slice) {
          var start = startPositions.pop()
          jumps.unshift([start, start + slice.length - 1]),
            chunkedSplice(events, start, 2, slice)
        }
      }
      module.exports = function subtokenize(events) {
        for (
          var event,
            lineIndex,
            otherIndex,
            otherEvent,
            parameters,
            subevents,
            more,
            jumps = {},
            index = -1;
          ++index < events.length;

        ) {
          for (; index in jumps; ) index = jumps[index]
          if (
            ((event = events[index]),
            index &&
              'chunkFlow' === event[1].type &&
              'listItemPrefix' === events[index - 1][1].type &&
              ((otherIndex = 0) <
                (subevents = event[1]._tokenizer.events).length &&
                'lineEndingBlank' === subevents[otherIndex][1].type &&
                (otherIndex += 2),
              otherIndex < subevents.length &&
                'content' === subevents[otherIndex][1].type))
          )
            for (
              ;
              ++otherIndex < subevents.length &&
              'content' !== subevents[otherIndex][1].type;

            )
              'chunkText' === subevents[otherIndex][1].type &&
                ((subevents[otherIndex][1].isInFirstContentOfListItem = !0),
                otherIndex++)
          if ('enter' === event[0])
            event[1].contentType &&
              (assign(jumps, subcontent(events, index)),
              (index = jumps[index]),
              (more = !0))
          else if (event[1]._container || event[1]._movePreviousLineEndings) {
            for (
              otherIndex = index, lineIndex = void 0;
              otherIndex-- &&
              ('lineEnding' === (otherEvent = events[otherIndex])[1].type ||
                'lineEndingBlank' === otherEvent[1].type);

            )
              'enter' === otherEvent[0] &&
                (lineIndex && (events[lineIndex][1].type = 'lineEndingBlank'),
                (otherEvent[1].type = 'lineEnding'),
                (lineIndex = otherIndex))
            lineIndex &&
              ((event[1].end = shallow(events[lineIndex][1].start)),
              (parameters = events.slice(lineIndex, index)).unshift(event),
              chunkedSplice(
                events,
                lineIndex,
                index - lineIndex + 1,
                parameters
              ))
          }
        }
        return !more
      }
    },
    '../../node_modules/parse-entities/decode-entity.browser.js': function (
      module
    ) {
      'use strict'
      var el
      module.exports = function decodeEntity(characters) {
        var char,
          entity = '&' + characters + ';'
        if (
          (((el = el || document.createElement('i')).innerHTML = entity),
          59 === (char = el.textContent).charCodeAt(char.length - 1) &&
            'semi' !== characters)
        )
          return !1
        return char !== entity && char
      }
    },
    '../../node_modules/react-is/cjs/react-is.production.min.js': function (
      __unused_webpack_module,
      exports
    ) {
      'use strict'
      var b = 'function' == typeof Symbol && Symbol.for,
        c = b ? Symbol.for('react.element') : 60103,
        d = b ? Symbol.for('react.portal') : 60106,
        e = b ? Symbol.for('react.fragment') : 60107,
        f = b ? Symbol.for('react.strict_mode') : 60108,
        g = b ? Symbol.for('react.profiler') : 60114,
        h = b ? Symbol.for('react.provider') : 60109,
        k = b ? Symbol.for('react.context') : 60110,
        l = b ? Symbol.for('react.async_mode') : 60111,
        m = b ? Symbol.for('react.concurrent_mode') : 60111,
        n = b ? Symbol.for('react.forward_ref') : 60112,
        p = b ? Symbol.for('react.suspense') : 60113,
        q = b ? Symbol.for('react.suspense_list') : 60120,
        r = b ? Symbol.for('react.memo') : 60115,
        t = b ? Symbol.for('react.lazy') : 60116,
        v = b ? Symbol.for('react.block') : 60121,
        w = b ? Symbol.for('react.fundamental') : 60117,
        x = b ? Symbol.for('react.responder') : 60118,
        y = b ? Symbol.for('react.scope') : 60119
      function z(a) {
        if ('object' == typeof a && null !== a) {
          var u = a.$$typeof
          switch (u) {
            case c:
              switch ((a = a.type)) {
                case l:
                case m:
                case e:
                case g:
                case f:
                case p:
                  return a
                default:
                  switch ((a = a && a.$$typeof)) {
                    case k:
                    case n:
                    case t:
                    case r:
                    case h:
                      return a
                    default:
                      return u
                  }
              }
            case d:
              return u
          }
        }
      }
      function A(a) {
        return z(a) === m
      }
      ;(exports.AsyncMode = l),
        (exports.ConcurrentMode = m),
        (exports.ContextConsumer = k),
        (exports.ContextProvider = h),
        (exports.Element = c),
        (exports.ForwardRef = n),
        (exports.Fragment = e),
        (exports.Lazy = t),
        (exports.Memo = r),
        (exports.Portal = d),
        (exports.Profiler = g),
        (exports.StrictMode = f),
        (exports.Suspense = p),
        (exports.isAsyncMode = function (a) {
          return A(a) || z(a) === l
        }),
        (exports.isConcurrentMode = A),
        (exports.isContextConsumer = function (a) {
          return z(a) === k
        }),
        (exports.isContextProvider = function (a) {
          return z(a) === h
        }),
        (exports.isElement = function (a) {
          return 'object' == typeof a && null !== a && a.$$typeof === c
        }),
        (exports.isForwardRef = function (a) {
          return z(a) === n
        }),
        (exports.isFragment = function (a) {
          return z(a) === e
        }),
        (exports.isLazy = function (a) {
          return z(a) === t
        }),
        (exports.isMemo = function (a) {
          return z(a) === r
        }),
        (exports.isPortal = function (a) {
          return z(a) === d
        }),
        (exports.isProfiler = function (a) {
          return z(a) === g
        }),
        (exports.isStrictMode = function (a) {
          return z(a) === f
        }),
        (exports.isSuspense = function (a) {
          return z(a) === p
        }),
        (exports.isValidElementType = function (a) {
          return (
            'string' == typeof a ||
            'function' == typeof a ||
            a === e ||
            a === m ||
            a === g ||
            a === f ||
            a === p ||
            a === q ||
            ('object' == typeof a &&
              null !== a &&
              (a.$$typeof === t ||
                a.$$typeof === r ||
                a.$$typeof === h ||
                a.$$typeof === k ||
                a.$$typeof === n ||
                a.$$typeof === w ||
                a.$$typeof === x ||
                a.$$typeof === y ||
                a.$$typeof === v))
          )
        }),
        (exports.typeOf = z)
    },
    '../../node_modules/react-is/index.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      module.exports = __webpack_require__(
        '../../node_modules/react-is/cjs/react-is.production.min.js'
      )
    },
    '../../node_modules/react-markdown/lib/ast-to-react.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var React = __webpack_require__('../../node_modules/react/index.js'),
        xtend = __webpack_require__('../../node_modules/xtend/immutable.js'),
        ReactIs = __webpack_require__('../../node_modules/react-is/index.js')
      function astToReact(node, options) {
        var parent =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          index =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          renderer = options.renderers[node.type]
        node.position ||
          (node.position = {
            start: { line: null, column: null, offset: null },
            end: { line: null, column: null, offset: null },
          })
        var pos = node.position.start,
          key = [node.type, pos.line, pos.column, index].join('-')
        if (!ReactIs.isValidElementType(renderer))
          throw new Error(
            'Renderer for type `'.concat(
              node.type,
              '` not defined or is not renderable'
            )
          )
        var nodeProps = (function getNodeProps(
          node,
          key,
          opts,
          renderer,
          parent,
          index
        ) {
          var props = { key: key },
            isSimpleRenderer =
              'string' == typeof renderer || renderer === React.Fragment
          opts.sourcePos &&
            node.position &&
            (props['data-sourcepos'] = (function flattenPosition(pos) {
              return [
                pos.start.line,
                ':',
                pos.start.column,
                '-',
                pos.end.line,
                ':',
                pos.end.column,
              ]
                .map(String)
                .join('')
            })(node.position))
          opts.rawSourcePos &&
            !isSimpleRenderer &&
            (props.sourcePosition = node.position)
          opts.includeNodeIndex &&
            parent.node &&
            parent.node.children &&
            !isSimpleRenderer &&
            ((props.index = parent.node.children.indexOf(node)),
            (props.parentChildCount = parent.node.children.length))
          var ref =
            null !== node.identifier && void 0 !== node.identifier
              ? opts.definitions[node.identifier.toUpperCase()] || {}
              : null
          switch (node.type) {
            case 'root':
              assignDefined(props, { className: opts.className })
              break
            case 'text':
              ;(props.nodeKey = key), (props.children = node.value)
              break
            case 'heading':
              props.level = node.depth
              break
            case 'list':
              ;(props.start = node.start),
                (props.ordered = node.ordered),
                (props.spread = node.spread),
                (props.depth = node.depth)
              break
            case 'listItem':
              ;(props.checked = node.checked),
                (props.spread = node.spread),
                (props.ordered = node.ordered),
                (props.index = node.index),
                (props.children = (function getListItemChildren(node, parent) {
                  var loose =
                    parent && parent.node
                      ? (function listLoose(node) {
                          var children = node.children,
                            loose = node.spread,
                            index = -1
                          for (; !loose && ++index < children.length; )
                            loose = listItemLoose(children[index])
                          return loose
                        })(parent.node)
                      : listItemLoose(node)
                  return loose
                    ? node.children
                    : (function unwrapParagraphs(node) {
                        return node.children.reduce(function (array, child) {
                          return array.concat(
                            'paragraph' === child.type
                              ? child.children
                              : [child]
                          )
                        }, [])
                      })(node)
                })(node, parent).map(function (childNode, i) {
                  return astToReact(
                    childNode,
                    opts,
                    { node: node, props: props },
                    i
                  )
                }))
              break
            case 'definition':
              assignDefined(props, {
                identifier: node.identifier,
                title: node.title,
                url: node.url,
              })
              break
            case 'code':
              assignDefined(props, {
                language: node.lang && node.lang.split(/\s/, 1)[0],
              })
              break
            case 'inlineCode':
              ;(props.children = node.value), (props.inline = !0)
              break
            case 'link':
              assignDefined(props, {
                title: node.title || void 0,
                target:
                  'function' == typeof opts.linkTarget
                    ? opts.linkTarget(node.url, node.children, node.title)
                    : opts.linkTarget,
                href: opts.transformLinkUri
                  ? opts.transformLinkUri(node.url, node.children, node.title)
                  : node.url,
              })
              break
            case 'image':
              assignDefined(props, {
                src: opts.transformImageUri
                  ? opts.transformImageUri(
                      node.url,
                      node.children,
                      node.title,
                      node.alt
                    )
                  : node.url,
                alt: node.alt || '',
                title: node.title || void 0,
              })
              break
            case 'linkReference':
              assignDefined(
                props,
                xtend(ref, {
                  href: opts.transformLinkUri
                    ? opts.transformLinkUri(ref.href)
                    : ref.href,
                })
              )
              break
            case 'imageReference':
              assignDefined(props, {
                src:
                  opts.transformImageUri && ref.href
                    ? opts.transformImageUri(
                        ref.href,
                        node.children,
                        ref.title,
                        node.alt
                      )
                    : ref.href,
                alt: node.alt || '',
                title: ref.title || void 0,
              })
              break
            case 'table':
            case 'tableHead':
            case 'tableBody':
              props.columnAlignment = node.align
              break
            case 'tableRow':
              ;(props.isHeader = 'tableHead' === parent.node.type),
                (props.columnAlignment = parent.props.columnAlignment)
              break
            case 'tableCell':
              assignDefined(props, {
                isHeader: parent.props.isHeader,
                align: parent.props.columnAlignment[index],
              })
              break
            case 'virtualHtml':
              props.tag = node.tag
              break
            case 'html':
              ;(props.isBlock =
                node.position.start.line !== node.position.end.line),
                (props.allowDangerousHtml = opts.allowDangerousHtml),
                (props.escapeHtml = opts.escapeHtml),
                (props.skipHtml = opts.skipHtml)
              break
            case 'parsedHtml':
              var parsedChildren
              node.children &&
                (parsedChildren = node.children.map(function (child, i) {
                  return astToReact(
                    child,
                    opts,
                    { node: node, props: props },
                    i
                  )
                })),
                (props.allowDangerousHtml = opts.allowDangerousHtml),
                (props.escapeHtml = opts.escapeHtml),
                (props.skipHtml = opts.skipHtml),
                (props.element = node.element
                  ? (function mergeNodeChildren(node, parsedChildren) {
                      var el = node.element
                      if (Array.isArray(el)) {
                        var Fragment = React.Fragment || 'div'
                        return React.createElement(Fragment, null, el)
                      }
                      if (el.props.children || parsedChildren) {
                        var children = React.Children.toArray(
                          el.props.children
                        ).concat(parsedChildren)
                        return React.cloneElement(el, null, children)
                      }
                      return React.cloneElement(el, null)
                    })(node, parsedChildren)
                  : null)
              break
            default:
              assignDefined(
                props,
                xtend(node, {
                  type: void 0,
                  position: void 0,
                  children: void 0,
                })
              )
          }
          !isSimpleRenderer && node.value && (props.value = node.value)
          isSimpleRenderer || (props.node = node)
          return props
        })(node, key, options, renderer, parent, index)
        return React.createElement(
          renderer,
          nodeProps,
          nodeProps.children ||
            (function resolveChildren() {
              return (
                node.children &&
                node.children.map(function (childNode, i) {
                  return astToReact(
                    childNode,
                    options,
                    { node: node, props: nodeProps },
                    i
                  )
                })
              )
            })() ||
            void 0
        )
      }
      function assignDefined(target, attrs) {
        for (var key in attrs)
          void 0 !== attrs[key] && (target[key] = attrs[key])
      }
      function listItemLoose(node) {
        var spread = node.spread
        return null == spread ? node.children.length > 1 : spread
      }
      module.exports = astToReact
    },
    '../../node_modules/react-markdown/lib/get-definitions.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var visit = __webpack_require__(
        '../../node_modules/react-markdown/node_modules/unist-util-visit/index.js'
      )
      module.exports = function getDefinitions(tree) {
        var definitions =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        return (
          visit(tree, 'definition', function (node) {
            var identifier = node.identifier.toUpperCase()
            identifier in definitions ||
              (definitions[identifier] = { href: node.url, title: node.title })
          }),
          definitions
        )
      }
    },
    '../../node_modules/react-markdown/lib/plugins/disallow-node.js': function (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      'use strict'
      var visit = __webpack_require__(
          '../../node_modules/react-markdown/node_modules/unist-util-visit/index.js'
        ),
        splice = [].splice
      function ifNotMatch(allow, mode) {
        return function transform(tree) {
          return visit(tree, filter), tree
        }
        function filter(node, index, parent) {
          if (parent && !allow(node, index, parent)) {
            var parameters = [index, 1]
            return (
              'unwrap' === mode &&
                node.children &&
                (parameters = parameters.concat(node.children)),
              splice.apply(parent.children, parameters),
              index
            )
          }
        }
      }
      ;(exports.ofType = function (types, mode) {
        return ifNotMatch(function allow(node, index, parent) {
          return !types.includes(node.type)
        }, mode)
      }),
        (exports.ifNotMatch = ifNotMatch)
    },
    '../../node_modules/react-markdown/lib/plugins/naive-html.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var visit = __webpack_require__(
          '../../node_modules/react-markdown/node_modules/unist-util-visit/index.js'
        ),
        type = 'virtualHtml',
        selfClosingRe =
          /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i,
        simpleTagRe = /^<(\/?)([a-z]+)\s*>$/
      module.exports = function (tree) {
        var open, currentParent
        return (
          visit(
            tree,
            'html',
            function (node, index, parent) {
              currentParent !== parent &&
                ((open = []), (currentParent = parent))
              var selfClosing = (function getSelfClosing(node) {
                var match = node.value.match(selfClosingRe)
                return !!match && match[1]
              })(node)
              if (selfClosing)
                return (
                  parent.children.splice(index, 1, {
                    type: 'virtualHtml',
                    tag: selfClosing,
                    position: node.position,
                  }),
                  !0
                )
              var current = (function getSimpleTag(node, parent) {
                var match = node.value.match(simpleTagRe)
                return (
                  !!match && { tag: match[2], opening: !match[1], node: node }
                )
              })(node)
              if (!current) return !0
              var matching = (function findAndPull(open, matchingTag) {
                var i = open.length
                for (; i--; )
                  if (open[i].tag === matchingTag) return open.splice(i, 1)[0]
                return !1
              })(open, current.tag)
              return (
                matching
                  ? parent.children.splice(
                      index,
                      0,
                      (function virtual(fromNode, toNode, parent) {
                        var fromIndex = parent.children.indexOf(fromNode.node),
                          toIndex = parent.children.indexOf(toNode.node),
                          extracted = parent.children.splice(
                            fromIndex,
                            toIndex - fromIndex + 1
                          ),
                          children = extracted.slice(1, -1)
                        return {
                          type: type,
                          children: children,
                          tag: fromNode.tag,
                          position: {
                            start: fromNode.node.position.start,
                            end: toNode.node.position.end,
                            indent: [],
                          },
                        }
                      })(current, matching, parent)
                    )
                  : current.opening || open.push(current),
                !0
              )
            },
            !0
          ),
          tree
        )
      }
    },
    '../../node_modules/react-markdown/lib/react-markdown.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var xtend = __webpack_require__('../../node_modules/xtend/immutable.js'),
        unified = __webpack_require__('../../node_modules/unified/index.js'),
        parse = __webpack_require__(
          '../../node_modules/react-markdown/node_modules/remark-parse/index.js'
        ),
        PropTypes = __webpack_require__(
          '../../node_modules/prop-types/index.js'
        ),
        addListMetadata = __webpack_require__(
          '../../node_modules/mdast-add-list-metadata/index.js'
        ),
        naiveHtml = __webpack_require__(
          '../../node_modules/react-markdown/lib/plugins/naive-html.js'
        ),
        disallowNode = __webpack_require__(
          '../../node_modules/react-markdown/lib/plugins/disallow-node.js'
        ),
        astToReact = __webpack_require__(
          '../../node_modules/react-markdown/lib/ast-to-react.js'
        ),
        wrapTableRows = __webpack_require__(
          '../../node_modules/react-markdown/lib/wrap-table-rows.js'
        ),
        getDefinitions = __webpack_require__(
          '../../node_modules/react-markdown/lib/get-definitions.js'
        ),
        uriTransformer = __webpack_require__(
          '../../node_modules/react-markdown/lib/uri-transformer.js'
        ),
        defaultRenderers = __webpack_require__(
          '../../node_modules/react-markdown/lib/renderers.js'
        ),
        symbols = __webpack_require__(
          '../../node_modules/react-markdown/lib/symbols.js'
        ),
        allTypes = Object.keys(defaultRenderers),
        ReactMarkdown = function ReactMarkdown(props) {
          var src = props.source || props.children || ''
          if (props.allowedTypes && props.disallowedTypes)
            throw new Error(
              'Only one of `allowedTypes` and `disallowedTypes` should be defined'
            )
          var renderers = xtend(defaultRenderers, props.renderers),
            processor = unified()
              .use(parse)
              .use(props.plugins || []),
            tree = processor.runSync(processor.parse(src)),
            renderProps = xtend(props, {
              renderers: renderers,
              definitions: getDefinitions(tree),
            })
          return (
            (function determineAstToReactTransforms(props) {
              var transforms = [wrapTableRows, addListMetadata()],
                disallowedTypes = props.disallowedTypes
              props.allowedTypes &&
                (disallowedTypes = allTypes.filter(function (type) {
                  return (
                    'root' !== type && -1 === props.allowedTypes.indexOf(type)
                  )
                }))
              var removalMethod = props.unwrapDisallowed ? 'unwrap' : 'remove'
              disallowedTypes &&
                disallowedTypes.length > 0 &&
                transforms.push(
                  disallowNode.ofType(disallowedTypes, removalMethod)
                )
              props.allowNode &&
                transforms.push(
                  disallowNode.ifNotMatch(props.allowNode, removalMethod)
                )
              var renderHtml =
                  (props.allowDangerousHtml || !1 === props.escapeHtml) &&
                  !props.skipHtml,
                hasHtmlParser = (props.astPlugins || []).some(function (
                  transform
                ) {
                  return transform.identity === symbols.HtmlParser
                })
              renderHtml && !hasHtmlParser && transforms.push(naiveHtml)
              props.astPlugins &&
                (transforms = transforms.concat(props.astPlugins))
              return transforms.push(astToReact), transforms
            })(props).forEach(function (transform) {
              tree = transform(tree, renderProps)
            }),
            tree
          )
        }
      ;(ReactMarkdown.defaultProps = { transformLinkUri: uriTransformer }),
        (ReactMarkdown.propTypes = {
          className: PropTypes.string,
          source: PropTypes.string,
          children: PropTypes.string,
          sourcePos: PropTypes.bool,
          rawSourcePos: PropTypes.bool,
          escapeHtml: PropTypes.bool,
          allowDangerousHtml: PropTypes.bool,
          skipHtml: PropTypes.bool,
          allowNode: PropTypes.func,
          allowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
          disallowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
          transformLinkUri: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.bool,
          ]),
          linkTarget: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
          transformImageUri: PropTypes.func,
          astPlugins: PropTypes.arrayOf(PropTypes.func),
          unwrapDisallowed: PropTypes.bool,
          renderers: PropTypes.object,
          plugins: PropTypes.array,
        }),
        (ReactMarkdown.types = allTypes),
        (ReactMarkdown.renderers = defaultRenderers),
        (ReactMarkdown.uriTransformer = uriTransformer),
        (module.exports = ReactMarkdown)
    },
    '../../node_modules/react-markdown/lib/renderers.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var xtend = __webpack_require__('../../node_modules/xtend/immutable.js'),
        React = __webpack_require__('../../node_modules/react/index.js'),
        supportsStringRender =
          parseInt((React.version || '16').slice(0, 2), 10) >= 16,
        createElement = React.createElement
      function SimpleRenderer(tag, props) {
        return createElement(tag, getCoreProps(props), props.children)
      }
      function getCoreProps(props) {
        var source = props['data-sourcepos']
        return source ? { 'data-sourcepos': source } : {}
      }
      module.exports = {
        break: 'br',
        paragraph: 'p',
        emphasis: 'em',
        strong: 'strong',
        thematicBreak: 'hr',
        blockquote: 'blockquote',
        delete: 'del',
        link: 'a',
        image: 'img',
        linkReference: 'a',
        imageReference: 'img',
        table: SimpleRenderer.bind(null, 'table'),
        tableHead: SimpleRenderer.bind(null, 'thead'),
        tableBody: SimpleRenderer.bind(null, 'tbody'),
        tableRow: SimpleRenderer.bind(null, 'tr'),
        tableCell: function TableCell(props) {
          var style = props.align ? { textAlign: props.align } : void 0,
            coreProps = getCoreProps(props)
          return createElement(
            props.isHeader ? 'th' : 'td',
            style ? xtend({ style: style }, coreProps) : coreProps,
            props.children
          )
        },
        root: function Root(props) {
          var className = props.className,
            root = (!className && React.Fragment) || 'div'
          return createElement(
            root,
            className ? { className: className } : null,
            props.children
          )
        },
        text: function TextRenderer(props) {
          var children = props.children || ''
          return supportsStringRender
            ? children
            : createElement('span', null, children)
        },
        list: function List(props) {
          var attrs = getCoreProps(props)
          null !== props.start &&
            1 !== props.start &&
            void 0 !== props.start &&
            (attrs.start = props.start.toString())
          return createElement(
            props.ordered ? 'ol' : 'ul',
            attrs,
            props.children
          )
        },
        listItem: function ListItem(props) {
          var checkbox = null
          if (null !== props.checked && void 0 !== props.checked) {
            var checked = props.checked
            checkbox = createElement('input', {
              type: 'checkbox',
              checked: checked,
              readOnly: !0,
            })
          }
          return createElement(
            'li',
            getCoreProps(props),
            checkbox,
            props.children
          )
        },
        definition: function NullRenderer() {
          return null
        },
        heading: function Heading(props) {
          return createElement(
            'h'.concat(props.level),
            getCoreProps(props),
            props.children
          )
        },
        inlineCode: function InlineCode(props) {
          return createElement('code', getCoreProps(props), props.children)
        },
        code: function CodeBlock(props) {
          var className = props.language && 'language-'.concat(props.language),
            code = createElement(
              'code',
              className ? { className: className } : null,
              props.value
            )
          return createElement('pre', getCoreProps(props), code)
        },
        html: function Html(props) {
          if (props.skipHtml) return null
          var dangerous = props.allowDangerousHtml || !1 === props.escapeHtml,
            tag = props.isBlock ? 'div' : 'span'
          if (!dangerous)
            return createElement(React.Fragment || tag, null, props.value)
          var nodeProps = { dangerouslySetInnerHTML: { __html: props.value } }
          return createElement(tag, nodeProps)
        },
        virtualHtml: function VirtualHtml(props) {
          return createElement(props.tag, getCoreProps(props), props.children)
        },
        parsedHtml: function ParsedHtml(props) {
          return props['data-sourcepos']
            ? React.cloneElement(props.element, {
                'data-sourcepos': props['data-sourcepos'],
              })
            : props.element
        },
      }
    },
    '../../node_modules/react-markdown/lib/symbols.js': function (
      __unused_webpack_module,
      exports
    ) {
      'use strict'
      exports.HtmlParser =
        'undefined' == typeof Symbol
          ? '__RMD_HTML_PARSER__'
          : Symbol('__RMD_HTML_PARSER__')
    },
    '../../node_modules/react-markdown/lib/uri-transformer.js': function (
      module
    ) {
      'use strict'
      var protocols = ['http', 'https', 'mailto', 'tel']
      module.exports = function uriTransformer(uri) {
        var url = (uri || '').trim(),
          first = url.charAt(0)
        if ('#' === first || '/' === first) return url
        var colon = url.indexOf(':')
        if (-1 === colon) return url
        for (var length = protocols.length, index = -1; ++index < length; ) {
          var protocol = protocols[index]
          if (
            colon === protocol.length &&
            url.slice(0, protocol.length).toLowerCase() === protocol
          )
            return url
        }
        return (-1 !== (index = url.indexOf('?')) && colon > index) ||
          (-1 !== (index = url.indexOf('#')) && colon > index)
          ? url
          : 'javascript:void(0)'
      }
    },
    '../../node_modules/react-markdown/lib/wrap-table-rows.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var visit = __webpack_require__(
        '../../node_modules/react-markdown/node_modules/unist-util-visit/index.js'
      )
      function wrap(table) {
        var children = table.children
        ;(table.children = [
          {
            type: 'tableHead',
            align: table.align,
            children: [children[0]],
            position: children[0].position,
          },
        ]),
          children.length > 1 &&
            table.children.push({
              type: 'tableBody',
              align: table.align,
              children: children.slice(1),
              position: {
                start: children[1].position.start,
                end: children[children.length - 1].position.end,
              },
            })
      }
      module.exports = function (node) {
        return visit(node, 'table', wrap), node
      }
    },
    '../../node_modules/react-markdown/node_modules/mdast-util-from-markdown/dist/index.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        'use strict'
        module.exports = function fromMarkdown(value, encoding, options) {
          'string' != typeof encoding &&
            ((options = encoding), (encoding = void 0))
          return (function compiler(options) {
            var settings = options || {},
              config = (function configure(config, extensions) {
                var index = -1
                for (; ++index < extensions.length; )
                  extension(config, extensions[index])
                return config
              })(
                {
                  transforms: [],
                  canContainEols: [
                    'emphasis',
                    'fragment',
                    'heading',
                    'paragraph',
                    'strong',
                  ],
                  enter: {
                    autolink: opener(link),
                    autolinkProtocol: onenterdata,
                    autolinkEmail: onenterdata,
                    atxHeading: opener(heading),
                    blockQuote: opener(blockQuote),
                    characterEscape: onenterdata,
                    characterReference: onenterdata,
                    codeFenced: opener(codeFlow),
                    codeFencedFenceInfo: buffer,
                    codeFencedFenceMeta: buffer,
                    codeIndented: opener(codeFlow, buffer),
                    codeText: opener(codeText, buffer),
                    codeTextData: onenterdata,
                    data: onenterdata,
                    codeFlowValue: onenterdata,
                    definition: opener(definition),
                    definitionDestinationString: buffer,
                    definitionLabelString: buffer,
                    definitionTitleString: buffer,
                    emphasis: opener(emphasis),
                    hardBreakEscape: opener(hardBreak),
                    hardBreakTrailing: opener(hardBreak),
                    htmlFlow: opener(html, buffer),
                    htmlFlowData: onenterdata,
                    htmlText: opener(html, buffer),
                    htmlTextData: onenterdata,
                    image: opener(image),
                    label: buffer,
                    link: opener(link),
                    listItem: opener(listItem),
                    listItemValue: onenterlistitemvalue,
                    listOrdered: opener(list, onenterlistordered),
                    listUnordered: opener(list),
                    paragraph: opener(paragraph),
                    reference: onenterreference,
                    referenceString: buffer,
                    resourceDestinationString: buffer,
                    resourceTitleString: buffer,
                    setextHeading: opener(heading),
                    strong: opener(strong),
                    thematicBreak: opener(thematicBreak),
                  },
                  exit: {
                    atxHeading: closer(),
                    atxHeadingSequence: onexitatxheadingsequence,
                    autolink: closer(),
                    autolinkEmail: onexitautolinkemail,
                    autolinkProtocol: onexitautolinkprotocol,
                    blockQuote: closer(),
                    characterEscapeValue: onexitdata,
                    characterReferenceMarkerHexadecimal:
                      onexitcharacterreferencemarker,
                    characterReferenceMarkerNumeric:
                      onexitcharacterreferencemarker,
                    characterReferenceValue: onexitcharacterreferencevalue,
                    codeFenced: closer(onexitcodefenced),
                    codeFencedFence: onexitcodefencedfence,
                    codeFencedFenceInfo: onexitcodefencedfenceinfo,
                    codeFencedFenceMeta: onexitcodefencedfencemeta,
                    codeFlowValue: onexitdata,
                    codeIndented: closer(onexitcodeindented),
                    codeText: closer(onexitcodetext),
                    codeTextData: onexitdata,
                    data: onexitdata,
                    definition: closer(),
                    definitionDestinationString:
                      onexitdefinitiondestinationstring,
                    definitionLabelString: onexitdefinitionlabelstring,
                    definitionTitleString: onexitdefinitiontitlestring,
                    emphasis: closer(),
                    hardBreakEscape: closer(onexithardbreak),
                    hardBreakTrailing: closer(onexithardbreak),
                    htmlFlow: closer(onexithtmlflow),
                    htmlFlowData: onexitdata,
                    htmlText: closer(onexithtmltext),
                    htmlTextData: onexitdata,
                    image: closer(onexitimage),
                    label: onexitlabel,
                    labelText: onexitlabeltext,
                    lineEnding: onexitlineending,
                    link: closer(onexitlink),
                    listItem: closer(),
                    listOrdered: closer(),
                    listUnordered: closer(),
                    paragraph: closer(),
                    referenceString: onexitreferencestring,
                    resourceDestinationString: onexitresourcedestinationstring,
                    resourceTitleString: onexitresourcetitlestring,
                    resource: onexitresource,
                    setextHeading: closer(onexitsetextheading),
                    setextHeadingLineSequence: onexitsetextheadinglinesequence,
                    setextHeadingText: onexitsetextheadingtext,
                    strong: closer(),
                    thematicBreak: closer(),
                  },
                },
                settings.mdastExtensions || []
              ),
              data = {}
            return compile
            function compile(events) {
              for (
                var handler,
                  tree = { type: 'root', children: [] },
                  tokenStack = [],
                  listStack = [],
                  index = -1,
                  context = {
                    stack: [tree],
                    tokenStack: tokenStack,
                    config: config,
                    enter: enter,
                    exit: exit,
                    buffer: buffer,
                    resume: resume,
                    setData: setData,
                    getData: getData,
                  };
                ++index < events.length;

              )
                ('listOrdered' !== events[index][1].type &&
                  'listUnordered' !== events[index][1].type) ||
                  ('enter' === events[index][0]
                    ? listStack.push(index)
                    : (index = prepareList(
                        events,
                        listStack.pop(index),
                        index
                      )))
              for (index = -1; ++index < events.length; )
                (handler = config[events[index][0]]),
                  own.call(handler, events[index][1].type) &&
                    handler[events[index][1].type].call(
                      assign(
                        { sliceSerialize: events[index][2].sliceSerialize },
                        context
                      ),
                      events[index][1]
                    )
              if (tokenStack.length)
                throw new Error(
                  'Cannot close document, a token (`' +
                    tokenStack[tokenStack.length - 1].type +
                    '`, ' +
                    stringifyPosition({
                      start: tokenStack[tokenStack.length - 1].start,
                      end: tokenStack[tokenStack.length - 1].end,
                    }) +
                    ') is still open'
                )
              for (
                tree.position = {
                  start: point(
                    events.length
                      ? events[0][1].start
                      : { line: 1, column: 1, offset: 0 }
                  ),
                  end: point(
                    events.length
                      ? events[events.length - 2][1].end
                      : { line: 1, column: 1, offset: 0 }
                  ),
                },
                  index = -1;
                ++index < config.transforms.length;

              )
                tree = config.transforms[index](tree) || tree
              return tree
            }
            function prepareList(events, start, length) {
              for (
                var listItem,
                  tailIndex,
                  lineIndex,
                  tailEvent,
                  event,
                  firstBlankLineIndex,
                  atMarker,
                  index = start - 1,
                  containerBalance = -1,
                  listSpread = !1;
                ++index <= length;

              )
                if (
                  ('listUnordered' === (event = events[index])[1].type ||
                  'listOrdered' === event[1].type ||
                  'blockQuote' === event[1].type
                    ? ('enter' === event[0]
                        ? containerBalance++
                        : containerBalance--,
                      (atMarker = void 0))
                    : 'lineEndingBlank' === event[1].type
                    ? 'enter' === event[0] &&
                      (!listItem ||
                        atMarker ||
                        containerBalance ||
                        firstBlankLineIndex ||
                        (firstBlankLineIndex = index),
                      (atMarker = void 0))
                    : 'linePrefix' === event[1].type ||
                      'listItemValue' === event[1].type ||
                      'listItemMarker' === event[1].type ||
                      'listItemPrefix' === event[1].type ||
                      'listItemPrefixWhitespace' === event[1].type ||
                      (atMarker = void 0),
                  (!containerBalance &&
                    'enter' === event[0] &&
                    'listItemPrefix' === event[1].type) ||
                    (-1 === containerBalance &&
                      'exit' === event[0] &&
                      ('listUnordered' === event[1].type ||
                        'listOrdered' === event[1].type)))
                ) {
                  if (listItem) {
                    for (tailIndex = index, lineIndex = void 0; tailIndex--; )
                      if (
                        'lineEnding' ===
                          (tailEvent = events[tailIndex])[1].type ||
                        'lineEndingBlank' === tailEvent[1].type
                      ) {
                        if ('exit' === tailEvent[0]) continue
                        lineIndex &&
                          ((events[lineIndex][1].type = 'lineEndingBlank'),
                          (listSpread = !0)),
                          (tailEvent[1].type = 'lineEnding'),
                          (lineIndex = tailIndex)
                      } else if (
                        'linePrefix' !== tailEvent[1].type &&
                        'blockQuotePrefix' !== tailEvent[1].type &&
                        'blockQuotePrefixWhitespace' !== tailEvent[1].type &&
                        'blockQuoteMarker' !== tailEvent[1].type &&
                        'listItemIndent' !== tailEvent[1].type
                      )
                        break
                    firstBlankLineIndex &&
                      (!lineIndex || firstBlankLineIndex < lineIndex) &&
                      (listItem._spread = !0),
                      (listItem.end = point(
                        lineIndex ? events[lineIndex][1].start : event[1].end
                      )),
                      events.splice(lineIndex || index, 0, [
                        'exit',
                        listItem,
                        event[2],
                      ]),
                      index++,
                      length++
                  }
                  'listItemPrefix' === event[1].type &&
                    ((listItem = {
                      type: 'listItem',
                      _spread: !1,
                      start: point(event[1].start),
                    }),
                    events.splice(index, 0, ['enter', listItem, event[2]]),
                    index++,
                    length++,
                    (firstBlankLineIndex = void 0),
                    (atMarker = !0))
                }
              return (events[start][1]._spread = listSpread), length
            }
            function setData(key, value) {
              data[key] = value
            }
            function getData(key) {
              return data[key]
            }
            function point(d) {
              return { line: d.line, column: d.column, offset: d.offset }
            }
            function opener(create, and) {
              return open
              function open(token) {
                enter.call(this, create(token), token),
                  and && and.call(this, token)
              }
            }
            function buffer() {
              this.stack.push({ type: 'fragment', children: [] })
            }
            function enter(node, token) {
              return (
                this.stack[this.stack.length - 1].children.push(node),
                this.stack.push(node),
                this.tokenStack.push(token),
                (node.position = { start: point(token.start) }),
                node
              )
            }
            function closer(and) {
              return close
              function close(token) {
                and && and.call(this, token), exit.call(this, token)
              }
            }
            function exit(token) {
              var node = this.stack.pop(),
                open = this.tokenStack.pop()
              if (!open)
                throw new Error(
                  'Cannot close `' +
                    token.type +
                    '` (' +
                    stringifyPosition({ start: token.start, end: token.end }) +
                    '): it’s not open'
                )
              if (open.type !== token.type)
                throw new Error(
                  'Cannot close `' +
                    token.type +
                    '` (' +
                    stringifyPosition({ start: token.start, end: token.end }) +
                    '): a different token (`' +
                    open.type +
                    '`, ' +
                    stringifyPosition({ start: open.start, end: open.end }) +
                    ') is open'
                )
              return (node.position.end = point(token.end)), node
            }
            function resume() {
              return toString(this.stack.pop())
            }
            function onenterlistordered() {
              setData('expectingFirstListItemValue', !0)
            }
            function onenterlistitemvalue(token) {
              getData('expectingFirstListItemValue') &&
                ((this.stack[this.stack.length - 2].start = parseInt(
                  this.sliceSerialize(token),
                  10
                )),
                setData('expectingFirstListItemValue'))
            }
            function onexitcodefencedfenceinfo() {
              var data = this.resume()
              this.stack[this.stack.length - 1].lang = data
            }
            function onexitcodefencedfencemeta() {
              var data = this.resume()
              this.stack[this.stack.length - 1].meta = data
            }
            function onexitcodefencedfence() {
              getData('flowCodeInside') ||
                (this.buffer(), setData('flowCodeInside', !0))
            }
            function onexitcodefenced() {
              var data = this.resume()
              ;(this.stack[this.stack.length - 1].value = data.replace(
                /^(\r?\n|\r)|(\r?\n|\r)$/g,
                ''
              )),
                setData('flowCodeInside')
            }
            function onexitcodeindented() {
              var data = this.resume()
              this.stack[this.stack.length - 1].value = data
            }
            function onexitdefinitionlabelstring(token) {
              var label = this.resume()
              ;(this.stack[this.stack.length - 1].label = label),
                (this.stack[this.stack.length - 1].identifier =
                  normalizeIdentifier(this.sliceSerialize(token)).toLowerCase())
            }
            function onexitdefinitiontitlestring() {
              var data = this.resume()
              this.stack[this.stack.length - 1].title = data
            }
            function onexitdefinitiondestinationstring() {
              var data = this.resume()
              this.stack[this.stack.length - 1].url = data
            }
            function onexitatxheadingsequence(token) {
              this.stack[this.stack.length - 1].depth ||
                (this.stack[this.stack.length - 1].depth =
                  this.sliceSerialize(token).length)
            }
            function onexitsetextheadingtext() {
              setData('setextHeadingSlurpLineEnding', !0)
            }
            function onexitsetextheadinglinesequence(token) {
              this.stack[this.stack.length - 1].depth =
                61 === this.sliceSerialize(token).charCodeAt(0) ? 1 : 2
            }
            function onexitsetextheading() {
              setData('setextHeadingSlurpLineEnding')
            }
            function onenterdata(token) {
              var siblings = this.stack[this.stack.length - 1].children,
                tail = siblings[siblings.length - 1]
              ;(tail && 'text' === tail.type) ||
                (((tail = text()).position = { start: point(token.start) }),
                this.stack[this.stack.length - 1].children.push(tail)),
                this.stack.push(tail)
            }
            function onexitdata(token) {
              var tail = this.stack.pop()
              ;(tail.value += this.sliceSerialize(token)),
                (tail.position.end = point(token.end))
            }
            function onexitlineending(token) {
              var context = this.stack[this.stack.length - 1]
              if (getData('atHardBreak'))
                return (
                  (context.children[context.children.length - 1].position.end =
                    point(token.end)),
                  void setData('atHardBreak')
                )
              !getData('setextHeadingSlurpLineEnding') &&
                config.canContainEols.indexOf(context.type) > -1 &&
                (onenterdata.call(this, token), onexitdata.call(this, token))
            }
            function onexithardbreak() {
              setData('atHardBreak', !0)
            }
            function onexithtmlflow() {
              var data = this.resume()
              this.stack[this.stack.length - 1].value = data
            }
            function onexithtmltext() {
              var data = this.resume()
              this.stack[this.stack.length - 1].value = data
            }
            function onexitcodetext() {
              var data = this.resume()
              this.stack[this.stack.length - 1].value = data
            }
            function onexitlink() {
              var context = this.stack[this.stack.length - 1]
              getData('inReference')
                ? ((context.type += 'Reference'),
                  (context.referenceType =
                    getData('referenceType') || 'shortcut'),
                  delete context.url,
                  delete context.title)
                : (delete context.identifier,
                  delete context.label,
                  delete context.referenceType),
                setData('referenceType')
            }
            function onexitimage() {
              var context = this.stack[this.stack.length - 1]
              getData('inReference')
                ? ((context.type += 'Reference'),
                  (context.referenceType =
                    getData('referenceType') || 'shortcut'),
                  delete context.url,
                  delete context.title)
                : (delete context.identifier,
                  delete context.label,
                  delete context.referenceType),
                setData('referenceType')
            }
            function onexitlabeltext(token) {
              this.stack[this.stack.length - 2].identifier =
                normalizeIdentifier(this.sliceSerialize(token)).toLowerCase()
            }
            function onexitlabel() {
              var fragment = this.stack[this.stack.length - 1],
                value = this.resume()
              ;(this.stack[this.stack.length - 1].label = value),
                setData('inReference', !0),
                'link' === this.stack[this.stack.length - 1].type
                  ? (this.stack[this.stack.length - 1].children =
                      fragment.children)
                  : (this.stack[this.stack.length - 1].alt = value)
            }
            function onexitresourcedestinationstring() {
              var data = this.resume()
              this.stack[this.stack.length - 1].url = data
            }
            function onexitresourcetitlestring() {
              var data = this.resume()
              this.stack[this.stack.length - 1].title = data
            }
            function onexitresource() {
              setData('inReference')
            }
            function onenterreference() {
              setData('referenceType', 'collapsed')
            }
            function onexitreferencestring(token) {
              var label = this.resume()
              ;(this.stack[this.stack.length - 1].label = label),
                (this.stack[this.stack.length - 1].identifier =
                  normalizeIdentifier(
                    this.sliceSerialize(token)
                  ).toLowerCase()),
                setData('referenceType', 'full')
            }
            function onexitcharacterreferencemarker(token) {
              setData('characterReferenceType', token.type)
            }
            function onexitcharacterreferencevalue(token) {
              var value,
                tail,
                data = this.sliceSerialize(token),
                type = getData('characterReferenceType')
              type
                ? ((value = safeFromInt(
                    data,
                    'characterReferenceMarkerNumeric' === type ? 10 : 16
                  )),
                  setData('characterReferenceType'))
                : (value = decode(data)),
                ((tail = this.stack.pop()).value += value),
                (tail.position.end = point(token.end))
            }
            function onexitautolinkprotocol(token) {
              onexitdata.call(this, token),
                (this.stack[this.stack.length - 1].url =
                  this.sliceSerialize(token))
            }
            function onexitautolinkemail(token) {
              onexitdata.call(this, token),
                (this.stack[this.stack.length - 1].url =
                  'mailto:' + this.sliceSerialize(token))
            }
            function blockQuote() {
              return { type: 'blockquote', children: [] }
            }
            function codeFlow() {
              return { type: 'code', lang: null, meta: null, value: '' }
            }
            function codeText() {
              return { type: 'inlineCode', value: '' }
            }
            function definition() {
              return {
                type: 'definition',
                identifier: '',
                label: null,
                title: null,
                url: '',
              }
            }
            function emphasis() {
              return { type: 'emphasis', children: [] }
            }
            function heading() {
              return { type: 'heading', depth: void 0, children: [] }
            }
            function hardBreak() {
              return { type: 'break' }
            }
            function html() {
              return { type: 'html', value: '' }
            }
            function image() {
              return { type: 'image', title: null, url: '', alt: null }
            }
            function link() {
              return { type: 'link', title: null, url: '', children: [] }
            }
            function list(token) {
              return {
                type: 'list',
                ordered: 'listOrdered' === token.type,
                start: null,
                spread: token._spread,
                children: [],
              }
            }
            function listItem(token) {
              return {
                type: 'listItem',
                spread: token._spread,
                checked: null,
                children: [],
              }
            }
            function paragraph() {
              return { type: 'paragraph', children: [] }
            }
            function strong() {
              return { type: 'strong', children: [] }
            }
            function text() {
              return { type: 'text', value: '' }
            }
            function thematicBreak() {
              return { type: 'thematicBreak' }
            }
          })(options)(
            postprocess(
              parser(options)
                .document()
                .write(preprocessor()(value, encoding, !0))
            )
          )
        }
        var toString = __webpack_require__(
            '../../node_modules/mdast-util-to-string/index.js'
          ),
          assign = __webpack_require__(
            '../../node_modules/micromark/dist/constant/assign.js'
          ),
          own = __webpack_require__(
            '../../node_modules/micromark/dist/constant/has-own-property.js'
          ),
          normalizeIdentifier = __webpack_require__(
            '../../node_modules/micromark/dist/util/normalize-identifier.js'
          ),
          safeFromInt = __webpack_require__(
            '../../node_modules/micromark/dist/util/safe-from-int.js'
          ),
          parser = __webpack_require__(
            '../../node_modules/micromark/dist/parse.js'
          ),
          preprocessor = __webpack_require__(
            '../../node_modules/micromark/dist/preprocess.js'
          ),
          postprocess = __webpack_require__(
            '../../node_modules/micromark/dist/postprocess.js'
          ),
          decode = __webpack_require__(
            '../../node_modules/parse-entities/decode-entity.browser.js'
          ),
          stringifyPosition = __webpack_require__(
            '../../node_modules/unist-util-stringify-position/index.js'
          )
        function extension(config, extension) {
          var key, left
          for (key in extension)
            (left = own.call(config, key) ? config[key] : (config[key] = {})),
              'canContainEols' === key || 'transforms' === key
                ? (config[key] = [].concat(left, extension[key]))
                : Object.assign(left, extension[key])
        }
      },
    '../../node_modules/react-markdown/node_modules/mdast-util-from-markdown/index.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        'use strict'
        module.exports = __webpack_require__(
          '../../node_modules/react-markdown/node_modules/mdast-util-from-markdown/dist/index.js'
        )
      },
    '../../node_modules/react-markdown/node_modules/remark-parse/index.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        'use strict'
        module.exports = function parse(options) {
          var self = this
          this.Parser = function parse(doc) {
            return fromMarkdown(
              doc,
              Object.assign({}, self.data('settings'), options, {
                extensions: self.data('micromarkExtensions') || [],
                mdastExtensions: self.data('fromMarkdownExtensions') || [],
              })
            )
          }
        }
        var fromMarkdown = __webpack_require__(
          '../../node_modules/react-markdown/node_modules/mdast-util-from-markdown/index.js'
        )
      },
    '../../node_modules/react-markdown/node_modules/unist-util-visit-parents/color.browser.js':
      function (module) {
        module.exports = function identity(d) {
          return d
        }
      },
    '../../node_modules/react-markdown/node_modules/unist-util-visit-parents/index.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        'use strict'
        module.exports = visitParents
        var convert = __webpack_require__(
            '../../node_modules/unist-util-is/convert.js'
          ),
          color = __webpack_require__(
            '../../node_modules/react-markdown/node_modules/unist-util-visit-parents/color.browser.js'
          ),
          CONTINUE = !0,
          SKIP = 'skip',
          EXIT = !1
        function visitParents(tree, test, visitor, reverse) {
          var step, is
          'function' == typeof test &&
            'function' != typeof visitor &&
            ((reverse = visitor), (visitor = test), (test = null)),
            (is = convert(test)),
            (step = reverse ? -1 : 1),
            (function factory(node, index, parents) {
              var name,
                value = 'object' == typeof node && null !== node ? node : {}
              'string' == typeof value.type &&
                ((name =
                  'string' == typeof value.tagName
                    ? value.tagName
                    : 'string' == typeof value.name
                    ? value.name
                    : void 0),
                (visit.displayName =
                  'node (' +
                  color(value.type + (name ? '<' + name + '>' : '')) +
                  ')'))
              return visit
              function visit() {
                var subresult,
                  offset,
                  grandparents = parents.concat(node),
                  result = []
                if (
                  (!test ||
                    is(node, index, parents[parents.length - 1] || null)) &&
                  ((result = (function toResult(value) {
                    if (
                      null !== value &&
                      'object' == typeof value &&
                      'length' in value
                    )
                      return value
                    if ('number' == typeof value) return [CONTINUE, value]
                    return [value]
                  })(visitor(node, parents))),
                  result[0] === EXIT)
                )
                  return result
                if (node.children && result[0] !== SKIP)
                  for (
                    offset = (reverse ? node.children.length : -1) + step;
                    offset > -1 && offset < node.children.length;

                  ) {
                    if (
                      (subresult = factory(
                        node.children[offset],
                        offset,
                        grandparents
                      )())[0] === EXIT
                    )
                      return subresult
                    offset =
                      'number' == typeof subresult[1]
                        ? subresult[1]
                        : offset + step
                  }
                return result
              }
            })(tree, null, [])()
        }
        ;(visitParents.CONTINUE = CONTINUE),
          (visitParents.SKIP = SKIP),
          (visitParents.EXIT = EXIT)
      },
    '../../node_modules/react-markdown/node_modules/unist-util-visit/index.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        'use strict'
        module.exports = visit
        var visitParents = __webpack_require__(
            '../../node_modules/react-markdown/node_modules/unist-util-visit-parents/index.js'
          ),
          CONTINUE = visitParents.CONTINUE,
          SKIP = visitParents.SKIP,
          EXIT = visitParents.EXIT
        function visit(tree, test, visitor, reverse) {
          'function' == typeof test &&
            'function' != typeof visitor &&
            ((reverse = visitor), (visitor = test), (test = null)),
            visitParents(
              tree,
              test,
              function overload(node, parents) {
                var parent = parents[parents.length - 1],
                  index = parent ? parent.children.indexOf(node) : null
                return visitor(node, index, parent)
              },
              reverse
            )
        }
        ;(visit.CONTINUE = CONTINUE), (visit.SKIP = SKIP), (visit.EXIT = EXIT)
      },
    '../../node_modules/remark-gfm/index.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var warningIssued,
        syntax = __webpack_require__(
          '../../node_modules/micromark-extension-gfm/index.js'
        ),
        fromMarkdown = __webpack_require__(
          '../../node_modules/mdast-util-gfm/from-markdown.js'
        ),
        toMarkdown = __webpack_require__(
          '../../node_modules/mdast-util-gfm/to-markdown.js'
        )
      module.exports = function gfm(options) {
        var data = this.data()
        !warningIssued &&
          ((this.Parser &&
            this.Parser.prototype &&
            this.Parser.prototype.blockTokenizers) ||
            (this.Compiler &&
              this.Compiler.prototype &&
              this.Compiler.prototype.visitors)) &&
          ((warningIssued = !0),
          console.warn(
            '[remark-gfm] Warning: please upgrade to remark 13 to use this plugin'
          ))
        function add(field, value) {
          data[field] ? data[field].push(value) : (data[field] = [value])
        }
        add('micromarkExtensions', syntax(options)),
          add('fromMarkdownExtensions', fromMarkdown),
          add('toMarkdownExtensions', toMarkdown(options))
      }
    },
    '../../node_modules/repeat-string/index.js': function (module) {
      'use strict'
      var cache,
        res = ''
      module.exports = function repeat(str, num) {
        if ('string' != typeof str) throw new TypeError('expected a string')
        if (1 === num) return str
        if (2 === num) return str + str
        var max = str.length * num
        if (cache !== str || void 0 === cache) (cache = str), (res = '')
        else if (res.length >= max) return res.substr(0, max)
        for (; max > res.length && num > 1; )
          1 & num && (res += str), (num >>= 1), (str += str)
        return (res = (res += str).substr(0, max))
      }
    },
    '../../node_modules/trough/index.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var wrap = __webpack_require__('../../node_modules/trough/wrap.js')
      ;(module.exports = trough), (trough.wrap = wrap)
      var slice = [].slice
      function trough() {
        var fns = [],
          middleware = {
            run: function run() {
              var index = -1,
                input = slice.call(arguments, 0, -1),
                done = arguments[arguments.length - 1]
              if ('function' != typeof done)
                throw new Error(
                  'Expected function as last argument, not ' + done
                )
              ;(function next(err) {
                var fn = fns[++index],
                  values = slice.call(arguments, 0).slice(1),
                  length = input.length,
                  pos = -1
                if (err) done(err)
                else {
                  for (; ++pos < length; )
                    (null !== values[pos] && void 0 !== values[pos]) ||
                      (values[pos] = input[pos])
                  ;(input = values),
                    fn
                      ? wrap(fn, next).apply(null, input)
                      : done.apply(null, [null].concat(input))
                }
              }).apply(null, [null].concat(input))
            },
            use: function use(fn) {
              if ('function' != typeof fn)
                throw new Error('Expected `fn` to be a function, not ' + fn)
              return fns.push(fn), middleware
            },
          }
        return middleware
      }
    },
    '../../node_modules/trough/wrap.js': function (module) {
      'use strict'
      var slice = [].slice
      module.exports = function wrap(fn, callback) {
        var invoked
        return function wrapped() {
          var result,
            params = slice.call(arguments, 0),
            callback = fn.length > params.length
          callback && params.push(done)
          try {
            result = fn.apply(null, params)
          } catch (error) {
            if (callback && invoked) throw error
            return done(error)
          }
          callback ||
            (result && 'function' == typeof result.then
              ? result.then(then, done)
              : result instanceof Error
              ? done(result)
              : then(result))
        }
        function done() {
          invoked || ((invoked = !0), callback.apply(null, arguments))
        }
        function then(value) {
          done(null, value)
        }
      }
    },
    '../../node_modules/unified/index.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var bail = __webpack_require__('../../node_modules/bail/index.js'),
        buffer = __webpack_require__('../../node_modules/is-buffer/index.js'),
        extend = __webpack_require__('../../node_modules/extend/index.js'),
        plain = __webpack_require__(
          '../../node_modules/unified/node_modules/is-plain-obj/index.js'
        ),
        trough = __webpack_require__('../../node_modules/trough/index.js'),
        vfile = __webpack_require__('../../node_modules/vfile/index.js')
      module.exports = (function unified() {
        var attachers = [],
          transformers = trough(),
          namespace = {},
          frozen = !1,
          freezeIndex = -1
        return (
          (processor.data = function data(key, value) {
            if ('string' == typeof key)
              return 2 === arguments.length
                ? (assertUnfrozen('data', frozen),
                  (namespace[key] = value),
                  processor)
                : (own.call(namespace, key) && namespace[key]) || null
            if (key)
              return (
                assertUnfrozen('data', frozen), (namespace = key), processor
              )
            return namespace
          }),
          (processor.freeze = freeze),
          (processor.attachers = attachers),
          (processor.use = function use(value) {
            var settings
            if ((assertUnfrozen('use', frozen), null == value));
            else if ('function' == typeof value)
              addPlugin.apply(null, arguments)
            else {
              if ('object' != typeof value)
                throw new Error('Expected usable value, not `' + value + '`')
              'length' in value ? addList(value) : addPreset(value)
            }
            settings &&
              (namespace.settings = extend(namespace.settings || {}, settings))
            return processor
            function addPreset(result) {
              addList(result.plugins),
                result.settings &&
                  (settings = extend(settings || {}, result.settings))
            }
            function add(value) {
              if ('function' == typeof value) addPlugin(value)
              else {
                if ('object' != typeof value)
                  throw new Error('Expected usable value, not `' + value + '`')
                'length' in value
                  ? addPlugin.apply(null, value)
                  : addPreset(value)
              }
            }
            function addList(plugins) {
              var length, index
              if (null == plugins);
              else {
                if ('object' != typeof plugins || !('length' in plugins))
                  throw new Error(
                    'Expected a list of plugins, not `' + plugins + '`'
                  )
                for (length = plugins.length, index = -1; ++index < length; )
                  add(plugins[index])
              }
            }
            function addPlugin(plugin, value) {
              var entry = find(plugin)
              entry
                ? (plain(entry[1]) &&
                    plain(value) &&
                    (value = extend(entry[1], value)),
                  (entry[1] = value))
                : attachers.push(slice.call(arguments))
            }
          }),
          (processor.parse = function parse(doc) {
            var Parser,
              file = vfile(doc)
            if (
              (freeze(),
              assertParser('parse', (Parser = processor.Parser)),
              newable(Parser, 'parse'))
            )
              return new Parser(String(file), file).parse()
            return Parser(String(file), file)
          }),
          (processor.stringify = function stringify(node, doc) {
            var Compiler,
              file = vfile(doc)
            if (
              (freeze(),
              assertCompiler('stringify', (Compiler = processor.Compiler)),
              assertNode(node),
              newable(Compiler, 'compile'))
            )
              return new Compiler(node, file).compile()
            return Compiler(node, file)
          }),
          (processor.run = run),
          (processor.runSync = function runSync(node, file) {
            var result,
              complete = !1
            return (
              run(node, file, done),
              assertDone('runSync', 'run', complete),
              result
            )
            function done(err, tree) {
              ;(complete = !0), bail(err), (result = tree)
            }
          }),
          (processor.process = process),
          (processor.processSync = function processSync(doc) {
            var file,
              complete = !1
            return (
              freeze(),
              assertParser('processSync', processor.Parser),
              assertCompiler('processSync', processor.Compiler),
              process((file = vfile(doc)), done),
              assertDone('processSync', 'process', complete),
              file
            )
            function done(err) {
              ;(complete = !0), bail(err)
            }
          }),
          processor
        )
        function processor() {
          for (
            var destination = unified(), length = attachers.length, index = -1;
            ++index < length;

          )
            destination.use.apply(null, attachers[index])
          return destination.data(extend(!0, {}, namespace)), destination
        }
        function freeze() {
          var values, plugin, options, transformer
          if (frozen) return processor
          for (; ++freezeIndex < attachers.length; )
            (plugin = (values = attachers[freezeIndex])[0]),
              null,
              !1 !== (options = values[1]) &&
                (!0 === options && (values[1] = void 0),
                'function' ==
                  typeof (transformer = plugin.apply(
                    processor,
                    values.slice(1)
                  )) && transformers.use(transformer))
          return (frozen = !0), (freezeIndex = 1 / 0), processor
        }
        function find(plugin) {
          for (
            var entry, length = attachers.length, index = -1;
            ++index < length;

          )
            if ((entry = attachers[index])[0] === plugin) return entry
        }
        function run(node, file, cb) {
          if (
            (assertNode(node),
            freeze(),
            cb || 'function' != typeof file || ((cb = file), (file = null)),
            !cb)
          )
            return new Promise(executor)
          function executor(resolve, reject) {
            transformers.run(node, vfile(file), function done(err, tree, file) {
              ;(tree = tree || node),
                err
                  ? reject(err)
                  : resolve
                  ? resolve(tree)
                  : cb(null, tree, file)
            })
          }
          executor(null, cb)
        }
        function process(doc, cb) {
          if (
            (freeze(),
            assertParser('process', processor.Parser),
            assertCompiler('process', processor.Compiler),
            !cb)
          )
            return new Promise(executor)
          function executor(resolve, reject) {
            var file = vfile(doc)
            pipeline.run(processor, { file: file }, function done(err) {
              err ? reject(err) : resolve ? resolve(file) : cb(null, file)
            })
          }
          executor(null, cb)
        }
      })().freeze()
      var slice = [].slice,
        own = {}.hasOwnProperty,
        pipeline = trough()
          .use(function pipelineParse(p, ctx) {
            ctx.tree = p.parse(ctx.file)
          })
          .use(function pipelineRun(p, ctx, next) {
            p.run(ctx.tree, ctx.file, function done(err, tree, file) {
              err ? next(err) : ((ctx.tree = tree), (ctx.file = file), next())
            })
          })
          .use(function pipelineStringify(p, ctx) {
            var result = p.stringify(ctx.tree, ctx.file),
              file = ctx.file
            null == result ||
              ('string' == typeof result || buffer(result)
                ? (file.contents = result)
                : (file.result = result))
          })
      function newable(value, name) {
        return (
          'function' == typeof value &&
          value.prototype &&
          ((function keys(value) {
            var key
            for (key in value) return !0
            return !1
          })(value.prototype) ||
            name in value.prototype)
        )
      }
      function assertParser(name, Parser) {
        if ('function' != typeof Parser)
          throw new Error('Cannot `' + name + '` without `Parser`')
      }
      function assertCompiler(name, Compiler) {
        if ('function' != typeof Compiler)
          throw new Error('Cannot `' + name + '` without `Compiler`')
      }
      function assertUnfrozen(name, frozen) {
        if (frozen)
          throw new Error(
            'Cannot invoke `' +
              name +
              '` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.'
          )
      }
      function assertNode(node) {
        if (!node || 'string' != typeof node.type)
          throw new Error('Expected node, got `' + node + '`')
      }
      function assertDone(name, asyncName, complete) {
        if (!complete)
          throw new Error(
            '`' + name + '` finished async. Use `' + asyncName + '` instead'
          )
      }
    },
    '../../node_modules/unified/node_modules/is-plain-obj/index.js': function (
      module
    ) {
      'use strict'
      module.exports = (value) => {
        if ('[object Object]' !== Object.prototype.toString.call(value))
          return !1
        const prototype = Object.getPrototypeOf(value)
        return null === prototype || prototype === Object.prototype
      }
    },
    '../../node_modules/unist-util-is/convert.js': function (module) {
      'use strict'
      function convert(test) {
        if (null == test) return ok
        if ('string' == typeof test)
          return (function typeFactory(test) {
            return type
            function type(node) {
              return Boolean(node && node.type === test)
            }
          })(test)
        if ('object' == typeof test)
          return 'length' in test
            ? (function anyFactory(tests) {
                var checks = [],
                  index = -1
                for (; ++index < tests.length; )
                  checks[index] = convert(tests[index])
                return any
                function any() {
                  for (var index = -1; ++index < checks.length; )
                    if (checks[index].apply(this, arguments)) return !0
                  return !1
                }
              })(test)
            : (function allFactory(test) {
                return all
                function all(node) {
                  var key
                  for (key in test) if (node[key] !== test[key]) return !1
                  return !0
                }
              })(test)
        if ('function' == typeof test) return test
        throw new Error('Expected function, string, or object as test')
      }
      function ok() {
        return !0
      }
      module.exports = convert
    },
    '../../node_modules/unist-util-stringify-position/index.js': function (
      module
    ) {
      'use strict'
      var own = {}.hasOwnProperty
      function point(point) {
        return (
          (point && 'object' == typeof point) || (point = {}),
          index(point.line) + ':' + index(point.column)
        )
      }
      function position(pos) {
        return (
          (pos && 'object' == typeof pos) || (pos = {}),
          point(pos.start) + '-' + point(pos.end)
        )
      }
      function index(value) {
        return value && 'number' == typeof value ? value : 1
      }
      module.exports = function stringify(value) {
        if (!value || 'object' != typeof value) return ''
        if (own.call(value, 'position') || own.call(value, 'type'))
          return position(value.position)
        if (own.call(value, 'start') || own.call(value, 'end'))
          return position(value)
        if (own.call(value, 'line') || own.call(value, 'column'))
          return point(value)
        return ''
      }
    },
    '../../node_modules/unist-util-visit-parents/index.js': function (module) {
      'use strict'
      module.exports = function visitParents(tree, type, visitor) {
        var stack = []
        'function' == typeof type && ((visitor = type), (type = null))
        function one(node) {
          var result
          return (
            (type && node.type !== type) ||
              (result = visitor(node, stack.concat())),
            node.children && !1 !== result
              ? (function all(children, parent) {
                  var child,
                    length = children.length,
                    index = -1
                  stack.push(parent)
                  for (; ++index < length; )
                    if ((child = children[index]) && !1 === one(child))
                      return !1
                  return stack.pop(), !0
                })(node.children, node)
              : result
          )
        }
        one(tree)
      }
    },
    '../../node_modules/vfile-message/index.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var stringify = __webpack_require__(
        '../../node_modules/unist-util-stringify-position/index.js'
      )
      function VMessagePrototype() {}
      ;(module.exports = VMessage),
        (VMessagePrototype.prototype = Error.prototype),
        (VMessage.prototype = new VMessagePrototype())
      var proto = VMessage.prototype
      function VMessage(reason, position, origin) {
        var parts, range, location
        'string' == typeof position && ((origin = position), (position = null)),
          (parts = (function parseOrigin(origin) {
            var index,
              result = [null, null]
            'string' == typeof origin &&
              (-1 === (index = origin.indexOf(':'))
                ? (result[1] = origin)
                : ((result[0] = origin.slice(0, index)),
                  (result[1] = origin.slice(index + 1))))
            return result
          })(origin)),
          (range = stringify(position) || '1:1'),
          (location = {
            start: { line: null, column: null },
            end: { line: null, column: null },
          }),
          position && position.position && (position = position.position),
          position &&
            (position.start
              ? ((location = position), (position = position.start))
              : (location.start = position)),
          reason.stack &&
            ((this.stack = reason.stack), (reason = reason.message)),
          (this.message = reason),
          (this.name = range),
          (this.reason = reason),
          (this.line = position ? position.line : null),
          (this.column = position ? position.column : null),
          (this.location = location),
          (this.source = parts[0]),
          (this.ruleId = parts[1])
      }
      ;(proto.file = ''),
        (proto.name = ''),
        (proto.reason = ''),
        (proto.message = ''),
        (proto.stack = ''),
        (proto.fatal = null),
        (proto.column = null),
        (proto.line = null)
    },
    '../../node_modules/vfile/index.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      module.exports = __webpack_require__(
        '../../node_modules/vfile/lib/index.js'
      )
    },
    '../../node_modules/vfile/lib/core.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var p = __webpack_require__(
          '../../node_modules/vfile/lib/minpath.browser.js'
        ),
        proc = __webpack_require__(
          '../../node_modules/vfile/lib/minproc.browser.js'
        ),
        buffer = __webpack_require__('../../node_modules/is-buffer/index.js')
      module.exports = VFile
      var own = {}.hasOwnProperty,
        order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname']
      function VFile(options) {
        var prop, index
        if (options) {
          if ('string' == typeof options || buffer(options))
            options = { contents: options }
          else if ('message' in options && 'messages' in options) return options
        } else options = {}
        if (!(this instanceof VFile)) return new VFile(options)
        for (
          this.data = {},
            this.messages = [],
            this.history = [],
            this.cwd = proc.cwd(),
            index = -1;
          ++index < order.length;

        )
          (prop = order[index]),
            own.call(options, prop) && (this[prop] = options[prop])
        for (prop in options)
          order.indexOf(prop) < 0 && (this[prop] = options[prop])
      }
      function assertPart(part, name) {
        if (part && part.indexOf(p.sep) > -1)
          throw new Error(
            '`' + name + '` cannot be a path: did not expect `' + p.sep + '`'
          )
      }
      function assertNonEmpty(part, name) {
        if (!part) throw new Error('`' + name + '` cannot be empty')
      }
      function assertPath(path, name) {
        if (!path)
          throw new Error(
            'Setting `' + name + '` requires `path` to be set too'
          )
      }
      ;(VFile.prototype.toString = function toString(encoding) {
        return (this.contents || '').toString(encoding)
      }),
        Object.defineProperty(VFile.prototype, 'path', {
          get: function getPath() {
            return this.history[this.history.length - 1]
          },
          set: function setPath(path) {
            assertNonEmpty(path, 'path'),
              this.path !== path && this.history.push(path)
          },
        }),
        Object.defineProperty(VFile.prototype, 'dirname', {
          get: function getDirname() {
            return 'string' == typeof this.path ? p.dirname(this.path) : void 0
          },
          set: function setDirname(dirname) {
            assertPath(this.path, 'dirname'),
              (this.path = p.join(dirname || '', this.basename))
          },
        }),
        Object.defineProperty(VFile.prototype, 'basename', {
          get: function getBasename() {
            return 'string' == typeof this.path ? p.basename(this.path) : void 0
          },
          set: function setBasename(basename) {
            assertNonEmpty(basename, 'basename'),
              assertPart(basename, 'basename'),
              (this.path = p.join(this.dirname || '', basename))
          },
        }),
        Object.defineProperty(VFile.prototype, 'extname', {
          get: function getExtname() {
            return 'string' == typeof this.path ? p.extname(this.path) : void 0
          },
          set: function setExtname(extname) {
            if (
              (assertPart(extname, 'extname'),
              assertPath(this.path, 'extname'),
              extname)
            ) {
              if (46 !== extname.charCodeAt(0))
                throw new Error('`extname` must start with `.`')
              if (extname.indexOf('.', 1) > -1)
                throw new Error('`extname` cannot contain multiple dots')
            }
            this.path = p.join(this.dirname, this.stem + (extname || ''))
          },
        }),
        Object.defineProperty(VFile.prototype, 'stem', {
          get: function getStem() {
            return 'string' == typeof this.path
              ? p.basename(this.path, this.extname)
              : void 0
          },
          set: function setStem(stem) {
            assertNonEmpty(stem, 'stem'),
              assertPart(stem, 'stem'),
              (this.path = p.join(
                this.dirname || '',
                stem + (this.extname || '')
              ))
          },
        })
    },
    '../../node_modules/vfile/lib/index.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict'
      var VMessage = __webpack_require__(
          '../../node_modules/vfile-message/index.js'
        ),
        VFile = __webpack_require__('../../node_modules/vfile/lib/core.js')
      ;(module.exports = VFile),
        (VFile.prototype.message = function message(reason, position, origin) {
          var message = new VMessage(reason, position, origin)
          this.path &&
            ((message.name = this.path + ':' + message.name),
            (message.file = this.path))
          return (message.fatal = !1), this.messages.push(message), message
        }),
        (VFile.prototype.info = function info() {
          var message = this.message.apply(this, arguments)
          return (message.fatal = null), message
        }),
        (VFile.prototype.fail = function fail() {
          var message = this.message.apply(this, arguments)
          throw ((message.fatal = !0), message)
        })
    },
    '../../node_modules/vfile/lib/minpath.browser.js': function (
      __unused_webpack_module,
      exports
    ) {
      'use strict'
      function assertPath(path) {
        if ('string' != typeof path)
          throw new TypeError(
            'Path must be a string. Received ' + JSON.stringify(path)
          )
      }
      ;(exports.basename = function basename(path, ext) {
        var index,
          firstNonSlashEnd,
          seenNonSlash,
          extIndex,
          start = 0,
          end = -1
        if (void 0 !== ext && 'string' != typeof ext)
          throw new TypeError('"ext" argument must be a string')
        if (
          (assertPath(path),
          (index = path.length),
          void 0 === ext || !ext.length || ext.length > path.length)
        ) {
          for (; index--; )
            if (47 === path.charCodeAt(index)) {
              if (seenNonSlash) {
                start = index + 1
                break
              }
            } else end < 0 && ((seenNonSlash = !0), (end = index + 1))
          return end < 0 ? '' : path.slice(start, end)
        }
        if (ext === path) return ''
        ;(firstNonSlashEnd = -1), (extIndex = ext.length - 1)
        for (; index--; )
          if (47 === path.charCodeAt(index)) {
            if (seenNonSlash) {
              start = index + 1
              break
            }
          } else
            firstNonSlashEnd < 0 &&
              ((seenNonSlash = !0), (firstNonSlashEnd = index + 1)),
              extIndex > -1 &&
                (path.charCodeAt(index) === ext.charCodeAt(extIndex--)
                  ? extIndex < 0 && (end = index)
                  : ((extIndex = -1), (end = firstNonSlashEnd)))
        start === end
          ? (end = firstNonSlashEnd)
          : end < 0 && (end = path.length)
        return path.slice(start, end)
      }),
        (exports.dirname = function dirname(path) {
          var end, unmatchedSlash, index
          if ((assertPath(path), !path.length)) return '.'
          ;(end = -1), (index = path.length)
          for (; --index; )
            if (47 === path.charCodeAt(index)) {
              if (unmatchedSlash) {
                end = index
                break
              }
            } else unmatchedSlash || (unmatchedSlash = !0)
          return end < 0
            ? 47 === path.charCodeAt(0)
              ? '/'
              : '.'
            : 1 === end && 47 === path.charCodeAt(0)
            ? '//'
            : path.slice(0, end)
        }),
        (exports.extname = function extname(path) {
          var unmatchedSlash,
            code,
            index,
            startDot = -1,
            startPart = 0,
            end = -1,
            preDotState = 0
          assertPath(path), (index = path.length)
          for (; index--; )
            if (47 !== (code = path.charCodeAt(index)))
              end < 0 && ((unmatchedSlash = !0), (end = index + 1)),
                46 === code
                  ? startDot < 0
                    ? (startDot = index)
                    : 1 !== preDotState && (preDotState = 1)
                  : startDot > -1 && (preDotState = -1)
            else if (unmatchedSlash) {
              startPart = index + 1
              break
            }
          if (
            startDot < 0 ||
            end < 0 ||
            0 === preDotState ||
            (1 === preDotState &&
              startDot === end - 1 &&
              startDot === startPart + 1)
          )
            return ''
          return path.slice(startDot, end)
        }),
        (exports.join = function join() {
          var joined,
            index = -1
          for (; ++index < arguments.length; )
            assertPath(arguments[index]),
              arguments[index] &&
                (joined =
                  void 0 === joined
                    ? arguments[index]
                    : joined + '/' + arguments[index])
          return void 0 === joined
            ? '.'
            : (function normalize(path) {
                var absolute, value
                assertPath(path),
                  (absolute = 47 === path.charCodeAt(0)),
                  (value = (function normalizeString(path, allowAboveRoot) {
                    var code,
                      lastSlashIndex,
                      result = '',
                      lastSegmentLength = 0,
                      lastSlash = -1,
                      dots = 0,
                      index = -1
                    for (; ++index <= path.length; ) {
                      if (index < path.length) code = path.charCodeAt(index)
                      else {
                        if (47 === code) break
                        code = 47
                      }
                      if (47 === code) {
                        if (lastSlash === index - 1 || 1 === dots);
                        else if (lastSlash !== index - 1 && 2 === dots) {
                          if (
                            result.length < 2 ||
                            2 !== lastSegmentLength ||
                            46 !== result.charCodeAt(result.length - 1) ||
                            46 !== result.charCodeAt(result.length - 2)
                          )
                            if (result.length > 2) {
                              if (
                                (lastSlashIndex = result.lastIndexOf('/')) !==
                                result.length - 1
                              ) {
                                lastSlashIndex < 0
                                  ? ((result = ''), (lastSegmentLength = 0))
                                  : (lastSegmentLength =
                                      (result = result.slice(0, lastSlashIndex))
                                        .length -
                                      1 -
                                      result.lastIndexOf('/')),
                                  (lastSlash = index),
                                  (dots = 0)
                                continue
                              }
                            } else if (result.length) {
                              ;(result = ''),
                                (lastSegmentLength = 0),
                                (lastSlash = index),
                                (dots = 0)
                              continue
                            }
                          allowAboveRoot &&
                            ((result = result.length ? result + '/..' : '..'),
                            (lastSegmentLength = 2))
                        } else
                          result.length
                            ? (result += '/' + path.slice(lastSlash + 1, index))
                            : (result = path.slice(lastSlash + 1, index)),
                            (lastSegmentLength = index - lastSlash - 1)
                        ;(lastSlash = index), (dots = 0)
                      } else 46 === code && dots > -1 ? dots++ : (dots = -1)
                    }
                    return result
                  })(path, !absolute)),
                  value.length || absolute || (value = '.')
                value.length &&
                  47 === path.charCodeAt(path.length - 1) &&
                  (value += '/')
                return absolute ? '/' + value : value
              })(joined)
        }),
        (exports.sep = '/')
    },
    '../../node_modules/vfile/lib/minproc.browser.js': function (
      __unused_webpack_module,
      exports
    ) {
      'use strict'
      exports.cwd = function cwd() {
        return '/'
      }
    },
    '../../node_modules/xtend/immutable.js': function (module) {
      module.exports = function extend() {
        for (var target = {}, i = 0; i < arguments.length; i++) {
          var source = arguments[i]
          for (var key in source)
            hasOwnProperty.call(source, key) && (target[key] = source[key])
        }
        return target
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty
    },
  },
])
