import React, { Component } from "react";
import { Parallax, Slider, Slide } from "react-materialize";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">Slider</h2>
            <p className="grey-text text-darken-3 lighten-3">Lorem.</p>
          </div>
        </div>
        <Slider>
          <Slide
            src="http://lorempixel.com/580/250/nature/1"
            title="This is our big Tagline!">
            Here's our small slogan.
        </Slide>
          <Slide
            src="http://lorempixel.com/580/250/nature/2"
            title="Left aligned Caption"
            placement="left">
            Here's our small slogan.
        </Slide>
          <Slide
            src="http://lorempixel.com/580/250/nature/3"
            title="Right aligned Caption"
            placement="right">
            Here's our small slogan.
        </Slide>
        </Slider>
        <div className="section white">
          <div className="row container">
            <h2 className="header">Children today are more connected than ever.</h2>
            <p className="grey-text text-darken-3 lighten-3">
They have been born in a fast-paced, ever-changing world full of technological advances. Today is a world where technology is the norm.</p>
          </div>
        </div>
        <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg" />
        <div className="section white">
          <div className="row container">
            <h2 className="header">Parallax</h2>
            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
          </div>
        </div>
        <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg" />
        <div className="section white">
          <div className="row container">
            <h2 className="header">Parallax</h2>
            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
          </div>
        </div>
        <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg" />
        <div className="section white">
          <div className="row container">
            <h2 className="header">Parallax</h2>
            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
          </div>
        </div>
        <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg" />
      </div>
    );
  }
}

export default Home;
