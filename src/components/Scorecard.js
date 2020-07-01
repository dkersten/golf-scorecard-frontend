import React, { Component } from 'react';
import ScorecardRow from './ScorecardRow.js'

class ScoreCard extends Component {

    state = {
        numHoles: '',
        scores_front: [],
        scores_back: [],
        course_id: null,
        currentTotalScore: 0
    }

    cardNumHoles = () => {
        if (this.state.numHoles === 9) {
            
            const holes = 9
            const rows = []
            for (let i = 1; i <= holes; i++) {
                rows.push( <ScorecardRow key={i} num={i} changeFunc={this.updateScores} />)

            }
            return rows
        } else if (this.state.numHoles === 18) {
            const holes = 18
            const rows = []
            for (let i = 1; i <= holes; i++) {
                rows.push( <ScorecardRow key={i} num={i} changeFunc={this.updateScores} /> )
            }
            return rows
        }
    }

    updateScores = (score) => {
        // console.log(score)
        if (this.state.scores_front.length < 9) {
            this.setState({
                scores_front: [...this.state.scores_front, score]
            })
        } else {
            this.setState({
                scores_back: [...this.state.scores_back, score]
            })
        }
        
    }

    submitScorecard = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/scorecards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user_id: this.props.userId,
                course_id: this.state.course_id,
                scores_front: this.state.scores_front,
                scores_back: this.state.scores_back
            })
        })
            .then(resp => resp.json())
            .then(scorecard => console.log(scorecard))


        // console.log({
        //     user_id: this.props.userId,
        //     course_id: this.state.course_id,
        //     scores_front: this.state.scores_front,
        //     scores_back: this.state.scores_back
        // })
        e.target.reset()
        this.setState({
            scores_front: [],
            scores_back: [],
        })
    }


    // {
    //     "id": 1,
    //     "user_id": 1,
    //     "course_id": 9,
    //     "scores_front": [],
    //     "scores_back": []
    // }

    computeScoreTotal = () => {
        const f9 = this.state.scores_front
        const b9 = this.state.scores_back
        if (f9.length > 0 && b9.length === 0 ) {
            const add = (a,b) => a + b
            const sum = f9.reduce(add)
            return sum
        } else if (f9.length > 0 && b9.length > 0) {
            const allArr = f9.concat(b9)
            const add = (a,b) => a + b
            const sum = allArr.reduce(add)
            return sum
        } else {
            return 0
        }
    }

    handleCourseName = (e) => {
        if (e.target.value === "brighton") {
            this.setState({
                course_id: 9
            })
        } else if (e.target.value === "sheridan") {
            this.setState({
                course_id: 10
            })
        } else if (e.target.value === "terry") {
            this.setState({
                course_id: 11
            })
        } else if (e.target.value === "manatee") {
            this.setState({
                course_id: 12
            })
        } else {
            this.setState({
                course_id: null
            })
        }
    }

    handleChange9 = () => {
        this.setState({
            numHoles: 9
        })
    }

    handleChange18 = () => {
        this.setState({
            numHoles: 18
        })
    }

    render() {
        return(
            <div className="scorecard">
                <main>
                    <div className="inner-container">

                        <div className="scorecard-options card">
                            <h2>Scorecard Options</h2>
                            <div className="controls">
                                <p>9 or 18 hole?</p>
                                <button onClick={this.handleChange9} className="btn">9 holes</button>
                                <button onClick={this.handleChange18} className="btn">18 holes</button>

                                <p>Are you playing one of the following courses?</p>
                                <select onChange={this.handleCourseName}>
                                    <option></option>
                                    <option value="none">None of these</option>
                                    <option value="brighton">Brighton</option>
                                    <option value="manatee">Manatee</option>
                                    <option value="sheridan">Sheridan</option>
                                    <option value="terry">Terry Hills</option>
                                </select>
                            </div>
                        </div>

                        <form onSubmit={this.submitScorecard}>
                        <input name="authenticity_token" type="hidden" value="<%= form_authenticity_token %>"/>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Hole</th>
                                        <th>Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.cardNumHoles()
                                    }
                                    <tr>
                                        <td>Total</td>
                                        <td>
                                            { this.computeScoreTotal() }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <input className="btn" type="submit"/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </main>
            </div>
        )
    }
}

export default ScoreCard