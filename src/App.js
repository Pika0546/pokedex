import Header from './components/Header/Header';
import './App.css';
import ScrollToTopBtn from './components/ScrollToTopBtn/ScrollToTopBtn';
import PokeDetail from './components/PokeDetail/PokeDetail';
import Home from './Home';
import Error from './components/Error/Error';
/* ======== Router ======== */
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';


function App() {
	return (
		<div className="app">
			<HashRouter basename='/'>
            	<ScrollToTopBtn></ScrollToTopBtn>
				<Header></Header>
				<Switch>
					<Route exact path="/" >
						<Home></Home>
					</Route>
					<Redirect exact from="/reload" to="/" />
					<Route exact path="/:id">
						<PokeDetail></PokeDetail>
					</Route>
					<Route path="*">
						<Error/>
					</Route>
				</Switch>
			</HashRouter>


		</div>
	);
}

export default App;
