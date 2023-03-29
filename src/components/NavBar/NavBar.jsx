import CardWidget from "../CardWidget/CardWidget";
import './NavBar.css';
import {  Link } from 'react-router-dom';


function NavBar(){
    return(
        <header>
        <div className="botoninicio">
            <Link className="botoninicio" to="/"><h2 className="logo">POKEDEX</h2></Link>
        </div>
        
        <nav >
                <ul className="navbar">
                    <li ><Link  to="/fire">Por categoria</Link></li>
                    <li ><Link  to="/">Mostrar todos</Link></li>
                    
                    
                </ul>
        </nav>
        

        <CardWidget/>
        </header>
    )
}

export default NavBar;