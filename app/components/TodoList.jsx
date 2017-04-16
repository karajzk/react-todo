import React, {Component} from "react";
import PropTypes from "prop-types";
import Todo from "Todo";

class TodoList extends Component {
  render() {
    const {todos} = this.props;

    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p
            className="container__message"
            ref={(node) => {
            this.pRef = node;
          }}>
            Nothing to do
          </p>
        );

      }

      return todos.map((todo) => {
        return (<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>);
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onToggle: PropTypes.func
};

export default TodoList;