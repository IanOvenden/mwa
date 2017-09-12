import React from 'react';
import { expect } from 'chai';
import BoardNav from '../../../src/containers/board-nav';
import { harness } from '../.utility/harness';

describe( 'Board Nav', () => {

	it( 'Board Nav: should render self and subcomponents', () => {

		const { enzymeWrapper } = harness( <BoardNav boardId={1}/>, {}, '', false );
		const enzymeHTML = enzymeWrapper.html();

		// validate the HTML structure
		expect( enzymeHTML ).to.eql( '<nav class="navbar navbar--subnav"><h1>Board Title - 1</h1></nav>' );

	});
});
