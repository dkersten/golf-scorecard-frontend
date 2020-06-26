import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("login submitted")
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="login">
                <main>
                    <div className="inner-container">
                        <form onSubmit={this.handleSubmit} className="card">
                            <h1>Login</h1>

                            <input name="email" value={this.state.email} onChange={this.handleChange} placeholder="Your email" type="email"/>

                            <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="Your password" type="password"/>

                            <input type="submit" className="btn" />

                            <p>Or <Link to="/signup">sign up</Link> if you don't have an account.</p>
                        </form>
                    </div>
                </main>
            </div>
        )
    }
}

export default Login;