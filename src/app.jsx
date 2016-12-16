import React from 'react';
import ReactDOM from 'react-dom';
import styles from './css/app.css';

class App extends React.Component {
  render() {

    var lifeMeaning = 42;
    var arr = () => lifeMeaning;

    console.log( arr() );

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