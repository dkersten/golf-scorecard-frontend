import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

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

        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(resp => resp.json())
            .then(user => this.props.updateUserFunc(user))
            .then(() => {
                this.setState({
                    email: '',
                    password: ''
                })
            })
            .then(() => this.props.history.push('/profile'))
        
    }



    render() {
        // console.log(this.props)
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

export default withRouter(Login)