var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

// load foundation
// require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//require('style-loader!css-loader!sass-loader!applicationStyles');
require('applicationStyles');

ReactDOM.render(
  <p>Boilerplate3</p>,
  document.getElementById('app')
);
