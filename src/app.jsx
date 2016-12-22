import React from 'react';
import ReactDOM from 'react-dom';
import styles from './css/app.css';

class App extends React.Component {

	render() {

		var Console = console,
			lifeMeaning = 42,
			arr = () => lifeMeaning;

		Console.log( arr() );

		let foobar = 'xReactoooorrrr!';

		return (
			<p> Hello {foobar}</p>
		);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById( 'app' )
);
