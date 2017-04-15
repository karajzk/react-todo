const React = require("react");
const TodoList = require("TodoList");
import AddTodo from "AddTodo";
const TodoSearch = require("TodoSearch");

const TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: "",
      todos: [
        {
          id: 1,
          text: "Walk the dog"
        }, {
          id: 2,
          text: "Clean the yard"
        }, {
          id: 3,
          text: "Wash the car"
        }, {
          id: 4,
          text: "Go shopping"
        }
      ]
    };
  },
  handleAddTodo: function(text) {
    alert("new todo: " + text);
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function() {
    const {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={ this.handleSearch } />
        <TodoList todos={ todos } />
        <AddTodo onAddTodo={ this.handleAddTodo } />
      </div>
      );
  }
});

module.exports = TodoApp;