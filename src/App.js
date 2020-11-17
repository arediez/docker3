import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>AWS Elastic Beanstalk with Travis CI as CI and Docker as Image Builder</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          aredie was here
        </a>
      </header>
    </div>
  );
}

export default App;
