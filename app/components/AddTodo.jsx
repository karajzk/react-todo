import React, {Component} from 'react';
import PropTypes from "prop-types";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todoText = this.refs.todoText.value;
    if (todoText.length > 0) {
      this.refs.todoText.value = "";
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input ref="todoText"
                 type="text"
                 placeholder="Enter new todo" />
          <button className="button expanded">
            Add todo
          </button>
        </form>
      </div>
      );
  }
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired
};

export default AddTodo;