import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['acordar', 'comer', 'dormir']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {compromissos.map(compromisso => task(compromisso))}
      </header>
    </div>
  );
}

export default App;
