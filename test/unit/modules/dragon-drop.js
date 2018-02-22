import React from 'react';
import { expect } from 'chai';
import { DragonDrop } from '../../../src/modules/dragon-drop';
import { harness } from '../.utility/harness';

import sinon from 'sinon';

describe( 'Dragon Drop', () => {

	let targetEl = document.createElement( 'ul' ),
		childEl = document.createElement( 'li' ),
		divEl = document.createElement( 'div' ),
		moduleHTML = {};

	childEl.setAttribute( 'id', '55' );
	childEl.setAttribute( 'class', 'stage_list_container' );

	childEl.appendChild( divEl );
	targetEl.appendChild( childEl );

	let ev = {
		preventDefault: sinon.spy(),
		nativeEvent: {
			preventDefault: sinon.spy(),
			dataTransfer: {
				effectAllowed: 'uninitialized',
				dropEffect: 'unitialized',
				setData: function() {}
			},
			target: targetEl
		},
		dataTransfer: {
			dropEffect: 'unitialized'
		},
		target: childEl
	};

	beforeEach( function( done ) {
		let dragonDrop = new DragonDrop( 'drop-zone', 'dragon-over', 'dragon-chosen', 'move', '.stage_list_container' );

		done();
	});

	it( 'Check object property assignment', () => {

		// test objected property assignment
		expect( DragonDrop.dropZoneClass ).to.eql( 'drop-zone' );
		expect( DragonDrop.dropZoneActiveClass ).to.eql( 'dragon-over' );
		expect( DragonDrop.selectedClass ).to.eql( 'dragon-chosen' );
		expect( DragonDrop.effect ).to.eql( 'move' );
		expect( DragonDrop.itemWrapper ).to.eql( '.stage_list_container' );

	});
	it( 'Ensure core methods all exist', () => {
		expect( DragonDrop.dragonStart ).to.be.a.method;
		expect( DragonDrop.dragonOver ).to.be.a.method;
		expect( DragonDrop.dragonEnter ).to.be.a.method;
		expect( DragonDrop.dragonLeave ).to.be.a.method;
		expect( DragonDrop.dragonEnd ).to.be.a.method;
		expect( DragonDrop.dragonDrop ).to.be.a.method;
	});
	it( 'dragStart method - is id of src element set correctly', () => {

		let dragonDrop = new DragonDrop( 'drop-zone', 'dragon-over', 'dragon-chosen', 'move', '.stage_list_container' );

		dragonDrop.dragonStart( ev );

		expect( parseInt( DragonDrop.srcElem ) ).to.eql( 55 );

	});
	it( 'dragOver method - is correct dropEffect being set', () => {

		let dragonDrop = new DragonDrop( 'drop-zone', 'dragon-over', 'dragon-chosen', 'move', '.stage_list_container' );

		let dropEff = dragonDrop.dragonOver( ev );

		expect( dropEff ).to.eql( 'move' );

	});
});
