/** @module
 * REDUX_REDUCERS
 * @requires REDUX_ACTION_TYPES
*/

/**
 *  React reducer function
 *	@typedef	{function} Reducer
 *	@global
 */

import { combineReducers } from 'redux';
import boards from './boards';

let reducer = combineReducers({boards});

export default reducer;
