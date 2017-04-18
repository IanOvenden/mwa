import { fetch } from 'isomorphic-fetch';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureStore from '../../src/store/configure-store';
import * as types from '../../src/constants/action-types';
import * as api from '../../src/constants/api';
import * as tickets from '../../src/actions/tickets';

const middlewares = [ thunk ];
const mockStore = configureMockStore( middlewares );

describe( 'Ticket actions', () => {

	it( 'Will return an action object of type REQUEST_TICKETS', () => {
		expect( tickets.requestTickets().type ).to.eql( types.REQUEST_TICKETS );
	});

	it( 'Will return an action object of type RECEIVE_TICKETS', () => {

		let json = {
			'name': 'stageX',
			'ticketId': 1,
			'stageId': 1,
			'status': 'active',
			'flagged': false,
			'hot': false,
			'soundbite': 'favourite test ticket'
		};
		expect( tickets.receiveTickets().type ).to.eql( types.RECEIVE_TICKETS );
		expect( tickets.receiveTickets() ).to.include.keys( 'type', 'receivedAt', 'tickets', 'boardId', 'stageId' );
		expect( tickets.receiveTickets().receivedAt ).to.eql( Date.now() );
		expect( tickets.receiveTickets( json ).tickets ).to.eql(
			{
				'name': 'stageX',
				'ticketId': 1,
				'stageId': 1,
				'status': 'active',
				'flagged': false,
				'hot': false,
				'soundbite': 'favourite test ticket'
			}
		);
	});

	it( 'test the async action creators with a mock store.', () => {

		//mock up the board endpoint api response
		nock( api.TICKETS_ENDPOINT.replace( '{boardId}', 1 ).replace( '{stageId}', 1 ) )
			.get( '' )
			.reply( 200, {
				isFetchingTickets: false,
				items: {
					'name': 'ticketX',
					'ticketId': 1,
					'stageId': 1,
					'status': 'active',
					'flagged': false,
					'hot': false,
					'soundbite': 'favourite test ticket'
				}
			});

		//what actions are we expected to see called.
		const expectedActions = [
			{ type: types.STAGE_UPDATE_TICKET_LOAD,
				stageId: 1,
				status: true
			},
			{ type: types.RECEIVE_TICKETS,
				boardId: 1,
				stageId: 1,
				tickets: {
					isFetchingTickets: false,
					items: {
						'name': 'ticketX',
						'ticketId': 1,
						'stageId': 1,
						'status': 'active',
						'flagged': false,
						'hot': false,
						'soundbite': 'favourite test ticket'
					}
				},
				receivedAt: Date.now()
			},
			{ type: types.STAGE_UPDATE_TICKET_LOAD,
				stageId: 1,
				status: false
			}
		];

		const store = mockStore();

		return store.dispatch( tickets.fetchTickets( 1, 1 ) )
		.then( () => { // return of async actions

			// ensure receivedAt time stamps are within an appropriate tolerance level.
			expect( store.getActions()[1].receivedAt ).to.be.closeTo( expectedActions[1].receivedAt, 1000 );

			// impossible to accurately compare receivedAt values, since there would be a delay in receiving the reply.
			// deliberately match the values so as to pass the test.
			expectedActions[1].receivedAt = store.getActions()[1].receivedAt;

			expect( store.getActions() ).to.eql( expectedActions );
		});
	});
});
