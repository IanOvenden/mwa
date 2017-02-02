/** @module
 * API
*/

import {BOARDS_ENDPOINT} from '../constants/api';

/** Requests a list of boards from the BOARDS_ENDPOINT
 * 	@function apiGetBoards
 * 	@returns {json} Ajax data
*/

export function apiGetBoards() {
	return (
		fetch( BOARDS_ENDPOINT )
	);
}
