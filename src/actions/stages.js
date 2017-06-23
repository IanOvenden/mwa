/**
 * @memberOf module:REDUX_ACTIONS
*/

import {REQUEST_STAGES, RECEIVE_STAGES, STAGE_UPDATE_TICKET_LOAD, UPDATE_STAGE_TITLE} from '../constants/action-types';
import * as config from '../constants/websocket';
import {apiGetStages} from '../api/stages';
const { messageTypes } = config;

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

/** Update the title of a stage.
 * 	@function updateStageTitle
 *  @param {number} stageId The ID of the stage to be updated
 *  @memberOf module:REDUX_ACTIONS
 * 	@returns {Action} UPDATE_STAGE_TITLE
*/

export function updateStageTitle( stageId, stageTitle ) {
	return {
		type: UPDATE_STAGE_TITLE,
		payload: {
			stageId: stageId,
			stageTitle: stageTitle
		}
	};
}

/** Update the title of a stage and broadcast the change to the web socket.
 * 	@function wsStageTitle
 *  @param {number} stageId The ID of the stage to be updated
 *  @memberOf module:REDUX_ACTIONS
 * 	@returns {Action} UPDATE_STAGE_TITLE
*/

export function wsStageTitle( stageId, stageTitle ) {
	return ( dispatch, getState, {emit}) => {
		dispatch({
			type: UPDATE_STAGE_TITLE,
			payload: {
				stageId: stageId,
				stageTitle: stageTitle
			}
		}),
		emit( messageTypes.UPDATE_STAGE_TITLE, { stageId: stageId, stageTitle: stageTitle });
	};
}
