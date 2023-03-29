import React, { useEffect, useState } from 'react';

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then(response => response.json())
      .then(data => {
        const pokemonPromises = data.results.map(result => fetch(result.url).then(response => response.json()));
        Promise.all(pokemonPromises).then(pokemonData => setPokemons(pokemonData));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const pokemonByNature = {
    "grass": [],
    "fire": [],
    "water": [],
    "electric": [],
    // Agrega los tipos que necesites
  };

  pokemons.forEach(pokemon => {
    pokemon.types.forEach(type => {
      const typeName = type.type.name;
      if (Object.keys(pokemonByNature).includes(typeName)) {
        pokemonByNature[typeName].push(pokemon);
      }
    });
  });

  return (
    <div>
      <h2>Grass Pokemons</h2>
      <ul>
        {pokemonByNature["grass"].map(pokemon => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
      <h2>Fire Pokemons</h2>
      <ul>
        {pokemonByNature["fire"].map(pokemon => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
      <h2>Water Pokemons</h2>
      <ul>
        {pokemonByNature["water"].map(pokemon => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
      <h2>Electric Pokemons</h2>
      <ul>
        {pokemonByNature["electric"].map(pokemon => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
      // Agrega más secciones según las naturalezas que hayas definido
    </div>
  );
}

export default PokemonList;