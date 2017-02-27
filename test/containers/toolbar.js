import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Toolbar from '../../src/containers/toolbar';

import * as types from '../../src/constants/action-types';
import thunk from 'redux-thunk';

const middlewares = [ thunk ];
import configureStore from 'redux-mock-store';
const mockStore = configureStore( middlewares );



import jsdom from 'jsdom';
const doc = jsdom.jsdom( '<!doctype html><html><body></body></html>' );
global.document = doc;
global.window = doc.defaultView;

function setup() {

	const getState = {
		type: types.RECEIVE_BOARDS,
		boards: {
			isFetching: false,
			items: {
				name: 'boardX',
				id: 1
			}

		}
	}; //replace this with necessary state
	const store = mockStore( getState );
	const props = {
		store: store
	};

	console.log( store );

	const options = {
		context: { store },
		childContextTypes: { store: React.PropTypes.object.isRequired }
	};

	//const enzymeWrapper = shallow( <Toolbar {...props} /> );
	const enzymeWrapper = mount( <Toolbar {...props} />, options );

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
