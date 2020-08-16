import React, { Component } from 'react';

class TextArea extends Component {
  render() {
    const { LT, v, oCFn } = this.props;
    return (
      <label htmlFor="text">
        {LT}
        <textarea type="text" value={v} onChange={oCFn} />
      </label>
    );
  }
}

export default TextArea;
