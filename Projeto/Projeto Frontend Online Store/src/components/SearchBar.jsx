import React, { Component } from 'react';
import searchIcon from '../images/search-icon.png';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '', value: '' };
    this.checkEnterKey = this.checkEnterKey.bind(this);
    this.clear = this.clear.bind(this);
  }

  clear() {
    this.setState({ value: '' });
  }

  checkEnterKey({ key }) {
    const { search } = this.state;
    const { onClick } = this.props;
    if (key === 'Enter') {
      onClick(search);
      this.clear();
    }
  }

  render() {
    const { onClick } = this.props;
    const { search, value } = this.state;
    return (
      <div className="search-bar">
        <input
          value={value}
          onKeyPress={this.checkEnterKey}
          onChange={({ target }) => this.setState({ search: target.value, value: target.value })}
          placeholder="Digite algum termo de pesquisa ou escolha uma categoria"
          className="search-input"
          data-testid="query-input"
          type="text"
        />
        <input
          src={searchIcon}
          type="image"
          onClick={() => {
            onClick(search);
            this.clear();
          }}
          className="search-icon"
          alt="search icon"
          data-testid="query-button"
        />
      </div>
    );
  }
}
