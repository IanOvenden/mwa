import React from 'react';
import BoardListContainer from './board-list.jsx';

/**
 * Container for toolbar elements
 * @extends Component
 * @requires react
 * @requires BoardListContainer
 */

export class AppNav extends React.Component {

	constructor( props ) {
		super( props );
	}

	/**
     * Render out the toolbar.
     * @returns {Render}
     */

	render() {
		return (
			<header className="navbar">
				<div className="logo">
					<a href="/">
						<img src="assets/images/snap-logo.svg" alt="SNAP! ToDo Application"/>
					</a>
				</div>
				<BoardListContainer />
			</header>
		);
	};
}

export default AppNav;
