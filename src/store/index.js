import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

const state = {
	boardItem: {},
	board: {}
};

export default createStore(
	reducer,
	state,
	applyMiddleware(
		promise,
		thunk,
		// logger
	)
);
