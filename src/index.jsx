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
import App from './containers/app';
import styles from './_assets/css/app.css';

ReactDOM.render( (
	<App />
	), document.getElementById( 'app' )
);
