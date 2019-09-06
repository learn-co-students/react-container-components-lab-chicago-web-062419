import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import MovieSearch from './MovieSearch'

const NYT_API_KEY = 'NYs0jsTkM041dJXrRdts5x38SMtfOBhW';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
const API_KEY = `&api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviews extends Component {
    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    componentDidMount(){
        this.fetchMovies("hello")
    }

    fetchMovies = (query) => {
        fetch(URL + query + API_KEY)
        .then(res => res.json())
        .then(returnMovies => this.setState({
            reviews: returnMovies.results
        }))
    }

    renderReviews =() => {
        return this.state.reviews.map(movie => {
            return <MovieReviews movie={movie} />
        })
    }

    handleSubmit = (query) => {
        this.setState({
            searchTerm: query
        })
        this.fetchMovies(query)
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <MovieSearch handleSubmit={this.handleSubmit}/>
                <h2>YOUR SEARCH RESULTS</h2>
                {this.renderReviews()}
            </div>
        );
    }
}

export default SearchableMovieReviews;