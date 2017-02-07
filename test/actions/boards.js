import { expect } from 'chai';
import { REQUEST_BOARDS, RECEIVE_BOARDS } from '../../src/constants/action-types';
import * as boards from '../../src/actions/board';

describe( 'Board actions', () => {
	it( 'Will return an action object of type REQUEST_BOARDS', () => {
		expect( boards.requestBoards().type ).to.eql( REQUEST_BOARDS );
	});

	it( 'Will return an action object of type RECEIVE_BOARDS', () => {
		let json = {
			'name': 'boardX',
			'id': 1
		};
		expect( boards.receiveBoards().type ).to.eql( RECEIVE_BOARDS );
		expect( boards.receiveBoards() ).to.include.keys( 'type', 'receivedAt', 'boards' );
		expect( boards.receiveBoards( json ).boards ).to.eql(
			{
				'name': 'boardX',
				'id': 1
			}
		);
	});
});
