import {REQUEST_BOARDS, RECEIVE_BOARDS} from '../constants/action-types';
import {apiGetBoards} from '../api/board';

export function requestBoards() {
	return {
		type: REQUEST_BOARDS
	};
}

export function receiveBoards( json ) {
	return {
		type: RECEIVE_BOARDS,
		boards: json,
		receivedAt: Date.now()
	};
}

function fetchBoards() {
	return dispatch => {
		dispatch( requestBoards() );
		return apiGetBoards()
		.then( response => response.json() )
		.then( json => dispatch( receiveBoards( json ) ) );
	};
}

function shouldFetchBoards( state ) {
	const boards = state.boards;
	if ( !boards ) {
		return true;
	} else if ( boards.isFetching ) {
		return false;
	} else {
		return true;
	}
}

export function fetchBoardsIfNeeded() {
	return ( dispatch, getState ) => {
		if ( shouldFetchBoards( getState() ) ) {
			return dispatch( fetchBoards() );
		}
	};
}
