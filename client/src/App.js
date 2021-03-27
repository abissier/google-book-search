import React, { Component } from 'react';
import Header from './Component/Header/Header';
import Jumbotron from './Component/Jumbotron/Jumbotron';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/Saved';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Header />
					<Jumbotron />
					<Switch>
						<Route exact path={[ '/', '/Search' ]}>
							<Search />
						</Route>
						<Route exact path="/Saved">
							<Saved />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
