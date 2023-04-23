import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemCount from '../ItemCount/ItemCount';

import { getSingleItem } from "../../services/firestore";

import { useContext } from "react";
import { cartContext } from "../../context/cartContext"
import "./ItemDetailContainer.css"


function ItemDetailContainer() {

  const [pokemonDetails, setPokemonDetails] = useState(null);
  const { pokemon }  = useParams();
  const [ cargando, setCargando ] = useState(false);
  const { cart , addItem , modItem } = useContext(cartContext);

  useEffect(() => {
    getSingleItem(pokemon).then((respuesta) => {
      setPokemonDetails(respuesta);
    });
    setCargando (true);
  }, [pokemon]);

  if (pokemonDetails==null){
    return <h1>Cargando...</h1>
  }

  function onAddToCart(count) {
    const aux = cart.find((item)=> item.id == pokemonDetails.id)
    if (aux){ 
      modItem(aux.id ,count);
    }
    else{
      console.log("agreado al carrito!");
      addItem(pokemonDetails, count);
    }
  }

  return (
  <div className='quej'>
  <div className='carta' >
    <ItemDetail pokemonDetails={pokemonDetails} />
  </div>
  <div className='contador'> 
    <ItemCount onAddToCart={onAddToCart}/>
  </div>
  </div>
  );
}

export default ItemDetailContainer;