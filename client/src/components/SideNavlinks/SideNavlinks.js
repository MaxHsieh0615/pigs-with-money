import React from 'react'
import { Link } from 'react-router-dom';


class SideNavlinks extends React.Component {
    render() {
        return (
            <div>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/createjob">Create Job</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><a to="/" onClick={this.logout}>Log Out</a></li>
            </div>
        );
    }
}

export default SideNavlinks