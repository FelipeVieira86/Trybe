import React from 'react';
import pokemonList from './data';
import Pokemons from './pokemon'

class pokedex extends React.Component {
  render() {
   return pokemonList.map(pokemon => (
      <Pokemons
        name={pokemon.name}
        type={pokemon.type}
        image={pokemon.image}
        weight={pokemon.averageWeight.value}
        unit={pokemon.averageWeight.measurementUnit}
      />
    ));
  }
}

export default pokedex;
