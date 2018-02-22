import React from 'react';
import { expect } from 'chai';
import Toolbar from '../../../src/containers/app-nav';
import * as api from '../../../src/constants/api';
import { harness } from '../.utility/harness';

describe( 'App Nav', () => {

	const renderType = 'mount';
	const nockObj = {
		endpoint: api.BOARDS_ENDPOINT,
		get: '',
		reply: {
			isFetching: false,
			items: {
				name: 'boardX',
				id: 1
			}
		}
	};
	let initialState = {};

	it( 'App Nav: should render self and subcomponents', () => {

		initialState = {
			boards: {
				isFetching: false,
				items: [{
					name: 'boardX',
					id: 1
				}]

			}
		};

		const { enzymeWrapper } = harness( <Toolbar />, initialState, nockObj, false, renderType );
		const enzymeHTML = enzymeWrapper.html();
		const BoardListContainer = enzymeWrapper.find( 'BoardListContainer' );

		// validate the HTML structure
		expect( enzymeHTML ).to.eql( '<header class="navbar"><div class="logo"><a href="/"><img src="assets/images/snap-logo.svg" alt="SNAP! ToDo Application"></a></div><button class="nav-link">Boards</button><div class="boards-nav-wrapper"><nav class="boards-nav" style="opacity: 1;"><div class="board-nav-board"><a>boardX</a></div></nav></div></header>' );

		// ensure the BoardsListContainer component has the correct props being passed to it
		expect( BoardListContainer.props().isFetching ).to.be.false;
	});
});
