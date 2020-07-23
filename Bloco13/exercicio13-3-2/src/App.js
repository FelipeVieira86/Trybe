import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import data from './data';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PokemonInfo from './PokemonInfo';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/">Pokedex</Link>
          <Link to="/about">About</Link>
        </div>

        <Switch>
          <Route exact path="/" render={(props) => <Pokedex {...props} pokemonData={data} />} />
          <Route
            path="/pokemon/:id"
            render={(props) => <PokemonInfo {...props} pokemonData={data} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
