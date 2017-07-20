import React from 'react';
import { expect } from 'chai';
import Core from '../../../src/containers/core';
import { harness } from '../.utility/harness';

describe( 'Core', () => {
	it( 'Core: should render self and subcomponents', () => {

		const { enzymeWrapper } = harness( <Core />, {}, '', false );

		expect( enzymeWrapper.find( 'div' ).first().hasClass( 'main' ) ).to.be.true;
		expect( enzymeWrapper.find( 'Toolbar' ).length ).to.eql( 1 );
	});
});
