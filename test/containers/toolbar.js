import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Toolbar from '../../src/containers/toolbar';
import BoardList from '../../src/presentational/board-list.jsx';

import configureStore from 'redux-mock-store';

function setup() {

	const mockStore = configureStore();

	const getState = {
		boards: {
			isFetching: false,
			items: {
				name: 'boardX',
				id: 1
			}
		}}; //replace this with necessary state
	const store = mockStore( getState );
	const props = {
		store: store
	};

	const enzymeWrapper = mount( <Toolbar {...props} /> );

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
