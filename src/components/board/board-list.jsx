import React from 'react';

class BoardList extends React.Component {

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

		this.handleClick = this.handleClick.bind( this );
	}

	handleClick() {
		let newBoard = {
			id: this.state.boards.length + 1,
			name: 'gas'
		};
		this.setState( () => ({
			boards: this.state.boards.concat( [newBoard] )
		}) );
		console.log( this.state.boards[0].name );
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
