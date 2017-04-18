import {STAGES_ENDPOINT} from '../constants/api';

/** Requests a list of stages from the STAGES_ENDPOINT
 *  @memberOf module:API
 * 	@function apiGetStages
 *  @param {number} boardId The parent board for our stages
 * 	@returns {json} Ajax data
*/

export function apiGetStages( boardId ) {
	var endpoint = STAGES_ENDPOINT.replace( '{boardId}', boardId );
	return (
		fetch( endpoint )
	);
}
