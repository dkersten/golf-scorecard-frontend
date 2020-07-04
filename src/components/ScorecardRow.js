import React, { Component } from 'react';

class ScorecardRow extends Component {
    state = {

    }

    handleChange = (e) => {
        this.props.changeFunc(e.target.value, this.props.num)
    }

    render() {
        const index = this.props.num
        return(
            <tr>
                <td>{this.props.num}</td>
                <td><input value={this.props.scores[index]} onChange={this.handleChange} name={index} type="number" placeholder="Score" /></td>
            </tr>
        )
    }
}

export default ScorecardRow