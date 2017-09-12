import React from 'react';
import { expect } from 'chai';
import Tickets from '../../../src/containers/tickets';
import * as api from '../../../src/constants/api';
import { harness } from '../.utility/harness';

import nock from 'nock';

describe( 'Tickets Container', () => {

	const renderType = 'mount';
	const nockObj = {};

	let initialState = {};

	it( 'Ticket Container: should render self and subcomponents', () => {

		initialState = {
			stages: {
				isFetchingStages: false,
				itemStages: [{
					name: 'stageX',
					boardId: 1,
					id: 1,
					isFetchingTickets: false
				}]
			},
			tickets: {
				isFetchingTickets: false,
				itemTickets: [{
					name: 'ticketX',
					ticketId: 1,
					boardId: 1,
					stageId: 1,
					isFetchingTickets: false
				}]
			}
		};

		nock( api.API_URL )
			.get( api.TICKETS_ENDPOINT_RAW.replace( '{boardId}', 1 ).replace( '{stageId}', 1 ) )
			.reply( 200, {
				isFetchingTickets: false,
				itemTickets: {
					name: 'ticketX',
					ticketId: 1,
					boardId: 1,
					stageId: 1,
					isFetchingTickets: false
				}
			});

		const { enzymeWrapper } = harness( <Tickets boardId={1} stageId={1} isFetchingTickets={false} />, initialState, nockObj, true, renderType );
		const enzymeHTML = enzymeWrapper.html();
		const Ticket = enzymeWrapper.find( 'Ticket' );

		// validate the HTML structure
		expect( enzymeHTML ).to.eql( '<ul><li class="ticket"><p>ticketX</p></li></ul>' );

	});

	it( 'Ticket Container: should render empty when no tickets are available', () => {

		initialState = {
			stages: {
				isFetchingStages: false,
				itemStages: [{
					name: 'stageX',
					boardId: 1,
					id: 1,
					isFetchingTickets: false
				}]
			},
			tickets: {
				isFetchingTickets: false,
				itemTickets: []
			}
		};

		nock( api.API_URL )
			.get( api.TICKETS_ENDPOINT_RAW.replace( '{boardId}', 1 ).replace( '{stageId}', 1 ) )
			.reply( 200, {
				isFetchingTickets: false,
				itemTickets: []
			});

		const { enzymeWrapper } = harness( <Tickets boardId={1} stageId={1} isFetchingTickets={false} />, initialState, nockObj, true, renderType );
		const enzymeHTML = enzymeWrapper.html();

		// validate the HTML structure
		expect( enzymeHTML ).to.eql( '<ul><li class="empty"><p>Empty.</p></li></ul>' );

	});

	it( 'Ticket Container: should render loading animation when fetching', () => {

		initialState = {
			stages: {
				isFetchingStages: false,
				itemStages: [{
					name: 'stageX',
					boardId: 1,
					id: 1,
					isFetchingTickets: true
				}]
			},
			tickets: {
				isFetchingTickets: true,
				itemTickets: []
			}
		};

		nock( api.API_URL )
			.get( api.TICKETS_ENDPOINT_RAW.replace( '{boardId}', 1 ).replace( '{stageId}', 1 ) )
			.reply( 200, {
				isFetchingTickets: false,
				itemTickets: []
			});

		const { enzymeWrapper } = harness( <Tickets boardId={1} stageId={1} isFetchingTickets={true} />, initialState, nockObj, true, renderType );
		const enzymeHTML = enzymeWrapper.html();

		// validate the HTML structure
		expect( enzymeHTML ).to.eql( '<ul><li class="empty"><p>Loading...</p></li></ul>' );

	});
});
