import React from 'react'
import './PokeDetail.scss';
import Badge from '../Badge/Badge';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Loading from '../Loading/Loading';
import Header from '../Header/Header';
import axios from 'axios';
import { Redirect  } from "react-router-dom";
const PokeDetail = () => {
    let {id} = useParams();
    const [pokemon, setPokemon] = useState([null]);
    const [status, setStatus] = useState("loading");
    
    const renderDis = () => {
        let badge = []
        // types.forEach((type)=>{
        //     type.dis.forEach((dis, index)=>{
        //         badge.push (<Badge key={index} type={dis}></Badge>);
        //     });
        // });
       return badge;
    }

    const renderAd = () => {
        let badge = []
        // types.forEach((type)=>{
        //     type.ad.forEach((ad, index)=>{
        //         badge.push (<Badge key={index} type={ad}></Badge>);
        //     });
        // });
        return badge;
    }

    const renderType = () =>{
        // return types.map((type, index)=>{
        //     return <Badge key={index} type={type.name}></Badge>
        // });
        return "";
    }

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/" + id)
        .then(data=>{
            console.log(data.data);
            setStatus("done");
        })
        .catch(error=>{
            setStatus("error");
            console.log(error);
        })
        return()=>{
			//do not thing
		}
    }, [])

    if(status === "error"){
        return <Redirect to="/error/404"></Redirect>
    }
    else if (status === "loading"){
        return <Loading className="big"></Loading>
    }
    else{
        return (
            <>
                <Header></Header>
                <div className="pokedex">
                    <div className="pokedex__screen">
                        <div className="left">
                            <div className="id">
                                <h1>
                                    {pokemon.id}
                                </h1>
                            </div>
                            <div className="name">
                                <h1>
                                    {pokemon.name}
                                </h1>
                            </div>
                            <div className="type">
                                {renderType()}
                            </div>
                        </div>
                        <div className="mid">
                            <img src={pokemon.img} alt={pokemon.name}></img>
                        </div>
                        <div className="right">
                            <div className="type-relate">
                                <h3>
                                    Advantage
                                </h3>
                                <div className="type-relate__list">
                                    {renderDis()}
                                </div>
                            </div>
                            <div className="type-relate">
                                <h3>
                                    Disadvantage
                                </h3>
                                <div className="type-relate__list">
                                    {renderAd()}
                                </div>
                            </div>
                        </div>
                        <button>
                            &times;
                        </button>
                    </div>
                </div> 
            </>
           
        )
    }
}

export default PokeDetail
