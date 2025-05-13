(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.Jexl = require('jexl');

},{"jexl":16}],2:[function(require,module,exports){
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],3:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray.js");
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return arrayLikeToArray(r);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayLikeToArray.js":2}],4:[function(require,module,exports){
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],5:[function(require,module,exports){
var toPropertyKey = require("./toPropertyKey.js");
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./toPropertyKey.js":12}],6:[function(require,module,exports){
var toPropertyKey = require("./toPropertyKey.js");
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./toPropertyKey.js":12}],7:[function(require,module,exports){
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],8:[function(require,module,exports){
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],9:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],10:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles.js");
var iterableToArray = require("./iterableToArray.js");
var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");
var nonIterableSpread = require("./nonIterableSpread.js");
function _toConsumableArray(r) {
  return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayWithoutHoles.js":3,"./iterableToArray.js":8,"./nonIterableSpread.js":9,"./unsupportedIterableToArray.js":14}],11:[function(require,module,exports){
var _typeof = require("./typeof.js")["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./typeof.js":13}],12:[function(require,module,exports){
var _typeof = require("./typeof.js")["default"];
var toPrimitive = require("./toPrimitive.js");
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./toPrimitive.js":11,"./typeof.js":13}],13:[function(require,module,exports){
function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],14:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray.js");
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
  }
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayLikeToArray.js":2}],15:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/*
 * Jexl
 * Copyright 2020 Tom Shawver
 */
var Evaluator = require('./evaluator/Evaluator');

var Lexer = require('./Lexer');

var Parser = require('./parser/Parser');

var PromiseSync = require('./PromiseSync');

var Expression = /*#__PURE__*/function () {
  function Expression(grammar, exprStr) {
    (0, _classCallCheck2.default)(this, Expression);
    this._grammar = grammar;
    this._exprStr = exprStr;
    this._ast = null;
  }
  /**
   * Forces a compilation of the expression string that this Expression object
   * was constructed with. This function can be called multiple times; useful
   * if the language elements of the associated Jexl instance change.
   * @returns {Expression} this Expression instance, for convenience
   */


  (0, _createClass2.default)(Expression, [{
    key: "compile",
    value: function compile() {
      var lexer = new Lexer(this._grammar);
      var parser = new Parser(this._grammar);
      var tokens = lexer.tokenize(this._exprStr);
      parser.addTokens(tokens);
      this._ast = parser.complete();
      return this;
    }
    /**
     * Asynchronously evaluates the expression within an optional context.
     * @param {Object} [context] A mapping of variables to values, which will be
     *      made accessible to the Jexl expression when evaluating it
     * @returns {Promise<*>} resolves with the result of the evaluation.
     */

  }, {
    key: "eval",
    value: function _eval() {
      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this._eval(context, Promise);
    }
    /**
     * Synchronously evaluates the expression within an optional context.
     * @param {Object} [context] A mapping of variables to values, which will be
     *      made accessible to the Jexl expression when evaluating it
     * @returns {*} the result of the evaluation.
     * @throws {*} on error
     */

  }, {
    key: "evalSync",
    value: function evalSync() {
      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var res = this._eval(context, PromiseSync);

      if (res.error) throw res.error;
      return res.value;
    }
  }, {
    key: "_eval",
    value: function _eval(context, promise) {
      var _this = this;

      return promise.resolve().then(function () {
        var ast = _this._getAst();

        var evaluator = new Evaluator(_this._grammar, context, undefined, promise);
        return evaluator.eval(ast);
      });
    }
  }, {
    key: "_getAst",
    value: function _getAst() {
      if (!this._ast) this.compile();
      return this._ast;
    }
  }]);
  return Expression;
}();

module.exports = Expression;
},{"./Lexer":17,"./PromiseSync":18,"./evaluator/Evaluator":19,"./parser/Parser":22,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":7}],16:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/*
 * Jexl
 * Copyright 2020 Tom Shawver
 */
var Expression = require('./Expression');

var _require = require('./grammar'),
    getGrammar = _require.getGrammar;
/**
 * Jexl is the Javascript Expression Language, capable of parsing and
 * evaluating basic to complex expression strings, combined with advanced
 * xpath-like drilldown into native Javascript objects.
 * @constructor
 */


var Jexl = /*#__PURE__*/function () {
  function Jexl() {
    (0, _classCallCheck2.default)(this, Jexl);
    // Allow expr to be called outside of the jexl context
    this.expr = this.expr.bind(this);
    this._grammar = getGrammar();
  }
  /**
   * Adds a binary operator to Jexl at the specified precedence. The higher the
   * precedence, the earlier the operator is applied in the order of operations.
   * For example, * has a higher precedence than +, because multiplication comes
   * before division.
   *
   * Please see grammar.js for a listing of all default operators and their
   * precedence values in order to choose the appropriate precedence for the
   * new operator.
   * @param {string} operator The operator string to be added
   * @param {number} precedence The operator's precedence
   * @param {function} fn A function to run to calculate the result. The function
   *      will be called with two arguments: left and right, denoting the values
   *      on either side of the operator. It should return either the resulting
   *      value, or a Promise that resolves with the resulting value.
   * @param {boolean} [manualEval] If true, the `left` and `right` arguments
   *      will be wrapped in objects with an `eval` function. Calling
   *      left.eval() or right.eval() will return a promise that resolves to
   *      that operand's actual value. This is useful to conditionally evaluate
   *      operands.
   */


  (0, _createClass2.default)(Jexl, [{
    key: "addBinaryOp",
    value: function addBinaryOp(operator, precedence, fn, manualEval) {
      this._addGrammarElement(operator, (0, _defineProperty2.default)({
        type: 'binaryOp',
        precedence: precedence
      }, manualEval ? 'evalOnDemand' : 'eval', fn));
    }
    /**
     * Adds or replaces an expression function in this Jexl instance.
     * @param {string} name The name of the expression function, as it will be
     *      used within Jexl expressions
     * @param {function} fn The javascript function to be executed when this
     *      expression function is invoked. It will be provided with each argument
     *      supplied in the expression, in the same order.
     */

  }, {
    key: "addFunction",
    value: function addFunction(name, fn) {
      this._grammar.functions[name] = fn;
    }
    /**
     * Syntactic sugar for calling {@link #addFunction} repeatedly. This function
     * accepts a map of one or more expression function names to their javascript
     * function counterpart.
     * @param {{}} map A map of expression function names to javascript functions
     */

  }, {
    key: "addFunctions",
    value: function addFunctions(map) {
      for (var key in map) {
        this._grammar.functions[key] = map[key];
      }
    }
    /**
     * Adds a unary operator to Jexl. Unary operators are currently only supported
     * on the left side of the value on which it will operate.
     * @param {string} operator The operator string to be added
     * @param {function} fn A function to run to calculate the result. The function
     *      will be called with one argument: the literal value to the right of the
     *      operator. It should return either the resulting value, or a Promise
     *      that resolves with the resulting value.
     */

  }, {
    key: "addUnaryOp",
    value: function addUnaryOp(operator, fn) {
      this._addGrammarElement(operator, {
        type: 'unaryOp',
        weight: Infinity,
        eval: fn
      });
    }
    /**
     * Adds or replaces a transform function in this Jexl instance.
     * @param {string} name The name of the transform function, as it will be used
     *      within Jexl expressions
     * @param {function} fn The function to be executed when this transform is
     *      invoked. It will be provided with at least one argument:
     *          - {*} value: The value to be transformed
     *          - {...*} args: The arguments for this transform
     */

  }, {
    key: "addTransform",
    value: function addTransform(name, fn) {
      this._grammar.transforms[name] = fn;
    }
    /**
     * Syntactic sugar for calling {@link #addTransform} repeatedly.  This function
     * accepts a map of one or more transform names to their transform function.
     * @param {{}} map A map of transform names to transform functions
     */

  }, {
    key: "addTransforms",
    value: function addTransforms(map) {
      for (var key in map) {
        this._grammar.transforms[key] = map[key];
      }
    }
    /**
     * Creates an Expression object from the given Jexl expression string, and
     * immediately compiles it. The returned Expression object can then be
     * evaluated multiple times with new contexts, without generating any
     * additional string processing overhead.
     * @param {string} expression The Jexl expression to be compiled
     * @returns {Expression} The compiled Expression object
     */

  }, {
    key: "compile",
    value: function compile(expression) {
      var exprObj = this.createExpression(expression);
      return exprObj.compile();
    }
    /**
     * Constructs an Expression object from a Jexl expression string.
     * @param {string} expression The Jexl expression to be wrapped in an
     *    Expression object
     * @returns {Expression} The Expression object representing the given string
     */

  }, {
    key: "createExpression",
    value: function createExpression(expression) {
      return new Expression(this._grammar, expression);
    }
    /**
     * Retrieves a previously set expression function.
     * @param {string} name The name of the expression function
     * @returns {function} The expression function
     */

  }, {
    key: "getFunction",
    value: function getFunction(name) {
      return this._grammar.functions[name];
    }
    /**
     * Retrieves a previously set transform function.
     * @param {string} name The name of the transform function
     * @returns {function} The transform function
     */

  }, {
    key: "getTransform",
    value: function getTransform(name) {
      return this._grammar.transforms[name];
    }
    /**
     * Asynchronously evaluates a Jexl string within an optional context.
     * @param {string} expression The Jexl expression to be evaluated
     * @param {Object} [context] A mapping of variables to values, which will be
     *      made accessible to the Jexl expression when evaluating it
     * @returns {Promise<*>} resolves with the result of the evaluation.
     */

  }, {
    key: "eval",
    value: function _eval(expression) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var exprObj = this.createExpression(expression);
      return exprObj.eval(context);
    }
    /**
     * Synchronously evaluates a Jexl string within an optional context.
     * @param {string} expression The Jexl expression to be evaluated
     * @param {Object} [context] A mapping of variables to values, which will be
     *      made accessible to the Jexl expression when evaluating it
     * @returns {*} the result of the evaluation.
     * @throws {*} on error
     */

  }, {
    key: "evalSync",
    value: function evalSync(expression) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var exprObj = this.createExpression(expression);
      return exprObj.evalSync(context);
    }
    /**
     * A JavaScript template literal to allow expressions to be defined by the
     * syntax: expr`40 + 2`
     * @param {Array<string>} strs
     * @param  {...any} args
     */

  }, {
    key: "expr",
    value: function expr(strs) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var exprStr = strs.reduce(function (acc, str, idx) {
        var arg = idx < args.length ? args[idx] : '';
        acc += str + arg;
        return acc;
      }, '');
      return this.createExpression(exprStr);
    }
    /**
     * Removes a binary or unary operator from the Jexl grammar.
     * @param {string} operator The operator string to be removed
     */

  }, {
    key: "removeOp",
    value: function removeOp(operator) {
      if (this._grammar.elements[operator] && (this._grammar.elements[operator].type === 'binaryOp' || this._grammar.elements[operator].type === 'unaryOp')) {
        delete this._grammar.elements[operator];
      }
    }
    /**
     * Adds an element to the grammar map used by this Jexl instance.
     * @param {string} str The key string to be added
     * @param {{type: <string>}} obj A map of configuration options for this
     *      grammar element
     * @private
     */

  }, {
    key: "_addGrammarElement",
    value: function _addGrammarElement(str, obj) {
      this._grammar.elements[str] = obj;
    }
  }]);
  return Jexl;
}();

