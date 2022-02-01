import './App.css';
import { useEffect, useReducer} from 'react'
import { reducer } from './reducer';
import axios from 'axios';
import Dictionary from './components/Dictionary/Dictionary';
import Header from './components/Header/Header';
import './App.css';
import Search from './components/Search/Search';
import Loading from './components/Loading/Loading';
import NotFound from './components/NotFound/NotFound';
import ScrollToTopBtn from './components/ScrollToTopBtn/ScrollToTopBtn';
import PokeDetail from './components/PokeDetail/PokeDetail';
import Error from './components/Error/Error';
/* ======== Router ======== */
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

const pokemonlUrl = "https://pokeapi.co/api/v2/pokemon/";
const typesUrl = "https://pokeapi.co/api/v2/type/";
const initialState = {
	filterResult: null,
	isLoading: true,
	data: [],
	nextUrl: pokemonlUrl,
	isOver: false,
	isSearching: false,
	isLoadMore: true,
	isError: 1, //1 pokemon not found, 2 data error
	isOpenPokedex: false,
}

function App() {
		
	const [state, dispatch] = useReducer(reducer, initialState);

	const fetchData = async () =>{
		if(!state.filterResult){
			try {
				dispatch({type:"START_LOAD"});
				const res = await axios.get(state.nextUrl);
				const data = res.data;
				const axiosList = data.results.map((item)=>{
					return axios.get(item.url);
				});
				const results = await Promise.all(axiosList)
				let pokeList = results.map((item)=>{
					let typeList = item.data.types.map((type)=>{
						return type.type.name;
					});
					return{
						id: item.data.id,
						name: item.data.name,
						types: typeList,
						img: item.data.sprites.front_default,
					}
				});
				dispatch({type:'FETCH_DATA', payload: {pokemons: pokeList, nextUrl: data.next}});
			} catch (error) {
				console.log(error);
			}
		}
	}
	useEffect(() => {
		fetchData();
		return()=>{
			//do not thing
		}
	}, []);

	const getFilter = (filter)=>{
		dispatch({type:'SEARCHING'});
		setTimeout(async() => {
			if(filter.length === 0){
				dispatch({type:'RESET_POKEMONS'});
			}
			else{
				try {
					const res = await axios.get(pokemonlUrl + filter);
					const data = res.data;
					let typeList = data.types.map((type)=>{
						return type.type.name;
					});
					const pokemon = {
						id: data.id,
						name: data.name,
						types: typeList,
						img: data.sprites.front_default,
					}
				dispatch({type:'FILTERING', payload: pokemon});
				} catch (error) {
					dispatch({type:"NOT_FOUND"});
				}
			}
		}, 1000);
	}
	if(state.isLoading){
		return <Loading className="big"></Loading>
	}
	if(state.isError === 2){
		return <Redirect to="/error/404"></Redirect>
	}
	

	return (
		<div className="app">
			<HashRouter basename='/'>
				{/* <ScrollToTopBtn></ScrollToTopBtn> */}
				<Switch>
					<Route exact path="/">
						<Header></Header>
						<Search getFilter={getFilter}></Search>
						<main>
							<div className="main">
								{state.isSearching ?                     
									<Loading className="small"></Loading> :
									state.isError === 1 ?
									<NotFound></NotFound> :
									<Dictionary
										isOver={state.filterResult ? true : state.isOver} 
										pokeList={state.filterResult ? state.filterResult : state.data} 
										fetchData={fetchData}
										isLoadMore={state.isLoadMore}
									></Dictionary>
								}
							</div>
						</main>
					</Route>
					<Route exact path="/:id">
						<PokeDetail></PokeDetail>
					</Route>
					<Route path="*">
						<Header></Header>
						<Error/>
					</Route>
				</Switch>
				
			</HashRouter>
			
			
		</div>
	);
}

export default App;
