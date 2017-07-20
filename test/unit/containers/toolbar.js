import React from 'react';
import { expect } from 'chai';
import Toolbar from '../../../src/containers/toolbar';
import * as api from '../../../src/constants/api';
import { harness } from '../.utility/harness';

describe( 'Toolbar', () => {

	const renderType = 'mount';
	const nockObj = {
		endpoint: api.BOARDS_ENDPOINT,
		get: '',
		reply: {
			isFetching: false,
			items: {
				name: 'boardX',
				id: 1
			}
		}
	};
	let initialState = {};

	it( 'Toolbar: should render self and subcomponents', () => {

		initialState = {
			boards: {
				isFetching: false,
				items: [{
					name: 'boardX',
					id: 1
				}]

			}
		};

		const { enzymeWrapper } = harness( <Toolbar />, initialState, nockObj, false, renderType );
		const enzymeHTML = enzymeWrapper.html();
		const BoardListContainer = enzymeWrapper.find( 'BoardListContainer' );

		// validate the HTML structure
		expect( enzymeHTML ).to.eql( '<header><nav class="boardlist"><ul style="opacity: 1;"><li><a>boardX</a></li></ul></nav></header>' );

		// ensure the BoardsListContainer component has the correct props being passed to it
		expect( BoardListContainer.props().isFetching ).to.be.false;
	});
});
