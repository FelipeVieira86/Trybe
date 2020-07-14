import React from 'react';

class Pokemon extends React.Component {

  render() {
    const {pokemon} = this.props
    const { value, measurementUnit} = pokemon.averageWeight
    return (
    <section className={`pokecontainer ${pokemon.type}`}>
      <div> 
      <p>{pokemon.name}</p>
      <p>{pokemon.type}</p>
      <p>{`${value} ${measurementUnit}`}</p>
      </div>
      <img src={pokemon.image}/>
    </section>
    );
  }
}

export default Pokemon;