module.exports = new Jexl();
module.exports.Jexl = Jexl;
},{"./Expression":15,"./grammar":21,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/defineProperty":6,"@babel/runtime/helpers/interopRequireDefault":7}],17:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/*
 * Jexl
 * Copyright 2020 Tom Shawver
 */
var numericRegex = /^-?(?:(?:[0-9]*\.[0-9]+)|[0-9]+)$/;
var identRegex = /^[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][a-zA-Zа-яА-Я0-9_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*$/;
var escEscRegex = /\\\\/;
var whitespaceRegex = /^\s*$/;
var preOpRegexElems = [// Strings
"'(?:(?:\\\\')|[^'])*'", '"(?:(?:\\\\")|[^"])*"', // Whitespace
'\\s+', // Booleans
'\\btrue\\b', '\\bfalse\\b'];
var postOpRegexElems = [// Identifiers
"[a-zA-Z\u0430-\u044F\u0410-\u042F_\xC0-\xD6\xD8-\xF6\xF8-\xFF\\$][a-zA-Z0-9\u0430-\u044F\u0410-\u042F_\xC0-\xD6\xD8-\xF6\xF8-\xFF\\$]*", // Numerics (without negative symbol)
'(?:(?:[0-9]*\\.[0-9]+)|[0-9]+)'];
var minusNegatesAfter = ['binaryOp', 'unaryOp', 'openParen', 'openBracket', 'question', 'colon'];
/**
 * Lexer is a collection of stateless, statically-accessed functions for the
 * lexical parsing of a Jexl string.  Its responsibility is to identify the
 * "parts of speech" of a Jexl expression, and tokenize and label each, but
 * to do only the most minimal syntax checking; the only errors the Lexer
 * should be concerned with are if it's unable to identify the utility of
 * any of its tokens.  Errors stemming from these tokens not being in a
 * sensible configuration should be left for the Parser to handle.
 * @type {{}}
 */

var Lexer = /*#__PURE__*/function () {
  function Lexer(grammar) {
    (0, _classCallCheck2.default)(this, Lexer);
    this._grammar = grammar;
  }
  /**
   * Splits a Jexl expression string into an array of expression elements.
   * @param {string} str A Jexl expression string
   * @returns {Array<string>} An array of substrings defining the functional
   *      elements of the expression.
   */


  (0, _createClass2.default)(Lexer, [{
    key: "getElements",
    value: function getElements(str) {
      var regex = this._getSplitRegex();

      return str.split(regex).filter(function (elem) {
        // Remove empty strings
        return elem;
      });
    }
    /**
     * Converts an array of expression elements into an array of tokens.  Note that
     * the resulting array may not equal the element array in length, as any
     * elements that consist only of whitespace get appended to the previous
     * token's "raw" property.  For the structure of a token object, please see
     * {@link Lexer#tokenize}.
     * @param {Array<string>} elements An array of Jexl expression elements to be
     *      converted to tokens
     * @returns {Array<{type, value, raw}>} an array of token objects.
     */

  }, {
    key: "getTokens",
    value: function getTokens(elements) {
      var tokens = [];
      var negate = false;

      for (var i = 0; i < elements.length; i++) {
        if (this._isWhitespace(elements[i])) {
          if (tokens.length) {
            tokens[tokens.length - 1].raw += elements[i];
          }
        } else if (elements[i] === '-' && this._isNegative(tokens)) {
          negate = true;
        } else {
          if (negate) {
            elements[i] = '-' + elements[i];
            negate = false;
          }

          tokens.push(this._createToken(elements[i]));
        }
      } // Catch a - at the end of the string. Let the parser handle that issue.


      if (negate) {
        tokens.push(this._createToken('-'));
      }

      return tokens;
    }
    /**
     * Converts a Jexl string into an array of tokens.  Each token is an object
     * in the following format:
     *
     *     {
     *         type: <string>,
     *         [name]: <string>,
     *         value: <boolean|number|string>,
     *         raw: <string>
     *     }
     *
     * Type is one of the following:
     *
     *      literal, identifier, binaryOp, unaryOp
     *
     * OR, if the token is a control character its type is the name of the element
     * defined in the Grammar.
     *
     * Name appears only if the token is a control string found in
     * {@link grammar#elements}, and is set to the name of the element.
     *
     * Value is the value of the token in the correct type (boolean or numeric as
     * appropriate). Raw is the string representation of this value taken directly
     * from the expression string, including any trailing spaces.
     * @param {string} str The Jexl string to be tokenized
     * @returns {Array<{type, value, raw}>} an array of token objects.
     * @throws {Error} if the provided string contains an invalid token.
     */

  }, {
    key: "tokenize",
    value: function tokenize(str) {
      var elements = this.getElements(str);
      return this.getTokens(elements);
    }
    /**
     * Creates a new token object from an element of a Jexl string. See
     * {@link Lexer#tokenize} for a description of the token object.
     * @param {string} element The element from which a token should be made
     * @returns {{value: number|boolean|string, [name]: string, type: string,
     *      raw: string}} a token object describing the provided element.
     * @throws {Error} if the provided string is not a valid expression element.
     * @private
     */

  }, {
    key: "_createToken",
    value: function _createToken(element) {
      var token = {
        type: 'literal',
        value: element,
        raw: element
      };

      if (element[0] === '"' || element[0] === "'") {
        token.value = this._unquote(element);
      } else if (element.match(numericRegex)) {
        token.value = parseFloat(element);
      } else if (element === 'true' || element === 'false') {
        token.value = element === 'true';
      } else if (this._grammar.elements[element]) {
        token.type = this._grammar.elements[element].type;
      } else if (element.match(identRegex)) {
        token.type = 'identifier';
      } else {
        throw new Error("Invalid expression token: ".concat(element));
      }

      return token;
    }
    /**
     * Escapes a string so that it can be treated as a string literal within a
     * regular expression.
     * @param {string} str The string to be escaped
     * @returns {string} the RegExp-escaped string.
     * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions
     * @private
     */

  }, {
    key: "_escapeRegExp",
    value: function _escapeRegExp(str) {
      str = str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

      if (str.match(identRegex)) {
        str = '\\b' + str + '\\b';
      }

      return str;
    }
    /**
     * Gets a RegEx object appropriate for splitting a Jexl string into its core
     * elements.
     * @returns {RegExp} An element-splitting RegExp object
     * @private
     */

  }, {
    key: "_getSplitRegex",
    value: function _getSplitRegex() {
      var _this = this;

      if (!this._splitRegex) {
        // Sort by most characters to least, then regex escape each
        var elemArray = Object.keys(this._grammar.elements).sort(function (a, b) {
          return b.length - a.length;
        }).map(function (elem) {
          return _this._escapeRegExp(elem);
        }, this);
        this._splitRegex = new RegExp('(' + [preOpRegexElems.join('|'), elemArray.join('|'), postOpRegexElems.join('|')].join('|') + ')');
      }

      return this._splitRegex;
    }
    /**
     * Determines whether the addition of a '-' token should be interpreted as a
     * negative symbol for an upcoming number, given an array of tokens already
     * processed.
     * @param {Array<Object>} tokens An array of tokens already processed
     * @returns {boolean} true if adding a '-' should be considered a negative
     *      symbol; false otherwise
     * @private
     */

  }, {
    key: "_isNegative",
    value: function _isNegative(tokens) {
      if (!tokens.length) return true;
      return minusNegatesAfter.some(function (type) {
        return type === tokens[tokens.length - 1].type;
      });
    }
    /**
     * A utility function to determine if a string consists of only space
     * characters.
     * @param {string} str A string to be tested
     * @returns {boolean} true if the string is empty or consists of only spaces;
     *      false otherwise.
     * @private
     */

  }, {
    key: "_isWhitespace",
    value: function _isWhitespace(str) {
      return !!str.match(whitespaceRegex);
    }
    /**
     * Removes the beginning and trailing quotes from a string, unescapes any
     * escaped quotes on its interior, and unescapes any escaped escape
     * characters. Note that this function is not defensive; it assumes that the
     * provided string is not empty, and that its first and last characters are
     * actually quotes.
     * @param {string} str A string whose first and last characters are quotes
     * @returns {string} a string with the surrounding quotes stripped and escapes
     *      properly processed.
     * @private
     */

  }, {
    key: "_unquote",
    value: function _unquote(str) {
      var quote = str[0];
      var escQuoteRegex = new RegExp('\\\\' + quote, 'g');
      return str.substr(1, str.length - 2).replace(escQuoteRegex, quote).replace(escEscRegex, '\\');
    }
  }]);
  return Lexer;
}();

module.exports = Lexer;
},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":7}],18:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/*
 * Jexl
 * Copyright 2020 Tom Shawver
 */
var PromiseSync = /*#__PURE__*/function () {
  function PromiseSync(fn) {
    (0, _classCallCheck2.default)(this, PromiseSync);
    fn(this._resolve.bind(this), this._reject.bind(this));
  }

  (0, _createClass2.default)(PromiseSync, [{
    key: "catch",
    value: function _catch(rejected) {
      if (this.error) {
        try {
          this._resolve(rejected(this.error));
        } catch (e) {
          this._reject(e);
        }
      }

      return this;
    }
  }, {
    key: "then",
    value: function then(resolved, rejected) {
      if (!this.error) {
        try {
          this._resolve(resolved(this.value));
        } catch (e) {
          this._reject(e);
        }
      }

      if (rejected) this.catch(rejected);
      return this;
    }
  }, {
    key: "_reject",
    value: function _reject(error) {
      this.value = undefined;
      this.error = error;
    }
  }, {
    key: "_resolve",
    value: function _resolve(val) {
      if (val instanceof PromiseSync) {
        if (val.error) {
          this._reject(val.error);
        } else {
          this._resolve(val.value);
        }
      } else {
        this.value = val;
        this.error = undefined;
      }
    }
  }]);
  return PromiseSync;
}();

PromiseSync.all = function (vals) {
  return new PromiseSync(function (resolve) {
    var resolved = vals.map(function (val) {
      while (val instanceof PromiseSync) {
        if (val.error) throw Error(val.error);
        val = val.value;
      }

      return val;
    });
    resolve(resolved);
  });
};

PromiseSync.resolve = function (val) {
  return new PromiseSync(function (resolve) {
    return resolve(val);
  });
};

PromiseSync.reject = function (error) {
  return new PromiseSync(function (resolve, reject) {
    return reject(error);
  });
};

module.exports = PromiseSync;
},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":7}],19:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/*
 * Jexl
 * Copyright 2020 Tom Shawver
 */
