import React, { Component } from "react";
import { Parallax} from "react-materialize";
import "./style.css";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop"

class Home extends Component {
  render() {

    return (
      <div>
        <div className="container">
          <h1 className="header center">Learn. Earn. Save.</h1>

          <h1 className="center">
            <TypistLoop interval={1000}>
              {[
                "Teaching Values",
                "Saving for the future",
                "Creating fun",
              ].map(text => <Typist key={text} startDelay={0}>
                {text}
                <Typist.Backspace count={text.length} delay={1000} />
              </Typist>)}
            </TypistLoop>
          </h1>
        </div>
        <div className="section transparent z-depth-0">
          <div className="row container">
            <h2 className="header center">Children today are more connected than ever.</h2>
            <h4 className="grey-text text-darken-3 lighten-3">
              They have been born in a fast-paced, ever-changing world full of technological advances. Today is a world where technology is the norm.</h4>
          </div>
        </div>
        <Parallax imageSrc={require("../img/img_slide1.jpg")}/>
        <div className="section transparent z-depth-0">
          <div className="row container center">
            <h4 className="grey-text text-darken-3 lighten-3">
              It is a medium in which some choose to teach their children. This
              app was created as a learning tool in the hopes that children
              would learn the value of a dollar. Many children today don’t
              really see the challenges of having to earn money. They see their
              parents make online payments, swipe their credit cards, or create
              wireless payments.
            </h4>
          </div>
        </div>
        <Parallax imageSrc={require("../img/img_slide2.jpg")} />
        <div className="section transparent z-depth-0">
          <div className="row container center">
            <h4 className="grey-text text-darken-3 lighten-3">
              We wanted to give parents the power to show a child a fun and
              engaging way to earn money with tasks at home. Some call it
              chores, some call it jobs. With the money earned, the parents can
              provide acceptable prizes in an online shop and provide a view of
              the child’s piggy bank.{" "}</h4>
          </div>
        </div>
        <Parallax imageSrc={require("../img/img_slide3.jpg")} />
        <div className="section transparent z-depth-0">
          <div className="row container center">
            <h4 className="grey-text text-darken-3 lighten-3">
              The goal is so that one day, the virtual entrepreneurs can take
              the knowledge gained from their virtual enterprise into the real
              world.</h4>
              {/* <h4><a href="/signup">Sign up</a> today!</h4> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
