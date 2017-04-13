var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var TodoApp = require('TodoApp');

// load foundation
// require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//require('style-loader!css-loader!sass-loader!applicationStyles');
require('applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
