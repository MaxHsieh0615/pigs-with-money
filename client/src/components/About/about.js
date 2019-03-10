import React, { Component } from "react";
import { Link } from "react-router-dom";


class About extends Component {
  render() {
    return (
      <div>
        <div className="section center">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vulputate ultrices ex eget dignissim. Donec sed molestie dolor. Nam
            nec nulla maximus, vestibulum mi non, sollicitudin orci. Integer
            auctor nulla non risus auctor aliquam sit amet quis nunc. Vivamus
            sit amet neque gravida, semper dui quis, tristique lacus.
            Pellentesque nec ipsum libero. Aenean id dapibus dui, et hendrerit
            purus.
          </p>
        </div>
        <br />
        <br />
        <div className="row center">
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src="images/sample-1.jpg" alt="sample1"/>
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
                <Link to="#">This is a link</Link>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src="images/sample-1.jpg" alt="sample1"/>
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
                <Link to="#">This is a link</Link>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src="images/sample-1.jpg" alt="sample1"/>
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
                <Link to="#">This is a link</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
