import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchBoardsIfNeeded } from '../actions/board';
import BoardList from '../presentational/board-list.jsx';

class BoardListContainer extends React.Component {

	constructor( props ) {
		super( props );
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch( fetchBoardsIfNeeded() );
	}

	render() {
		const { boards, isFetching, lastUpdated } = this.props;
		return (
			<div>
				<div>
				<p>
					{lastUpdated &&
						<span>
							Last updated at {new Date( lastUpdated ).toLocaleTimeString()}.
							{' '}
						</span>
					}
					{!isFetching &&
						<a href='#'
							onClick={this.handleRefreshClick}>
							Refresh
						</a>
					}
				</p>
				{isFetching && boards.length === 0 &&
					<h2>Loading...</h2>
				}
				{!isFetching && boards.length === 0 &&
					<h2>Empty.</h2>
				}
				{boards.length > 0 &&
					<div style={{ opacity: isFetching ? 0.5 : 1 }}>
						<BoardList boards={boards} />
					</div>
				}
				</div>
			</div>
		);
	}
}

BoardListContainer.propTypes = {
	boards: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	lastUpdated: PropTypes.number,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps( state ) {
	return {
		boards: state.boards.items,
		isFetching: state.boards.isFetching
	};
}

export default connect( mapStateToProps )( BoardListContainer );
