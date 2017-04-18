/** @module
 * PAGES
*/

import React from 'react';
import Stages from '../containers/stages.jsx';

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
				<Stages boardId={this.props.params.boardId}/>
			</div>
		);
	}
}

export default Board;
