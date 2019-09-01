import React from "react";

// const MovieReviews = props => {
//     console.log(props)
//     // debugger
//     return (
//         <div className="review">
//             <h1>HI</h1>
//             <h1>{props.review.display_title}</h1>
//             <h1>{props.review.headline}</h1>
//             <h1>{props.review.mpaa_rating}</h1>
//             <h1>{props.review.summary_short}</h1>
//         </div>
//     );
// }
class MovieReviews extends React.Component {
  render() {
    const mappedList = this.props.results.map(review => {
        // debugger
      return (
        <div className="review">
          <h2>{review.display_title}</h2>
          {/* <h4>{review.byline}</h4> */}
          { review.multimedia ? <img src={review.multimedia.src} /> : null }
          <p>{review.headline}</p>
          <p>Rated: {review.mpaa_rating}</p>
          <p>Summary: {review.summary_short}</p>
        </div>
      )
    });
    return (
        <div className="review-list">
            {mappedList}
        </div>);
  }
}

export default MovieReviews;
