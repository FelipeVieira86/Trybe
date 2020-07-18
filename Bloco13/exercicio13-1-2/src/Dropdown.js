import React, { Component } from 'react';

const content = [
  { id: 1, item: 'a' },
  { id: 2, item: 'b' },
  { id: 3, item: 'c' },
  { id: 4, item: 'd' },
];

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divValue: content[0].item,
      display: 'none',
    };
  }
  render() {
    return (
      <div>
        {this.props.children}
        <div onClick={() => this.setState({ display: 'flex' })} className="box">
          {this.state.divValue}
        </div>
        <div className="box" style={{ display: this.state.display }}>
          {content.map((opt) => (
            <div
              onClick={() => this.setState({ divValue: opt.item, display: 'none' })}
              key={opt.id}
            >
              {opt.item}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Dropdown;

Dropdown.defaultProps = {
  children: 'Titulo Padrão',
};