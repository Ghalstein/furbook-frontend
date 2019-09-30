
export const createPost = (postContent, userId) => {
  // action for creating a post
  return function(dispatch) {
    fetch('https://furbook-api.herokuapp.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
         Authorization: localStorage.token
      },
      body: JSON.stringify({
        user_id: userId,
        content: postContent
      })
    })
    .then(res => res.json())
    .then(post => {
      // ONCE THE FETCH HAS FINISHED WE SHOULD THEN DISPATCH
      dispatch({type: "CREATE_POST", payload: post })
    })
    // debugger
  }
}

export const getPosts = () => {
  // action for getting posts
  return function(dispatch){
    fetch("https://furbook-api.herokuapp.com/posts", { 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
         Authorization: localStorage.token
      }})
    .then(res => res.json())
    .then(posts => {
      dispatch({ type: 'FETCH_MY_POSTS', payload: posts})
    })
  }
  // Return is an action
  // return { type: FETCH_MY_POSTS, payload: myWallPosts }
}

export const getPostById = (id) => {
  // action for getting a specfic post by its id
  return function(dispatch){
    fetch(`https://furbook-api.herokuapp.com/posts/${id}`, { 
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