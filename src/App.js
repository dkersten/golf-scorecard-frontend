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
    curentUserScorecards: [],
    currentScorecardToUpdate: '',
    loggedIn: true
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

  updateEditScorecard = (scorecardId) => {
    this.setState({
      currentScorecardToUpdate: scorecardId
    })
  }

  updateCurrentUserSignUp = (userObj) => {
    const newUser = {
      id: userObj.id,
      firstName: userObj.first_name,
      lastName: userObj.last_name,
      email: userObj.email
    }
    this.setState({
      currentUser: newUser,
      loggedIn: true
    })
  }

  updateCurrentUserLogIn = (userObj) => {
    const returningUser = {
      id: userObj.id,
      firstName: userObj.first_name,
      lastName: userObj.last_name,
      email: userObj.email
    }
    this.setState({
      currentUser: returningUser,
      loggedIn: true
    })
  }

  navUpdateLogoutState = () => {
    const user = {
      id: '',
      firstName: '',
      lastName: '',
      email: ''
    }

    this.setState({
      loggedIn: false,
      currentUser: user
    })
  }

  render() {
    console.log(this.state.currentUser, this.state.loggedIn)
    return (
      <div className="App">
        {
          this.state.loggedIn ? <Nav loggedIn={this.state.loggedIn} logoutFunc={this.navUpdateLogoutState} /> : null
        }

        <Switch>

          <Route path="/scorecard/new" render={() => <ScoreCard 
            courses={this.state.courses}
            userId={this.state.currentUser.id} />} 
          />

          <Route path="/scorecard/edit" render={() => <ScoreCard 
            courses={this.state.courses}
            userId={this.state.currentUser.id}
            scorecardID={this.state.currentScorecardToUpdate} />} 
          />

          <Route path="/profile" render={() => <Profile 
            user={this.state.currentUser} 
            courses={this.state.courses} 
            scorecards={this.state.curentUserScorecards}
            editScorecardFunc={this.updateEditScorecard} />} 
          />

          <Route path="/courses/:id" component={CourseContainer} />

          <Route path="/courses" render={() => <CoursesContainer 
            courses={this.state.courses} 
            holes={this.state.holes} />} 
          />

          <Route path="/login" render={() => <Login updateUserFunc={this.updateCurrentUserLogIn} />} />

          <Route path="/signup" render={() => <Signup updateUserFunc={this.updateCurrentUserSignUp} />} />

          <Route path="/" component={Landing} />

        </Switch>
      </div>
    );
  }
}

export default App;