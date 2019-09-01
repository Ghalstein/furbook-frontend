import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../actions/userActions';

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

	componentDidMount() {
    if (localStorage.token && this.props.hasOwnProperty('history')) {
      this.props.history.push("/home")
    }
  }

	handleSubmit = (event) => {
		if (this.state.password !== this.state.passwordConfirmation) {
			alert("Passwords do not match");
			return;
		}
		event.preventDefault();
		this.props.signUp(this.state.username, this.state.password, this.state.email)
    .then(()=> {
      this.props.history.push("/profile")
    })
	}

  render = () => {
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

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = {
    signUp: signUp
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)
