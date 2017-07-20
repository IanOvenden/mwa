describe( 'Snap page', function() {
	browser.url( 'http://localhost/#/board/3' );
	it( 'should have the correct top level header', function() {
		var header = browser.getText( 'h1' );
		expect( header ).to.eql( 'Board Page - 3' );
	});
	it( 'should have the correct top level header', function() {
		browser.waitForExist( '.stage-title', 5000 );
		var stageTitle = browser.element( '.stage-title' );

		stageTitle.setValue( 'UPDATED' );
		expect( stageTitle.getText() ).to.eql( 'UPDATED' );
	});
});
