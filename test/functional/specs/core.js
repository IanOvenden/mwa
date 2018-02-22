describe( 'Snap page', function() {
	it( 'should have the right title - SNAP!', function() {
		browser.url( 'http://localhost:8081' );
		var title = browser.getTitle();
		expect( title ).to.eql( 'SNAP!' );
	});
	it( 'should have the correct top level header', function() {
		browser.url( 'http://localhost:8081' );
		var header = browser.getText( 'h1' );
		expect( header ).to.eql( 'Home Page' );
	});
});
