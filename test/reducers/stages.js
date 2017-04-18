import { expect } from 'chai';
import { REQUEST_STAGES, RECEIVE_STAGES } from '../../src/constants/action-types';
import stages from '../../src/reducers/stages';

describe( 'Stage reducer', () => {
	it( 'Can request a list of stages - REQUEST_STAGES', () => {
		let state = { isFetchingStages: false };
		expect(
			stages( state, {type: REQUEST_STAGES})
		).to.eql({ isFetchingStages: true });
	});

	it( 'Can receive a list of stages - RECEIVE_STAGES', () => {
		let state = { isFetchingStages: true },
			fakeDate = Date.now();
		expect(
			stages( state, {type: RECEIVE_STAGES,
				stages: [
					{
						name: 'stageX',
						boardId: 1,
						id: 1
					}
				],
				receivedAt: fakeDate
			})
		).to.eql(
			{
				isFetchingStages: false,
				itemStages: [
					{
						name: 'stageX',
						boardId: 1,
						id: 1,
						isFetchingTickets: false
					}
				],
				lastUpdated: fakeDate
			}
		)
		.and.to.contain({ isFetchingStages: false })
		.and.to.include.keys( 'isFetchingStages', 'lastUpdated', 'itemStages' );
	});
});
