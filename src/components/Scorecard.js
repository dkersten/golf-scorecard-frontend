import React, { Component } from 'react';
import ScorecardRow from './ScorecardRow.js'

class ScoreCard extends Component {

    state = {
        numHoles: '',
        scores_front: [],
        scores_back: [],
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
        console.log("submit form")
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevState !== this.state) {
    //         let scoreObj = this.state
    //         const scores = Object.values(scoreObj)
    //         // console.log(scores)
    //         if (scores.length > 1) {
    //             this.computeScoreTotal(scores)
    //         } else {
    //             this.computeScoreTotal(scores[0])
    //         }
    //     }
    // }

    // computeScoreTotal = scores => {
    //     let totalScore = 0
    //     if (scores === undefined) {
    //         return 0
    //     } else {
    //         if (scores.length === 1) {
    //             totalScore = Number(scores)
    //             console.log(totalScore)
    //             return totalScore        
    //         } else if (scores.length > 1) {
    //             for (const score of scores) {
    //                 totalScore += (Number(score))
    //             }
    //             console.log(totalScore)
    //             return totalScore
    //         }
    //     }
    // }

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
        console.log("F:", this.state.scores_front, this.state.scores_front.length)
        console.log("B:", this.state.scores_back, this.state.scores_back.length)
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
                                            Update
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