import React from 'react';
import ReactDOM from 'react-dom';
import styles from './css/app.css';
import Toolbar from './components/toolbar.jsx';

class App extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			boards: [
				{
					id: 0,
					name: 'snow'
				},
				{
					id: 1,
					name: 'skate'
				}
			]
		};
	}

	render() {

		return (
			<div>
				<Toolbar boards={this.state.boards}/>
			</div>
		);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById( 'app' )
);
