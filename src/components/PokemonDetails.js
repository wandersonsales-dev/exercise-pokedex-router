import React from 'react';
import './PokemonDetails.css';

function PokemonDetails(props) {
  const idPokemon = parseInt(props.match.params.id);
  const pokemon = props.pokemons.find((el) => el.id === idPokemon);
  const { name, type, averageWeight, image, summary, foundAt } = pokemon;
  const { location, map } = foundAt[0];
  return (
    <div className="pokemonDetails">
      <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>
          Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
        </p>
        <p>
          Sumary: {summary}
        </p>
        <p>
          Found At: {location}
          Map: <img src={map} alt="teste"/>
        </p>
      </div>
      <img src={image} alt={`${name} sprite`} />
    </div>
  );
}

export default PokemonDetails;