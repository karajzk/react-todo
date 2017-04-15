const React = require("react");
const ReactDOM = require("react-dom");

import TodoApp from "TodoApp";

// load foundation
// require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//require('style-loader!css-loader!sass-loader!applicationStyles');
require("applicationStyles");

ReactDOM.render(
  <TodoApp/>,
  document.getElementById("app")
);
