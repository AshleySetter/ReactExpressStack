import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers/customers';

// following code is 

function App() {
  return ( // following code is jsx code, must put comments like so: {/* comment */}
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Customers/> {/* embeds our component Customers in the App component */}
    </div>
  );
}

export default App;

