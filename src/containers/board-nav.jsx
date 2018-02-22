import React from 'react';

/**
 * Container for board details and navigation elements
 * @extends Component
 * @requires react
 */

export class BoardNav extends React.Component {

	constructor( props ) {
		super( props );
	}

	/**
     * Render out the board sub navigation.
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
