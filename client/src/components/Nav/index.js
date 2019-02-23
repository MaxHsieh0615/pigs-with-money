import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/piggybusiness_logo_01.png';
import '../../App.css';
import axios from 'axios';
import "./style.css";

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        return (
            <header className="navbar App-header" id="nav-mobile">
                <div>
                    {loggedIn ? (
                            <nav>
                                <div className="nav-wrapper">
                                    <img class="brand-logo" id="logo" alt="logo" src={logo} />
                                    <Link to="/" className="btn btn-link right hide-on-med-and-down">
                                        <span>home</span>
                                    </Link>
                                    <Link to="/" className="btn btn-link right hide-on-med-and-down" onClick={this.logout}>
                                        <span>logout</span></Link>
                                </div>
                            </nav>
                    ) : (
                            <nav>
                                <div className="nav-wrapper">
                                    <img class="brand-logo" id="logo" alt="logo" src={logo} />
                                    <Link to="/login" className="btn btn-link right hide-on-med-and-down">
                                        <span>login</span>
                                    </Link>
                                    <Link to="/signup" className="btn btn-link right hide-on-med-and-down">
                                        <span>sign up</span>
                                    </Link>
                                </div>
                            </nav>
                        )}
                </div>
            </header>

        );

    }
}

export default Navbar