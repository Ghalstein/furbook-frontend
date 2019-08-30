import React from 'react';

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
      <form className="loginForm" onSubmit={this.handleSubmit}>
        <input className="loginInput" type="text" value={this.state.username} onChange={this.handleChange} name="username"/>
        <input className="loginInput" type="text" value={this.state.email} onChange={this.handleChange} name="email"/>
        <input className="loginInput" type="password" value={this.state.password} onChange={this.handleChange} name="password"/>
        <input className="loginInput" type="password" value={this.state.passwordConfirmation} onChange={this.handleChange} name="passwordConfirmation"/>
        <input className="loginSubmit" type="submit" value="Login"/>
      </form>
    );
  }
}

export default SignupPage;
