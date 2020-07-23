import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Pokemon extends Component {
  render() {
    const {
      id,
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
    } = this.props.pokemon;

    return (
      <div className="pokemon-container">
        <div className="pokemon-data">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              {value}
              {measurementUnit}
            </p>
          </div>
          <img src={image} alt={id} />
        </div>
        <Link to={`/pokemon/${id}`}>MORE INFO</Link>
      </div>
    );
  }
}
