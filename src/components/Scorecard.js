import React, { Component } from 'react';

class ScoreCard extends Component {

    state = {}

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitScorecard = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState !== this.state) {
            let scoreObj = this.state
            const scores = Object.values(scoreObj)
            // console.log(scores)
            if (scores.length > 1) {
                this.computeScoreTotal(scores)
            } else {
                this.computeScoreTotal(scores[0])
            }
        }
    }

    computeScoreTotal = scores => {
        let totalScore = 0
        if (scores === undefined) {
            return 0
        } else {
            if (scores.length === 1) {
                totalScore = Number(scores)
                console.log(totalScore)
                return totalScore        
            } else if (scores.length > 1) {
                for (const score of scores) {
                    totalScore += (Number(score))
                }
                console.log(totalScore)
                return totalScore
            }
        }
    }

    render() {
        // console.log("2".length)
        // console.log(this.computeScoreTotal())
        return(
            <div className="scorecard">
                <main>
                    <div className="inner-container">
                        <form onSubmit={this.submitScorecard}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Hole</th>
                                        <th>Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
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
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>
                                            { this.computeScoreTotal() }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <input type="submit"/>
                        </form>
                    </div>
                </main>
            </div>
        )
    }
}

export default ScoreCard