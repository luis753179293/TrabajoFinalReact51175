import React from 'react';
import {Link} from "react-router-dom";

function ItemList( {pokemon} ) {  
  // Componente Presentación   
  return (
    <div key={pokemon.name} className='card'>                
    <div >
      <h5>{pokemon.name}</h5>
      <Link to={ `/detalle/${pokemon.name}` }>Ver Detalles</Link>
    </div>
  </div>
  );
}

export default ItemList;