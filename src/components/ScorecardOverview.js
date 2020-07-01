import React from 'react';

const ScorecardOverview = (props) => {

    const courseName = () => {
        for (const course of props.courses) {
            if (course.id === props.courseID) {
                return course.name
            }
        }
    }

    const computeScore = () => {
        if (props.scoresFront !== null && props.scoresBack !== null ) {
            const totalScoreArr = props.scoresFront.concat(props.scoresBack)
            const add = (a,b) => a + b
            const sum = totalScoreArr.reduce(add)
            if (props.scoresFront === null || props.scoresBack === null || props.scoresFront.length === 0 || props.scoresBack.length === 0) {
                return `${sum} (9 holes)`
            } else {
                return `${sum} (18 holes)`
            }
        } else {
            if (props.scoresBack === null || props.scoresFront.length === 0 || props.scoresBack.length === 0) {
                const add = (a,b) => a + b
                const sum = props.scoresFront.reduce(add)
                return `${sum} (9 holes)`
            } else if (props.scoresFront === null|| props.scoresFront.length === 0 || props.scoresBack.length === 0) {
                const add = (a,b) => a + b
                const sum = props.scoresBack.reduce(add)
                return `${sum} (9 holes)`
            }
        }
        
    }

    return(
        <div className="scorecard-overview card">
            <p>Course: <span>{courseName()}</span></p>
            <p>Date: <span>{props.date }</span></p>
            <p>Score: <span>{computeScore()}</span></p>
        </div>
    )
}

export default ScorecardOverview;