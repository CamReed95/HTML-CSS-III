import React, { Component } from 'react';
import './App.css';
import banner from './components/Banner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner/>  
      </div>
    );
  }
}

export default App;

// banner is same thing as header 