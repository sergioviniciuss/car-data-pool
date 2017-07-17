import React, { Component } from 'react';
import logo from './images/friday-logo.svg';
import './App.css';
import CarFilter from './components/CarFilter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className='title-msg'>Please find your car on the list bellow by make</h2>
        </div>
        <CarFilter />
      </div>
    );
  }
}

export default App;
