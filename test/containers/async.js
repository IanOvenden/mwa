import React from 'react';
import { expect } from 'chai';
import Async from '../../src/containers/async';
import { harness } from '../.utility/harness';

describe( 'Async', () => {
	it( 'Async: should render self and subcomponents', () => {

		const { enzymeWrapper } = harness( <Async />, {}, '' );

		expect( enzymeWrapper.find( 'div' ).first().hasClass( 'main' ) ).to.be.true;
		expect( enzymeWrapper.find( 'Toolbar' ).length ).to.eql( 1 );
	});
});
