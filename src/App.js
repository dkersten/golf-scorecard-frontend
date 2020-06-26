import React, {Component} from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Nav from './components/Nav.js';
import Landing from './components/Landing.js';

class App extends Component {

  state = {
    courses: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/courses')
      .then(resp => resp.json())
      .then(courses => this.setState({courses}))
  }

  render() {
    
    return (
      <div className="App">
        <Nav />
        <Landing />
      </div>
    );
  }
}

export default App;
