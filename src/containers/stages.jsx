/** @module
 * STAGES
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStages } from '../actions/stages';
import Stage from '../containers/stage';

/**
 * Stage class
 * @extends Component
 * @memberOf module:STAGES
 * @requires react
 * @requires react-redux
 * @requires actions/stages
 * @requires container/stages
 */

export class Stages extends Component {

	constructor( props ) {
		super( props );
	}

	/**
     * Once mounted request child stages
     * @function componentDidMount
	 * @memberOf module:STAGES
     */

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch( fetchStages( this.props.boardId ) );
	}

	/**
     * Render out the list of stages.
     * @return {render}
     */

	render() {
		const { stages, isFetchingStages, lastUpdated } = this.props;

		return (
			<div className="stages">
				{isFetchingStages && stages.length === 0 &&
					<h2>Loading...</h2>
				}
				{!isFetchingStages && stages.length === 0 &&
					<h2>Empty.</h2>
				}
				{stages.length > 0 &&
					stages.map( ( stage ) =>
						<Stage boardId={this.props.boardId} key={stage.stageId} stage={stage}/>
					)
				}
			</div>
		);
	}
}

/**
 * propTypes
 * @memberOf module:STAGES
 * @property {array} An array of stages
 * @property {bool} isFetchingStages - Has a request for stages been made and not yet resolved?
 * @property {number} lastUpdated - date value
 * @property {function} dispatch - the redux dispatch function is required.
 */

Stages.propTypes = {
	stages: PropTypes.array.isRequired,
	isFetchingStages: PropTypes.bool.isRequired,
	lastUpdated: PropTypes.number,
	dispatch: PropTypes.func.isRequired
};

/**
 * Maps State Items to Props.
 * @function
 * @param {object} state
 * @memberOf module:STAGES
 */

function mapStateToProps( state ) {

	return {
		stages: state.stages.itemStages,
		isFetchingStages: state.stages.isFetchingStages
	};
}

export default connect( mapStateToProps )( Stages );
