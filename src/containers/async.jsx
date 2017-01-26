import React, { Component, PropTypes } from 'react';
import Toolbar from './toolbar';

class Async extends Component {

	constructor( props ) {
		super( props );
	}

	render() {
		return (
			<div>
				<Toolbar />
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Async;
