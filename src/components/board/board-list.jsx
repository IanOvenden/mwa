import React from 'react';
import {getBoards} from '../../utilities/api';

class BoardList extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			boards: []
		};

		this.handleClick = this.handleClick.bind( this );
	}

	componentDidMount() {
		getBoards().then( boards => {
			this.setState({
				boards: boards
			});
		});
	}

	handleClick() {
		let newBoard = {
			id: this.state.boards.length + 1,
			name: 'gas'
		};
		this.setState( () => ({
			boards: this.state.boards.concat( [newBoard] )
		}) );
	}

	render() {
		let boards = this.state.boards.map( board => {
			return <li key={board.id}>{board.name}</li>;
		});
		return (
			<ul>
				{boards}
				<li>
					<button onClick={this.handleClick}>
						update
					</button>
				</li>
			</ul>
		);
	}
}

export default BoardList;
