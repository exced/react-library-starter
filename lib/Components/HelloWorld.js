'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: 100vh;\n  background: #00c6ff;  /* fallback for old browsers */\n  background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #0072ff, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  text-align: center;\n'], ['\n  height: 100vh;\n  background: #00c6ff;  /* fallback for old browsers */\n  background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #0072ff, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  text-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  text-align: center;\n  display: inline-block;\n  margin: auto;\n  border-radius: 3px;\n  padding: 0.5rem 0;\n  margin: 0.5rem 1rem;\n  width: 11rem;\n  background: transparent;\n  color: white;\n  border: 2px solid white;\n'], ['\n  text-align: center;\n  display: inline-block;\n  margin: auto;\n  border-radius: 3px;\n  padding: 0.5rem 0;\n  margin: 0.5rem 1rem;\n  width: 11rem;\n  background: transparent;\n  color: white;\n  border: 2px solid white;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Background = _styledComponents2.default.div(_templateObject);

var Title = _styledComponents2.default.h1(_templateObject2);

var HelloWorld = function HelloWorld() {
  return _react2.default.createElement(
    Background,
    null,
    _react2.default.createElement(
      Title,
      null,
      'Hello World'
    )
  );
};

exports.default = HelloWorld;