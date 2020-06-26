import React from 'react';

const Profile = (props) => {

    console.log(props)

    return(
        <div className="profile">
            <main>
                <div className="inner-container">
                    <h1>Welcome {props.user.firstName}!</h1>
                    <div className="stat-container">
                        <section className="card stats">
                            <p>You have played <span>12</span> rounds</p>
                            <p>Your best score on 18 holes is <span>81</span></p>
                            <p>Your best score on 9 holes is <span>39</span></p>
                        </section>
                        <h2>Your previous scorecards</h2>
                        <div className="scorecard-container">
                            <div className="scorecard-overview card">
                                <p>Course: <span>Brighton</span></p>
                                <p>Date: <span>6/18/20</span></p>
                                <p>Score: <span>42</span></p>
                            </div>
                            <div className="scorecard-overview card">
                                <p>Course: <span>Terry Hills</span></p>
                                <p>Date: <span>6/13/20</span></p>
                                <p>Score: <span>87</span></p>
                            </div>
                            <div className="scorecard-overview card">
                                <p>Course: <span>Sheridan</span></p>
                                <p>Date: <span>6/10/20</span></p>
                                <p>Score: <span>45</span></p>
                            </div>
                            <div className="scorecard-overview card">
                                <p>Course: <span>Brighton</span></p>
                                <p>Date: <span>6/20/20</span></p>
                                <p>Score: <span>40</span></p>
                            </div>
                            <div className="scorecard-overview card">
                                <p>Course: <span>Holiday Valley</span></p>
                                <p>Date: <span>6/22/20</span></p>
                                <p>Score: <span>91Profile</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Profile