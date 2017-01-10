import React from 'react';
import ReactDOM from 'react-dom';
import styles from './css/app.css';

class Board extends React.Component {
	render() {
		return <li>{this.props.name}</li>;
	}
}

class BoardList extends React.Component {

	render() {
		var Console = console;
		Console.log( this.props.boards );
		let boards = this.props.boards.map( board => {
			return <Board key={board.id} name={board.name}/>;
		});
		return (
			<ul>
				{boards}
			</ul>
		);
	}
}

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

		var Console = console,
			lifeMeaning = 42,
			arr = () => lifeMeaning;

		Console.log( arr() );

		let foobar = 'Reactoooorrrr!!!';

		return (
			<section>
				<p> Hello {foobar}</p>
				<BoardList boards={this.state.boards}/>
			</section>
		);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById( 'app' )
);
