import { createContext, useState } from "react";


const cartContext = createContext({ default: "default" });
const userContext = createContext({ default: "default" });

const Provider = cartContext.Provider;
const Provider1 = userContext.Provider;


function CartProvider(props) {

  const [checkOut , setcheckOut] = useState([]);
  const [cart, setCart] = useState([]);

// -----------------------------------funciones cart ----------------------------------------------------

  function modItem(auxId, count){
    const newCart = [...cart]; 
    const index = newCart.findIndex(carta => carta.id == auxId);
    if (index !== -1) {
      newCart[index].count = newCart[index].count + count;
    }
    setCart(newCart);
  }

  function addItem(product, count) {
    const newCart = [...cart]; 
    newCart.push({ ...product, count });
    setCart(newCart);
  }

  function removeItem(item){
    const newCart = [...cart];
    const aux = newCart.filter(item1 => item1.id !== item)
    console.log(newCart[0].id)
    console.log(aux);
    setCart(aux);
  }
 
// -----------------------------------funciones check ----------------------------------------------------

function setCheck (newUser){
  
  setcheckOut([newUser]);
  console.log(newUser)
}
  return (
    <>
    <Provider value={{ cart: cart, addItem  , removeItem , modItem }}>
      <Provider1 value={{ checkOut: checkOut , setCheck}}>
      {props.children}
      </Provider1>
    </Provider>
    
    </>
  );
}

export { userContext , cartContext, CartProvider };
