import React from 'react';
import PropTypes from 'prop-types';

/** @constant
*	@type {Object}
*	@description a single ticket component
*	@default
*	@memberOf module:TICKETS
*	@requires react
*/

class Ticket extends React.Component {

	render() {
		return (
			<li key={this.props.ticketId} id={this.props.ticketId} className="stage_list_container dragon-pointer--disable" draggable="true" onDragOver={this.props.dragonOver} onDragEnter={this.props.dragonEnter} onDragLeave={this.props.dragonLeave} onDragStart={this.props.dragonStart} onDragEnd={this.props.dragonEnd} onDrop={this.props.dragonDrop}>
				<div className="stage_list_ticket">
					<p>{this.props.name}</p>
					{this.props.ticketId === 2 &&
						<p>Test Content</p>
					}
					{this.props.ticketId === 3 &&
						<div>
							<p>Test Content</p>
							<p>Test Content 2</p>
							<p>Test Content 3</p>
						</div>
					}
				</div>
			</li>
		);
	}
};

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
