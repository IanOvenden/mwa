import {TICKETS_ENDPOINT} from '../constants/api';

/** Requests a list of boards from the TICKETS_ENDPOINT
 *  @memberOf module:API
 * 	@function apiGetBoards
 *  @param {number} boardId The parent board for our tickets
 *  @param {number} stageId The stage our tickets are associated with.
 * 	@returns {json} Ajax data
*/

export function apiGetTickets( boardId, stageId ) {
	var endpoint = TICKETS_ENDPOINT.replace( '{boardId}', boardId ).replace( '{stageId}', stageId );
	return (
		fetch( endpoint )
	);
}
