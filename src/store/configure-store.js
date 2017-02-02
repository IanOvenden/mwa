/** @module
 * STORE
 * @requires redux
 * @requires redux-thunk
 * @requires redux-logger
*/

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers';

const loggerMiddleware = createLogger();

/** Store creation funciton
 * 	@function configureStore
 * 	@param {object} preloadedState State used to create the store
 * 	@returns {object} store
*/

export default function configureStore( preloadedState ) {
	return createStore(
		reducer,
		preloadedState,
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
	);
}
