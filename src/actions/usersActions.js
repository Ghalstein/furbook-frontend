export const getUsers = () => {

  return function(dispatch){
    fetch("http://furbook-api.herokuapp.com/users", { 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
         Authorization: localStorage.token
      }})
    .then(res => res.json())
    .then(users => {
      dispatch({ type: 'FETCH_USERS', payload: users})
    })
  }
  // Return is an action
  // return { type: FETCH_MY_POSTS, payload: myWallPosts }
}

export const getUserById = (userId) => {
  
  return function(dispatch){
    fetch(`http://furbook-api.herokuapp.com/users/${userId}`, { 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
         Authorization: localStorage.token
      }})
    .then(res => res.json())
    .then(user => {
      dispatch({ type: 'FETCH_USER', payload: user})
    })
  }
  // Return is an action
  // return { type: FETCH_MY_POSTS, payload: myWallPosts }
}