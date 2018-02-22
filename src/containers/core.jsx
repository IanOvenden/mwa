import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppNav from './app-nav';
import BoardNav from './board-nav';

/**
 * Page wrapper class
 * @extends Component
 * @requires react
 * @requires containers/app-nav
 * @requires containers/board-nav
 */

class Core extends Component {

	constructor( props ) {
		super( props );
	}

	/**
     * Setup the router
     * @returns {Render} render the main page layout with appropriate page. Include application navigation and board navigation if required.
     */

	render() {

		let boardId;

		if ( this.props.params !== undefined ) {
			boardId = this.props.params.boardId;
		} else if ( this.props.boardId > 0 ) {
			boardId = this.props.boardId;
		}

		return (
			<div className="ui ui--subnav" id="ui">
				<AppNav />
				{boardId > 0 &&
					<BoardNav boardId={boardId} />
				}
				{this.props.children}
			</div>
		);
	}
}

export default Core;
