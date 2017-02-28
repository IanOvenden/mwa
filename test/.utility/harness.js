import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import nock from 'nock';
import jsdom from 'jsdom';
import * as types from '../../src/constants/action-types';
import * as api from '../../src/constants/api';

// setup a dummy redux store
const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

// create a global document for use with enzyme mount() - for full DOM rendering
const doc = jsdom.jsdom( '<!doctype html><html><body></body></html>' );
global.document = doc;
global.window = doc.defaultView;

export function harness( component, getState ) {
 
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

	const enzymeWrapper = mount( component, options );

	return {
		props,
		enzymeWrapper
	};

}
