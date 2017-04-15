import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoSearch extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this
      .handleSearch
      .bind(this);
  }

  handleSearch() {
    const showCompleted = this.refs.showCompleted.checked;
    const searchText = this.refs.searchText.value;

    this
      .props
      .onSearch(showCompleted, searchText);
  }

  render() {
    return (
      <div>
        <div>
          <input type="search"
                 ref="searchText"
                 placeholder="Search todos"
                 onChange={ this.handleSearch } />
        </div>
        <div>
          <label>
            <input type="checkbox"
                   ref="showCompleted"
                   onChange={ this.handleSearch } />
          </label>
        </div>
      </div>
      );
  }
}

TodoSearch.propTypes = {
  onSearch: PropTypes.func
};

export default TodoSearch;