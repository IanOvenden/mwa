/** @module
 * REDUX_ACTION_TYPES
*/

/**
 *  A Redux action fired.
 *	@typedef	{Object} Action
 *  @property   {String} type - The type of action.
 *  @global
 */

/**
 *   Request user boards.
 *   @event     REQUEST_BOARDS
 *   @type      {Action}
 */

export const REQUEST_BOARDS = 'REQUEST_BOARDS';

/**
 *   Receieve a list of boards.
 *   @event     RECEIVE_BOARDS
 *   @type      {Action}
 */

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
