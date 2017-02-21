import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Async from '../../src/containers/async';

function setup() {

	const props = {};

	const enzymeWrapper = shallow( <Async {...props} /> );

	return {
		props,
		enzymeWrapper
	};

}

describe( 'Async', () => {
	it( 'Async: should render self and subcomponents', () => {
		const { enzymeWrapper } = setup();

		expect( enzymeWrapper.find( 'div' ).first().hasClass( 'main' ) ).to.be.true;
		expect( enzymeWrapper.find( 'Toolbar' ).length ).to.eql( 1 );
	});
});
