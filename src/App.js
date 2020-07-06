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
      id: 12,
      firstName: 'Dan',
      lastName: 'Kersten',
      email: 'dan@danielkersten.io'
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

  //update state (current user/logged in) when a new user signs up
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

  //update state (current user/logged in) when an existing user logs in
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

  // updated state when logout is clicked in Nav component
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

  // add new scorecard to state when submit is hit on new scorecard
  newScorecardUpdateArr = (scorecardObj) => {
    const newArr = [...this.state.curentUserScorecards, scorecardObj]
    this.setState({
      curentUserScorecards: newArr
    })
  }

  // edit scorecard in state (changed) when submit is hit on edit socrecard
  editScorecardUpdateArr = (scorecardObj) => {
    const scorecardID = scorecardObj.id
    let scorecards = this.state.curentUserScorecards
    scorecards.forEach(function(scorecard, i) { if (scorecard.id === scorecardID) scorecards[i] = scorecardObj })
    this.setState({
      curentUserScorecards: scorecards
    })
  }

  //remove scorecard from state when the delete button is clicked on profile component
  deleteScorecardUpdateArr = (scorecardID) => {
    console.log(scorecardID)
    const scorecards = this.state.curentUserScorecards
    const updatedScorecards = scorecards.filter(item => item.id !== scorecardID )
    this.setState({
      curentUserScorecards: updatedScorecards
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        {
          this.state.loggedIn ? <Nav loggedIn={this.state.loggedIn} logoutFunc={this.navUpdateLogoutState} /> : null
        }

        <Switch>

          <Route path="/scorecard/new" render={() => <ScoreCard 
            courses={this.state.courses}
            userId={this.state.currentUser.id}
            newScorecardFunc={this.newScorecardUpdateArr} />} 
          />

          <Route path="/scorecard/edit" render={() => <ScoreCard 
            courses={this.state.courses}
            userId={this.state.currentUser.id}
            scorecardID={this.state.currentScorecardToUpdate}
            editScorecardFunc={this.editScorecardUpdateArr} />} 
          />

          <Route path="/profile" render={() => <Profile 
            user={this.state.currentUser} 
            courses={this.state.courses} 
            scorecards={this.state.curentUserScorecards}
            editScorecardFunc={this.updateEditScorecard}
            deleteScorecardFunc={this.deleteScorecardUpdateArr} />} 
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