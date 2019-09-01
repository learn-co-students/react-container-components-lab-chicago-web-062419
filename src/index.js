import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <SearchableMovieReviewsContainer />
    <h2>Most Recent Reviews</h2>
    <span style={{color: 'cyan'}}>{'******************************************'}</span>
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);