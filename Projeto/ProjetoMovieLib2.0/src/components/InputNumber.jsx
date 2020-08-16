import React, { Component } from 'react';

class InputNumber extends Component {
  render() {
    const { LT, v, oCFn } = this.props;
    return (
      <label className="movie-rating" htmlFor="text">
        {LT}
        <input className="number" type="number" value={v} onChange={oCFn} />
      </label>
    );
  }
}

export default InputNumber;
