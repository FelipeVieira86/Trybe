import React, { Component } from 'react';

class InputText extends Component {
  render() {
    const { LT, v, oCFn } = this.props;
    return (
      <label htmlFor="text">
        {LT}
        <input type="text" value={v} onChange={oCFn} />
      </label>
    );
  }
}

export default InputText;
