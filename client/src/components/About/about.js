import React, { Component } from "react";
import "./about.css";

class About extends Component {
  render() {
    return (
      <div>
        <div className="section center">
          <h3>About Us</h3>
          <p>
            We're a team of 5 people based in the California Bay Area. We are all responsible for working on the product (front-end design and back-end design). We love what we do and look forward to you trying our application.
          </p>
        </div>
        <br />
        <br />
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
                I have a passion for building state-of-the-art, easy to use websites that result in an improved customer online experience. 
                </p>
                <p>
                I love learning, brainstorming and collaborating with others on group projects as well as learning new techniques, processes and programming languages that can provide a new and more efficient way of writing and implementing code.
                </p>
              </div>
              <div className="card-action">
                <a href="https://github.com/joshmoore2003" target="_blank">Github Profile</a>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src="images/sample-1.jpg" />
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src="images/sample-1.jpg" />
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
