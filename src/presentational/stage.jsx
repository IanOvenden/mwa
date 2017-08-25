import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tickets from '../containers/tickets.jsx';

/**
 * Stage view class for each stage.
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
			<div key={this.props.stageId} className="stage">
				<label htmlFor={'stageTitle' + this.props.stageId} className="form-label">{this.props.name}</label>
				<textarea id={'stageTitle' + this.props.stageId} className="stage-title" value={this.props.name} onChange={this.props.onChange} onBlur={this.props.onBlur}/>
				<Tickets stageId={this.props.stageId} boardId={this.props.boardId} isFetchingTickets={this.props.isFetchingTickets} />
			</div>
		);
	}
}

export default StageView;
