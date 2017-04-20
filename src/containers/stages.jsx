/** @module
 * STAGES
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchStages } from '../actions/stages';
import StageView from '../presentational/stage';

/**
 * Stage class
 * @extends Component
 * @memberOf module:STAGES
 * @requires react
 * @requires react-redux
 * @requires actions/stages
 * @requires presentational/stages
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
				<h2>Stages</h2>
				{isFetchingStages && stages.length === 0 &&
					<h2>Loading...</h2>
				}
				{!isFetchingStages && stages.length === 0 &&
					<h2>Empty.</h2>
				}
				{stages.length > 0 &&
					<div className="stages">
						{stages.map( ( stage ) =>
							<StageView boardId={this.props.boardId} key={stage.stageId} stage={stage}/>
						)}
					</div>
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
