/** @module
 * TICKETS
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTickets } from '../actions/tickets';
import Ticket from '../presentational/ticket';
import { DragonDrop } from '../modules/dragon-drop';

/**
 * Ticket class
 * @extends Component
 * @memberOf module:TICKETS
 * @requires react
 * @requires react-redux
 * @requires actions/tickets
 * @requires presentational/ticket
 */

let dragonDrop = new DragonDrop( 'drop-zone', 'dragon-over', 'dragon-chosen', 'move', '.stage_list_container' );

class Tickets extends Component {

	constructor( props ) {
		super( props );

		this.dragonStart = dragonDrop.dragonStart.bind( this );
		this.dragonEnd = dragonDrop.dragonEnd.bind( this );
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
				items.push( <Ticket key={ticket.ticketId} ticketId={ticket.ticketId} name={ticket.name} dragonLeave={dragonDrop.dragonLeave} dragonStart={dragonDrop.dragonStart} dragonOver={dragonDrop.dragonOver} dragonEnter={dragonDrop.dragonEnter} dragonEnd={dragonDrop.dragonEnd} dragonDrop={dragonDrop.dragonDrop} /> );
			}
		}.bind( this ) );

		// add empty li to foot of each stage
		items.push( <li key={'stg' + this.props.stageId} id={'stg' + this.props.stageId} className='stage_list_container dragon-item--empty dragon-pointer--disable' onDragOver={dragonDrop.dragonOver} onDragEnter={dragonDrop.dragonEnter} onDragLeave={dragonDrop.dragonLeave} onDrop={dragonDrop.dragonDrop}></li> );

		isFetchingTickets = this.props.isFetchingTickets;

		return (
            <ul className="stage_list">
				{isFetchingTickets && items.length === 0 &&
					<li className="empty">
						<p>Loading...</p>
					</li>
				}
				{!isFetchingTickets && items.length === 0 &&
					<li className="empty">
						<p>Empty.</p>
					</li>
				}
				{items.length > 0 &&
					items
				}
            </ul>
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
