import React from 'react';
import Item from './Item';
function ItemList(props) {
  // Componente Presentación


    
  
    

  return (
    <ul> 
       {props.items.map((item) => 
        <Item  key={item.name} pokemon={item} />
      ) }
    </ul>);
  
}

export default ItemList;
