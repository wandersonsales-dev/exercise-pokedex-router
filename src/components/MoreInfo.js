import React from 'react';
import './MoreInfo.css';

function MoreInfo(props) {
  const idPokemon = parseInt(props.match.params.id);
  const pokemon = props.pokemons.find((el) => el.id === idPokemon);
  const { name, type, averageWeight, image } = pokemon;
  return (
    <div className="moreinfo">
      <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>
          Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
        </p>
      </div>
      <img src={image} alt={`${name} sprite`} />
    </div>
  );
}

export default MoreInfo;