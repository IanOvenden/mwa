/** @module
 * STAGE
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateStageTitle, wsStageTitle } from '../actions/stages';
import StageView from '../presentational/stage';

/**
 * Stage class
 * @extends Component
 * @memberOf module:STAGE
 * @requires react
 * @requires redux
 * @requires action/stages
 * @requires actions/websocket
 * @requires presentational/stage
 */

export class Stage extends React.Component {

	constructor( props ) {
		super( props );

		this.onTextareaChange = this.onTextareaChange.bind( this );
		this.onBlur = this.onBlur.bind( this );
		this.state = {
			value: this.props.stage.name
		};

	}

	/**
     * Once mounted set the stage title
     * @function componentDidMount
	 * @memberOf module:STAGE
     */

	componentDidMount() {
		this.setState({initVal: this.props.stage.name});
	}

	/**
     * keep the stage title in the state in sync with the form input field
     * @function onTextareaChange
	 * @memberOf module:STAGE
	 * @param {event} event
     */

	onTextareaChange( event ) {
		this.setState({value: event.target.value});
		const { dispatch } = this.props;
		dispatch( updateStageTitle( this.props.stage.stageId, event.target.value ) );
	}

	/**
     * If the input value doesn't match the initial state, dispatch the updateStageTitle.  This will also
	 * emit to the web socket server'
     * @function onBlur
	 * @memberOf module:STAGE
	 * @param {event} event
     */

	onBlur( event ) {
		const initVal = this.state.initVal;
		if ( initVal !== event.target.value ) {
			const { dispatch } = this.props;
			dispatch( wsStageTitle( this.props.stage.stageId, event.target.value ) );
			this.setState({initVal: this.props.stage.name});
		}
	}

	/**
     * Render a stage.
     * @returns {Render}
     */

	render() {
		return (
			<StageView isFetchingTickets={this.props.stage.isFetchingTickets}
				stageId={this.props.stage.stageId}
				boardId={this.props.stage.boardId}
				name={this.props.stage.name}
				onChange={this.onTextareaChange}
				onBlur={this.onBlur} />
		);
	}
}

/**
 * Maps State Items to Props.
 * @function
 * @param {object} state
 * @memberOf module:STAGE
 */

function mapStateToProps( state ) {

	return {
		stageId: state.stages.stageId,
		stageTitle: state.stages.name
	};
}

export default connect( mapStateToProps )( Stage );
