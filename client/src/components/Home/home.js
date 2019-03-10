import React, { Component } from "react";
import { Slider, Slide } from "react-materialize";

class Home extends Component {
  render() {
    const imageStyle = {
      width: 400
    };
    return (
      <div>
        <div className="container">
          <h1 className="header center">Learn. Earn. Save.</h1>
          <Slider>
            <Slide
              src={require("../img/img_slide1.jpg")}
              title="Teaching values"
            >
              Start them early!
            </Slide>
            <Slide
              src={require("../img/img_slide2.jpg")}
              title="Saving for the future"
              placement="left"
            >
              Create savings and set goals!
            </Slide>
            <Slide
              src={require("../img/img_slide3.jpg")}
              title="Creating fun"
              placement="right"
            >
              Give them the power of choice.
            </Slide>
          </Slider>

          <div className="row center">
            <h5 className="header col s12 light">
              Children today are more connected than ever.{" "}
            </h5>
          </div>
          <div>
            <p>
              They have been born in a fast-paced, ever-changing world full of
              technological advances. Today is a world where technology is the
              norm.
            </p>
            <p>
              It is a medium in which some choose to teach their children. This
              app was created as a learning tool in the hopes that children
              would learn the value of a dollar. Many children today don’t
              really see the challenges of having to earn money. They see their
              parents make online payments, swipe their credit cards, or create
              wireless payments.
            </p>
            <p>
              We wanted to give parents the power to show a child a fun and
              engaging way to earn money with tasks at home. Some call it
              chores, some call it jobs. With the money earned, the parents can
              provide acceptable prizes in an online shop and provide a view of
              the child’s piggy bank.{" "}
            </p>
            <p>
              The goal is so that one day, the virtual entrepreneurs can take
              the knowledge gained from their virtual enterprise into the real
              world.
            </p>
            <div className="center">
              <p>Enjoy your visit, and hope you sign-up!</p>
            </div>
            {/* <img
              style={imageStyle}
              alt="test"
              src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg"
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
