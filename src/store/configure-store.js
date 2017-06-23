/** @module
 * STORE
 * @requires redux
 * @requires redux-thunk
 * @requires redux-logger
 * @requires reducer
 * @requires actions/websocket
*/

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers';
import { init as websocketInit, emit } from '../actions/websocket';

const loggerMiddleware = createLogger();
const middleware = [ thunkMiddleware.withExtraArgument({ emit }) ];

/** Store creation funciton
 * 	@function configureStore
 * 	@param {object} preloadedState State used to create the store
 * 	@returns {object} store
*/

export default function configureStore( preloadedState ) {
	const store = createStore(
		reducer,
		preloadedState,
		applyMiddleware(
			...middleware,
			loggerMiddleware
		)
	);
	websocketInit( store );
	return store;
}
