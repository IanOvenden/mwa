import React from 'react';
import ReactDOM from 'react-dom';
import BoardList from './board-list.jsx';

class Toolbar extends React.Component {

	constructor( props ) {
		super( props );
	}

	render() {
		return (
			<div>
				<BoardList boards={this.props.boards}/>
			</div>
		);
	};
}

export default Toolbar;
