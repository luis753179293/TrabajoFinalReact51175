import React, { useState, useEffect } from 'react';
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import { getItems , getItemsByCategory } from "../../services/firestore";
import "./ItemListContainer.css"


//--------------------------------------------------------//

function ItemListContainer() {

  
const [products, setProducts] = useState([]);
const { categoryid } = useParams();

useEffect(() => {
  if (categoryid === undefined) {
    getItems().then((respuesta) => {
      setProducts(respuesta);
    });
  } else {
    getItemsByCategory(categoryid).then((respuesta) =>
      setProducts(respuesta)
    );
  }
}, [categoryid]);

    
return (
    <div>
      <h1 className='pokedex'>Pokedex</h1>
        <ul>
          {products.map(products => (
            <li key={products.name}>

          <Item  key={products.name} pokemon={products} /> 
          <h2 className='price'>$ {products.price}</h2>
          <br/>
          <br/>
            </li>
          ))}
        </ul>
      
    </div>
  )
}


export default ItemListContainer;
