import React from 'react';
import ReactDOM from 'react-dom';

// import {Route, Router, IndexRoute, Link, hashHistory} from 'react-router';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
// import { fetchBoardsIfNeeded } from './actions';
// import reducer from './reducers';

import App from './containers/app';

// import Index from './pages/index';
// import Boards from './pages/boards';
// import Board from './pages/board';

import styles from './_assets/css/app.css';

// const loggerMiddleware = createLogger();

// const store = createStore(
// 	reducer,
// 	applyMiddleware(
// 		thunkMiddleware, // lets us dispatch() functions
// 		loggerMiddleware // neat middleware that logs actions
// 	)
// );

// store.dispatch( fetchBoardsIfNeeded( 'reactjs' ) ).then( () =>
// 	console.log( store.getState() )
// );

ReactDOM.render( (

	// <Provider store={store}>
	// 	<Router history={hashHistory}>
	// 		<Route path='/' component={App} store={store}>
	// 		<IndexRoute component={Index}/>
	// 			<Route path='/home' component={Index} />
	// 			<Route path='/board(/:boardId)' component={Board} />
	// 			<Route path='/boards' component={Boards} />
	// 		</Route>
	// 	</Router>
	// </Provider>
	<App />
	), document.getElementById( 'app' )
);

// function mapStateToProps( state ) {
// 	const { boardlist } = state;
// 	const {
// 		isFetching,
// 		lastUpdated,
// 		items: boards
// 	} = boardlist || {
// 		isFetching: true,
// 		items: []
// 	};

// 	return {
// 		boardlist,
// 		isFetching,
// 		lastUpdated
// 	};
// }

// connect( mapStateToProps )( App );
