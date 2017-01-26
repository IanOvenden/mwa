import React from 'react';
import BoardList from './board-list.jsx';

class Toolbar extends React.Component {

	constructor( props ) {
		super( props );
	}

	render() {
		return (
			<div>
				<BoardList/>
			</div>
		);
	};
}

export default Toolbar;
