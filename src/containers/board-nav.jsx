import React from 'react';

/**
 * Container for toolbar elements
 * @extends Component
 * @requires react
 * @requires BoardListContainer
 */

export class BoardNav extends React.Component {

	constructor( props ) {
		super( props );
	}

	/**
     * Render out the toolbar.
     * @returns {Render}
     */

	render() {
		return (
			<nav className="navbar navbar--subnav">
				<h1>Board Title - {this.props.boardId}</h1>
			</nav>
		);
	};
}

export default BoardNav;
