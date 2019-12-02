import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import shortid from 'shortid';
import Navbar from './Navbar';
//import '../../publicStyles.css';
// routes config
import routes from '../../routes';

class Layout extends Component {
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

		// Auth
		// const filteredRoutes = routes
		// 	.map(route => ({
		// 		...route,
		// 		path: `/r/:currentRestaurant${route.path}`,
		// 		path: `/${route.path}`,
		// 		name: route.name
		// 	}));

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
					<Redirect from='/' to='/landing' />
				</Switch>
			</main>
		);
		return (
			<div style={appScale} className="app">
				{/* <Navbar/>
				<div className="app-body">{main()}</div> */}
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	// acceptAgreement: restaurantid => dispatch(loginActions.acceptAgreement(restaurantid)),
	// getAgreementContent: restaurantid => dispatch(loginActions.getAgreementContent(restaurantid)),
});

const mapStateToProps = state => ({
	// roles: state.login.roles,
	// switchLoading: state.login.switchLoading,
	// switchError: state.login.switchError,
	// redirectPath: state.login.redirectPath,
	// currentRestaurantId: state.login.currentRestaurant.id,
	// currentRestaurant: state.login.currentRestaurant,
	// acceptAgreementLoading: state.login.acceptAgreementLoading,
	// agreement: state.login.agreement,
	// getAgreementLoading: state.login.getAgreementLoading,
	// getAgreementError: state.login.getAgreementError,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Layout);
// export default connect(mapStateToProps, mapDispatchToProps)(withNamespaces('translation')(DefaultLayout));
