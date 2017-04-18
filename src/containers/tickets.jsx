/** @module
 * TICKETS
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchTickets } from '../actions/tickets';
import Ticket from '../presentational/ticket';

/**
 * Ticket class
 * @extends Component
 * @memberOf module:TICKETS
 * @requires react
 * @requires react-redux
 * @requires actions/tickets
 * @requires presentational/ticket
 */

class Tickets extends Component {

	constructor( props ) {
		super( props );
	}

	/**
     * Once mounted request child tickets currently associated with the stage
     * @function componentDidMount
	 * @memberOf module:TICKETS
     */

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch( fetchTickets( this.props.boardId, this.props.stageId ) );
	}

	/**
     * Render out the list of Tickets.
     * @return {render}
     */

	render() {
		const { tickets, stages, lastUpdated } = this.props;

		let isFetchingTickets,
			items = [];

		tickets.map( function( ticket ) {
			if ( this.props.stageId === ticket.stageId ) {
				items.push( <Ticket key={ticket.ticketId} ticketId={ticket.ticketId} name={ticket.name}/> );
			}
		}.bind( this ) );

		isFetchingTickets = this.props.isFetchingTickets;

		return (
            <div>
				{isFetchingTickets && items.length === 0 &&
					<h2>Loading...</h2>
				}
				{!isFetchingTickets && items.length === 0 &&
					<h2>Empty.</h2>
				}
				{items.length > 0 &&
					items
				}
            </div>
		);
	}
}

/**
 * propTypes
 * @memberOf module:TICKETS
 * @property {array} An array of tickets
 * @property {bool} isFetchingTickets - Has a request for tickets been made and not yet resolved?
 * @property {number} lastUpdated - date value
 * @property {function} dispatch - the redux dispatch function is required.
 */

Tickets.propTypes = {
	tickets: PropTypes.array.isRequired,
	isFetchingTickets: PropTypes.bool.isRequired,
	lastUpdated: PropTypes.number,
	dispatch: PropTypes.func.isRequired
};

/**
 * Maps State Items to Props.
 * @function
 * @param {object} state
 * @memberOf module:TICKETS
 */

function mapStateToProps( state ) {
	return {
		tickets: state.tickets.itemTickets,
		stages: state.stages.itemStages
	};
}

export default connect( mapStateToProps )( Tickets );
