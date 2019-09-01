import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { logIn } from '../actions/userActions'

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
		this.props.logIn(this.state.username, this.state.password)
			.then(()=> {
				this.props.push("/home")
			})
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
							<p>Enter your personal details and start your journey with us</p>
							<Link to="/signup"><button className="ghost" id="signUp">Sign Up</button></Link>
						</div>
					</div>
				</div>
		  </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = {
    logIn: logIn
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
