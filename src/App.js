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
import ScoreCard from './components/Scorecard.js';

class App extends Component {

  state = {
    courses: [],
    holes: [],
    currentUser: {
      id: 1,
      firstName: 'Dan',
      lastName: 'Kersten',
      email: 'dk@hi.com'
    },
    curentUserScorecards: []
  }

  componentDidMount() {
    // get all courses
    fetch('http://localhost:3000/courses')
      .then(resp => resp.json())
      .then(courses => this.setState({courses}))

    // get all holes
    fetch('http://localhost:3000/holes')
      .then(resp => resp.json())
      .then(holes => this.setState({holes}))
    
    // get current user scorecards
    const userId = this.state.currentUser.id
    fetch(`http://localhost:3000/users/${userId}`)
      .then(resp => resp.json())
      .then(user => this.updateCurrentUserScorecards(user))
  }

  updateCurrentUserScorecards = (user) => {
    // console.log(scorecards.scorecards)
    this.setState({
      curentUserScorecards: user.scorecards
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/scorecard" render={() => <ScoreCard />} />
          <Route path="/profile" render={() => <Profile user={this.state.currentUser} courses={this.state.courses} scorecards={this.state.curentUserScorecards} />} />
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