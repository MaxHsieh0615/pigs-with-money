import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Navlinks extends React.Component {
  
  render() {
    const logoutLinks = ["Home", "About", "Login", "Sign Up"];
    const loginLinks = ["Home", "About", "Jobs", "Children","Shop"];
    let links = [];
    this.props.loggedIn ? links = loginLinks : links = logoutLinks;
    return (
      <div>
          { links.map(link =>(
            <li key={link}>
              <Link className="sidenav-close" to={"/"+  ((link === "Home") ? "" : link.replace(" ",""))}>
                {link}
              </Link>
            </li>
          )
        )}
        {this.props.loggedIn && (
          <li>
            <button className="sidenav-close" to="/" onClick={this.props.logout}>
              Log Out
            </button>
          </li>
        )}
      </div>
    );
  }
}

export default Navlinks;
