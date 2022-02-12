import React from 'react';  
import './Header.scss';
import pokemonBrand from '../../assets/pokemon.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="header">
            <a href='/pokedex'>
                <img 
                    src={pokemonBrand} 
                    alt="Pokemon"
                ></img>
            </a>
        </div>
    )
}

export default Header
