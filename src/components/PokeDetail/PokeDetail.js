import React from 'react'
import './PokeDetail.scss';
import Badge from '../Badge/Badge';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Loading from '../Loading/Loading';
import Header from '../Header/Header';
import axios from 'axios';
import Card from '../Card/Card';
import { Redirect  } from "react-router-dom";
const PokeDetail = () => {
    let {id} = useParams();
    const [pokemon, setPokemon] = useState({
        name: "",
        id: 0,
        dis: [],
        ad: [],
        types: [],
        imgDefault: "",
        imgFemale: "",
        height: 0,
        weight: 0 
    });
    const [status, setStatus] = useState("loading");
    const [gender, setGender] = useState(0);
    const [chain, setChain] = useState([]);
    const renderDis = (diss) => {
        let badge = []
        diss.forEach((dis, index2)=>{
            badge.push (<Badge key={index2} type={dis}></Badge>);
        });
       return badge;
    }

    const renderAd = (ads) => {
        let badge = []
        ads.forEach((ad, index2)=>{
            badge.push (<Badge key={index2} type={ad}></Badge>);
        });
        return badge;
    }

    const renderType = (types) =>{
        return types.map((type, index)=>{
            return <Badge key={index} type={type.name}></Badge>
        });
    }

    const genderChange = (e) =>{
        setGender(parseInt(e.target.value));
    }

    const convertSize = s => s/10;

    const getPokemon = async (name)  =>{
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + name);
        const data = {
            id:res.data.id,
            name:res.data.name,
            img: res.data.sprites.front_default,
            types: res.data.types.map((type)=>{
                return type.type.name;
            })
        };
        return data;
    }

    useEffect(()=>{
        setStatus("loading");
        async function fetchData(){
            try {
                const data = await axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
                const n = data.data.types.length;
                const speciesUrl = data.data.species.url;
                const speciesData = await axios.get(speciesUrl);
                const evolutionChainData = await axios.get(speciesData.data.evolution_chain.url);
                const lv1 = await getPokemon(evolutionChainData.data.chain.species.name);
                const lv2Array = evolutionChainData.data.chain.evolves_to;
                lv1.lv2 = [];
                lv2Array.forEach( async (item) => {
                    const lv2Pokemon = await getPokemon(item.species.name);
                    const lv3Array = item.evolves_to;
                    lv2Pokemon.lv3 = [];
                    lv3Array.forEach(async (poke) => {
                        const lv3Pokemon = await getPokemon(poke.species.name);
                        lv2Pokemon.lv3.push(lv3Pokemon);
                    });
                    lv1.lv2.push(lv2Pokemon);
                });
                const types = [];
                let dis = [];
                let ad = [];
                for(let i = 0 ; i < n ; i++){
                    const typeData = await axios.get(data.data.types[i].type.url);
                    typeData.data.damage_relations.double_damage_from.forEach(type=>{
                        dis.push(type.name);
                    });
                    typeData.data.damage_relations.no_damage_to.forEach(type=>{
                        dis.push(type.name);
                    });
                    typeData.data.damage_relations.double_damage_to.forEach(type=>{
                        ad.push(type.name);
                    });
                    typeData.data.damage_relations.no_damage_from.forEach(type=>{
                        ad.push(type.name);
                    });
                    types.push(data.data.types[i].type);
                }
                for(let i = dis.length -1 ; i >= 0; i--){
                    for(let j = ad.length - 1; j >= 0; j--){
                        if(dis[i] === ad[j]){
                            dis.splice(i,1);
                            ad.splice(j,1);
                        }
                    }
                }
                for(let i = dis.length -1 ; i >= 0; i--){
                   for(let j = 0 ; j < types.length; j++){
                       if(dis[i] === types[j].name){
                            dis.splice(i,1);
                       }
                   }
                }
                for(let j = ad.length - 1; j >= 0; j--){
                    for(let i = 0 ; i < types.length; i++){
                        if(ad[j] === types[i].name){
                            ad.splice(j,1);
                        }
                    }
                }
                setPokemon({
                    name: data.data.name,
                    id: data.data.id,
                    types: types,
                    dis:  Array.from(new Set(dis)),
                    ad:  Array.from(new Set(ad)),
                    imgDefault: data.data.sprites.front_default,
                    imgFemale: data.data.sprites.front_female,
                    height: data.data.height,
                    weight: data.data.weight 
                });
                setChain(lv1);
                setStatus("done");
            } catch (error) {
                console.log(error);
                setStatus("error");
            }
        }
        fetchData();
        return()=>{
			//do not thing
		}
    }, [id]);

    const renderChain = () =>{
        let id = 0;
        const result = [];
        result.push(<Card key={id++} pokemon={chain}></Card>);
        if(chain.lv2.length <= 0){
            return result;
        }
        result.push(<i key={id++} className="fas fa-chevron-right"></i>);
        const lv2Array = [];
        const lv3Array = [];
        chain.lv2.forEach(pokelv2=>{
            lv2Array.push((<Card key={id++} pokemon={pokelv2}></Card>));
            if( pokelv2.lv3.length > 0){
                pokelv2.lv3.forEach(pokeLv3=>{
                    lv3Array.push(<Card key={id++} pokemon={pokeLv3}></Card>);
                });
            }
        });
        result.push((
            <div key={id++} className='chain__col'>
                {lv2Array}
            </div>)
        );
        if(lv3Array.length > 0){
            result.push(<i key={id++} className="fas fa-chevron-right"></i>);
            result.push((
                <div key={id++} className='chain__col'>
                    {lv3Array}
                </div>)
            );
        }
        
        return result;  
    }
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
                <main>
                    <div className='main' style={{padding: 0}}>
                        <div className='pokedetail'>
                            <div className='pokedetail__name'>
                                <h1>{pokemon.name}<span>#{pokemon.id}</span></h1>
                                {pokemon.imgFemale ? 
                                    <select  
                                        defaultValue={0}
                                        onChange={genderChange}
                                    >
                                        <option value={0}>Male</option>
                                        <option value={1}>Female</option>
                                    </select> : ""
                                }
                            </div>
                            <div className='pokedetail__info'>
                                <div className='avatar'>
                                    <img 
                                        alt={pokemon.name}
                                        src={gender ? pokemon.imgFemale : pokemon.imgDefault}
                                    />
                                </div>
                                <div className='info'>
                                    <div className='info__size'>
                                        <h3>Weight: <span>{convertSize(pokemon.weight)}kg</span></h3>
                                        <h3>Height: <span>{convertSize(pokemon.height)}m</span></h3>
                                    </div>
                                    <div className='info__type'>
                                        <h3>Type: </h3>  {renderType(pokemon.types)}
                                    </div>
                                    <div className='info__type'>
                                        <h3>Advantage: </h3> {renderAd(pokemon.ad)}
                                    </div>
                                    <div className='info__type'>
                                        <h3>Disavantage: </h3> {renderDis(pokemon.dis)}
                                    </div>
                                </div>
                            </div>
                            <h1 className='chain-header'>Evolutions</h1>
                            <div className='chain'>
                                
                                {renderChain()}
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default PokeDetail
