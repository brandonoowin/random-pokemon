import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Sprite from './Sprite'
import PokemonButton from './PokemonButton'
// import { Alert } from 'reactstrap' <---- not needed

function randomNum() {
  const number = Math.floor(Math.random() * 1000);
  return number;
}

function App() {
  const [pokemon, setPokemon] = useState();

  const fetchRandomPokemon = () => {
    const pokemonId = randomNum();
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
    axios
      .get(URL)
      .then(res => {
        setPokemon(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  return (
    <div className="section">
      <div className="container">
      <h1>Random Pokemon</h1>
      {pokemon && (
        <div className="pixel">
          <Sprite url={pokemon.sprites.front_default} name={pokemon.name}/>
          <PokemonButton name={pokemon.name} onClick={fetchRandomPokemon}/>
          {/* <Alert onClick={fetchRandomPokemon}>{pokemon.name}</Alert> <----- ignore, was practicing using reactstrap css*/} 
        </div>
      )}
      </div>
    </div>
  );
}

export default App;
