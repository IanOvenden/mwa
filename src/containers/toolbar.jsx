import React from 'react';
import BoardListContainer from './board-list.jsx';

/**
 * Container for toolbar elements
 * @extends Component
 * @requires react
 * @requires BoardListContainer
 */

export class Toolbar extends React.Component {

	constructor( props ) {
		super( props );
	}

	/**
     * Render out the toolbar.
     * @returns {Render}
     */

	render() {
		return (
			<header>
				<BoardListContainer />
			</header>
		);
	};
}

export default Toolbar;
