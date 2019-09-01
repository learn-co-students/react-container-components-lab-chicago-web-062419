import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '6AAAYSFro52RiP8YQJmGhSZO1iXsooxN';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_API_KEY}`;

//? For the latest movie reviews: https://api.nytimes.com/svc/movies/v2/reviews/all.json

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    state = {
        results: []
    }
    componentDidMount() {
        fetch(URL).then(res => res.json()).then(data => {
            this.setState({results: data.results})
        })
    }
    // mappedList = (reviews) => {reviews.map(review => <MovieReviews review={review}/>)}

    render() { 
        console.log(this.state.results[0])
        return (
            <div className="latest-movie-reivews">
                <MovieReviews results={this.state.results} />
            </div>
        );
    }
}
 
export default LatestMovieReviewsContainer;