var handlers = require('./handlers');
/**
 * The Evaluator takes a Jexl expression tree as generated by the
 * {@link Parser} and calculates its value within a given context. The
 * collection of transforms, context, and a relative context to be used as the
 * root for relative identifiers, are all specific to an Evaluator instance.
 * When any of these things change, a new instance is required.  However, a
 * single instance can be used to simultaneously evaluate many different
 * expressions, and does not have to be reinstantiated for each.
 * @param {{}} grammar A grammar object against which to evaluate the expression
 *      tree
 * @param {{}} [context] A map of variable keys to their values. This will be
 *      accessed to resolve the value of each non-relative identifier. Any
 *      Promise values will be passed to the expression as their resolved
 *      value.
 * @param {{}|Array<{}|Array>} [relativeContext] A map or array to be accessed
 *      to resolve the value of a relative identifier.
 * @param {function} promise A constructor for the Promise class to be used;
 *      probably either Promise or PromiseSync.
 */


var Evaluator = /*#__PURE__*/function () {
  function Evaluator(grammar, context, relativeContext) {
    var promise = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Promise;
    (0, _classCallCheck2.default)(this, Evaluator);
    this._grammar = grammar;
    this._context = context || {};
    this._relContext = relativeContext || this._context;
    this.Promise = promise;
  }
  /**
   * Evaluates an expression tree within the configured context.
   * @param {{}} ast An expression tree object
   * @returns {Promise<*>} resolves with the resulting value of the expression.
   */


  (0, _createClass2.default)(Evaluator, [{
    key: "eval",
    value: function _eval(ast) {
      var _this = this;

      return this.Promise.resolve().then(function () {
        return handlers[ast.type].call(_this, ast);
      });
    }
    /**
     * Simultaneously evaluates each expression within an array, and delivers the
     * response as an array with the resulting values at the same indexes as their
     * originating expressions.
     * @param {Array<string>} arr An array of expression strings to be evaluated
     * @returns {Promise<Array<{}>>} resolves with the result array
     */

  }, {
    key: "evalArray",
    value: function evalArray(arr) {
      var _this2 = this;

      return this.Promise.all(arr.map(function (elem) {
        return _this2.eval(elem);
      }));
    }
    /**
     * Simultaneously evaluates each expression within a map, and delivers the
     * response as a map with the same keys, but with the evaluated result for each
     * as their value.
     * @param {{}} map A map of expression names to expression trees to be
     *      evaluated
     * @returns {Promise<{}>} resolves with the result map.
     */

  }, {
    key: "evalMap",
    value: function evalMap(map) {
      var _this3 = this;

      var keys = Object.keys(map);
      var result = {};
      var asts = keys.map(function (key) {
        return _this3.eval(map[key]);
      });
      return this.Promise.all(asts).then(function (vals) {
        vals.forEach(function (val, idx) {
          result[keys[idx]] = val;
        });
        return result;
      });
    }
    /**
     * Applies a filter expression with relative identifier elements to a subject.
     * The intent is for the subject to be an array of subjects that will be
     * individually used as the relative context against the provided expression
     * tree. Only the elements whose expressions result in a truthy value will be
     * included in the resulting array.
     *
     * If the subject is not an array of values, it will be converted to a single-
     * element array before running the filter.
     * @param {*} subject The value to be filtered usually an array. If this value is
     *      not an array, it will be converted to an array with this value as the
     *      only element.
     * @param {{}} expr The expression tree to run against each subject. If the
     *      tree evaluates to a truthy result, then the value will be included in
     *      the returned array otherwise, it will be eliminated.
     * @returns {Promise<Array>} resolves with an array of values that passed the
     *      expression filter.
     * @private
     */

  }, {
    key: "_filterRelative",
    value: function _filterRelative(subject, expr) {
      var _this4 = this;

      var promises = [];

      if (!Array.isArray(subject)) {
        subject = subject === undefined ? [] : [subject];
      }

      subject.forEach(function (elem) {
        var evalInst = new Evaluator(_this4._grammar, _this4._context, elem, _this4.Promise);
        promises.push(evalInst.eval(expr));
      });
      return this.Promise.all(promises).then(function (values) {
        var results = [];
        values.forEach(function (value, idx) {
          if (value) {
            results.push(subject[idx]);
          }
        });
        return results;
      });
    }
    /**
     * Applies a static filter expression to a subject value.  If the filter
     * expression evaluates to boolean true, the subject is returned if false,
     * undefined.
     *
     * For any other resulting value of the expression, this function will attempt
     * to respond with the property at that name or index of the subject.
     * @param {*} subject The value to be filtered.  Usually an Array (for which
     *      the expression would generally resolve to a numeric index) or an
     *      Object (for which the expression would generally resolve to a string
     *      indicating a property name)
     * @param {{}} expr The expression tree to run against the subject
     * @returns {Promise<*>} resolves with the value of the drill-down.
     * @private
     */

  }, {
    key: "_filterStatic",
    value: function _filterStatic(subject, expr) {
      return this.eval(expr).then(function (res) {
        if (typeof res === 'boolean') {
          return res ? subject : undefined;
        }

        return subject[res];
      });
    }
  }]);
  return Evaluator;
}();

