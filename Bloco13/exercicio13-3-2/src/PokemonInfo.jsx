import React, { Component } from 'react';

export default class PokemonInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: '',
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { pokemonData } = this.props;
    const pokemon = pokemonData.find((pokemon) => pokemon.id === Number(id));
    this.setState({ pokemon: pokemon });
  }

  render() {
    const {
      id,
      name,
      type,
      image,
      summary,
      averageWeight,
      foundAt,
    } = this.state.pokemon;
    return averageWeight ? (
      <div className="pokemon-info">
        <div className="pokemon-data">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              {averageWeight.value} {averageWeight.measurementUnit}
            </p>
          </div>
          <img src={image} alt={id} />
        </div>
        <div>SUMMARY</div>
        <div>{summary}</div>
        <div>Game Location of {name}</div>
        <div className="maps-container">
          {foundAt.map((location, key) => (
            <div key={key} className="poke-map">
              {location.location}
              <img src={location.map} alt="mapinha" />
            </div>
          ))}
        </div>
      </div>) : (<div>Loading...</div>)
  }
}
