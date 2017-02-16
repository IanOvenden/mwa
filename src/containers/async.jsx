import React, { Component, PropTypes } from 'react';
import Toolbar from './toolbar';

/**
 * Page wrapper class
 * @extends Component
 * @requires react
 * @requires containers/toolbar
 */

class Async extends Component {

	constructor( props ) {
		super( props );
	}

	/**
     * Setup the router
     * @returns {Render} render the main page layout with appropriate page
     */

	render() {
		return (
			<div className="main">
				<Toolbar />
				<div className="page">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Async;
