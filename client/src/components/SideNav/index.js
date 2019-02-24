import React from "react";
import "./style.css";


function SideNav() {
    return (
        <div>
            <ul id="slide-out" className="sidenav">
                {/* <li>
                    <div className="user-view">
                        <div className="background">
                            <img src="#" />
                            <a href="#user"><img className="circle" src="images/yuna.jpg" /></a>
                            <a href="#name"><span className="white-text name">John Doe</span></a>
                            <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                        </div>
                    </div>
                </li>
                <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li> */}
                <li><a className="waves-effect" href="/">Home</a></li>
                {/* <li><div className="divider"></div></li>
                <li><a className="subheader">Subheader</a></li> */}
                <li><a className="waves-effect" href="/signup">Sign Up</a></li>
                <li><a className="waves-effect" href="/login">Log In</a></li>
                <li><a className="waves-effect" href="/">Log Out</a></li>
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i class="material-icons">menu</i></a>
        </div>
    );
}
export default SideNav;