module.exports = Evaluator;
},{"./handlers":20,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":7}],20:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

/*
 * Jexl
 * Copyright 2020 Tom Shawver
 */
var poolNames = {
  functions: 'Jexl Function',
  transforms: 'Transform'
};
/**
 * Evaluates an ArrayLiteral by returning its value, with each element
 * independently run through the evaluator.
 * @param {{type: 'ObjectLiteral', value: <{}>}} ast An expression tree with an
 *      ObjectLiteral as the top node
 * @returns {Promise.<[]>} resolves to a map contained evaluated values.
 * @private
 */

exports.ArrayLiteral = function (ast) {
  return this.evalArray(ast.value);
};
/**
 * Evaluates a BinaryExpression node by running the Grammar's evaluator for
 * the given operator. Note that binary expressions support two types of
 * evaluators: `eval` is called with the left and right operands pre-evaluated.
 * `evalOnDemand`, if it exists, will be called with the left and right operands
 * each individually wrapped in an object with an "eval" function that returns
 * a promise with the resulting value. This allows the binary expression to
 * evaluate the operands conditionally.
 * @param {{type: 'BinaryExpression', operator: <string>, left: {},
 *      right: {}}} ast An expression tree with a BinaryExpression as the top
 *      node
 * @returns {Promise<*>} resolves with the value of the BinaryExpression.
 * @private
 */


exports.BinaryExpression = function (ast) {
  var _this = this;

  var grammarOp = this._grammar.elements[ast.operator];

  if (grammarOp.evalOnDemand) {
    var wrap = function wrap(subAst) {
      return {
        eval: function _eval() {
          return _this.eval(subAst);
        }
      };
    };

    return grammarOp.evalOnDemand(wrap(ast.left), wrap(ast.right));
  }

  return this.Promise.all([this.eval(ast.left), this.eval(ast.right)]).then(function (arr) {
    return grammarOp.eval(arr[0], arr[1]);
  });
};
/**
 * Evaluates a ConditionalExpression node by first evaluating its test branch,
 * and resolving with the consequent branch if the test is truthy, or the
 * alternate branch if it is not. If there is no consequent branch, the test
 * result will be used instead.
 * @param {{type: 'ConditionalExpression', test: {}, consequent: {},
 *      alternate: {}}} ast An expression tree with a ConditionalExpression as
 *      the top node
 * @private
 */


exports.ConditionalExpression = function (ast) {
  var _this2 = this;

  return this.eval(ast.test).then(function (res) {
    if (res) {
      if (ast.consequent) {
        return _this2.eval(ast.consequent);
      }

      return res;
    }

    return _this2.eval(ast.alternate);
  });
};
/**
 * Evaluates a FilterExpression by applying it to the subject value.
 * @param {{type: 'FilterExpression', relative: <boolean>, expr: {},
 *      subject: {}}} ast An expression tree with a FilterExpression as the top
 *      node
 * @returns {Promise<*>} resolves with the value of the FilterExpression.
 * @private
 */


exports.FilterExpression = function (ast) {
  var _this3 = this;

  return this.eval(ast.subject).then(function (subject) {
    if (ast.relative) {
      return _this3._filterRelative(subject, ast.expr);
    }

    return _this3._filterStatic(subject, ast.expr);
  });
};
/**
 * Evaluates an Identifier by either stemming from the evaluated 'from'
 * expression tree or accessing the context provided when this Evaluator was
 * constructed.
 * @param {{type: 'Identifier', value: <string>, [from]: {}}} ast An expression
 *      tree with an Identifier as the top node
 * @returns {Promise<*>|*} either the identifier's value, or a Promise that
 *      will resolve with the identifier's value.
 * @private
 */


exports.Identifier = function (ast) {
  if (!ast.from) {
    return ast.relative ? this._relContext[ast.value] : this._context[ast.value];
  }

  return this.eval(ast.from).then(function (context) {
    if (context === undefined || context === null) {
      return undefined;
    }

    if (Array.isArray(context)) {
      context = context[0];
    }

    return context[ast.value];
  });
};
/**
 * Evaluates a Literal by returning its value property.
 * @param {{type: 'Literal', value: <string|number|boolean>}} ast An expression
 *      tree with a Literal as its only node
 * @returns {string|number|boolean} The value of the Literal node
 * @private
 */


exports.Literal = function (ast) {
  return ast.value;
};
/**
 * Evaluates an ObjectLiteral by returning its value, with each key
 * independently run through the evaluator.
 * @param {{type: 'ObjectLiteral', value: <{}>}} ast An expression tree with an
 *      ObjectLiteral as the top node
 * @returns {Promise<{}>} resolves to a map contained evaluated values.
 * @private
 */


exports.ObjectLiteral = function (ast) {
  return this.evalMap(ast.value);
};
/**
 * Evaluates a FunctionCall node by applying the supplied arguments to a
 * function defined in one of the grammar's function pools.
 * @param {{type: 'FunctionCall', name: <string>}} ast An
 *      expression tree with a FunctionCall as the top node
 * @returns {Promise<*>|*} the value of the function call, or a Promise that
 *      will resolve with the resulting value.
 * @private
 */


exports.FunctionCall = function (ast) {
  var poolName = poolNames[ast.pool];

  if (!poolName) {
    throw new Error("Corrupt AST: Pool '".concat(ast.pool, "' not found"));
  }

  var pool = this._grammar[ast.pool];
  var func = pool[ast.name];

  if (!func) {
    throw new Error("".concat(poolName, " ").concat(ast.name, " is not defined."));
  }

  return this.evalArray(ast.args || []).then(function (args) {
    return func.apply(void 0, (0, _toConsumableArray2.default)(args));
  });
};
/**
 * Evaluates a Unary expression by passing the right side through the
 * operator's eval function.
 * @param {{type: 'UnaryExpression', operator: <string>, right: {}}} ast An
 *      expression tree with a UnaryExpression as the top node
 * @returns {Promise<*>} resolves with the value of the UnaryExpression.
 * @constructor
 */


exports.UnaryExpression = function (ast) {
  var _this4 = this;

  return this.eval(ast.right).then(function (right) {
    return _this4._grammar.elements[ast.operator].eval(right);
  });
};
},{"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/toConsumableArray":10}],21:[function(require,module,exports){
"use strict";

/*
 * Jexl
 * Copyright 2020 Tom Shawver
 */

/* eslint eqeqeq:0 */
exports.getGrammar = function () {
  return {
    /**
     * A map of all expression elements to their properties. Note that changes
     * here may require changes in the Lexer or Parser.
     * @type {{}}
     */
    elements: {
      '.': {
        type: 'dot'
      },
      '[': {
        type: 'openBracket'
      },
      ']': {
        type: 'closeBracket'
      },
      '|': {
        type: 'pipe'
      },
      '{': {
        type: 'openCurl'
      },
      '}': {
        type: 'closeCurl'
      },
      ':': {
        type: 'colon'
      },
      ',': {
        type: 'comma'
      },
      '(': {
        type: 'openParen'
      },
      ')': {
        type: 'closeParen'
      },
      '?': {
        type: 'question'
      },
      '+': {
        type: 'binaryOp',
        precedence: 30,
        eval: function _eval(left, right) {
          return left + right;
        }
      },
      '-': {
        type: 'binaryOp',
        precedence: 30,
        eval: function _eval(left, right) {
          return left - right;
        }
      },
      '*': {
        type: 'binaryOp',
        precedence: 40,
        eval: function _eval(left, right) {
          return left * right;
        }
      },
      '/': {
        type: 'binaryOp',
        precedence: 40,
        eval: function _eval(left, right) {
          return left / right;
        }
      },
      '//': {
        type: 'binaryOp',
        precedence: 40,
        eval: function _eval(left, right) {
          return Math.floor(left / right);
        }
      },
      '%': {
        type: 'binaryOp',
        precedence: 50,
        eval: function _eval(left, right) {
          return left % right;
        }
      },
      '^': {
        type: 'binaryOp',
        precedence: 50,
        eval: function _eval(left, right) {
          return Math.pow(left, right);
        }
      },
      '==': {
        type: 'binaryOp',
        precedence: 20,
        eval: function _eval(left, right) {
          return left == right;
        }
      },
      '!=': {
        type: 'binaryOp',
        precedence: 20,
        eval: function _eval(left, right) {
          return left != right;
        }
      },
      '>': {
        type: 'binaryOp',
        precedence: 20,
        eval: function _eval(left, right) {
          return left > right;
        }
      },
      '>=': {
        type: 'binaryOp',
        precedence: 20,
        eval: function _eval(left, right) {
          return left >= right;
        }
      },
      '<': {
        type: 'binaryOp',
        precedence: 20,
        eval: function _eval(left, right) {
          return left < right;
        }
      },
      '<=': {
        type: 'binaryOp',
        precedence: 20,
        eval: function _eval(left, right) {
          return left <= right;
        }
      },
      '&&': {
        type: 'binaryOp',
        precedence: 10,
        evalOnDemand: function evalOnDemand(left, right) {
          return left.eval().then(function (leftVal) {
            if (!leftVal) return leftVal;
            return right.eval();
          });
        }
      },
      '||': {
        type: 'binaryOp',
        precedence: 10,
        evalOnDemand: function evalOnDemand(left, right) {
          return left.eval().then(function (leftVal) {
            if (leftVal) return leftVal;
            return right.eval();
          });
        }
      },
      in: {
        type: 'binaryOp',
        precedence: 20,
        eval: function _eval(left, right) {
          if (typeof right === 'string') {
            return right.indexOf(left) !== -1;
          }

          if (Array.isArray(right)) {
            return right.some(function (elem) {
              return elem === left;
            });
          }

          return false;
        }
      },
      '!': {
        type: 'unaryOp',
        precedence: Infinity,
        eval: function _eval(right) {
          return !right;
        }
      }
    },

    /**
     * A map of function names to javascript functions. A Jexl function
     * takes zero ore more arguemnts:
     *
     *     - {*} ...args: A variable number of arguments passed to this function.
     *       All of these are pre-evaluated to their actual values before calling
     *       the function.
     *
     * The Jexl function should return either the transformed value, or
     * a Promises/A+ Promise object that resolves with the value and rejects
     * or throws only when an unrecoverable error occurs. Functions should
     * generally return undefined when they don't make sense to be used on the
     * given value type, rather than throw/reject. An error is only
     * appropriate when the function would normally return a value, but
     * cannot due to some other failure.
     */
    functions: {},

    /**
     * A map of transform names to transform functions. A transform function
     * takes one ore more arguemnts:
     *
     *     - {*} val: A value to be transformed
     *     - {*} ...args: A variable number of arguments passed to this transform.
     *       All of these are pre-evaluated to their actual values before calling
     *       the function.
     *
     * The transform function should return either the transformed value, or
     * a Promises/A+ Promise object that resolves with the value and rejects
     * or throws only when an unrecoverable error occurs. Transforms should
     * generally return undefined when they don't make sense to be used on the
     * given value type, rather than throw/reject. An error is only
     * appropriate when the transform would normally return a value, but
     * cannot due to some other failure.
     */
    transforms: {}
  };
};
},{}],22:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/*
 * Jexl
 * Copyright 2020 Tom Shawver
 */
