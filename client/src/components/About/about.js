import React, { Component } from "react";
// import "./about.css";
import picture from "../img/piggy_gg.png";
import { Col, Card, CardTitle, Row } from "react-materialize";

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
        <Row>
          <Col s={12} m={6} l={6}>
            <Card header={<CardTitle reveal image={"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/37766365_10155970757989023_3043695154893422592_n.jpg?_nc_cat=110&_nc_ht=scontent-sjc3-1.xx&oh=f1f5e7783461d469aa5301f78a9fecd2&oe=5D1CECE2"} waves='light' />}
              title="Josh Moore"
              reveal={
                <div>
                  <h5>Joshua Moore</h5>
                  <h6>Front-End Web Developer</h6>
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
                </div>}>
              <p><a href="https://github.com/joshmoore2003" target="_blank" rel="noopener noreferrer">Github Profile</a></p>
            </Card>
          </Col>
          <Col s={12} m={6} l={6}>
            <Card header={<CardTitle reveal image={picture} waves='light' />}
              title="Dennis Tam"
              reveal={<div>
                <h5>Dennis Tam</h5>
                <h6>Web Developer</h6>
                <p>
                  Let Dennis think about this.
                </p>
              </div>}>
              <p><a href="https://github.com" target="_blank" rel="noopener noreferrer">Github Profile</a></p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col s={12} m={6} l={6}>
            <Card header={<CardTitle reveal image={picture} waves='light' />}
              title="Max Hsieh"
              reveal={
                <div>
                  <h5>Max Hsieh</h5>
                  <h6>Front-End Web Developer</h6>
                  <p>
                    Let Max think about this.
                  </p>
                </div>}>
              <p><a href="https://github.com/MaxHsieh0615" target="_blank" rel="noopener noreferrer">Github Profile</a></p>
            </Card>
          </Col>
          <Col s={12} m={6} l={6}>
            <Card header={<CardTitle reveal image={picture} waves='light' />}
              title="Gian Banares"
              reveal={
                <div>
                  <h5>Gian Banares</h5>
                  <h6>Web Developer</h6>
                  <p>
                    Let Gian think about this.
                  </p>
                </div>}>
                <p><a href="https://github.com" target="_blank" rel="noopener noreferrer">Github Profile</a></p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col s={12} m={6} l={6}>
            <Card header={<CardTitle reveal image={picture} waves='light' />}
              title="Richard Luong"
              reveal={
                <div>
                  <h5>Richard Luong</h5>
                  <h6>Web Developer</h6>
                  <p>
                    Let Richard think about this.
                  </p>
                </div>}>
              <p><a href="https://github.com" target="_blank" rel="noopener noreferrer">Github Profile</a></p>
            </Card>
          </Col>
          <Col s={12} m={6} l={6}>
            <Card header={<CardTitle reveal image={picture} waves='light' />}
              title="Banksalot, Piggy"
              reveal={
                <div>
                  <h5>Banksalot, Piggy</h5>
                  <h6>Keeper of Money</h6>
                  <p>
                  I am a happy pig. I can keep count of your earnings.
                  </p>
                </div>}>
                <p><a href="https://github.com/MaxHsieh0615/pigs-with-money" target="_blank" rel="noopener noreferrer">PiggyBusiness Github</a></p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
