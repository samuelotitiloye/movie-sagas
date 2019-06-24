import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Movies from '../Movies/movies';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <p>PRIME MOVIE SAGAS</p>
          <Route path="/" exact component={Movies} />
          <Route path="/details" component={Details} />
          <Route path="/edit" component={Edit} />
        </div>
      </Router>
    );
  }
}

export default App;