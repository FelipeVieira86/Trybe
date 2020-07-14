import React from 'react';
import pokemonList from './data';
import Pokemons from './pokemon';
import Button from './Button';

class pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0, pokemonType: 'All' };
  }

  nextPokemon(arrayLength) {
    arrayLength - 1 > this.state.index
      ? this.setState({ index: this.state.index + 1 })
      : this.setState({ index: 0 });
  }

  filterType(type) {
    return pokemonList.filter(pokemon => {
      if (type === 'All') return true;
      return pokemon.type === type;
    });
  }

  setType(type) {
    this.setState({ pokemonType: type, index: 0 });
  }

  pokemonTypesArray = () =>
    pokemonList.reduce(
      (unique, { type }) => (unique.includes(type) ? unique : [...unique, type]),
      [],
    );

  

  render() {
    const pokemonsList = this.filterType(this.state.pokemonType);
    const pokemonTypes = this.pokemonTypesArray();
    return (
      <div>
        <Pokemons pokemon={pokemonsList[this.state.index]} />
        <Button
          disabled={this.filterType(this.state.pokemonType).length <= 1}
          onClick={() => this.nextPokemon(pokemonsList.length)}
          label="Proximo Pokemon"
        />
        <Button onClick={() => this.setType('All')} label="All" />
        {pokemonTypes.map(type => (
          <Button onClick={() => this.setType(type)} label={type} />
        ))}
      </div>
    );
  }
}

export default pokedex;
