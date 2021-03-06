import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ScorecardOverview extends Component {

    state = {
        moreClicked: false
    }

    // gets course name for scorecard overview card
    courseName = () => {
        for (const course of this.props.courses) {
            if (course.id === this.props.courseID) {
                return course.name
            }
        }
    }

    //formats created_at property from backend to readable date
    formatDate = () => {
        let dateObj = new Date(this.props.date)
        let month = dateObj.getMonth()
        let day = String(dateObj.getDate()).padStart(2, '0');
        let year = dateObj.getFullYear();
        let date = `${month}/${day}/${year}`
        return date
    }

    // computes total score from api front and back 9 arrays
    computeScore = () => {
        if (this.props.scoresFront !== null && this.props.scoresBack !== null ) {
            const totalScoreArr = this.props.scoresFront.concat(this.props.scoresBack)
            const add = (a,b) => a + b
            const sum = totalScoreArr.reduce(add)
            if (this.props.scoresFront === null || this.props.scoresBack === null || this.props.scoresFront.length === 0 || this.props.scoresBack.length === 0) {
                return `${sum} (9 holes)`
            } else {
                return `${sum} (18 holes)`
            }
        } else {
            if (this.props.scoresBack === null || this.props.scoresFront.length === 0 || this.props.scoresBack.length === 0) {
                const add = (a,b) => a + b
                const sum = this.props.scoresFront.reduce(add)
                return `${sum} (9 holes)`
            } else if (this.props.scoresFront === null|| this.props.scoresFront.length === 0 || this.props.scoresBack.length === 0) {
                const add = (a,b) => a + b
                const sum = this.props.scoresBack.reduce(add)
                return `${sum} (9 holes)`
            }
        }
        
    }

    // toggle state for options functionality
    toggleMore = () => {
        this.setState({
            moreClicked: !this.state.moreClicked
        })
    }

    // deletes round from backend and passes scorecard id up to app so it can be removed from state
    deleteRound = e => {
        fetch(`http://localhost:3000/scorecards/${this.props.scorecardID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              }
        })
            .then(resp => resp.json())
            .then(() => this.props.deleteScorecardFunc(this.props.scorecardID))
    }

    // passes scorecard id up to app for scorecard (edit) component
    editRound = e => {
        this.props.editScorecardFunc(this.props.scorecardID)
    }

    render() {
        this.formatDate()
        return(
            <div className="scorecard-overview card">
                <p>Course: <span>{this.courseName()}</span></p>
                <p>Date: <span>{this.formatDate() }</span></p>
                <p>Score: <span>{this.computeScore()}</span></p>
                { this.state.moreClicked ? 
                    <button onClick={this.toggleMore} className="hide">Hide Options &#x25B4;</button> 
                    : 
                    <button onClick={this.toggleMore} className="show">Show Options &#x25BE;</button> 
                }
                {
                    this.state.moreClicked ?
                    <div className="options">
                        <NavLink to="/scorecard/edit" onClick={this.editRound} className="btn edit">Edit</NavLink>
                        <button onClick={this.deleteRound} className="btn delete">Delete</button>
                    </div>
                    :
                    null
                }
                
            </div>
        )
    }
}

export default ScorecardOverview;