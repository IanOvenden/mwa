import React from 'react';
import ReactDOM from 'react-dom';

class BoardList extends React.Component {

	constructor( props ) {
		super( props );
	}

	render() {
		let boards = this.props.boards.map( board => {
			return <li key={board.id}>{board.name}</li>;
		});
		return (
			<ul>
				{boards}
			</ul>
		);
	}
}

export default BoardList;
