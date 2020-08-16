import React, { Component } from 'react';
import Rating from './ReviewRating';

export default class Reviews extends Component {
  render() {
    const { reviews } = this.props;
    return (
      <div className="reviewContainer">
        {reviews.map((review, idx) => (
          <div key={review.id}>
            {review.rate ? <Rating className="reviewRat" rating={review.rate} idx={idx} /> : null }
            <div className="reviewTitle">{review.title}</div>
            <div className="reviewContent">{review.content}</div>
          </div>
        ))}
      </div>
    );
  }
}
