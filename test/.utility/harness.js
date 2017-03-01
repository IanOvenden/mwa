import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import nock from 'nock';
import jsdom from 'jsdom';
import * as types from '../../src/constants/action-types';

// setup a dummy redux store
const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

// create a global document for use with enzyme mount() - for full DOM rendering
const doc = jsdom.jsdom( '<!doctype html><html><body></body></html>' );
global.document = doc;
global.window = doc.defaultView;

export function harness( component, getState, nockObj, renderType='shallow' ) {
 
	let enzymeWrapper = {};

	const store = mockStore( getState );
	const props = {
		store: store
	};

	//mock up the board endpoint api response
	if ( nockObj ) {
		nock( nockObj.endpoint )
			.get( nockObj.get )
			.reply( 200, 
				nockObj.reply
			);
	}

	const options = {
		context: { store },
		childContextTypes: { store: React.PropTypes.object.isRequired }
	};

	if ( renderType === 'shallow' ){
		enzymeWrapper = shallow( component );
	} else {
		enzymeWrapper = mount( component, options );
	}

	return {
		props,
		enzymeWrapper
	};

}
