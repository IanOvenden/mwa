import React from 'react';
import ReactDOM from 'react-dom';
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
			</div>
		);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById( 'app' )
);
