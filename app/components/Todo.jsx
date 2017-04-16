import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

class Todo extends Component {
  render() {
    const {id, text, completed, createdAt, completedAt} = this.props;

    const renderDate = () => {
      let message = "Created ";
      let timestamp = createdAt;

      if (completed) {
        message = "Completed ";
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format("MMM Do YYYY @ h:mm a");
    };

    return (
      <div ref={ (div) => this.divRef = div } onClick={ () => {
                                                    this.props.onToggle(id);
                                                  } }>
        <input type="checkbox" checked={ completed } />
        <p>
          { text }
        </p>
        <p>
          { renderDate() }
        </p>
      </div>
      );
  }
}

Todo.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  completed: PropTypes.bool,
  onToggle: PropTypes.func,
  createdAt: PropTypes.number,
  completedAt: PropTypes.number
};

export default Todo;