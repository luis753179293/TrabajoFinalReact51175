import React from "react";
import {BrowserRouter , Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import { CartProvider } from "./context/cartContext";
import CardWidgetContainer from "./components/CardWidget/CardWidgetContainer";
import CheckOut from "./components/ChekOut/CheckOut"
import Footer from "./components/Footer/Footer";



export default function App() {
  return (
    <div className="App">

    <CartProvider>  
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />  } />
          <Route path="/detalle/:pokemon" element={ <ItemDetailContainer />  } />
          <Route path="/category/:categoryid" element={<ItemListContainer />}/>
          <Route path="/carrito" element={<CardWidgetContainer/>}/>
          <Route path="/detalle/*" element={<h1>Error 404: Page not found</h1>} />
          <Route path="/checkout" element={<CheckOut/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  
    </div>
  );
}
