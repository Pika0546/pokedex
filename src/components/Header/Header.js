import React from 'react';  
import './Header.scss';
import pokemonBrand from '../../assets/pokemon.png';
// import { Link } from 'react-router-dom';
const Header = () => {
    console.log("ha")
    return (
        <a href='/'>
            <div className="header">
                <img 
                    src={pokemonBrand} 
                    alt="Pokemon"
                ></img>
            </div>
        </a>
    )
}

export default Header
