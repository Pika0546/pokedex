import React from 'react';  
import './Header.scss';
import pokemonBrand from '../../assets/pokemon.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Link to="/">
            <div className="header">
                <img 
                    src={pokemonBrand} 
                    alt="Pokemon"
                ></img>
            </div>
        </Link>
    )
}

export default Header
