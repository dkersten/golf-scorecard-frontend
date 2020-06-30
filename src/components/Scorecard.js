import React, { Component } from 'react';
import ScorecardRow from './ScorecardRow.js'

class ScoreCard extends Component {

    state = {
        numHoles: '',
        scores_front: [],
        scores_back: [],
        currentTotalScore: 0
    }



    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitScorecard = (e) => {
        e.preventDefault()
        console.log(this.state)
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

    cardNumHoles = () => {
        if (this.state.numHoles === 9) {
            
            const holes = 9
            const rows = []
            for (let i = 1; i <= holes; i++) {
                rows.push( <ScorecardRow key={i} num={i} />)

            }
            return rows
        } else if (this.state.numHoles === 18) {
            const holes = 18
            const rows = []
            for (let i = 0; i <= holes; i++) {
                rows.push( <ScorecardRow key={i} num={i} /> )
            }
            return rows
        }
    }

    render() {
        // console.log(this.state.numHoles)
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
                                    {/* <tr>
                                        <td>1</td>
                                        <td><input name="h1" value={this.state.h1} onChange={this.handleChange} type="text" placeholder="Hole Score" /></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><input name="h2" value={this.state.h2} onChange={this.handleChange} type="text" placeholder="Hole Score" /></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><input name="h3" value={this.state.h3} onChange={this.handleChange} type="text" placeholder="Hole Score" /></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td><input name="h4" value={this.state.h4} onChange={this.handleChange} type="text" placeholder="Hole Score" /></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td><input name="h5" value={this.state.h5} onChange={this.handleChange} type="text" placeholder="Hole Score" /></td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td><input name="h6" value={this.state.h6} onChange={this.handleChange} type="text" placeholder="Hole Score" /></td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td><input name="h7" value={this.state.h7} onChange={this.handleChange} type="text" placeholder="Hole Score" /></td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td><input name="h8" value={this.state.h8} onChange={this.handleChange} type="text" placeholder="Hole Score" /></td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td><input name="h9" value={this.state.h9} onChange={this.handleChange} type="text" placeholder="Hole Score" /></td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td><input name="h10" value={this.state.h10} onChange={this.handleChange} type="text" placeholder="Hole Score" /></td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td><input name="h11" value={this.state.h11} onChange={this.handleChange} type="text" placeholder="Hole Score" /></td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td><input name="h12" value={this.state.h12} onChange={this.handleChange} type="text" placeholder="Hole Score" /></td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td><input name="h13" value={this.state.h13} onChange={this.handleChange} type="text" placeholder="Hole Score" /></td>
                                    </tr>
                                    <tr>
                                        <td>14</td>
                                        <td><input name="h14" value={this.state.h14} onChange={this.handleChange} type="text" placeholder="Hole Score" /></td>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td><input name="h15" value={this.state.h15} onChange={this.handleChange} type="text" placeholder="Hole Score" /></td>
                                    </tr>
                                    <tr>
                                        <td>16</td>
                                        <td><input name="h16" value={this.state.h16} onChange={this.handleChange} type="text" placeholder="Hole Score" /></td>
                                    </tr>
                                    <tr>
                                        <td>17</td>
                                        <td><input name="h17" value={this.state.h17} onChange={this.handleChange} type="text" placeholder="Hole Score" /></td>
                                    </tr>
                                    <tr>
                                        <td>18</td>
                                        <td><input name="h18" value={this.state.h18} onChange={this.handleChange} type="text" placeholder="Hole Score" /></td>
                                    </tr> */}
                                    <tr>
                                        <td>Total</td>
                                        <td>
                                            Update
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <input className="btn" type="submit"/>
                        </form>
                    </div>
                </main>
            </div>
        )
    }
}

export default ScoreCard