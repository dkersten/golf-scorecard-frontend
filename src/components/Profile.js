import React from 'react';
import ScorecardOverview from './ScorecardOverview.js'

const Profile = (props) => {

    const scorecards = props.scorecards
    console.log(scorecards)

    const bestRoundScore18 = () => {
        const scoresArr = []
        for (const scorecard of scorecards) {
            if (scorecard.scores_front !== null && scorecard.scores_back !== null) {
                let f9 = scorecard.scores_front
                let b9 = scorecard.scores_back
                // console.log(f9, b9)
                if (f9.length > 0 && b9.length > 0) {
                    let totalScore = f9.concat(b9)
                    const add = (a,b) => a + b
                    const sum = totalScore.reduce(add)
                    scoresArr.push(sum)
                }
            }

            if (scoresArr.length > 0) {
                const scores = scoresArr
                Array.min = function(scores){
                    return Math.min.apply(Math, scores)
                }
                const bestScore = Array.min(scores)
                return bestScore
            } else if (scoresArr === 0) {
                return "NA"
            }
        }
    }

    const bestRoundScore9 = () => {
        const scoresArr = []
        
        if (scorecards.length > 0) {
            for (const scorecard of scorecards) {
                const f9 = scorecard.scores_front
                const b9 = scorecard.scores_back
                // console.log(f9, b9)
                if (b9 === null || b9.length === 0) {
                    const add = (a,b) => a + b
                    const sum = f9.reduce(add)
                    scoresArr.push(sum)
                } else if (f9 === null || f9.length === 0) {
                    const add = (a,b) => a + b
                    const sum = b9.reduce(add)
                    scoresArr.push(sum)
                }
            }

            if (scoresArr.length > 0) {
                const scores = scoresArr
                Array.min = function(scores){
                    return Math.min.apply(Math, scores)
                }
                const bestScore = Array.min(scores)
                return bestScore
            } else if (scoresArr === 0) {
                return "NA"
            }
        }
    }

    const numofRounds = () => {
        if (scorecards !== undefined) {
            if (scorecards.length === 0) {
                return "no"
            } else {
                return scorecards.length
            }
        } else {
            return "NA"
        }
        
    }

    return(
        <div className="profile">
            <main>
                <div className="inner-container">
                    <h1>Welcome {props.user.firstName}!</h1>
                    <div className="stat-container">
                        <section className="card stats">
                            <p>You have played <span>{ numofRounds() }</span> rounds</p>
                            <p>Your best score on 18 holes is <span>{ bestRoundScore18() }</span></p>
                            <p>Your best score on 9 holes is <span>{ bestRoundScore9() }</span></p>
                        </section>
                        <h2>Your previous rounds</h2>
                        <div className="scorecard-container">
                            {
                                props.scorecards.map(scorecard => <ScorecardOverview 
                                    key={scorecard.id} 
                                    date={scorecard.created_at} 
                                    scoresFront={scorecard.scores_front} 
                                    scoresBack={scorecard.scores_back}
                                    scorecardID={scorecard.id}
                                    courseID={scorecard.course_id}
                                    courses={props.courses}
                                    editScorecardFunc={props.editScorecardFunc}
                                    deleteScorecardFunc={props.deleteScorecardFunc} />)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Profile