export const getUserById = (userId) => {
  
  return function(dispatch){
    fetch(`http://localhost:3000/users/${userId}`, { 
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