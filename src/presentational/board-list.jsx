import React from 'react';
import {Link} from 'react-router';

/**
 * Boards class for list of boards.
 * @extends Component
 * @memberOf module:BOARDLIST
 * @requires react
 * @requires react-router
 */

class Boards extends React.Component {

	/**
     * Render board list element.
     * @returns {Render}
     */

	render() {
		return (
			<ul>
				{this.props.boards.map( ( board ) =>
					<li key={board.id}><Link to={{ pathname: '/board/' + board.id } }>{board.name}</Link></li>
				)}
			</ul>
		);
	}
}

export default Boards;
