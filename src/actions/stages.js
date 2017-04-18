/**
 * @memberOf module:REDUX_ACTIONS
*/

import {REQUEST_STAGES, RECEIVE_STAGES, STAGE_UPDATE_TICKET_LOAD} from '../constants/action-types';
import {apiGetStages} from '../api/stages';

/** Action creator for REQUEST_STAGES
 * 	@function requestStages
 *  @memberOf module:REDUX_ACTIONS
 * 	@returns {Action} REQUEST_STAGES
*/

export function requestStages() {
	return {
		type: REQUEST_STAGES
	};
}

/** Action creator for RECEIVE_STAGES
 * 	@function receiveStages
 * 	@param {json} json Update stages state with API response.
 *  @memberOf module:REDUX_ACTIONS
 * 	@returns {Action} RECEIVE_STAGES
*/

export function receiveStages( json ) {
	return {
		type: RECEIVE_STAGES,
		stages: json,
		receivedAt: Date.now()
	};
}

/** API call to fetch stages relating to a board.
 * 	@function fetchStages
 *  @param {number} boardId The parent boardID
 *  @requires module:API~apiGetStages
 *  @memberOf module:REDUX_ACTIONS
 * 	@returns {Promise} API response promise
*/

export function fetchStages( boardId ) {
	return dispatch => {
		dispatch( requestStages() );
		return apiGetStages( boardId )
		.then( response => response.json() )
		.then( json => dispatch( receiveStages( json ) ) );
	};
}
