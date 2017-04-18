/** @module
 * REDUX_ACTIONS
 * @requires module:REDUX_ACTION_TYPES
*/

import {REQUEST_BOARDS, RECEIVE_BOARDS} from '../constants/action-types';
import {apiGetBoards} from '../api/boards';

/** Action creator for REQUEST_BOARDS
 * 	@function requestBoards
 * 	@returns {Action} REQUEST_BOARDS
*/

export function requestBoards() {
	return {
		type: REQUEST_BOARDS
	};
}

/** Action creator for RECEIVE_BOARDS
 * 	@function receiveBoards
 * 	@param {json} json Update boards state with API response.
 * 	@returns {Action} RECEIVE_BOARDS
*/

export function receiveBoards( json ) {
	return {
		type: RECEIVE_BOARDS,
		boards: json,
		receivedAt: Date.now()
	};
}

/** API call to fetch boards
 * 	@function fetchBoards
 *  @requires module:API~apiGetBoards
 * 	@returns {Promise} API response promise
*/

export function fetchBoards() {
	return dispatch => {
		dispatch( requestBoards() );
		return apiGetBoards()
		.then( response => response.json() )
		.then( json => dispatch( receiveBoards( json ) ) );
	};
}

/** Function to determine whether or not boards list needs updating
 * 	@function shouldFetchBoards
 * 	@param {object} state
 * 	@returns {bool} - flag to determine where data should be refreshed
*/

export function shouldFetchBoards( state ) {
	const boards = state.boards;
	if ( !boards ) {
		return true;
	} else if ( boards.isFetching ) {
		return false;
	} else {
		return true;
	}
}

/** Wrapper function for checking whether or not to refresh boards. Invoking fetchBoards if required.
 * 	@function fetchBoardsIfNeeded
*/

export function fetchBoardsIfNeeded() {
	return ( dispatch, getState ) => {
		if ( shouldFetchBoards( getState() ) ) {
			return dispatch( fetchBoards() );
		}
	};
}
