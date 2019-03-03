import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";

class LogOutNavlinks extends React.Component {
    render() {
        return (
            <div>
                <li><Link className="sidenav-close" to="/" >Home</Link></li>
                <li><Link className="sidenav-close" to="/about">About</Link></li>
                <li><Link className="sidenav-close" to="/login">Login</Link></li>
                <li><Link className="sidenav-close" to="/signup">Sign Up</Link></li>
            </div>
        );
    }
}

class LoginSideNavlinks extends React.Component {
    render() {
        return (
            <div>
                <li><Link className="sidenav-close" to="/" >Home</Link></li>
                <li><Link className="sidenav-close" to="/about">About</Link></li>
                <li><Link className="sidenav-close" to="/createjob">Jobs</Link></li>
                <li><Link className="sidenav-close" to="/addchild">Children</Link></li>
                <li><Link className="sidenav-close" to="/shop">Shop</Link></li>
                <li><button className="sidenav-close" to="/" onClick={this.props.logout}>Log Out</button></li>
            </div>
        );
    }
}

export {LogOutNavlinks, LoginSideNavlinks}