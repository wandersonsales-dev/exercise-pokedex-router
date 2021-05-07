import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import PokemonDetails from './components/PokemonDetails';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1> Pokedex </h1>
        <Route exact path="/" render={() => <Pokedex pokemons={pokemons} />} />
        <Route exact path="/:id" render={(props) => <PokemonDetails {...props} pokemons={pokemons} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;