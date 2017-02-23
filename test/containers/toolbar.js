import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Toolbar } from '../../src/containers/toolbar';

function setup() {

	const props = {};

	const enzymeWrapper = shallow( <Toolbar {...props} /> );

	return {
		props,
		enzymeWrapper
	};

}

describe( 'Toolbar', () => {
	it( 'Toolbar: should render self and subcomponents', () => {
		const { enzymeWrapper } = setup();

		console.log( enzymeWrapper.debug() );

		//expect( enzymeWrapper.find( 'div' ).first().hasClass( 'main' ) ).to.be.true;
		expect( enzymeWrapper.find( 'BoardListContainer' ).length ).to.eql( 1 );
	});
});
