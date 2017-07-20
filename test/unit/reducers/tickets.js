import { expect } from 'chai';
import { REQUEST_TICKETS, RECEIVE_TICKETS } from '../../../src/constants/action-types';
import tickets from '../../../src/reducers/tickets';

describe( 'Ticket reducer', () => {
	it( 'Can request a list of tickets - REQUEST_TICKETS', () => {
		let state = { isFetchingTickets: false };
		expect(
			tickets( state, {type: REQUEST_TICKETS})
		).to.eql({ isFetchingTickets: true });
	});

	it( 'Can receive a list of stages - RECEIVE_STAGES', () => {
		let fakeDate = Date.now(),
			state = {
				isFetchingTickets: true,
				itemTickets: [
					{
						ticketId: 1,
						stageId: 1,
						name: 'ticketX',
						status: 'active',
						flagged: true,
						hot: false
					}
				],
				lastUpdated: fakeDate
			};

		expect(
			tickets( state, {type: RECEIVE_TICKETS,
				tickets: [
					{
						ticketId: 2,
						stageId: 1,
						name: 'ticketY',
						status: 'active',
						flagged: true,
						hot: false
					}
				],
				receivedAt: fakeDate
			})
		).to.eql(
			{
				isFetchingTickets: false,
				itemTickets: [
					{
						ticketId: 1,
						stageId: 1,
						name: 'ticketX',
						status: 'active',
						flagged: true,
						hot: false
					},
					{
						ticketId: 2,
						stageId: 1,
						name: 'ticketY',
						status: 'active',
						flagged: true,
						hot: false
					}
				],
				lastUpdated: fakeDate
			}
		)
		.and.to.contain({ isFetchingTickets: false })
		.and.to.include.keys( 'isFetchingTickets', 'lastUpdated', 'itemTickets' );
	});
});
