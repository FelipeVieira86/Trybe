import React from 'react';
import pokemonList from './data';
import Pokemons from './pokemon';
import Button from './Button';

class pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 , pokemonType: 'Psychic'};
  }

  nextPokemon(arrayLength) {
    arrayLength - 1 > this.state.index
      ? this.setState({ index: this.state.index + 1 })
      : this.setState({ index: 0 });
  }

  filterType() {
    return pokemonList.filter(pokemon => pokemon.type === this.state.pokemonType)
  }

  setType(type) {
    this.setState({pokemonType: type})
  }

  render() {
    const pokemonsList = this.filterType(this.state.pokemonType)
    const pokemon = pokemonsList[this.state.index];
    return (
      <div>
        <Pokemons pokemon={pokemon} />
        <Button onClick={() => this.nextPokemon(pokemonsList.length)} label="Proximo Pokemon" />
        <Button onClick={() => this.setType('Fire')} label="Fire" />
        <Button onClick={() => this.setType('Psychic')} label="Psychic" />
      </div>
    );
  }
}

export default pokedex;
