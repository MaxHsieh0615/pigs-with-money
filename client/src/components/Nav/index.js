import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import logo from '../logo.svg';
import '../../App.css';
import axios from 'axios'

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
            // <nav>
            //     <div class="nav-wrapper">
            //         <a href="#" class="brand-logo">Logo</a>
            //         <ul id="nav-mobile" class="right hide-on-med-and-down">
            //             <li><a href="sass.html">Sass</a></li>
            //             <li><a href="badges.html">Components</a></li>
            //             <li><a href="collapsible.html">JavaScript</a></li>
            //         </ul>
            //     </div>
            // </nav>
            // <div>
            <header className="navbar App-header" id="nav-container">
                <div className="col-4" >
                    {loggedIn ? (
                        <nav>
                            <div class="nav-wrapper">
                                <section className="navbar-section">
                                    <Link to="/" className="btn btn-link text-secondary">
                                        <span className="text-secondary">home</span>
                                    </Link>
                                    <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                        <span className="text-secondary">logout</span></Link>

                                </section>
                            </div>
                        </nav>
                    ) : (
                            <nav>
                                <div class="nav-wrapper">
                                    <section className="navbar-section">
                                        <a href="#" className="brand-logo"></a>
                                        <Link to="/login" className="btn btn-link text-secondary">
                                            <span className="text-secondary">login</span>
                                        </Link>
                                        <Link to="/signup" className="btn btn-link">
                                            <span className="text-secondary">sign up</span>
                                        </Link>
                                    </section>
                                </div>
                            </nav>
                        )}
                </div>
                {/* <div className="col-4 col-mr-auto">
                    <div id="top-filler"></div>
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">MERN Passport</h1>
                    </div> */}
            </header>

        );

    }
}

export default Navbar