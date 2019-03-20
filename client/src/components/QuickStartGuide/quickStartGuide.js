import React, { Component } from "react";
import { Parallax } from "react-materialize";
import "./style.css";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

class QuickStartGuide extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2 className="header center">Quick Start Guide</h2>
        </div>
        <div className="section transparent z-depth-0">
          <div className="row container">
            <h4 className="grey-text text-darken-3 lighten-3">
              As of this writing, we have the jobs, children and shop sections
              available.
            </h4>
          </div>
        </div>
        <div className="row container center">
          <h4>To use the app:</h4>
          <p>
            <ol>
              <li>Add a Job</li>
              <li>Add a Child</li>
              <li>Add items to shop</li>
            </ol>
          </p>
          <p>
            Once the child completes a job, the money will be “paid” to the
            child’s account. <br />
            If the child has money in the account, go shopping!
          </p>
        </div>
      </div>
    );
  }
}

export default QuickStartGuide;
