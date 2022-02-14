import React from 'react';  
import './Header.scss';
import pokemonBrand from '../../assets/pokemon.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="header">
            <Link to="/reload">
                <img 
                    src={pokemonBrand} 
                    alt="Pokemon"
                ></img>
            </Link>
        </div>
    )
}

export default Header
