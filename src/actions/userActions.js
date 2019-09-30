export const getCurrentUser = () => dispatch => {
	dispatch({ type: "GET_PROFILE_REQUEST_START" })
  //action for getting the current user
	return fetch('https://furbook-api.herokuapp.com/profile', {
        headers: {
        	Authorization: localStorage.token
      	}
    }).then((response) => {
    if (response.status === 401) {
      throw new Error("Unauthorized")
    }
    return response
  }).then(response => {
    return response.json()
  }).then((data) => {
    if (data.message === "Please log in") {
      throw new Error("Unauthorized")
    }
    return data
  }).then(user => {
    dispatch({
      type: "GET_PROFILE_REQUEST_SUCCESS",
      user: user
    })
  }).catch((error) => {
    if (error.message === "Unauthorized") {
      dispatch({
        type: "GET_PROFILE_REQUEST_FAILURE",
        error: error
      })
    }
  })
}

export const logIn = (username, password) => dispatch => {
  //action for logging in
  dispatch({ type: "LOGIN_REQUEST_START" })
  return fetch('https://furbook-api.herokuapp.com/login', {
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: JSON.stringify({
			username: username,
			password: password
		})
	})
	 .then(res => res.json())
  .then((data) => {
    localStorage.token = data.token
    dispatch({ type: 'LOGIN_REQUEST_SUCCESS' })
  })
  .catch(error => {
    dispatch({ type: 'LOGIN_REQUEST_FAILURE', error: error })
  })
}

export const signUp = (username, password, email) => dispatch => {
  //action for signing up
  dispatch({ type: "SIGNUP_REQUEST_START" })
  return fetch('https://furbook-api.herokuapp.com/signup', {
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: JSON.stringify({
			username: username,
			password: password,
			email: email
		})
	})
	.then(res => res.json())
  // .then((user) => {
  //   dispatch({ type: 'SIGNUP_REQUEST_SUCCESS' })
  // })
  // .catch(error => {
  //   dispatch({ type: 'SIGNUP_REQUEST_FAILURE', error: error })
  // })
}

export const logOut = () => dispatch => {
  // logs the user out
  window.location.reload();
  localStorage.clear()
  dispatch({ type: 'LOGOUT' })
}