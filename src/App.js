import React, { Component } from 'react';
import { Route, Switch, withRouter, } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

// Containers
import DefaultLayout from './containers/DefaultLayout';
// Pages
import Page404 from './components/Page404';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" name="Home" component={DefaultLayout} />
				<Route path="/404" name="Page 404" component={Page404} />
			</Switch>
		);
	}
}

const mapStateToProps = state => ({
	// profile: state.login.profile,
	// restaurants: state.login.restaurants,
	// tokenCode: state.login.tokenCode,
	// isLoginPending: state.login.isLoginPending,
});

const mapDispatchToProps = dispatch => ({
	// initSession: () => dispatch(actions.checkSession()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));