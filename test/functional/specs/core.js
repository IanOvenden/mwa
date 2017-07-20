var chai = require( 'chai' );
describe( 'Snap page', function() {
	browser.url( 'http://localhost/#/' );
	it( 'should have the right title - SNAP!', function() {
		var title = browser.getTitle();
		chai.expect( title ).to.eql( 'SNAP!' );
	});
	it( 'should have the correct top level header', function() {
		var header = browser.getText( 'h1' );
		chai.expect( header ).to.eql( 'Home Page' );
	});
});
