import React from 'react';
import ReactDOM from 'react-dom';
import styles from './css/app.css';

class App extends React.Component {
  render() {

    let foobar = "Reactoooorrrr!";

    return (
        <p> Hello {foobar}</p>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);