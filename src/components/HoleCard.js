import React from 'react';

const HoleCard = (props) => {
    const {name, picture, par, distance } = props
    let num = name.split(" ")
    num = num[num.length - 1]
    return(
        <div className="card hole-card">
            <h2>Hole: <span>{num}</span></h2>
            <p>Par: <span>{par}</span></p>
            <p>Distance: <span>{distance}</span></p>
            <img src={picture} alt={`Hole ${num} layout`}/>
        </div>
    )
}

export default HoleCard