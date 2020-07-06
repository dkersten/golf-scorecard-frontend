import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passConf: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(resp => resp.json())
        .then(user => this.props.updateUserFunc(user))

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passConf: ''
        })
    }

    render() {
        // console.log(this.props)
        return(
            <div className="signup">
                <main>
                    <div className="inner-container">
                        <form onSubmit={this.handleSubmit} className="card">
                            <h1>Sign Up</h1>

                            <input name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" type="text"/>

                            <input name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name" type="text"/>

                            <input name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" type="email"/>

                            <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" type="password"/>

                            <input name="passConf" value={this.state.passConf} onChange={this.handleChange} placeholder="Confirm Password" type="password"/>

                            <input type="submit" className="btn" />

                            <p>Or <Link to="/login">login</Link> if you have an account.</p>
                        </form>
                    </div>
                </main>
            </div>
        )
    }
}

export default SignUp;