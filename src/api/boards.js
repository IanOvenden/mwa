import {BOARDS_ENDPOINT} from '../constants/api';

/** Requests a list of boards from the BOARDS_ENDPOINT
 *  @memberOf module:API
 * 	@function apiGetBoards
 * 	@returns {json} Ajax data
*/

export function apiGetBoards() {
	return (
		fetch( BOARDS_ENDPOINT )
	);
}
