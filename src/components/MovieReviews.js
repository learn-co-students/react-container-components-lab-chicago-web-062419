// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
    return (
        <div className='review'>
            <h5 className='review-list'>{props.movie.display_title}</h5>
            <ul>
                <li className='review-list'>{props.movie.opening_date ? props.movie.opening_date : 'N/A'}</li>
                <li className='review-list'>{props.movie.mpaa_rating ? props.movie.mpaa_rating : 'N/A'}</li>
                <li className='review-list'>{props.movie.summary_short ? props.movie.summary_short : 'N/A'}</li>
            </ul>
        </div>
    );
};

export default MovieReviews;