import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/movies';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
        <Movies/>
      </div>
    );
  }
}

export default App;
