import React, { Component } from "react";
import "./about.css";
import picture from "../img/piggy_gg.png";
import { Col, Card, CardTitle, Row } from "react-materialize";

class About extends Component {
  render() {
    return (
      <div>
        <div className="section center">
          <h1>Our Mission</h1>
          <h3>To create a fun and engaging platform for the future.</h3>
          <br />
          <h4>
            At Piggy Business, we are a committed team of life long learners. We
            believe that we should adapt to new technologies and help others
            around us too. This application is a team project that we started
            for a class. It has since evolved into something more!
          </h4>
          <h4>
            We’ve seen parents and children alike find joy in earning and
            learning to spend money wisely. We hope you sign up and check it
            out!
          </h4>
          <h4>Feel free to reach out to our team.</h4>
          <h4>Enjoy your visit.</h4>
        </div>
        <br></br>
        <div className="section center">
        <h1>Founders</h1>
        </div>
        <Row>
          <Col s={12} m={6} l={6}>
            <Card header={<CardTitle reveal image={"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/37766365_10155970757989023_3043695154893422592_n.jpg?_nc_cat=110&_nc_ht=scontent-sjc3-1.xx&oh=f1f5e7783461d469aa5301f78a9fecd2&oe=5D1CECE2"} waves='light' />}
              title="Josh Moore"
              reveal={
                <div className="center">
                  <h3>Front-End Web Developer</h3>
                  <h4>
                    I have a passion for building state-of-the-art, easy to use
                    websites that result in an improved customer online
                    experience.
              </h4>
                  <h4>
                    I love learning, brainstorming and collaborating with others
                    on group projects as well as learning new techniques,
                    processes and programming languages that can provide a new and
                    more efficient way of writing and implementing code.
              </h4>
                </div>}>
              <p><a href="https://github.com/joshmoore2003" target="_blank" rel="noopener noreferrer">Github Profile</a></p>
            </Card>
          </Col>
          <Col s={12} m={6} l={6}>
            <Card header={<CardTitle reveal image={picture} waves='light' />}
              title="Dennis Tam"
              reveal={
              <div className="center">
                <h3>Web Developer</h3>
                <h4>
                  Let Dennis think about this.
                </h4>
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
                <div className="center">
                  <h3>Front-End Web Developer</h3>
                  <h4>
                    Let Max think about this.
                  </h4>
                </div>}>
              <p><a href="https://github.com/MaxHsieh0615" target="_blank" rel="noopener noreferrer">Github Profile</a></p>
            </Card>
          </Col>
          <Col s={12} m={6} l={6}>
            <Card header={<CardTitle reveal image={picture} waves='light' />}
              title="Gian Banares"
              reveal={
                <div className="center">
                  <h3>Web Developer</h3>
                  <h4>
                    Let Gian think about this.
                  </h4>
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
                <div className="center">
                  <h3>Web Developer</h3>
                  <h4>
                    Let Richard think about this.
                  </h4>
                </div>}>
              <p><a href="https://github.com" target="_blank" rel="noopener noreferrer">Github Profile</a></p>
            </Card>
          </Col>
          <Col s={12} m={6} l={6}>
            <Card header={<CardTitle reveal image={picture} waves='light' />}
              title="Banksalot, Piggy"
              reveal={
                <div className="center">
                  <h3>Keeper of Money</h3>
                  <h4>
                  I am a happy pig. I can keep count of your earnings.
                  </h4>
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
