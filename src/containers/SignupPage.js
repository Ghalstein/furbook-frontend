import React from 'react';
import { Link } from 'react-router-dom';

class SignupPage extends React.Component{

	state = {
		username: "",
		password: "",
		passwordConfirmation: "",
		email: ""
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
		// console.log(this.state);
	}

	handleSubmit = (event) => {
		if (this.state.password !== this.state.passwordConfirmation) {
			alert("Passwords do not match");
			return;
		}
		event.preventDefault();
		fetch('http://localhost:3000/signup', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password,
				email: this.state.email
			})
		})
		.then(res => res.json())
		.then(resp => {
			if (resp.token !== undefined) {
				localStorage.setItem('token', resp.token)
				this.props.history.push('/home')
			}
		});
	}

  render = () => {
  	if (localStorage.token) this.props.history.push("/home")
    return (
    	<div className="LoginPage">
	    	<div className="form-container sign-up-container">
		      <form className="signupForm" onSubmit={this.handleSubmit}>
						<h1>Create Account</h1>
			      <input className="signupInput" type="text" placeholder="Name" value={this.state.username} onChange={this.handleChange} name="username"/>
			      <input className="signupInput" type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange} name="email"/>
			      <input className="signupInput" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} name="password"/>
			      <input className="signupInput" type="password" placeholder="Confirm Password" value={this.state.passwordConfirmation} onChange={this.handleChange} name="passwordConfirmation"/>
			      <input className="signupSubmit" type="submit" value="Login"/>
					</form>
				</div>
				<div className="overlay-container">
					<div className="overlay">
						<div className="overlay-panel overlay-right">
							<h1>Welcome Back!</h1><p>To keep connected with us please login with your personal info</p>
							<Link to="/"><button className="ghost" id="signIn">Sign In</button></Link>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default SignupPage;
