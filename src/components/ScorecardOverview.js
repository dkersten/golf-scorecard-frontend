import React, { Component } from 'react';

class ScorecardOverview extends Component {

    state = {
        moreClicked: false
    }

    courseName = () => {
        for (const course of this.props.courses) {
            if (course.id === this.props.courseID) {
                return course.name
            }
        }
    }

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
    toggleMore = () => {
        this.setState({
            moreClicked: !this.state.moreClicked
        })
    }

    deleteRound = e => {
        fetch(`http://localhost:3000/scorecards/${this.props.scorecardID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              }
        })
            .then(resp => resp.json())
            .then(scorecard => console.log(scorecard))
            .then(() => this.setState({ state: this.state }))
    }

    render() {
        return(
            <div className="scorecard-overview card">
                <p>Course: <span>{this.courseName()}</span></p>
                <p>Date: <span>{this.props.date }</span></p>
                <p>Score: <span>{this.computeScore()}</span></p>
                { this.state.moreClicked ? 
                    <button onClick={this.toggleMore} className="hide">Hide Options &#x25B4;</button> 
                    : 
                    <button onClick={this.toggleMore} className="show">Show Options &#x25BE;</button> 
                }
                {
                    this.state.moreClicked ?
                    <div className="options">
                        <button className="btn edit">Edit</button>
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