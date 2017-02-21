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
				{this.props.children}
			</div>
		);
	}
}

export default Async;
