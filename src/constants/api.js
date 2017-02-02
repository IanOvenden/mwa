/** @constant
*	@type {string}
*	@description Service layer domain which hosts our endpoints
*	@default
*	@private
*   @memberOf module:API
*/
const API_URL = 'http://private-c05f7-snapimock.apiary-mock.com';

/** @constant
*   @type {string}
*	@description /snapi/boards - Enpoint for listing available boards
*	@default
*   @memberOf module:API
*/
export const BOARDS_ENDPOINT = API_URL + '/snapi/boards';
