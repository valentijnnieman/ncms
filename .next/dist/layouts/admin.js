'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _navbar = require('../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

var _sidebar = require('../components/sidebar.js');

var _sidebar2 = _interopRequireDefault(_sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/valentijnnieman/dev/js/ncms/layouts/admin.js';

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement('div', {
    className: 'jsx-3061730602' + ' ' + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '../static/vendor/css/materialize.min.css', className: 'jsx-3061730602',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })), _react2.default.createElement('div', {
    className: 'jsx-3061730602' + ' ' + 'page-with-sidebar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_navbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), children), _react2.default.createElement(_sidebar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('script', { src: '../static/vendor/js/jquery-3.2.1.min.js', className: 'jsx-3061730602',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('script', { src: '../static/vendor/js/materialize.min.js', className: 'jsx-3061730602',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: '3061730602',
    css: '.page-with-sidebar.jsx-3061730602{padding-left:300px;}@media only screen and (max-width :992px){.page-with-sidebar.jsx-3061730602{padding-left:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvYWRtaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JnQixBQUc0QixBQUtGLGVBQ2pCLElBTEYiLCJmaWxlIjoibGF5b3V0cy9hZG1pbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdmFsZW50aWpubmllbWFuL2Rldi9qcy9uY21zIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhci5qcydcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZWJhci5qcydcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XG4gICAgPEhlYWQ+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi4uL3N0YXRpYy92ZW5kb3IvY3NzL21hdGVyaWFsaXplLm1pbi5jc3NcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZS13aXRoLXNpZGViYXInPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICAgIDxTaWRlYmFyIC8+XG4gICAgPHNjcmlwdCBzcmM9Jy4uL3N0YXRpYy92ZW5kb3IvanMvanF1ZXJ5LTMuMi4xLm1pbi5qcycgLz5cbiAgICA8c2NyaXB0IHNyYz0nLi4vc3RhdGljL3ZlbmRvci9qcy9tYXRlcmlhbGl6ZS5taW4uanMnIC8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnBhZ2Utd2l0aC1zaWRlYmFyIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMDBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogOTkycHgpIHtcbiAgICAgICAgLnBhZ2Utd2l0aC1zaWRlYmFyIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=layouts/admin.js */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvYWRtaW4uanMiXSwibmFtZXMiOlsiSGVhZCIsIk5hdmJhciIsIlNpZGViYXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYSxBQUVwQjs7Ozs7Ozs7a0JBQWUsZ0JBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7eUJBQ2hCLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSw2Q0FDUSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QixZQUFXLE1BQXZDLEFBQTRDLHVEQUE1Qzs7Z0JBQUE7a0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTt1QkFFRixjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUM7O2dCQUFEO2tCQURGLEFBQ0UsQUFDQztBQUREO0FBQUEsTUFMSixBQUlFLEFBSUEsMkJBQUEsQUFBQzs7Z0JBQUQ7a0JBUkYsQUFRRSxBQUNBO0FBREE7QUFBQSxnREFDUSxLQUFSLEFBQVksc0RBQVo7O2dCQUFBO2tCQVRGLEFBU0UsQUFDQTtBQURBO2dEQUNRLEtBQVIsQUFBWSxxREFBWjs7Z0JBQUE7a0JBVkYsQUFVRTtBQUFBOzthQVZGO1NBRGEsQUFDYjtBQUFBO0FBREYiLCJmaWxlIjoiYWRtaW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ZhbGVudGlqbm5pZW1hbi9kZXYvanMvbmNtcyJ9