import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";

class LogOutNavlinks extends React.Component {
    render() {
        return (
            <div>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </div>
        );
    }
}

class LoginSideNavlinks extends React.Component {
    render() {
        return (
            <div>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/createjob">Create Job</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><button to="/" onClick={this.props.logout} id="logoutbtn">Log Out</button></li>
            </div>
        );
    }
}

export {LogOutNavlinks, LoginSideNavlinks}