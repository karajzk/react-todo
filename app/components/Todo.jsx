import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
  render() {
    const {id, text, completed} = this.props;
    return (
      <div ref={ (div) => this.divRef = div } onClick={ () => {
                                                 this.props.onToggle(id);
                                               } }>
        <input type="checkbox" checked={ completed } />
        { text }
      </div>
      );
  }
}

Todo.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  completed: PropTypes.bool,
  onToggle: PropTypes.func
};

export default Todo;