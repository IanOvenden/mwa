import { fetch } from 'isomorphic-fetch';
import { expect } from 'chai';
import sinon from 'sinon';
import configureStore from '../../src/store/configure-store';
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
		expect( boards.receiveBoards().receivedAt ).to.eql( Date.now() );
		expect( boards.receiveBoards( json ).boards ).to.eql(
			{
				'name': 'boardX',
				'id': 1
			}
		);
	});

	it( 'will determine whether or not it is appropriate to fetch boards', () => {
		let state = {
			boards: {
				isFetching: false,
				items: {
					name: 'boardX',
					id: 1
				}
			}
		};

		expect( boards.shouldFetchBoards( [] ) ).to.eql( true );
		expect( boards.shouldFetchBoards( state ) ).to.eql( true );
		expect( boards.shouldFetchBoards( Object.assign( state, {boards: {isFetching: true}}) ) ).to.eql( false );
	});

	it( 'will check whether or not boards should be updated.', () => {
		const store = configureStore();
		const dispatch = sinon.spy( store, 'dispatch' );
		const fn = boards.fetchBoardsIfNeeded();

		fn( dispatch, store.getState );

		expect( dispatch.called ).to.be.true;
	});
});
