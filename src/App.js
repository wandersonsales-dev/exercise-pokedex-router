import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import MoreInfo from './components/MoreInfo';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1> Pokedex </h1>
        <Route exact path="/" render={() => <Pokedex pokemons={pokemons} />} />
        <Route exact path="/:id" render={(props) => <MoreInfo {...props} pokemons={pokemons} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;