import React from 'react';

function ItemDetail( {pokemonDetails} ){
  return(
    <div>
    <h2>{pokemonDetails.name}</h2>
    <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
    <p>Peso: {pokemonDetails.weight} kg</p>
    <p>Altura: {pokemonDetails.height} m</p>
    <h3>Habilidades:</h3>
    <ul>
      {pokemonDetails.abilities.map((ability) => (
        <li key={ability.ability.name}>{ability.ability.name}</li>
      ))}
    </ul>
  </div>
  )
}
export default ItemDetail;
