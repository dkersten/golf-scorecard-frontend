import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav.js';
import Landing from './components/Landing.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Profile from './components/Profile.js';
import CoursesContainer from './containers/CoursesContainer.js';
import CourseContainer from './containers/CourseContainer.js';


class App extends Component {

  state = {
    courses: [],
    holes: [],
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

    fetch('http://localhost:3000/holes')
      .then(resp => resp.json())
      .then(holes => this.setState({holes}))
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/profile" render={() => <Profile user={this.state.currentUser} />} />
          <Route path="/courses/:id" component={CourseContainer} />
          <Route path="/courses" render={() => <CoursesContainer courses={this.state.courses} holes={this.state.holes} />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/signup" render={() => <Signup />} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}

export default App;


{/* <Route path="/users/:id" render={() => <User />} /> */}
{/* <Route 
 path="/user/:userId"
 component={UserComponent} /> */}