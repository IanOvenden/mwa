import {BOARDS_ENDPOINT} from '../constants/api';

export function apiGetBoards() {
	return (
		fetch( BOARDS_ENDPOINT )
	);
}
