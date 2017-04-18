import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import configureStore from '../store/configure-store';
import Core from './core';
import Index from '../pages/index';
import Boards from '../pages/boards';
import Board from '../pages/board';

/** @constant
*	@type {Object}
*	@description the application store
*	@default
*	@private
*	@memberOf module:STORE
*/

const store = configureStore( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

/**
 * The root application class
 * @extends Component
 * @requires react
 * @requires react-redux
 * @requires react-router
 * @requires module:STORE
 * @requires Async
 */

class Snap extends Component {

	/**
     * Setup the router
     * @returns {Render} render the correct page
     */
	render() {
		return (
			<Provider store={store}>
				<Router history={hashHistory}>
					<Route path='/' component={Core}>
						<IndexRoute component={Index}/>
							<Route path='/home' component={Index} />
							<Route path='/board(/:boardId)' component={Board} />
							<Route path='/boards' component={Boards} />
					</Route>
				</Router>
			</Provider>
		);
	}
}

export default Snap;
