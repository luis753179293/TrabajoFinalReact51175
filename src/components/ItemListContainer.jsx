import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';


//--------------------------------------------------------//

function ItemListContainer() {

  
    const [pokemons, setPokemons] = useState([]);
  
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
        .then(response => response.json())
        .then(data => setPokemons(data.results))
        .catch(error => console.error(error));
    }, []);
  


    
  return (
    <div>
      <h1>Pokedex</h1>
        <ul>
          {pokemons.map(pokemon => (
            <li key={pokemon.name}>
              <Link to={`/pokemons/${pokemon.name}`}>{pokemon.name}</Link>
              <ItemList items={pokemons} />
            </li>
          ))}
        </ul>
    </div>
  )
}


export default ItemListContainer;
