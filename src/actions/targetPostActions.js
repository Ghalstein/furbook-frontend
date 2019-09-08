export const getPostById = (id) => {

  return function(dispatch){
    fetch(`http://localhost:3000/posts/${id}`, { 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
         Authorization: localStorage.token
      }})
    .then(res => res.json())
    .then(post => {
      dispatch({ type: 'FETCH_MY_POST', payload: post})
    })
  }
  // Return is an action
  // return { type: FETCH_MY_POSTS, payload: myWallPosts }
}