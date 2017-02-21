import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Toolbar from '../../src/containers/toolbar';
import BoardList from '../../src/presentational/board-list.jsx';

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

		expect( enzymeWrapper.find( 'header' ).length ).to.eql( 1 );
		console.log( enzymeWrapper.contains( <BoardList/> ) );
		//expect( enzymeWrapper.find( BoardList ).childAt( 0 ).type() ).to.eql( 'ul' );
	});
});
