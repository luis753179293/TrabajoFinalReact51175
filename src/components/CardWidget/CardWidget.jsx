import './CardWidget.css'
import { Link } from 'react-router-dom';

import { cartContext } from "../../context/cartContext"
import { useContext } from 'react';

function CardWidget(){

    const { cart } = useContext(cartContext);

    const getTotalCount = () =>  {
    if (cart.length === 0) {
      return 0;
    }

    return cart.reduce((total, item) => total + item.count, 0);
  };
    
    

      

    return(
        <>
        <Link to="/carrito"><img className='imglogo' src="https://i.imgur.com/tnRq8f4.png" alt="Logo de Pokemon"/><span className='num'>  {getTotalCount()}</span></Link>
        </> 
    )

    
}

    

export default CardWidget;