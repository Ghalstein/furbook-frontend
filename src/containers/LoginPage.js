import React from 'react';

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
      <form className="loginForm" onSubmit={this.handleSubmit}>
        <input className="loginInput" type="text" value={this.state.username} onChange={this.handleChange} name="username"/>
        <input className="loginInput" type="password" value={this.state.password} onChange={this.handleChange} name="password"/>
        <input className="loginSubmit" type="submit" value="Login"/>
      </form>
    );
  }
}

export default LoginPage;
