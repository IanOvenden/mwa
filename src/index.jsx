/**
 *  React JSX render method.
 *	@typedef	{method} Render
 */

/** @module
 * 	ROOT
 * 	@description Application entry point
 * 	@requires React
 * 	@requires ReactDOM
 * 	@requires class:App
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Snap from './containers/snap';

import styles from './_assets/css/app.css';

ReactDOM.render( (
	<Snap />
	), document.getElementById( 'snap' )
);
