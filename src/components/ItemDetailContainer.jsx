import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';



function ItemDetailContainer() {
  // comp contenedor
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const params = useParams();
  const pokemonName = params.pokemon;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => response.json())
      .then(data => {
        
        setPokemonDetails(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [pokemonName]);

  if (! pokemonDetails) {
    return <p>Cargando detalles del Pokemon...</p>;
  }

  return (
    <ItemDetail pokemonDetails={pokemonDetails} />
  );
}

export default ItemDetailContainer;