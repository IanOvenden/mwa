import React from 'react';
import BoardList from './board-list.jsx';

/**
 * Container for toolbar elements
 * @extends Component
 * @requires react
 * @requires BoardListContainer
 */

class Toolbar extends React.Component {

	constructor( props ) {
		super( props );
	}

	/**
     * Render out the toolbar.
     * @returns {Render}
     */

	render() {
		return (
			<div>
				<BoardList/>
			</div>
		);
	};
}

export default Toolbar;
