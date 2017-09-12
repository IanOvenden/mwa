import React from 'react';
import PropTypes from 'prop-types';

/** @constant
*	@type {Object}
*	@description a single ticket component
*	@default
*	@memberOf module:TICKETS
*	@requires react
*/

const Ticket = ({ ticketId, name }) => (
	<li key={ticketId} className="ticket">
		<p>{name}</p>
	</li>
);

/**
 * propTypes
 * @memberOf module:TICKETS
 * @property {number} ticketId - The ticket unique identifier
 * @property {string} name - Ticket name
 */

Ticket.propTypes = {
	ticketId: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired
};

export default Ticket;
