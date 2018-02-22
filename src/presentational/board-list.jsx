import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 * Boards class for list of boards.
 * @extends Component
 * @memberOf module:BOARDLIST
 * @requires react
 * @requires react-router
 */

class BoardList extends React.Component {

	/**
     * Render board list element.
     * @returns {Render}
     */

	render() {
		return (
			<nav className="boards-nav" style={{ opacity: this.props.boards.isFetching ? 0.5 : 1 }}>
				{this.props.boards.map( ( board ) =>
					<div className="board-nav-board" key={board.id}><Link to={{ pathname: '/board/' + board.id } }>{board.name}</Link></div>
				)}
			</nav>
		);
	}
}

export default BoardList;
