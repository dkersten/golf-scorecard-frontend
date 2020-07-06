import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component {

    state = {
        openNav: false
    }

    toggleNav = () => {
        this.setState({
            openNav: !this.state.openNav
        })
    }

    toggleIcon = () => {
        if (this.state.openNav === false) {
            return(
                <svg onClick={this.toggleNav} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"/></svg>
            )
        } else {
            return(
                <svg onClick={this.toggleNav} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"/></svg>
            )
        }
    }

    closeNavMenu = () => {
        this.setState({
            openNav: !this.state.openNav
        })
    }

    handleLogOut = () => {
        this.props.logoutFunc()
    }

    navOpen = () => {
        return(
            <div onClick={this.closeNavMenu} className="nav-links">
                <ul>
                    <li><NavLink to="/scorecard/new">Create New Scorecard</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/courses">Courses</NavLink></li>
                    <li><NavLink onClick={this.handleLogOut} to="/">Log Out</NavLink></li>
                </ul>
            </div>
        )
    }

    render() {
        return(
            <nav>
                <div className="inner-container">
                    <div className="btn-container">
                        { this.toggleIcon() }
                        { this.state.openNav ? this.navOpen() : null }
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;