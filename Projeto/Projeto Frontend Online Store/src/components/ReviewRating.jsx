import React, { Component } from 'react';
import '../styles/Rating.css';


export default class Rating extends Component {
  constructor(props) {
    super(props);
    const { rating, idx } = this.props;
    this.state = { rating, idx };
  }

  componentDidMount() {
    const { rating, idx } = this.state;
    let id;
    switch (true) {
      case (rating === 5): id = `5${idx}`;
        break;
      case (rating === 4): id = `4${idx}`;
        break;
      case (rating === 3): id = `3${idx}`;
        break;
      case (rating === 2): id = `2${idx}`;
        break;
      case (rating === 1): id = `1${idx}`;
        break;
      default:
    }
    if (id) document.getElementById(id).checked = true;
  }

  render() {
    const { idx } = this.props;
    return (
      <div className="ratingContainer">
        <fieldset className="rating">
          <input className="r" disabled type="radio" id={`5${idx}`} name={`r${idx}`} value="5" />
          <label className="full" htmlFor={`5${idx}`} />
          <input className="r" disabled type="radio" id={`4${idx}`} name={`r${idx}`} value="4" />
          <label className="full" htmlFor={`4${idx}`} />
          <input className="r" disabled type="radio" id={`3${idx}`} name={`r${idx}`} value="3" />
          <label className="full" htmlFor={`3${idx}`} />
          <input className="r" disabled type="radio" id={`2${idx}`} name={`r${idx}`} value="2" />
          <label className="full" htmlFor={`2${idx}`} />
          <input className="r" disabled type="radio" id={`1${idx}`} name={`r${idx}`} value="1" />
          <label className="full" htmlFor={`1${idx}`} />
        </fieldset>
      </div>
    );
  }
}
