export const getCurrentUser = () => dispatch => {
	dispatch({ type: "GET_PROFILE_REQUEST_START" })

	return fetch('http://localhost:3000/profile', {
        headers: {
        Authorization: localStorage.token
      }
    })
    .then(res => res.json())
    .then(profileInfo => this.setState({ userInfo: profileInfo }));
}

export const logIn = (username, password) => dispatch => {
  dispatch({ type: "LOGIN_REQUEST_START" })
  return fetch('http://localhost:3000/login', {
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

export const signUp = (username, password) => dispatch => {
  dispatch({ type: "SIGNUP_REQUEST_START" })
  return fetch('http://localhost:3000/signup', {
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

export const logOut = () => dispatch => {
  localStorage.clear()
  dispatch({ type: 'LOGOUT' })
}