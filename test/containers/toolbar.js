import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Toolbar from '../../src/containers/toolbar';

import * as types from '../../src/constants/action-types';
import thunk from 'redux-thunk';

const middlewares = [ thunk ];
import configureStore from 'redux-mock-store';
const mockStore = configureStore( middlewares );

import nock from 'nock';
import * as api from '../../src/constants/api';

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


	//mock up the board endpoint api response
	nock( api.BOARDS_ENDPOINT )
		.get( '' )
		.reply( 200, {
			//boards: {
			isFetching: false,
			items: {
				name: 'boardX',
				id: 1
			}

			//}
		});

	const options = {
		context: { store },
		childContextTypes: { store: React.PropTypes.object.isRequired }
	};

	const enzymeWrapper = mount( <Toolbar {...props} />, options );

	return {
		props,
		enzymeWrapper
	};

}

describe( 'Toolbar', () => {
	it( 'Toolbar: should render self and subcomponents', () => {
		const { enzymeWrapper } = setup();
		const enzymeHTML = enzymeWrapper.html();
		const BoardListContainer = enzymeWrapper.find( 'BoardListContainer' );

		// validate the HTML structure
		expect( enzymeHTML ).to.eql( '<header><nav class="boardlist"></nav></header>' );

		// ensure the BoardsListContainer component has the correct props being passed to it
		expect( BoardListContainer.props().isFetching ).to.be.false;
	});
});
