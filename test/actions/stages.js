import { fetch } from 'isomorphic-fetch';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureStore from '../../src/store/configure-store';
import * as types from '../../src/constants/action-types';
import * as api from '../../src/constants/api';
import * as stages from '../../src/actions/stages';

const middlewares = [ thunk ];
const mockStore = configureMockStore( middlewares );

describe( 'Stage actions', () => {

	it( 'Will return an action object of type REQUEST_STAGES', () => {
		expect( stages.requestStages().type ).to.eql( types.REQUEST_STAGES );
	});

	it( 'Will return an action object of type RECEIVE_STAGES', () => {
		let json = {
			'name': 'stageX',
			'boardId': 1,
			'id': 1
		};
		expect( stages.receiveStages().type ).to.eql( types.RECEIVE_STAGES );
		expect( stages.receiveStages() ).to.include.keys( 'type', 'receivedAt', 'stages' );
		expect( stages.receiveStages().receivedAt ).to.eql( Date.now() );
		expect( stages.receiveStages( json ).stages ).to.eql(
			{
				'name': 'stageX',
				'boardId': 1,
				'id': 1
			}
		);
	});

	it( 'test the async action creators with a mock store.', () => {

		//mock up the board endpoint api response
		nock( api.STAGES_ENDPOINT.replace( '{boardId}', 1 ) )
			.get( '' )
			.reply( 200, {
				isFetchingStages: false,
				items: {
					name: 'stageX',
					boardId: 1,
					id: 1
				}
			});

		//what actions are we expected to see called.
		const expectedActions = [
			{ type: types.REQUEST_STAGES },
			{ type: types.RECEIVE_STAGES,
				stages: {
					isFetchingStages: false,
					items: {
						name: 'stageX',
						boardId: 1,
						id: 1
					}
				},
				receivedAt: Date.now()
			}
		];

		const store = mockStore();

		return store.dispatch( stages.fetchStages( 1 ) )
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
