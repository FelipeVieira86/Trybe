import React, { Component } from 'react';
import '../styles/Rating.css';


export default class Rating extends Component {
  componentDidUpdate() {
    const { rating } = this.props;
    let id;
    switch (true) {
      case (rating >= 4.8): id = 'star5';
        break;
      case (rating >= 4.4): id = 'star4half';
        break;
      case (rating >= 4): id = 'star4';
        break;
      case (rating >= 3.4): id = 'star3half';
        break;
      case (rating >= 3): id = 'star3';
        break;
      case (rating >= 2.4): id = 'star2half';
        break;
      case (rating >= 2): id = 'star2';
        break;
      case (rating >= 1.4): id = 'star1half';
        break;
      case (rating >= 1): id = 'star1';
        break;
      case (rating >= 0.4): id = 'starhalf';
        break;
      default:
    }
    if (id) document.getElementById(id).checked = true;
  }

  render() {
    const { reviews } = this.props;
    return (
      <div className="ratingContainer">
        <fieldset className="rating">
          <input className="radio" disabled type="radio" id="star5" name="rating" value="5" />
          <label className="full" htmlFor="star5" />
          <input className="radio" disabled type="radio" id="star4half" name="rating" value="4.5" />
          <label className="half" htmlFor="star4half" />
          <input className="radio" disabled type="radio" id="star4" name="rating" value="4" />
          <label className="full" htmlFor="star4" />
          <input className="radio" disabled type="radio" id="star3half" name="rating" value="3.5" />
          <label className="half" htmlFor="star3half" />
          <input className="radio" disabled type="radio" id="star3" name="rating" value="3" />
          <label className="full" htmlFor="star3" />
          <input className="radio" disabled type="radio" id="star2half" name="rating" value="2.5" />
          <label className="half" htmlFor="star2half" />
          <input className="radio" disabled type="radio" id="star2" name="rating" value="2" />
          <label className="full" htmlFor="star2" />
          <input className="radio" disabled type="radio" id="star1half" name="rating" value="1.5" />
          <label className="half" htmlFor="star1half" />
          <input className="radio" disabled type="radio" id="star1" name="rating" value="1" />
          <label className="full" htmlFor="star1" />
          <input className="radio" disabled type="radio" id="starhalf" name="rating" value="0.5" />
          <label className="half" htmlFor="starhalf" />
        </fieldset>
        {reviews ? <span className="opinioes">{`${reviews.paging.total} opiniões`}</span> : null}
      </div>
    );
  }
}
