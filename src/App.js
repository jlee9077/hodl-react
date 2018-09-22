import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Coin from './components/Coin'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CryptoMania</h1>
        </header>
          <Header />
          <Coin />
      </div>
    );
  }
}

export default App;
