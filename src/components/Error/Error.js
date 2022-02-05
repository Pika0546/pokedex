import React from 'react'
import './Error.scss';
import pokeball from '../../assets/pokeball404.png';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className="error">
            <div className="error__404">
                <span>4</span>
                <img src={pokeball} alt='O'></img>
                <span>4</span>
            </div>
            <div className='error__content'>
                <h2>Uh-oh!</h2>
                <p>You look lost on your journey!</p>
            </div>
            <div className='error__btn'>
                <a href='/pokedex'>
                    <button className="btn">
                        <i className="fas fa-long-arrow-alt-left"></i>Go back home
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Error