import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, Link, hashHistory} from 'react-router';

import Index from './pages/index.jsx';
import Boards from './pages/boards.jsx';

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
				<Link to='/boards'>Board</Link>
			</div>
		);
	}
}

ReactDOM.render( (
	<Router history={hashHistory}>
		<Route path='/' component={App} />
		<Route path='/home' component={Index} />
		<Route path='/boards' component={Boards} />
	</Router>
	), document.getElementById( 'app' )
);
