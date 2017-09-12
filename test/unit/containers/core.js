import React from 'react';
import { expect } from 'chai';
import Core from '../../../src/containers/core';
import { harness } from '../.utility/harness';

describe( 'Core', () => {
	it( 'Core: should render self and subcomponents', () => {

		const { enzymeWrapper } = harness( <Core boardId={1} />, {}, '', false );

		expect( enzymeWrapper.find( 'div' ).first().hasClass( 'ui ui--subnav' ) ).to.be.true;
		expect( enzymeWrapper.find( 'AppNav' ).length ).to.eql( 1 );
	});
});