var handlers = require('./handlers');

var states = require('./states').states;
/**
 * The Parser is a state machine that converts tokens from the {@link Lexer}
 * into an Abstract Syntax Tree (AST), capable of being evaluated in any
 * context by the {@link Evaluator}.  The Parser expects that all tokens
 * provided to it are legal and typed properly according to the grammar, but
 * accepts that the tokens may still be in an invalid order or in some other
 * unparsable configuration that requires it to throw an Error.
 * @param {{}} grammar The grammar object to use to parse Jexl strings
 * @param {string} [prefix] A string prefix to prepend to the expression string
 *      for error messaging purposes.  This is useful for when a new Parser is
 *      instantiated to parse an subexpression, as the parent Parser's
 *      expression string thus far can be passed for a more user-friendly
 *      error message.
 * @param {{}} [stopMap] A mapping of token types to any truthy value. When the
 *      token type is encountered, the parser will return the mapped value
 *      instead of boolean false.
 */


var Parser = /*#__PURE__*/function () {
  function Parser(grammar, prefix, stopMap) {
    (0, _classCallCheck2.default)(this, Parser);
    this._grammar = grammar;
    this._state = 'expectOperand';
    this._tree = null;
    this._exprStr = prefix || '';
    this._relative = false;
    this._stopMap = stopMap || {};
  }
  /**
   * Processes a new token into the AST and manages the transitions of the state
   * machine.
   * @param {{type: <string>}} token A token object, as provided by the
   *      {@link Lexer#tokenize} function.
   * @throws {Error} if a token is added when the Parser has been marked as
   *      complete by {@link #complete}, or if an unexpected token type is added.
   * @returns {boolean|*} the stopState value if this parser encountered a token
   *      in the stopState mapb false if tokens can continue.
   */


  (0, _createClass2.default)(Parser, [{
    key: "addToken",
    value: function addToken(token) {
      if (this._state === 'complete') {
        throw new Error('Cannot add a new token to a completed Parser');
      }

      var state = states[this._state];
      var startExpr = this._exprStr;
      this._exprStr += token.raw;

      if (state.subHandler) {
        if (!this._subParser) {
          this._startSubExpression(startExpr);
        }

        var stopState = this._subParser.addToken(token);

        if (stopState) {
          this._endSubExpression();

          if (this._parentStop) return stopState;
          this._state = stopState;
        }
      } else if (state.tokenTypes[token.type]) {
        var typeOpts = state.tokenTypes[token.type];
        var handleFunc = handlers[token.type];

        if (typeOpts.handler) {
          handleFunc = typeOpts.handler;
        }

        if (handleFunc) {
          handleFunc.call(this, token);
        }

        if (typeOpts.toState) {
          this._state = typeOpts.toState;
        }
      } else if (this._stopMap[token.type]) {
        return this._stopMap[token.type];
      } else {
        throw new Error("Token ".concat(token.raw, " (").concat(token.type, ") unexpected in expression: ").concat(this._exprStr));
      }

      return false;
    }
    /**
     * Processes an array of tokens iteratively through the {@link #addToken}
     * function.
     * @param {Array<{type: <string>}>} tokens An array of tokens, as provided by
     *      the {@link Lexer#tokenize} function.
     */

  }, {
    key: "addTokens",
    value: function addTokens(tokens) {
      tokens.forEach(this.addToken, this);
    }
    /**
     * Marks this Parser instance as completed and retrieves the full AST.
     * @returns {{}|null} a full expression tree, ready for evaluation by the
     *      {@link Evaluator#eval} function, or null if no tokens were passed to
     *      the parser before complete was called
     * @throws {Error} if the parser is not in a state where it's legal to end
     *      the expression, indicating that the expression is incomplete
     */

  }, {
    key: "complete",
    value: function complete() {
      if (this._cursor && !states[this._state].completable) {
        throw new Error("Unexpected end of expression: ".concat(this._exprStr));
      }

      if (this._subParser) {
        this._endSubExpression();
      }

      this._state = 'complete';
      return this._cursor ? this._tree : null;
    }
    /**
     * Indicates whether the expression tree contains a relative path identifier.
     * @returns {boolean} true if a relative identifier exists false otherwise.
     */

  }, {
    key: "isRelative",
    value: function isRelative() {
      return this._relative;
    }
    /**
     * Ends a subexpression by completing the subParser and passing its result
     * to the subHandler configured in the current state.
     * @private
     */

  }, {
    key: "_endSubExpression",
    value: function _endSubExpression() {
      states[this._state].subHandler.call(this, this._subParser.complete());

      this._subParser = null;
    }
    /**
     * Places a new tree node at the current position of the cursor (to the 'right'
     * property) and then advances the cursor to the new node. This function also
     * handles setting the parent of the new node.
     * @param {{type: <string>}} node A node to be added to the AST
     * @private
     */

  }, {
    key: "_placeAtCursor",
    value: function _placeAtCursor(node) {
      if (!this._cursor) {
        this._tree = node;
      } else {
        this._cursor.right = node;

        this._setParent(node, this._cursor);
      }

      this._cursor = node;
    }
    /**
     * Places a tree node before the current position of the cursor, replacing
     * the node that the cursor currently points to. This should only be called in
     * cases where the cursor is known to exist, and the provided node already
     * contains a pointer to what's at the cursor currently.
     * @param {{type: <string>}} node A node to be added to the AST
     * @private
     */

  }, {
    key: "_placeBeforeCursor",
    value: function _placeBeforeCursor(node) {
      this._cursor = this._cursor._parent;

      this._placeAtCursor(node);
    }
    /**
     * Sets the parent of a node by creating a non-enumerable _parent property
     * that points to the supplied parent argument.
     * @param {{type: <string>}} node A node of the AST on which to set a new
     *      parent
     * @param {{type: <string>}} parent An existing node of the AST to serve as the
     *      parent of the new node
     * @private
     */

  }, {
    key: "_setParent",
    value: function _setParent(node, parent) {
      Object.defineProperty(node, '_parent', {
        value: parent,
        writable: true
      });
    }
    /**
     * Prepares the Parser to accept a subexpression by (re)instantiating the
     * subParser.
     * @param {string} [exprStr] The expression string to prefix to the new Parser
     * @private
     */

  }, {
    key: "_startSubExpression",
    value: function _startSubExpression(exprStr) {
      var endStates = states[this._state].endStates;

      if (!endStates) {
        this._parentStop = true;
        endStates = this._stopMap;
      }

      this._subParser = new Parser(this._grammar, exprStr, endStates);
    }
  }]);
  return Parser;
}();

