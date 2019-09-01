import React from "react";

class SearchForm extends React.Component {
  render() {
    return (
      <div className="search-form">
        <form onSubmit={(event) => this.props.handleSearch(event, 3)}>
          <input
            type="text"
            name="review"
            onChange={this.props.handleChange}
            placeholder="Search Movie Here"
          />
          <input type="submit" value="Search Movie Reviews" />
        </form>
      </div>
    );
  }
}

export default SearchForm;
