import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">santerre.xyz</h1>
        </header>
        <p className="App-intro">
         The short:
        </p>
        <p className="App-paragraph">
          Still working on adding a ton more things to this site, but please check me out on the following platforms!
        </p>
        <p className="App-paragraph">
          <a href="https://www.linkedin.com/in/tomsanbear/"target="_blank">LinkedIn</a><br />
          <a href="https://github.com/tomsanbear"target="_blank">GitHub</a><br />
          <a href="mailto:thomas@santerre.xyz?"target="_top">Email</a><br />
        </p>
      </div>
    );
  }
}

export default App;

