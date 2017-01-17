import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, Link, hashHistory} from 'react-router';

import Index from './pages/index.jsx';
import Boards from './pages/boards.jsx';
import Board from './pages/board.jsx';

import styles from './css/app.css';
import Toolbar from './components/toolbar.jsx';

class App extends React.Component {

	constructor( props ) {
		super( props );
	}

	render() {

		return (
			<div>
				<Toolbar/>
				{this.props.children}
			</div>
		);
	}
}

ReactDOM.render( (
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Index}/>
			<Route path='/home' component={Index} />
			<Route path='/board(/:boardId)' component={Board} />
			<Route path='/boards' component={Boards} />
		</Route>
	</Router>
	), document.getElementById( 'app' )
);
