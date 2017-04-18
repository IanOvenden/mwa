import React, { PropTypes } from 'react';

/** @constant
*	@type {Object}
*	@description a single ticket component
*	@default
*	@memberOf module:TICKETS
*	@requires react
*/

const Ticket = ({ ticketId, name }) => (
	<article key={ticketId} className="ticket">
		<p>{name}</p>
	</article>
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
