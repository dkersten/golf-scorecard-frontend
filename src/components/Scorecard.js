import React, { Component } from 'react';
import ScorecardRow from './ScorecardRow.js'

class ScoreCard extends Component {

    state = {
        numHoles: '',
        scores_front: [],
        scores_back: [],
        course_id: 13,
        currentTotalScore: 0,
        scores: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: 0,
            12: 0,
            13: 0,
            14: 0,
            15: 0,
            16: 0,
            17: 0,
            18: 0
        },
        scorecardToEdit: {},
        editingScorecard: false
    }

    cardNumHoles = () => {
        if (this.state.numHoles === 9) {
            
            const holes = 9
            const rows = []
            for (let i = 1; i <= holes; i++) {
                rows.push( <ScorecardRow key={i} num={i} changeFunc={this.updateScores} scores={this.state.scores} />)

            }
            return rows
        } else if (this.state.numHoles === 18) {
            const holes = 18
            const rows = []
            for (let i = 1; i <= holes; i++) {
                rows.push( <ScorecardRow key={i} num={i} changeFunc={this.updateScores} scores={this.state.scores} /> )
            }
            return rows
        }
    }

    updateScores = (score, holeNum) => {
        const scoreInt = parseInt(score)
        const { scores} = this.state
        const currentState = scores
        currentState[holeNum] = scoreInt
        this.setState({
            scores: currentState
        })
    }

    formatScores = () => {
        const scoreArr = Object.values(this.state.scores)
        const scores = scoreArr.filter((item) => item !== 0)
        if (scores.length === 9) {
            this.setState({
                scores_front: scores
            })
        } else if (scores.length === 18) {
            const f9 = scores.slice(0, 9)
            const b9 = scores.slice(9,18)
            this.setState({
                scores_front: f9,
                scores_back: b9
            })
        }
    }

    submitScorecard = (e) => {
        e.preventDefault()
        let format = async () => {this.formatScores()}
            format().then(() => this.postScorecard()) 
    }

    postScorecard = () => {
        const { scores } = this.state
        let resetScores = scores
        resetScores = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0
        }

        if (!this.state.editingScorecard) {
            console.log("submitting new")
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
            // .then(scorecard => console.log(scorecard))
            .then(scorecard => this.props.newScorecardFunc(scorecard))
            .then(() => this.setState({
                scores: resetScores
            }))
            .then(() => this.setState({
                scores_front: [],
                scores_back: [],
                numHoles: ''
            }))
        } else if (this.state.editingScorecard) {
            console.log("submitting edit")
            const id = this.state.scorecardToEdit.id
            console.log(this.state.scores_front, this.state.scores_back)
            fetch(`http://localhost:3000/scorecards/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                  },
                  body: JSON.stringify({
                    scores_front: this.state.scores_front,
                    scores_back: this.state.scores_back
                  })              
            })
            .then(resp => resp.json())
                .then(scorecard => console.log(scorecard))
                .then(() => this.setState({
                    scores: resetScores
                }))
                .then(() => this.setState({
                    scores_front: [],
                    scores_back: [],
                    numHoles: '',
                    scorecardToEdit: {},
                    editingScorecard: false
                }))
        }
    }

    computeScoreTotal = () => {
        const scores = Object.values(this.state.scores)
        if (scores.includes(NaN)) {
            return "hole can't be blank"
        } else {
            const add = (a,b) => a + b
            const sum = scores.reduce(add)
            return sum
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
                course_id: 13
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

    //Edit scorecard specific code below
    componentDidMount() {
        const scorecardID = this.props.scorecardID

        if (typeof this.props.scorecardID === "number") {
            this.setState({
                editingScorecard: true
            })
            fetch(`http://localhost:3000/scorecards/${scorecardID}`)
                .then(resp => resp.json())
                .then(scorecard => this.setState({
                    scorecardToEdit: scorecard
                }))
                .then(() => this.populateScorecardData())
        }
    }

    populateScorecardData = () => {
        const f9 = this.state.scorecardToEdit.scores_front
        const b9 = this.state.scorecardToEdit.scores_back
        let scoreObj = {}

        if (b9 === null || b9.length === undefined ) {
            this.setState({
                numHoles: 9
            })
            for (let i = 1; i <= f9.length; i++) {
                scoreObj[i] = (f9[i - 1])
            }
        } else {
            this.setState({
                numHoles: 18
            })
            const scoreArr = f9.concat(b9)
            for (let i = 1; i <= scoreArr.length; i++) {
                scoreObj[i] = (scoreArr[i - 1])
            }
        }
        this.setState({
            scores: scoreObj
        })
    }

    render() {
        // console.log(this.state)
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