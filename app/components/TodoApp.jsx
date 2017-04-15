import React, { Component } from "react";
import TodoList from "TodoList";
import AddTodo from "AddTodo";
import TodoSearch from "TodoSearch";
import uuid from "node-uuid";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      showCompleted: false,
      searchText: "",
      todos: [
        {
          id: uuid(),
          text: "Walk the dog",
          completed: false
        }, {
          id: uuid(),
          text: "Clean the yard",
          completed: true
        }, {
          id: uuid(),
          text: "Wash the car",
          completed: true
        }, {
          id: uuid(),
          text: "Go shopping",
          completed: false
        }
      ]
    };
  }

  handleToggle(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  }

  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
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
        <TodoSearch onSearch={ this.handleSearch } />
        <TodoList todos={ todos } onToggle={ this.handleToggle } />
        <AddTodo onAddTodo={ this.handleAddTodo } />
      </div>
      );
  }
}

export default TodoApp;