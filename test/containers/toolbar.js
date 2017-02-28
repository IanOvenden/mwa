import React from 'react';
import { expect } from 'chai';
import Toolbar from '../../src/containers/toolbar';

import { harness } from '../.utility/harness';

describe( 'Toolbar', () => {
	it( 'Toolbar: should render self and subcomponents', () => {

		const getState = {
			boards: {
				isFetching: false,
				items: {
					name: 'boardX',
					id: 1
				}

			}
		};

		const { enzymeWrapper } = harness( <Toolbar />, getState );
		const enzymeHTML = enzymeWrapper.html();
		const BoardListContainer = enzymeWrapper.find( 'BoardListContainer' );

		// validate the HTML structure
		expect( enzymeHTML ).to.eql( '<header><nav class="boardlist"></nav></header>' );

		// ensure the BoardsListContainer component has the correct props being passed to it
		expect( BoardListContainer.props().isFetching ).to.be.false;
	});
});
