describe( 'Snap page', function() {
	it( 'should have the correct top level header', function() {
		browser.url( '/#/board/3' );
		browser.waitForExist( 'h1', 5000 );
		var header = browser.getText( 'h1' );
		expect( header ).to.eql( 'Board Title - 3' );
	});

	it( 'Stage title can be updated', function() {
		browser.url( '/#/board/3' );
		browser.waitForExist( '.stage-title', 5000 );
		var stageTitle = browser.element( '.stage-title' );
		stageTitle.setValue( 'UPDATED' );
		expect( stageTitle.getText() ).to.eql( 'UPDATED' );
	});
});
