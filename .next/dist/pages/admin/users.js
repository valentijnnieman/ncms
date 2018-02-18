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

var _jsxFileName = '/Users/valentijnnieman/dev/js/ncms/pages/admin/users.js?entry';


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
        })))), _react2.default.createElement('div', { className: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }, _react2.default.createElement('div', { className: 'col s2', __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, _react2.default.createElement('button', { className: 'btn red', onClick: function onClick() {
            return _this6.removePost(item.slug);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, 'Remove')), _react2.default.createElement('div', { className: 'col s2 offset-s10', __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, _react2.default.createElement('a', { className: 'btn yellow', href: '/posts/' + item.slug, __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, 'Preview')))));
      });
      return _react2.default.createElement(_admin2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement('div', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement('h2', { className: 'thin', __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, 'Users')));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkbWluL3VzZXJzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwicmVxIiwiZGIiLCJjb2xsZWN0aW9uIiwiZmluZCIsInNvcnQiLCJjcmVhdGVkQXQiLCJ0b0FycmF5IiwibGlzdCIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJwb3N0cyIsInByb3BzIiwic3RhdGUiLCJzZXRTdGF0ZSIsInNsdWciLCJnZXRQb3N0cyIsInBvc3QiLCJwcmV2ZW50RGVmYXVsdCIsInRpdGxlIiwidGFyZ2V0IiwidmFsdWUiLCJuZXdTbHVnIiwiY29udGVudCIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYm9keSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInVwZGF0ZVBvc3QiLCJiaW5kIiwicmVtb3ZlUG9zdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7Ozs7Ozs7Ozs7Ozs7O1ksQUFHZSxXLEFBQUE7Ozs7Ozs7O3FCLEFBQzFCOzs7QUFDRjs7QUFDQTtBQUNBO0FBQ1E7QSxxQkFBTyxBLElBQVAsQTs7dUJBQ1csR0FBQSxBQUFHLFdBQUgsQUFBYyxTQUFkLEFBQXVCLE9BQXZCLEFBQThCLEtBQUssRUFBRSxXQUFXLENBQWhELEFBQW1DLEFBQWMsS0FBakQsQSxBQUNoQjs7bUJBREc7QTtpREFFQyxFQUFFLE0sQUFBRjs7Ozs2QkFHVSxBQUFNOzBCQUFOLEFBQWdCLEFBQ3ZCO0FBRHVCLEFBQy9CLGlCQURlLEVBQUEsQUFFZCxLQUFLLG9CQUFZLEFBQ2xCO3lCQUFPLFNBQVAsQUFBTyxBQUFTLEFBQ2pCO0FBSmdCLG1CQUFBLEFBSWQsS0FBSyxnQkFBUSxBQUNaO3lCQUFPLEtBQVAsQUFBWSxBQUNmO0FBTmdCLEE7O21CQUFiO0E7aURBUUMsRUFBRSxNLEFBQUY7Ozs7Ozs7Ozs7Ozs7OztB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QUFHTzs7c0JBSFA7d0JBUEYsQUFPRSxBQUtBO0FBTEE7NEJBS0EsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNFO0FBREY7MkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNFO0FBREY7b0RBQ1MsTUFBUCxBQUFZLFVBQVMsV0FBckIsQUFBK0IsT0FBTSxPQUFyQyxBQUEyQztzQkFBM0M7d0JBZlIsQUFDRSxBQVlFLEFBQ0UsQUFDRSxBQUlKO0FBSkk7K0JBSUosY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNFO0FBREY7MkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNFO0FBREY7MkJBQ0UsY0FBQSxZQUFRLFdBQVIsQUFBa0IsV0FBVSxTQUFTLG1CQUFBO21CQUFNLE9BQUEsQUFBSyxXQUFXLEtBQXRCLEFBQU0sQUFBcUI7QUFBaEU7c0JBQUE7d0JBQUE7QUFBQTtXQUZKLEFBQ0UsQUFDRSxBQUVGLDRCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDRTtBQURGOzJCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsY0FBYSxNQUFNLFlBQVksS0FBNUMsQUFBaUQ7c0JBQWpEO3dCQUFBO0FBQUE7V0F6QlYsQUFBTyxBQUNMLEFBbUJJLEFBSUUsQUFDRSxBQUtYO0FBL0JELEFBQVcsQUFnQ1gsT0FoQ1c7NkJBZ0NKLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0Q7QUFEQztBQUFBLE9BQUEsa0JBQ0QsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYztvQkFBZDtzQkFBQTtBQUFBO1NBRlIsQUFBTyxBQUNELEFBQ0UsQUFHVDs7Ozs7RUFwSDBCLGdCQUFNLEEiLCJmaWxlIjoidXNlcnMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ZhbGVudGlqbm5pZW1hbi9kZXYvanMvbmNtcyJ9