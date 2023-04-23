import React from 'react';
import {Link} from "react-router-dom";
import "./Item.css"

function ItemList( {pokemon} ) {  
  // Componente Presentación   
  return (


<div className="pokemon-card">
                   
    <div className='card' >
      <h2 className='titulo'>{pokemon.name}</h2>
      <img src={pokemon.img} alt={pokemon.name}/>
      <div className='divBoton'><Link to={ `/detalle/${pokemon.name}` }>Ver Detalles</Link></div>
    </div>
  
</div>

  );
}

export default ItemList;