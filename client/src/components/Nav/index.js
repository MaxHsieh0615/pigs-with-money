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
            <header>
                <div>
                    {loggedIn ? (
                        <nav>
                        <div className="nav-wrapper">
                            <a href="#!"><img className="brand-logo" id="logo" alt="logo" src={logo} /></a>
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href="/" >Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/createjob">Create Job</a></li>
                                <li><a href="/shop">Shop</a></li>
                                <li><a href="/" onClick={this.logout}>Log Out</a></li>
                            </ul>
                            <ul className="sidenav" id="mobile-demo">
                            <li><a href="/" >Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/createjob">Create Job</a></li>
                                <li><a href="/shop">Shop</a></li>
                                <li><a href="/" onClick={this.logout}>Log Out</a></li>
                            </ul>
                        </div>
                    </nav>
                    ) : (
                            <nav>
                                <div className="nav-wrapper">
                                    <a href=""><img className="brand-logo" id="logo" alt="logo" src={logo} /></a>
                                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                                    <ul className="right hide-on-med-and-down">
                                        <li><a href="/" >Home</a></li>
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/login">Login</a></li>
                                        <li><a href="/signup">Sign Up</a></li>
                                    </ul>
                                    <ul className="sidenav" id="mobile-demo">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/login">Login</a></li>
                                        <li><a href="/signup">Sign Up</a></li>
                                    </ul>
                                </div>
                            </nav>

                        )}
                </div>
            </header>

        );

    }
}

export default Navbar