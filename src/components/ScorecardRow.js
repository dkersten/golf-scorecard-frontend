import React from 'react';

const ScorecardRow = (props) => {
    return(
        <tr>
            <td>{props.num}</td>
            <td><input name={props.num} type="text" placeholder="Score" /></td>
        </tr>
    )
}

{/* <tr>
    <td>1</td>
    <td><input name="h1" value={this.state.h1} onChange={this.handleChange} type="text" placeholder="Hole Score" /></td>
</tr> */}

export default ScorecardRow