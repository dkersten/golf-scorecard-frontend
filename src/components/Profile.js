import React from 'react';
import ScorecardOverview from './ScorecardOverview.js'

const Profile = (props) => {

    const scorecards = props.scorecards
    console.log(scorecards)

    const bestRoundScore18 = () => {
        const scoresArr = []
        // if (props.scorecards.scores_back)
        for (const scorecard of scorecards) {
            const front9 = scorecard.scores_front
            const back9 = scorecard.scores_back

            if (front9 !== null && back9 !== null) {
                let totalScore = front9.concat(back9)
                const add = (a,b) => a + b
                const sum = totalScore.reduce(add)
                scoresArr.push(sum)
            }
        }
        
        if (scoresArr.length > 0) {
            const scores = scoresArr
            Array.min = function(scores){
                return Math.min.apply(Math, scores);
            }
            const bestScore = Array.min(scores)
            return bestScore
        }
    }

    const bestRoundScore9 = () => {
        const scoresArr = []
        for (const scorecard of scorecards) {
            const front9 = scorecard.scores_front
            const back9 = scorecard.scores_back

            if (front9 !== null) {
                const add = (a,b) => a + b
                const sum = front9.reduce(add)
                scoresArr.push(sum)
            } else if (back9 !== null) {
                const add = (a,b) => a + b
                const sum = back9.reduce(add)
                scoresArr.push(sum)
            }
        }

        if (scoresArr.length > 0) {
            const scores = scoresArr
            Array.min = function(scores){
                return Math.min.apply(Math, scores);
            }
            const bestScore = Array.min(scores)
            return bestScore
        }
    }
    

    const numofRounds = () => {
        if (scorecards.length === 0) {
            return "no"
        } else {
            return scorecards.length
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
                        <h2>Your previous scorecards</h2>
                        <div className="scorecard-container">
                            {
                                props.scorecards.map(scorecard => <ScorecardOverview 
                                    key={scorecard.id} 
                                    date={scorecard.created_at} 
                                    scoresFront={scorecard.scores_front} 
                                    scoresBack={scorecard.scores_back}
                                    courseID={scorecard.course_id}
                                    courses={props.courses} />)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Profile