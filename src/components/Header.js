import React, { Component } from 'react';
import logo from '../g-reads.png';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="Header-head">
            <img src={logo} />
        </header>
          
      </div>
    );
  }
}

export default App;