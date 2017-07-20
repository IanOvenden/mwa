import React from 'react';
import { expect } from 'chai';
import BoardListContainer from '../../../src/containers/board-list';
import * as api from '../../../src/constants/api';
import { harness } from '../.utility/harness';

describe( 'BoardListContainer', () => {

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

	it( 'BoardListContainer: should render self and subcomponents', () => {

		initialState = {
			boards: {
				isFetching: false,
				items: [{
					name: 'boardX',
					id: 1
				}]
			}
		};

		const { enzymeWrapper } = harness( <BoardListContainer />, initialState, nockObj, true, renderType );
		const enzymeHTML = enzymeWrapper.html();
		const BoardList = enzymeWrapper.find( 'BoardList' );

		// validate the HTML structure
		expect( enzymeHTML ).to.eql( '<nav class="boardlist"><ul style="opacity: 1;"><li><a>boardX</a></li></ul></nav>' );

	});

	it( 'BoardListContainer: should render empty when no boards are available', () => {

		initialState = {
			boards: {
				isFetching: false,
				items: []
			}
		};

		const { enzymeWrapper } = harness( <BoardListContainer />, initialState, nockObj, true, renderType );
		const enzymeHTML = enzymeWrapper.html();

		// validate the HTML structure
		expect( enzymeHTML ).to.eql( '<nav class="boardlist"><h2>Empty.</h2></nav>' );

	});

	it( 'BoardListContainer: should render loading animation when fetching', () => {

		initialState = {
			boards: {
				isFetching: true,
				items: []
			}
		};

		const { enzymeWrapper } = harness( <BoardListContainer />, initialState, nockObj, true, renderType );
		const enzymeHTML = enzymeWrapper.html();

		// validate the HTML structure
		expect( enzymeHTML ).to.eql( '<nav class="boardlist"><h2>Loading...</h2></nav>' );

	});
});
