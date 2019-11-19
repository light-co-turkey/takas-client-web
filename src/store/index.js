import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
// import config from '../config';

// const composeEnhancers = config.ENV === 'local' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
