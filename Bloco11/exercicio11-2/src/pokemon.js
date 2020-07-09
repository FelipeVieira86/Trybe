import React from 'react';

class pokemon extends React.Component {
  render() {
    return (
    <section className={`pokecontainer ${this.props.type}`}>
      <div> 
      <p>{this.props.name}</p>
      <p>{this.props.type}</p>
      <p>{`${this.props.weight} ${this.props.unit}`}</p>
      </div>
      <img src={this.props.image}/>
    </section>
    );
  }
}

export default pokemon;
