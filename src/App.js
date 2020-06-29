import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav.js';
import Landing from './components/Landing.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Profile from './components/Profile.js';
import CourseContainer from './containers/CourseContainer.js'

class App extends Component {

  state = {
    courses: [],
    currentUser: {
      firstName: 'Dan',
      lastName: 'Kersten',
      email: 'dk@hi.com'
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/courses')
      .then(resp => resp.json())
      .then(courses => this.setState({courses}))
  }

  render() {
    // console.log(this.state.courses)
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/profile" render={() => <Profile user={this.state.currentUser} />} />
          <Route path="/courses" render={() => <CourseContainer courses={this.state.courses} />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/signup" render={() => <Signup />} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}

export default App;
