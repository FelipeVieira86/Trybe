import React, { Component } from 'react';

class InputSelect extends Component {
  render() {
    const { LT, v, oCFn, a } = this.props;
    return (
      <label htmlFor="select">
        {LT}
        <select className="drop" value={v} onChange={oCFn}>
          {a.map((genre) => (
            <option className="option" key={Math.random() * 10} value={genre.value}>
              {genre.text}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default InputSelect;
