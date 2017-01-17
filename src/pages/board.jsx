import React from 'react';

class Board extends React.Component {

	constructor( props ) {
		super( props );
	}

	render() {

		return (
			<div>
				<h1>Board Page  - {this.props.params.boardId}</h1>
			</div>
		);
	}
}

export default Board;
