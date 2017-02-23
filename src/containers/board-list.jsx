/** @module
 * BOARDLIST
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchBoardsIfNeeded } from '../actions/board';
import BoardList from '../presentational/board-list.jsx';

/**
 * Board list rendering class
 * @extends Component
 * @memberOf module:BOARDLIST
 * @requires react
 * @requires react-redux
 * @requires module:REDUX_ACTIONS
 */

export class BoardListContainer extends React.Component {

	constructor( props ) {
		super( props );
	}

	/**
     * Once mounted determine whether we need to fetch the boards
     * @returns {Render}
     */

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch( fetchBoardsIfNeeded() );
	}

	/**
     * Render out the list of boards.
     * @return {render}
     */

	render() {
		const { boards, isFetching, lastUpdated } = this.props;
		return (
			<nav className="boardlist">
				{isFetching && boards.length === 0 &&
					<h2>Loading...</h2>
				}
				{!isFetching && boards.length === 0 &&
					<h2>Empty.</h2>
				}
				{boards.length > 0 &&
					<BoardList boards={boards} />
				}
			</nav>
		);
	}
}

BoardListContainer.propTypes = {
	boards: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	lastUpdated: PropTypes.number,
	dispatch: PropTypes.func.isRequired
};

/**
 * Maps State Items to Props.
 * @function
 * @param {object} state
 * @memberOf module:BOARDLIST
 */

function mapStateToProps( state ) {
	return {
		boards: state.boards.items,
		isFetching: state.boards.isFetching
	};
}

export default connect( mapStateToProps )( BoardListContainer );
