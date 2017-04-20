import React, { Component, PropTypes } from 'react';
import Tickets from '../containers/tickets.jsx';

/**
 * Stage view class for list of boards.
 * @extends Component
 * @memberOf module:STAGES
 * @requires react
 * @requires containers/tickets
 */

class StageView extends React.Component {

	/**
     * Render a stage.
     * @returns {Render}
     */

	render() {
		return (
			<div key={this.props.stage.id} className="stage">
				<h2>{this.props.stage.name}</h2>
				<Tickets stageId={this.props.stage.stageId} boardId={this.props.boardId} isFetchingTickets={this.props.stage.isFetchingTickets} />
			</div>
		);
	}
}

export default StageView;
