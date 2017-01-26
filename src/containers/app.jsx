import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configure-store';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Async from './async';

import Index from '../pages/index';
import Boards from '../pages/boards';
import Board from '../pages/board';

const store = configureStore( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={hashHistory}>
					<Route path='/' component={Async}>
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
