const BOARDENDPOINT = 'http://private-c05f7-snapimock.apiary-mock.com/snapi/boards';

export function getBoards() {
	return fetch( BOARDENDPOINT )
		.then( res => res.json() )
		.catch( err => {
			console.log( err );
		});
}
