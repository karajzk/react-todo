import React, {Component} from 'react';
import PropTypes from "prop-types";

class Todo extends Component {
  render() {
    const {id, text} = this.props;
    return (
      <div>
        { id }.
        { text }
      </div>
      );
  }
}

Todo.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string
};

export default Todo;