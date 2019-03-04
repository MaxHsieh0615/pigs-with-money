import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Signup extends Component {
  constructor() {
	super()
	this.state = {
	  email: '',
	  password: '',
	  confirmPassword: '',
	  flashMessage: ''
	}
	  this.handleSubmit = this.handleSubmit.bind(this)
	  this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
	  this.setState({
		[event.target.name]: event.target.value
	  })
	}
	handleSubmit(event) {
	  event.preventDefault()
	  const {email,password} = this.state
	  //request to server to add a new username/password
	  axios.post('/user', {
		email: email,
		password: password
	  })
	  .then(response => {
		const {message,errMsg} = response.data
		if (!response.data.errMsg) {
		console.log('successful signup')
		this.setState({ //redirect to login page
		  redirectTo: '/login',
		  flashMessage: message
		})
		} else {
		this.setState({flashMessage: errMsg})
		}
	  }).catch(error => {
		this.setState({flashMessage: "Signup Errored"})
	  })
	}


	render() {
		const {flashMessage} = this.state;
		if(this.state.redirectTo){
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}else{
			return (
			<div className="SignupForm">
				<h4>Sign up</h4>
				<form className="form-horizontal">
					<div className="form-group">
						<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="email">Email</label>
						</div>
						<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="email"
							name="email"
							placeholder="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
						</div>
					</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
					<label className="form-label" htmlFor="password">Password: </label>
					</div>
					<div className="col-3 col-mr-auto">
					<input className="form-input"
							placeholder="password"
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					</div>
				</div>
				{flashMessage.length>0 && <h5>{flashMessage}</h5>}
				<div className="form-group ">
					<div className="col-7"></div>
					<button
					className="btn btn-primary col-1 col-mr-auto"
					onClick={this.handleSubmit}
					type="submit"
					>Sign up
					</button>
					</div>
				</form>
				</div>
			)
		}
	}
}

export default Signup;
