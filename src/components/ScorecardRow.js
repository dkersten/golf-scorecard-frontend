import React, { Component } from 'react';

class ScorecardRow extends Component {
    state = {

    }

    handleChange = (e) => {
        this.props.changeFunc(parseInt(e.target.value))
    }

    render() {
        return(
            <tr>
                <td>{this.props.num}</td>
                <td><input onChange={this.handleChange} name={`n${this.props.num}`} type="text" placeholder="Score" /></td>
            </tr>
        )
    }
}

export default ScorecardRow