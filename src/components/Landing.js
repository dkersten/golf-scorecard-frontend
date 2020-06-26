import React from 'react';
import imgScore from '../media/score.png';
import imgStats from '../media/stats.png';

const Landing = () => {
    return(
        <div className="parent-container landing">
            <header>
                <div className="inner-container">
                    <h1>Send It Golf</h1>
                    <div className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 416 512"><path d="M416 208C416 94.2 324.7 1.8 211.3 0 97.3-1.8 2.5 89.4.1 203.4c-1.3 60.7 23.6 115.3 64 154.1V416c0 30.9 25.1 56 56 56h16c4.4 0 8 3.6 8 8v20c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12v-20c0-30.9-25.1-56-56-56-12.8 0-24 2.1-24-8v-32h192v32c0 10.1-11.2 8-24 8-30.9 0-56 25.1-56 56v20c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12v-20c0-4.4 3.6-8 8-8h16c30.9 0 56-25.1 56-56v-58.5C391.3 319.7 416 266.8 416 208zM208 48c88.2 0 160 71.8 160 160 0 52.7-25.9 99-65.5 128h-189C73.9 307 48 260.7 48 208c0-88.2 71.8-160 160-160zm48 142.9c0 18.3-14.8 33.1-33.1 33.1-14.4 0-26.3-9.3-30.9-22.1 26.3 9.4 51.5-15.2 41.9-41.9 12.8 4.6 22.1 16.5 22.1 30.9zm80 16c0 18.3-14.8 33.1-33.1 33.1-14.4 0-26.3-9.3-30.9-22.1 26.3 9.4 51.5-15.2 41.9-41.9 12.8 4.6 22.1 16.5 22.1 30.9zm-64 64c0 18.3-14.8 33.1-33.1 33.1-14.4 0-26.3-9.3-30.9-22.1 26.3 9.4 51.5-15.2 41.9-41.9 12.8 4.6 22.1 16.5 22.1 30.9z"/></svg>
                    </div>
                    <p>Get course information and record your score in one place!</p>
                    <div className="action-container">
                        <a href="#" className="login btn">Login</a>
                        <a href="#" className="signup btn">Sign Up</a>
                    </div>
                </div>
            </header>
            <main>
                <div className="inner-container">
                    <h2>Keep the Focus on Your Game</h2>
                    <div className="card-container">
                        <section className="card">
                            <div className="left">
                                <img src={imgScore} alt=""/>
                            </div>
                            <div className="right">
                                <h3>Record Your Score</h3>
                                <p>Our simple scorecard will keep your focus on your next shot and not on your phone.</p>
                            </div>
                        </section>
                        <section className="card">
                            <div className="left">
                                <img src={imgStats} alt=""/>
                            </div>
                            <div className="right">
                                <h3>Get Course Information</h3>
                                <p>Plan out your strategy at each hole by seeing hole stats and layout.</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Landing;