/** @module
 * PAGES
*/

import React from 'react';

/**
 * Board details page class.
 * @extends Component
 * @memberOf module:PAGES
 * @requires react
 */

class Board extends React.Component {

	constructor( props ) {
		super( props );
	}

	/**
     * Render board details page.
     * @returns {Render}
     */

	render() {

		return (
			<div>
				<h1>Board Page  - {this.props.params.boardId}</h1>
			</div>
		);
	}
}

export default Board;
