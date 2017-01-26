import { REQUEST_BOARDS, RECEIVE_BOARDS } from '../constants/action-types';

export default function boards( state = {
	isFetching: false,
	items: []
}, action ) {
	switch ( action.type ) {
	case REQUEST_BOARDS:
		return Object.assign({}, state, {
			isFetching: true
		});
	case RECEIVE_BOARDS:
		return Object.assign({}, state, {
			isFetching: false,
			items: action.boards,
			lastUpdated: action.receivedAt
		});
	default:
		return state;
	}
}
