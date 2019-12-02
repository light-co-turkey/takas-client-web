import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, } from 'react-router-dom';
import shortid from 'shortid';
import { Provider, connect } from 'react-redux';
import './App.scss';
import store from "./shared/store";

// Views
import CreateProduct from './views/CreateProduct';
import Home from './views/Home';
// Components
import PrivateRoute from "./components/PrivateRoute";
import Navbar from './components/layout/Navbar';
import Landing from "./components/layout/Landing";
import Login from './components/Login';

import routes from './routes';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	render() {
		const appWidth = this.state.width;
		const appHeight = this.state.height;
		const appScale = {
			paddingLeft: '5%',
			paddingRight: '5%',
			width: appWidth,
			height: appHeight
		};
		const main = () => (
			<main className="main">
				<Switch>
					{/* Auth */}
					{routes.map(route =>
						route.component ? (
							<Route
								key={shortid.generate()}
								path={route.path}
								exact={route.exact}
								name={route.name}
								render={propsParam => <route.component {...propsParam} />}
							/>
						) : null
					)}
				</Switch>
			</main>
		);
		return (
			<Provider store={store}>
				<Router>
				<div style={appScale} className="app">
					<Navbar/>
					<div className="app-body">{main()}</div>
					<Switch>
						<PrivateRoute exact path="/home" component={Home} />
					</Switch>
				 </div>
				</Router>
			</Provider>
		);
	}
}

const mapStateToProps = state => ({
	login: state.login,
	// profile: state.login.profile,
	// restaurants: state.login.restaurants,
	// tokenCode: state.login.tokenCode,
	// isLoginPending: state.login.isLoginPending,
});

const mapDispatchToProps = dispatch => ({
	// initSession: () => dispatch(actions.checkSession()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));