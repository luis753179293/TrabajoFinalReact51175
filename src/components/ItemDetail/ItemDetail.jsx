import React from 'react';
import './ItemDetail.css';

function ItemDetail( {pokemonDetails} ){

 



  return(
    
      <div className="pokemon-card">
        <img src={pokemonDetails.img} alt={pokemonDetails.name}/>
        <h2>{pokemonDetails.name}</h2>
        <ul>
          <li>Peso: {pokemonDetails.peso} kg</li>
          <li>Altura: {pokemonDetails.altura} m</li>
        </ul>
        <h3>Habilidades:</h3>
        <ul>
            <li key={pokemonDetails.habilidades}>{pokemonDetails.habilidades}</li>
      </ul>

      </div> 
  )
}


export default ItemDetail;
