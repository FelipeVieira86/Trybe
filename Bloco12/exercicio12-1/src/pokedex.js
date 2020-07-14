import React from 'react';
import pokemonList from './data';
import Pokemons from './pokemon';
import Button from './Button';

class pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  nextPokemon(arrayLength) {
    console.log(this.state.index);
    arrayLength-1 > this.state.index
      ? this.setState({ index: this.state.index + 1 })
      : this.setState({ index: 0 });
  }

  render() {
    const pokemon = pokemonList.filter(pokemon => pokemon);
    return (
      <div>
        <Pokemons pokemon={pokemon[this.state.index]} />
        <Button onClick={() => this.nextPokemon(pokemonList.length)} label="Proximo Pokemon" />
      </div>
    );
  }
}

export default pokedex;
