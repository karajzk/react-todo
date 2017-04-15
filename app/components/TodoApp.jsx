import React, {Component} from "react";
import TodoList from "TodoList";
import AddTodo from "AddTodo";
import TodoSearch from "TodoSearch";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this
      .handleAddTodo
      .bind(this);
    this.handleSearch = this
      .handleSearch
      .bind(this);
    this.state = {
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
  }

  handleAddTodo(text) {
    alert("new todo: " + text);
  }

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  render() {
    const {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
}

export default TodoApp;