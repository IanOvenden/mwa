import React from 'react';
import BoardListContainer from './board-list.jsx';

/**
 * Container for Application logo and main navigation elements
 * @extends Component
 * @requires react
 * @requires BoardListContainer
 */

export class AppNav extends React.Component {

	constructor( props ) {
		super( props );
	}

	/**
     * Render out the logo and main application navigation.
     * @returns {Render}
     */

	boardNavToggle( e ) {
		e.preventDefault();

		let ui = document.getElementById( 'ui' );
		if ( ui.classList.contains( 'ui--subnav--active' ) ) {
			document.getElementById( 'ui' ).classList.remove( 'ui--subnav--active' );
		} else {
			document.getElementById( 'ui' ).classList.add( 'ui--subnav--active' );
		}
	}

	render() {
		return (
			<header className="navbar">
				<div className="logo">
					<a href="/">
						<img src="assets/images/snap-logo.svg" alt="SNAP! ToDo Application"/>
					</a>
				</div>
				<button onClick={this.boardNavToggle} className="nav-link">Boards</button>
				<BoardListContainer />
			</header>
		);
	};
}

export default AppNav;
