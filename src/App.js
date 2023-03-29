import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import PokemonList from './components/PokemonList';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />  } />
          <Route path="/detalle/:pokemon" element={ <ItemDetailContainer />  } />
          <Route path="/categoria/:category" element={ <ItemListContainer />  } />
          <Route path="/fire" element={<PokemonList />}/>
          <Route path="/water" element={<PokemonList />}/>
          <Route path="/ground" element={<PokemonList />}/>
          
        </Routes>

      </BrowserRouter>
    </div>
  );
}
