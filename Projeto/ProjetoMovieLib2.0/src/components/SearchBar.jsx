import React, { Component } from 'react';
import InputText from './inputText';
import InputCB from './InputCB';
import InpSel from './InputSelect';

class SearchBar extends Component {
  render() {
    const {
      onSearchTextChange, searchText, onSelectedGenreChange, selectedGenre,
      onBookmarkedChange, bookmarkedOnly,
    } = this.props;
    const gO = [
      { text: 'Todos', value: '' },
      { text: 'Ação', value: 'action' },
      { text: 'Comédia', value: 'comedy' },
      { text: 'Suspense', value: 'thriller' },
    ];
    return (
      <form className="movie-card-search">
        <InputText LT="Inclui o texto" v={searchText} oCFn={onSearchTextChange} />
        <InputCB LT="Mostrar somente favoritos" c={bookmarkedOnly} oCFn={onBookmarkedChange} />
        <InpSel LT="Filtrar por gênero" v={selectedGenre} oCFn={onSelectedGenreChange} a={gO} />
      </form>
    );
  }
}

export default SearchBar;
