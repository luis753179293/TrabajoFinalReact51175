import './CardWidget.css'
import { useContext, useEffect, useState } from 'react';
import  Button  from "../Button/Button"

import { Link } from 'react-router-dom';


import { cartContext } from "../../context/cartContext"



function CardWidgetContainer(){
      
const { removeItem } = useContext(cartContext);
const { cart } = useContext(cartContext);


 const calculateTotal = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.count;
    });
    return total;
  };

  

return (

    <>
    <h1 className='nom'>Carrito</h1>

    <table className="cartList">
      <thead className="cartList_head">
        <tr className="cartList_row">
          <th>Miniatura</th>
          <th>Titulo</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Remover</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.id} className="cartList_row">
            <td>
              <img height={50} src={item.img} alt={item.title} />
            </td>
            <td>{item.name}</td>
            <td>$ {item.price}</td>
            <td>{item.count}</td>
            <td>
              <Button color="#c63224" 
              onPress={(()=> removeItem(item.id))} 
              >
                X
              </Button>
            </td>
            <th>$ {item.count * item.price}</th>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="cartList_detail">
      <h4>El total de tu compra es de $ {calculateTotal()}</h4>
    </div>
    
    <Link className='finCompra' to="/checkout"><Button>Finalizar Compra</Button></Link>
    
  </>

    )


}


export default CardWidgetContainer; 
