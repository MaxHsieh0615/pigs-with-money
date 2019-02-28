import React from 'react'
import { Link } from 'react-router-dom';


class Navlinks extends React.Component {
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

class SideNavlinks extends React.Component {
    render() {
        return (
            <div>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/createjob">Create Job</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/" onClick={this.logout}>Log Out</Link></li>
            </div>
        );
    }
}

export {Navlinks, SideNavlinks}