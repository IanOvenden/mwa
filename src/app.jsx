import React from 'react';
import ReactDOM from 'react-dom';
import styles from './css/app.css';

class App extends React.Component {

	render() {

		var console,
			lifeMeaning = 42,
			arr = () => lifeMeaning;

		console.log( arr() );

		let foobar = 'Reactoooorrrr!';

		return (
			<p> Hello {foobar}</p>
		);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById( 'app' )
);
