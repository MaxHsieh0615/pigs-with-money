import React, { Component } from "react";
import "./about.css";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <div className="section center">
          <h3>Our Mission</h3>
          <h5>To create a fun and engaging platform for the future.</h5>
          <br />
          <p>
            At Piggy Business, we are a committed team of life long learners. We
            believe that we should adapt to new technologies and help others
            around us too. This application is a team project that we started
            for a class. It has since evolved into something more!
          </p>
          <p>
            We’ve seen parents and children alike find joy in earning and
            learning to spend money wisely. We hope you sign up and check it
            out!
          </p>
          <p>Feel free to reach out to our team.</p>
          <p>Enjoy your visit.</p>
        </div>
        <div className="row center">
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/37766365_10155970757989023_3043695154893422592_n.jpg?_nc_cat=110&_nc_ht=scontent-sjc3-1.xx&oh=f1f5e7783461d469aa5301f78a9fecd2&oe=5D1CECE2" />
                {/* <span className="card-title josh">Joshua Moore</span> */}
              </div>
              <h5>Joshua Moore</h5>
              <h6>Front-End Web Developer</h6>
              <div className="card-content">
                <p>
                  I have a passion for building state-of-the-art, easy to use
                  websites that result in an improved customer online
                  experience.
                </p>
                <p>
                  I love learning, brainstorming and collaborating with others
                  on group projects as well as learning new techniques,
                  processes and programming languages that can provide a new and
                  more efficient way of writing and implementing code.
                </p>
              </div>
              <div className="card-action">
                <a href="https://github.com/joshmoore2003" target="_blank">
                  Github Profile
                </a>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src={require("../img/piggy_gg.png")} />
                <span className="card-title">Banksalot, Piggy</span>
              </div>
              <h5>Piggy Banksalot</h5>
              <h6>Keeper of Money</h6>
              <div className="card-content">
                <p>I am a happy pig. I can keep count of your earnings.</p>
              </div>
              <div className="card-action">
                <a href="#">Piggy Business</a>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src={require("../img/piggy_gg.png")} />
                <span className="card-title">Max</span>
              </div>
              <h5>Max</h5>
              <h6>Front End Developer</h6>
              <div className="card-content">
                <p>Materialize CSS fan.</p>
              </div>
              <div className="card-action">
                <a href="#">Max Github</a>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src={require("../img/piggy_gg.png")} />
                <span className="card-title">Dennis Tam</span>
              </div>
              <h5>Dennis Tam</h5>
              <h6>Web Developer</h6>
              <div className="card-content">
                <p>
                  Full Stack Web Developer. Development Master Maintenance
                  Engineer.
                </p>
              </div>
              <div className="card-action">
                <a href="#">Dennis Github</a>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src={require("../img/piggy_gg.png")} />
                <span className="card-title">Richard Luong</span>
              </div>
              <h5>Richard Luong</h5>
              <h6>Web Developer</h6>
              <div className="card-content">
                <p>
                  Full Stack Web Developer. Makes sure the piggy holds money.
                </p>
              </div>
              <div className="card-action">
                <a href="#">Richard Github</a>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src={require("../img/piggy_gg.png")} />
                <span className="card-title">Gian Banares</span>
              </div>
              <h5>Gian</h5>
              <h6>Web Developer</h6>
              <div className="card-content">
                <p>I really don't know what to put here.</p>
              </div>
              <div className="card-action">
                <a href="#">Piggy Business</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
