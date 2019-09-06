import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'NYs0jsTkM041dJXrRdts5x38SMtfOBhW';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviews extends Component {
    constructor(){
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(movies => this.setState({
            reviews: movies.results
        }))
    }

    renderReviews =() => {
        return this.state.reviews.map(movie => {
            return <MovieReviews key={movie.display_title} movie={movie} />
        })
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h2>LATEST MOVIE REVIEWS</h2>
                {this.renderReviews()}
            </div>
        );
    }
}

export default LatestMovieReviews;