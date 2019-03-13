import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import "./App.css";
// components
import Signup from "./components/sign-up";
import LoginForm from "./components/login-form";
import Navbar from "./components/Nav/index";
import Home from "./components/Home/home";
import CreateJob from "./components/CreateJob/createjob";
import About from "./components/About/about";
import AddChild from "./components/AddChild/addchild";
import Shop from "./components/Shop/shop";
import MyVerticallyCenteredModal from "./components/Modals/index";
import { Footer } from "react-materialize";
import { InstantSearch } from 'react-instantsearch-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user").then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false
        });
      }
    });
  }

  render() {
    const { loggedIn } = this.state;
    const modalClose = () => this.setState({ modalShow: false });

    return (
      <div className="App">
        <Navbar updateUser={this.updateUser} loggedIn={loggedIn} />
        <div className="container flex-box">
          <MyVerticallyCenteredModal
            show={this.state.modalShow}
            text="example text goes"
            onHide={modalClose}
          />
          <Route exact path="/" component={Home} />

          <Route
            path="/login"
            render={() => <LoginForm updateUser={this.updateUser} />}
          />

          <Route path="/signup" render={() => <Signup />} />

          <Route path="/about" render={() => <About />} />

          <Route
            path="/jobs"
            render={() => (
              <CreateJob
                loggedIn={this.state.loggedIn}
                email={this.state.email}
              />
            )}
          />
          <Route
            path="/children"
            render={() => <AddChild loggedIn={this.state.loggedIn} />}
          />
          <Route
            path="/shop"
            render={() => <Shop loggedIn={this.state.loggedIn} />}
          />
        </div>
        <Footer
          copyrights="&copy; 2019 Copyright Piggy Business"
          moreLinks={
            <a className="grey-text text-lighten-4 right" href="https://github.com/MaxHsieh0615/pigs-with-money">
              Github
            </a>
          }
        />
      </div>
    );
  }
}

export default App;
