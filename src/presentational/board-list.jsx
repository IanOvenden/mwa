import React from 'react';
import {Link} from 'react-router';

export default class Boards extends React.Component {
	render() {
		return (
			<ul>
				{this.props.boards.map( ( board ) =>
					<li key={board.id}><Link to={{ pathname: '/board/' + board.id } }>{board.name}</Link></li>
				)}
			</ul>
		);
	}
}
