import React, { Component } from 'react'
import logo from '../img/piggybusiness_logo_01.png';
import '../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./style.css";
import {LogOutNavlinks, LoginSideNavlinks} from '../Navlinks/Navlinks';

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
                                <Link to="#!"><img className="brand-logo" id="logo" alt="logo" src={logo} /></Link>
                                <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                                <ul className="right hide-on-med-and-down">
                                    <LoginSideNavlinks 
                                        logout = {this.logout}
                                    />
                                </ul>
                                <ul className="sidenav" id="mobile-demo">
                                    <LoginSideNavlinks 
                                        logout = {this.logout}
                                    />
                                </ul>
                            </div>
                        </nav>
                    ) : (
                            <nav>
                                <div className="nav-wrapper">
                                    <Link to=""><img className="brand-logo" id="logo" alt="logo" src={logo} /></Link>
                                    <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                                    <ul className="right hide-on-med-and-down">
                                        <LogOutNavlinks />
                                    </ul>
                                    <ul className="sidenav" id="mobile-demo">
                                        <LogOutNavlinks />
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