import CardWidget from "../CardWidget/CardWidget";
import './NavBar.css';
import {  Link } from 'react-router-dom';
import { useState } from "react";


function NavBar(){

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    };



    return(
        <header className="head">
        <div className="botoninicio">
            <Link className="navbar-brand" to="/">
                <img src="https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png" alt="Logo de Pokemon"/>
            </Link>
        </div>

        <nav >
                <div className="Navigation">
                
                <button className="menu-btn" onClick={toggleNav}>Menu</button>
                <ul className= {isNavOpen ? 'active' : ''} >
                    <li className="let"><Link className="as"  to="/">Mostrar todos</Link></li>
                    <li className="let"><Link className="as"   to="/category/grass">Grass</Link></li>
                    <li className="let"><Link className="as"   to="/category/electric">Electric</Link></li>
                    <li className="let"><Link className="as"   to="/category/water">Water</Link></li>
                    <li className="let"><Link className="as"   to="/category/fire">Fuego</Link></li>
                    <li className="let"><Link className="as"   to="/carrito">Carrito</Link></li>
                </ul>   
                </div>
        </nav>

        <CardWidget/>
        </header>
    )
}

export default NavBar;