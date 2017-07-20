import { expect } from 'chai';
import { REQUEST_BOARDS, RECEIVE_BOARDS } from '../../../src/constants/action-types';
import boards from '../../../src/reducers/boards';

describe( 'Board reducer', () => {
	it( 'Can request a list of boards - REQUEST_BOARDS', () => {
		let state = { isFetching: false };
		expect(
			boards( state, {type: REQUEST_BOARDS})
		).to.eql({ isFetching: true });
	});

	it( 'Can receive a list of boards - RECEIVE_BOARDS', () => {
		let state = { isFetching: true };
		expect(
			boards( state, {type: RECEIVE_BOARDS})
		).to.contain({ isFetching: false })
		.and.to.include.keys( 'isFetching', 'lastUpdated', 'items' );
	});
});
