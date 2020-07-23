import React, { Component } from 'react';
import Pokemon from './Pokemon';
import './App.css';

export default class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
    };
    this.nextPokemon = this.nextPokemon.bind();
  }

  nextPokemon = (arrayLength) => {
    const { pokemonIndex } = this.state;
    pokemonIndex < arrayLength - 1
      ? this.setState({ pokemonIndex: pokemonIndex + 1 })
      : this.setState({ pokemonIndex: 0 });
  };

  render() {
    const { pokemonIndex } = this.state;
    const { pokemonData } = this.props;
    return (
      <div className="pokedex">
        <Pokemon pokemon={pokemonData[pokemonIndex]} />
        <button className="pokemon-btn" type="button" onClick={() => this.nextPokemon(pokemonData.length)}>
          NEXT POKE
        </button>
      </div>
    );
  }
}
