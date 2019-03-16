import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Row, Input, Icon } from "react-materialize"

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      modalShow: false,
      email: "",
      password: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  notify = (msg) => toast(msg);
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("/user/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          this.notify("Login Successfully.")
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            email: response.data.username
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/"
          });
        }
      })
      .catch(error => {
        this.notify("Password or username is incorrect.");
        console.log("login error: ");
        console.log(error);
      });
  }

  render() {
    console.log(this.props);
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="container loginbox">
          <ToastContainer />
          <h4>Login</h4>
          <form className="form-horizontal">
            <Row>
              <Input
                type="email"
                label="Email"
                id="email"
                name="email"
                s={12}
                value={this.state.email}
                onChange={this.handleChange}>
                <Icon>email</Icon>
              </Input>
              <Input
                type="password"
                label="password"
                name="password"
                s={12}
                value={this.state.password}
                onChange={this.handleChange}>
                <Icon>lock</Icon>
              </Input>
            </Row>
            <div className="form-group ">
              <div className="col-7" />
              <button
                className="waves-effect waves-light btn btn-primary col-1 col-mr-auto loginBtn"
                onClick={this.handleSubmit}
                type="submit"
              >
                Login
                </button>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default LoginForm;