module.exports = Parser;
},{"./handlers":23,"./states":24,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":7}],23:[function(require,module,exports){
"use strict";

/*
 * Jexl
 * Copyright 2020 Tom Shawver
 */

/**
 * Handles a subexpression that's used to define a transform argument's value.
 * @param {{type: <string>}} ast The subexpression tree
 */
exports.argVal = function (ast) {
  if (ast) this._cursor.args.push(ast);
};
/**
 * Handles new array literals by adding them as a new node in the AST,
 * initialized with an empty array.
 */


exports.arrayStart = function () {
  this._placeAtCursor({
    type: 'ArrayLiteral',
    value: []
  });
};
/**
 * Handles a subexpression representing an element of an array literal.
 * @param {{type: <string>}} ast The subexpression tree
 */


exports.arrayVal = function (ast) {
  if (ast) {
    this._cursor.value.push(ast);
  }
};
/**
 * Handles tokens of type 'binaryOp', indicating an operation that has two
 * inputs: a left side and a right side.
 * @param {{type: <string>}} token A token object
 */


exports.binaryOp = function (token) {
  var precedence = this._grammar.elements[token.value].precedence || 0;
  var parent = this._cursor._parent;

  while (parent && parent.operator && this._grammar.elements[parent.operator].precedence >= precedence) {
    this._cursor = parent;
    parent = parent._parent;
  }

  var node = {
    type: 'BinaryExpression',
    operator: token.value,
    left: this._cursor
  };

  this._setParent(this._cursor, node);

  this._cursor = parent;

  this._placeAtCursor(node);
};
/**
 * Handles successive nodes in an identifier chain.  More specifically, it
 * sets values that determine how the following identifier gets placed in the
 * AST.
 */


exports.dot = function () {
  this._nextIdentEncapsulate = this._cursor && this._cursor.type !== 'UnaryExpression' && (this._cursor.type !== 'BinaryExpression' || this._cursor.type === 'BinaryExpression' && this._cursor.right);
  this._nextIdentRelative = !this._cursor || this._cursor && !this._nextIdentEncapsulate;

  if (this._nextIdentRelative) {
    this._relative = true;
  }
};
/**
 * Handles a subexpression used for filtering an array returned by an
 * identifier chain.
 * @param {{type: <string>}} ast The subexpression tree
 */


exports.filter = function (ast) {
  this._placeBeforeCursor({
    type: 'FilterExpression',
    expr: ast,
    relative: this._subParser.isRelative(),
    subject: this._cursor
  });
};
/**
 * Handles identifier tokens when used to indicate the name of a function to
 * be called.
 * @param {{type: <string>}} token A token object
 */


exports.functionCall = function () {
  this._placeBeforeCursor({
    type: 'FunctionCall',
    name: this._cursor.value,
    args: [],
    pool: 'functions'
  });
};
/**
 * Handles identifier tokens by adding them as a new node in the AST.
 * @param {{type: <string>}} token A token object
 */


exports.identifier = function (token) {
  var node = {
    type: 'Identifier',
    value: token.value
  };

  if (this._nextIdentEncapsulate) {
    node.from = this._cursor;

    this._placeBeforeCursor(node);

    this._nextIdentEncapsulate = false;
  } else {
    if (this._nextIdentRelative) {
      node.relative = true;
      this._nextIdentRelative = false;
    }

    this._placeAtCursor(node);
  }
};
/**
 * Handles literal values, such as strings, booleans, and numerics, by adding
 * them as a new node in the AST.
 * @param {{type: <string>}} token A token object
 */


exports.literal = function (token) {
  this._placeAtCursor({
    type: 'Literal',
    value: token.value
  });
};
/**
 * Queues a new object literal key to be written once a value is collected.
 * @param {{type: <string>}} token A token object
 */


exports.objKey = function (token) {
  this._curObjKey = token.value;
};
/**
 * Handles new object literals by adding them as a new node in the AST,
 * initialized with an empty object.
 */


exports.objStart = function () {
  this._placeAtCursor({
    type: 'ObjectLiteral',
    value: {}
  });
};
/**
 * Handles an object value by adding its AST to the queued key on the object
 * literal node currently at the cursor.
 * @param {{type: <string>}} ast The subexpression tree
 */


exports.objVal = function (ast) {
  this._cursor.value[this._curObjKey] = ast;
};
/**
 * Handles traditional subexpressions, delineated with the groupStart and
 * groupEnd elements.
 * @param {{type: <string>}} ast The subexpression tree
 */


exports.subExpression = function (ast) {
  this._placeAtCursor(ast);
};
/**
 * Handles a completed alternate subexpression of a ternary operator.
 * @param {{type: <string>}} ast The subexpression tree
 */


exports.ternaryEnd = function (ast) {
  this._cursor.alternate = ast;
};
/**
 * Handles a completed consequent subexpression of a ternary operator.
 * @param {{type: <string>}} ast The subexpression tree
 */


exports.ternaryMid = function (ast) {
  this._cursor.consequent = ast;
};
/**
 * Handles the start of a new ternary expression by encapsulating the entire
 * AST in a ConditionalExpression node, and using the existing tree as the
 * test element.
 */


exports.ternaryStart = function () {
  this._tree = {
    type: 'ConditionalExpression',
    test: this._tree
  };
  this._cursor = this._tree;
};
/**
 * Handles identifier tokens when used to indicate the name of a transform to
 * be applied.
 * @param {{type: <string>}} token A token object
 */


exports.transform = function (token) {
  this._placeBeforeCursor({
    type: 'FunctionCall',
    name: token.value,
    args: [this._cursor],
    pool: 'transforms'
  });
};
/**
 * Handles token of type 'unaryOp', indicating that the operation has only
 * one input: a right side.
 * @param {{type: <string>}} token A token object
 */


exports.unaryOp = function (token) {
  this._placeAtCursor({
    type: 'UnaryExpression',
    operator: token.value
  });
};
},{}],24:[function(require,module,exports){
"use strict";

/*
 * Jexl
 * Copyright 2020 Tom Shawver
 */
var h = require('./handlers');
/**
 * A mapping of all states in the finite state machine to a set of instructions
 * for handling or transitioning into other states. Each state can be handled
 * in one of two schemes: a tokenType map, or a subHandler.
 *
 * Standard expression elements are handled through the tokenType object. This
 * is an object map of all legal token types to encounter in this state (and
 * any unexpected token types will generate a thrown error) to an options
 * object that defines how they're handled.  The available options are:
 *
 *      {string} toState: The name of the state to which to transition
 *          immediately after handling this token
 *      {string} handler: The handler function to call when this token type is
 *          encountered in this state.  If omitted, the default handler
 *          matching the token's "type" property will be called. If the handler
 *          function does not exist, no call will be made and no error will be
 *          generated.  This is useful for tokens whose sole purpose is to
 *          transition to other states.
 *
 * States that consume a subexpression should define a subHandler, the
 * function to be called with an expression tree argument when the
 * subexpression is complete. Completeness is determined through the
 * endStates object, which maps tokens on which an expression should end to the
 * state to which to transition once the subHandler function has been called.
 *
 * Additionally, any state in which it is legal to mark the AST as completed
 * should have a 'completable' property set to boolean true.  Attempting to
 * call {@link Parser#complete} in any state without this property will result
 * in a thrown Error.
 *
 * @type {{}}
 */


exports.states = {
  expectOperand: {
    tokenTypes: {
      literal: {
        toState: 'expectBinOp'
      },
      identifier: {
        toState: 'identifier'
      },
      unaryOp: {},
      openParen: {
        toState: 'subExpression'
      },
      openCurl: {
        toState: 'expectObjKey',
        handler: h.objStart
      },
      dot: {
        toState: 'traverse'
      },
      openBracket: {
        toState: 'arrayVal',
        handler: h.arrayStart
      }
    }
  },
  expectBinOp: {
    tokenTypes: {
      binaryOp: {
        toState: 'expectOperand'
      },
      pipe: {
        toState: 'expectTransform'
      },
      dot: {
        toState: 'traverse'
      },
      question: {
        toState: 'ternaryMid',
        handler: h.ternaryStart
      }
    },
    completable: true
  },
  expectTransform: {
    tokenTypes: {
      identifier: {
        toState: 'postTransform',
        handler: h.transform
      }
    }
  },
  expectObjKey: {
    tokenTypes: {
      identifier: {
        toState: 'expectKeyValSep',
        handler: h.objKey
      },
      closeCurl: {
        toState: 'expectBinOp'
      }
    }
  },
  expectKeyValSep: {
    tokenTypes: {
      colon: {
        toState: 'objVal'
      }
    }
  },
  postTransform: {
    tokenTypes: {
      openParen: {
        toState: 'argVal'
      },
      binaryOp: {
        toState: 'expectOperand'
      },
      dot: {
        toState: 'traverse'
      },
      openBracket: {
        toState: 'filter'
      },
      pipe: {
        toState: 'expectTransform'
      }
    },
    completable: true
  },
  postArgs: {
    tokenTypes: {
      binaryOp: {
        toState: 'expectOperand'
      },
      dot: {
        toState: 'traverse'
      },
      openBracket: {
        toState: 'filter'
      },
      pipe: {
        toState: 'expectTransform'
      }
    },
    completable: true
  },
  identifier: {
    tokenTypes: {
      binaryOp: {
        toState: 'expectOperand'
      },
      dot: {
        toState: 'traverse'
      },
      openBracket: {
        toState: 'filter'
      },
      openParen: {
        toState: 'argVal',
        handler: h.functionCall
      },
      pipe: {
        toState: 'expectTransform'
      },
      question: {
        toState: 'ternaryMid',
        handler: h.ternaryStart
      }
    },
    completable: true
  },
  traverse: {
    tokenTypes: {
      identifier: {
        toState: 'identifier'
      }
    }
  },
  filter: {
    subHandler: h.filter,
    endStates: {
      closeBracket: 'identifier'
    }
  },
  subExpression: {
    subHandler: h.subExpression,
    endStates: {
      closeParen: 'expectBinOp'
    }
  },
  argVal: {
    subHandler: h.argVal,
    endStates: {
      comma: 'argVal',
      closeParen: 'postArgs'
    }
  },
  objVal: {
    subHandler: h.objVal,
    endStates: {
      comma: 'expectObjKey',
      closeCurl: 'expectBinOp'
    }
  },
  arrayVal: {
    subHandler: h.arrayVal,
    endStates: {
      comma: 'arrayVal',
      closeBracket: 'expectBinOp'
    }
  },
  ternaryMid: {
    subHandler: h.ternaryMid,
    endStates: {
      colon: 'ternaryEnd'
    }
  },
  ternaryEnd: {
    subHandler: h.ternaryEnd,
    completable: true
  }
};
},{"./handlers":23}]},{},[1]);
