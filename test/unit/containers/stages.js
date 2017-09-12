import React from 'react';
import { expect } from 'chai';
import Stages from '../../../src/containers/stages';
import * as api from '../../../src/constants/api';
import { harness } from '../.utility/harness';

import nock from 'nock';

describe( 'Stages Container', () => {

	const renderType = 'mount';
	const nockObj = {};

	let initialState = {};

	it( 'Stage Container: should render self and subcomponents', () => {

		initialState = {
			stages: {
				isFetchingStages: false,
				itemStages: [{
					name: 'stageX',
					boardId: 1,
					stageId: 1,
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
			.get( api.STAGES_ENDPOINT_RAW.replace( '{boardId}', 1 ) )
			.reply( 200, {
				isFetchingStages: false,
				itemStages: {
					name: 'stageX',
					boardId: 1,
					stageId: 1,
					isFetchingTickets: false
				}
			})
			.get( api.TICKETS_ENDPOINT_RAW.replace( '{boardId}', 1 ).replace( '{stageId}', 1 ) )
			.reply( 200, {
				isFetchingStages: false,
				itemStages: {
					name: 'ticketX',
					ticketId: 1,
					boardId: 1,
					stageId: 1,
					isFetchingTickets: false
				}
			});

		const { enzymeWrapper } = harness( <Stages boardId={1} />, initialState, nockObj, true, renderType );
		const enzymeHTML = enzymeWrapper.html();
		const StageView = enzymeWrapper.find( 'StageView' );

		// validate the HTML structure
		expect( enzymeHTML ).to.eql( '<div class="stages"><div class="stage"><header><label for="stageTitle1" class="form-label">stageX</label><textarea id="stageTitle1" class="stage-title">stageX</textarea></header><ul><li class="ticket"><p>ticketX</p></li></ul><footer><a href="#">Add a card...</a></footer></div></div>' );

	});

	it( 'Stage Container: should render empty when no stages are available', () => {

		initialState = {
			stages: {
				isFetchingStages: false,
				itemStages: []
			}
		};

		nock( api.API_URL )
			.get( api.STAGES_ENDPOINT_RAW.replace( '{boardId}', 1 ) )
			.reply( 200, {
				isFetchingStages: false,
				itemStages: []
			});

		const { enzymeWrapper } = harness( <Stages boardId={1} />, initialState, nockObj, true, renderType );
		const enzymeHTML = enzymeWrapper.html();

		// validate the HTML structure
		expect( enzymeHTML ).to.eql( '<div class="stages"><h2>Empty.</h2></div>' );

	});

	it( 'Stage Container: should render loading animation when fetching', () => {

		initialState = {
			stages: {
				isFetchingStages: true,
				itemStages: []
			}
		};

		nock( api.API_URL )
			.get( api.STAGES_ENDPOINT_RAW.replace( '{boardId}', 1 ) )
			.reply( 200, {
				isFetchingStages: true,
				itemStages: []
			});

		const { enzymeWrapper } = harness( <Stages boardId={1} />, initialState, nockObj, true, renderType );
		const enzymeHTML = enzymeWrapper.html();

		// validate the HTML structure
		expect( enzymeHTML ).to.eql( '<div class="stages"><h2>Loading...</h2></div>' );

	});
});
