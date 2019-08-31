import React from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component{

	state = {
		username: "",
		password: ""
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
		// console.log(this.state);
	}

	componentDidMount = () => {
		if (localStorage.token) this.props.history.push("/home");
	}

	handleSubmit = (event) => {
		event.preventDefault();
		fetch('http://localhost:3000/login', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(this.state)
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
    return (
	    <div className="LoginPage">
		    <div className="form-container sign-in-container">
		      <form className="loginForm" onSubmit={this.handleSubmit}>
		      	<h1>Sign in</h1>
		        <input className="loginInput" type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange} name="username"/>
		        <input className="loginInput" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} name="password"/>
		        <input className="loginSubmit" type="submit" value="Login"/>
		      </form>
		    </div>
		    <div className="overlay-container">
					<div className="overlay">
						<div className="overlay-panel overlay-left">
							<h1>Welcome Back!</h1>
							<p>To keep connected with us please login with your personal info</p>
							<button className="ghost" id="signIn">Sign In</button>
						</div>
						<div className="overlay-panel overlay-right">
							<h1>Hello, Friend!</h1>
							<p>Enter your personal details and start journey with us</p>
							<Link to="/signup"><button className="ghost" id="signUp">Sign Up</button></Link>
						</div>
					</div>
				</div>
		  </div>
    );
  }
}

export default LoginPage;
