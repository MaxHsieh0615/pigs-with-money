import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Row, Input, Icon } from "react-materialize"

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			email: "",
			password: "",
			confirmPassword: "",
			flashMessage: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	notify = (msg) => toast(msg);

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
		const { email, password } = this.state
		//request to server to add a new username/password
		axios.post("/user", {
			email: email,
			password: password
		})
			.then(response => {
				const { message, errMsg } = response.data
				if (!response.data.errMsg) {
					this.notify("successful signup");
					this.setState({ //redirect to login page
						redirectTo: "/login",
						flashMessage: message
					})
				} else {
					this.setState({ flashMessage: errMsg })
				}
			}).catch(error => {
				this.setState({ flashMessage: "Signup Not Valid. Please try again." })
			})
	}


	render() {
		const { flashMessage } = this.state;
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="container signupform">
					<ToastContainer />
					<div className="SignupForm">
						<h4>Sign up</h4>
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
							{flashMessage.length > 0 && <h5>{flashMessage}</h5>}
							<div className="form-group ">
								<div className="col-7" />
								<button
									className="waves-effect waves-light btn btn-primary col-1 col-mr-auto signUpBtn"
									onClick={this.handleSubmit}
									type="submit"
								>
									Sign up
								</button>
							</div>
						</form>
					</div>
				</div>
			);
		}
	}
}

export default Signup;
