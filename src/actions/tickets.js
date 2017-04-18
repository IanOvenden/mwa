/**
 * @memberOf module:REDUX_ACTIONS
*/

import {REQUEST_TICKETS, RECEIVE_TICKETS, STAGE_UPDATE_TICKET_LOAD} from '../constants/action-types';
import {updateTicketFetchingStatus} from '../actions/stages';
import {apiGetTickets} from '../api/tickets';

/** Action creator for REQUEST_TICKETS
 * 	@function requestTickets
 *  @memberOf module:REDUX_ACTIONS
 * 	@returns {Action} REQUEST_TICKETS
*/

export function requestTickets() {
	return {
		type: REQUEST_TICKETS
	};
}

/** Action creator for RECEIVE_TICKETS
 * 	@function receiveTickets
 * 	@param {json} json Update ticket state with API response.
 * 	@param {number} boardId The boardID the ticket is related to.
 *  @param {number} stageId The stageID board is currently assigned to.
 *  @memberOf module:REDUX_ACTIONS
 * 	@returns {Action} RECEIVE_TICKETS
*/

export function receiveTickets( json, boardId, stageId ) {
	return {
		type: RECEIVE_TICKETS,
		tickets: json,
		boardId: boardId,
		stageId: stageId,
		receivedAt: Date.now()
	};
}

/** Composition function for dispatching receiveTickets and updating the isFetchingTickets flag on appropriate stage.
 *  wrapped in a single promise.
 * 	@function ticketsReieved
 * 	@param {json} json API response.
 * 	@param {number} boardId The boardID the ticket is related to.
 *  @param {number} stageId The stageID board is currently assigned to.
 *  @memberOf module:REDUX_ACTIONS
*/

function ticketsReieved( json, boardId, stageId ) {
	let status = false;
	return dispatch => Promise.all( [
		dispatch( receiveTickets( json, boardId, stageId ) ),
		dispatch({ type: 'STAGE_UPDATE_TICKET_LOAD', stageId, status })
	] );
}

/** API call to fetch tickets relating to the given stage and board.
 *  Also dispatches STAGE_UPDATE_TICKET_LOAD to update isFetchingTickets flag on appropriate stage.
 * 	@function fetchTickets
 * 	@param {number} boardId The boardID the ticket is related to.
 *  @param {number} stageId The stageID board is currently assigned to.
 *  @requires module:API~apiGetTickets
 *  @memberOf module:REDUX_ACTIONS
 * 	@returns {Promise} API response promise
*/

export function fetchTickets( boardId, stageId ) {
	let status = true;
	return dispatch => {
		dispatch({ type: 'STAGE_UPDATE_TICKET_LOAD', stageId, status });
		return apiGetTickets( boardId, stageId )
		.then( response => response.json() )
		.then( json => dispatch( ticketsReieved( json, boardId, stageId ) ) );
	};
}
