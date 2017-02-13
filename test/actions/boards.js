import { fetch } from 'isomorphic-fetch';
import { expect } from 'chai';
import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureStore from '../../src/store/configure-store';
import * as types from '../../src/constants/action-types';
import * as api from '../../src/constants/api';
import * as boards from '../../src/actions/board';

const middlewares = [ thunk ];
const mockStore = configureMockStore( middlewares );

describe( 'Board actions', () => {
	it( 'Will return an action object of type REQUEST_BOARDS', () => {
		expect( boards.requestBoards().type ).to.eql( types.REQUEST_BOARDS );
	});

	it( 'Will return an action object of type RECEIVE_BOARDS', () => {
		let json = {
			'name': 'boardX',
			'id': 1
		};
		expect( boards.receiveBoards().type ).to.eql( types.RECEIVE_BOARDS );
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
		// const store = configureStore();
		// const dispatch = sinon.spy( store, 'dispatch' );
		// const fn = boards.fetchBoardsIfNeeded();

		// fn( dispatch, store.getState );

		// expect( dispatch.called ).to.be.true;

		//-- NEW

		nock( api.BOARDS_ENDPOINT )
			.get( '' )
			.reply( 200, {
				//boards: {
				isFetching: false,
				items: {
					name: 'boardX',
					id: 1
				}

				//}
			});

		const expectedActions = [
			{ type: types.REQUEST_BOARDS },
			{ type: types.RECEIVE_BOARDS,
				boards: {
					isFetching: false,
					items: {
						name: 'boardX',
						id: 1
					}
				},
				receivedAt: Date.now()
			}
		];

		const store = mockStore();

		return store.dispatch( boards.fetchBoards() )
		.then( () => { // return of async actions
			expect( store.getActions() ).to.eql( expectedActions );
		});
	});

	// it( 'retrieve boards.', () => {
	// 	const store = configureStore();
	// 	const dispatch = sinon.spy( store, 'dispatch' );
	// 	const fn = boards.fetchBoardsIfNeeded();

	// 	fn( dispatch, store.getState );

	// 	expect( dispatch.called ).to.be.true;
	// });

});
