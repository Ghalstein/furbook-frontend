export const getUsers = () => {

  return function(dispatch){
    fetch("http://localhost:3000/users", { 
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