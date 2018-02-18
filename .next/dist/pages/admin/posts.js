'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _admin = require('../../layouts/admin');

var _admin2 = _interopRequireDefault(_admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/valentijnnieman/dev/js/ncms/pages/admin/posts.js?entry';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  (0, _createClass3.default)(_class, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;

        var db, _list, list;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 6;
                  break;
                }

                // If `req` is defined, we're rendering on the server and should use
                // MongoDB directly. You could also use the REST API, but that's slow
                // and inelegant.
                db = req.db;
                _context.next = 4;
                return db.collection('posts').find().sort({ createdAt: -1 }).toArray();

              case 4:
                _list = _context.sent;
                return _context.abrupt('return', { list: _list });

              case 6:
                _context.next = 8;
                return fetch('/posts', {
                  method: 'get'
                }).then(function (response) {
                  return response.json();
                }).then(function (data) {
                  return data.posts;
                });

              case 8:
                list = _context.sent;
                return _context.abrupt('return', { list: list });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = {
      posts: props.list
    };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'getPosts',
    value: function getPosts() {
      var _this2 = this;

      return fetch('/posts', {
        method: 'get'
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.setState({
          posts: data.posts
        });
      });
    }
  }, {
    key: 'removePost',
    value: function removePost(slug) {
      var _this3 = this;

      return fetch('/posts/' + slug, {
        method: 'delete'
      }).then(function (response) {
        _this3.getPosts();
      });
    }
  }, {
    key: 'updatePost',
    value: function updatePost(post) {
      var _this4 = this;

      post.preventDefault();
      var title = post.target.title.value;
      var slug = post.target.slug.value;
      var newSlug = post.target.newSlug.value;
      var content = post.target.content.value;

      return fetch('/posts/' + slug, {
        method: 'put',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: (0, _stringify2.default)({
          "title": title,
          "slug": slug,
          "newSlug": newSlug,
          "content": content
        })
      }).then(function (response) {
        _this4.getPosts();
      });
    }
  }, {
    key: 'createPost',
    value: function createPost(slug) {
      var _this5 = this;

      return fetch('/posts/create', {
        method: 'post'
      }).then(function (response) {
        _this5.getPosts();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var list = this.state.posts.map(function (item, index) {
        return _react2.default.createElement('li', { className: 'card', key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, _react2.default.createElement('div', { className: 'card-content', __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, _react2.default.createElement('form', { onSubmit: _this6.updatePost.bind(_this6), __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, _react2.default.createElement('input', { type: 'hidden', name: 'slug', value: item.slug, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }), _react2.default.createElement('label', { htmlFor: 'title', __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, 'Title'), _react2.default.createElement('input', { type: 'text', name: 'title', defaultValue: item.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }), _react2.default.createElement('label', { htmlFor: 'newSlug', __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, 'Slug'), _react2.default.createElement('input', { type: 'text', name: 'newSlug', defaultValue: item.slug, __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }), _react2.default.createElement('label', { htmlFor: 'content', __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, 'Content'), _react2.default.createElement('textarea', { name: 'content',
          className: 'materialize-textarea',
          defaultValue: item.content,
          cols: '100',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }), _react2.default.createElement('div', { className: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, _react2.default.createElement('div', { className: 'col s2', __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }, _react2.default.createElement('input', { type: 'submit', className: 'btn', value: 'update', __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        })), _react2.default.createElement('div', { className: 'col s2 offset-s8', __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, _react2.default.createElement('button', { className: 'btn red right', onClick: function onClick() {
            return _this6.removePost(item.slug);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, 'Remove')))), _react2.default.createElement('div', { className: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }), _react2.default.createElement('div', { className: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, _react2.default.createElement('div', { className: 'col s4', __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, _react2.default.createElement('a', { className: 'btn yellow', href: '/posts/' + item.slug, __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, 'Show')))));
      });
      return _react2.default.createElement(_admin2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement('div', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement('h2', { className: 'thin', __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, 'Posts'), _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, list), _react2.default.createElement('div', { className: 'row', __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement('div', { className: 'col s4', __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement('button', { className: 'btn', onClick: function onClick() {
          return _this6.createPost();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, 'Create new post')))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkbWluL3Bvc3RzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwicmVxIiwiZGIiLCJjb2xsZWN0aW9uIiwiZmluZCIsInNvcnQiLCJjcmVhdGVkQXQiLCJ0b0FycmF5IiwibGlzdCIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJwb3N0cyIsInByb3BzIiwic3RhdGUiLCJzZXRTdGF0ZSIsInNsdWciLCJnZXRQb3N0cyIsInBvc3QiLCJwcmV2ZW50RGVmYXVsdCIsInRpdGxlIiwidGFyZ2V0IiwidmFsdWUiLCJuZXdTbHVnIiwiY29udGVudCIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYm9keSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInVwZGF0ZVBvc3QiLCJiaW5kIiwicmVtb3ZlUG9zdCIsImNyZWF0ZVBvc3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7Ozs7Ozs7Ozs7Ozs7OztZLEFBR2UsVyxBQUFBOzs7Ozs7OztxQixBQUMxQjs7O0FBQ0Y7O0FBQ0E7QUFDQTtBQUNRO0EscUIsQUFBTyxJLEFBQVA7O3VCQUNXLEdBQUEsQUFBRyxXQUFILEFBQWMsU0FBZCxBQUF1QixPQUF2QixBQUE4QixLQUFLLEVBQUUsV0FBVyxDQUFoRCxBQUFtQyxBQUFjLEssQUFBakQsQUFDaEI7O21CQURHO0E7aURBRUMsRUFBRSxNQUFGLEE7Ozs7NkJBR1UsQUFBTTswQkFBTixBQUFnQixBQUN2QjtBQUR1QixBQUMvQixpQkFEZSxFQUFBLEFBRWQsS0FBSyxvQkFBWSxBQUNsQjt5QkFBTyxTQUFQLEFBQU8sQUFBUyxBQUNqQjtBQUpnQixtQkFBQSxBQUlkLEtBQUssZ0JBQVEsQUFDWjt5QkFBTyxLQUFQLEFBQVksQUFDZjtBLEFBTmdCOzttQkFBYjtBO2lEQVFDLEVBQUUsTUFBRixBOzs7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LEFBQ25CO2dCQUhGLEFBR087O3NCQUhQO3dCQVBGLEFBT0UsQUFLQTtBQUxBOzRCQUtBLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDRTtBQURGOzJCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDRTtBQURGO29EQUNTLE1BQVAsQUFBWSxVQUFTLFdBQXJCLEFBQStCLE9BQU0sT0FBckMsQUFBMkM7c0JBQTNDO3dCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7NkJBRUYsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNFO0FBREY7MkJBQ0UsY0FBQSxZQUFRLFdBQVIsQUFBa0IsaUJBQWdCLFNBQVMsbUJBQUE7bUJBQU0sT0FBQSxBQUFLLFdBQVcsS0FBdEIsQUFBTSxBQUFxQjtBQUF0RTtzQkFBQTt3QkFBQTtBQUFBO1dBbEJSLEFBQ0UsQUFZRSxBQUlFLEFBQ0UsQUFJSixxREFBSyxXQUFMLEFBQWU7c0JBQWY7d0JBdEJKLEFBc0JJLEFBRUE7QUFGQTs0QkFFQSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0U7QUFERjsyQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0U7QUFERjsyQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhLGNBQWEsTUFBTSxZQUFZLEtBQTVDLEFBQWlEO3NCQUFqRDt3QkFBQTtBQUFBO1dBM0JWLEFBQU8sQUFDTCxBQXdCSSxBQUNFLEFBQ0UsQUFLWDtBQWpDRCxBQUFXLEFBa0NYLE9BbENXOzZCQWtDSixBQUFDOztvQkFBRDtzQkFBQSxBQUNEO0FBREM7QUFBQSxPQUFBLGtCQUNELGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSwwQkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxTQUZGLEFBRUUsQUFHQSx1QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFlBQVEsV0FBUixBQUFrQixPQUFNLFNBQVMsbUJBQUE7aUJBQU0sT0FBTixBQUFNLEFBQUs7QUFBNUM7b0JBQUE7c0JBQUE7QUFBQTtTQVJaLEFBQU8sQUFDRCxBQUtFLEFBQ0UsQUFDRSxBQUtiOzs7OztFQTlIMEIsZ0JBQU0sQSIsImZpbGUiOiJwb3N0cy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdmFsZW50aWpubmllbWFuL2Rldi9qcy9uY21zIn0=