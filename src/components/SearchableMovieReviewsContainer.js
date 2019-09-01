import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";
import SearchForm from "./SearchForm";

const NYT_API_KEY = "&api-key=6AAAYSFro52RiP8YQJmGhSZO1iXsooxN";
const searchURL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query="; //+ `api-key=${NYT_API_KEY}`;

//? To query the search API: https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    searchInput: "",
    searchResults: []
  };

  handleSearch = (e, limit) => {
    e.preventDefault();
    const searchTermURL = this.state.searchInput.replace(" ", "%20");
    console.log(searchURL + searchTermURL + NYT_API_KEY);
    fetch(searchURL + searchTermURL + NYT_API_KEY)
      .then(res => res.json())
      .then(data => {
        // console.log(data.results);
        const limitedResults = data.results.slice(0,limit)
        this.setState({ searchResults: limitedResults });
      })
      .catch(err => console.log(err));
  };
  handleChange = e => {
    // Handles change of input for SerachForm
    this.setState({ searchInput: e.target.value });
  };
  render() {
    // console.log(this.state.searchInput);
    return (
      <div className="searchable-movie-reviews">
        <SearchForm
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
        />
        <MovieReviews results={this.state.searchResults} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
