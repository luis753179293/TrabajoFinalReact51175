import React, { useState } from "react";
import Button from "../Button/Button";


export default function ItemCount({ onAddToCart }) {
  const [count, setCount] = useState(0);
  

  function handleAdd() {
    setCount(count + 1);
  }
  function handleSubstract() {
    
    if (count==0){
      return setCount(0);
    }
   else{
      setCount(count-1);
   }
  }
 
  
  

  return (
    <div>
      <Button  onPress={handleSubstract}>
        -
      </Button>
      <span> {count} </span>
      <Button  onPress={handleAdd}>
        +
      </Button>
      <button onClick={() => onAddToCart(count) }>Agregar al carrito</button>
    </div>
  );
}

