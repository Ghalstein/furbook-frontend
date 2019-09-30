
export const createComment = (postContent, userId, postId) => {
  // the action for posting a new comment
  return function(dispatch) {
    fetch('https://furbook-api.herokuapp.com/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
         Authorization: localStorage.token
      },
      body: JSON.stringify({
        user_id: userId,
        post_id: postId,
        content: postContent
      })
    })
    .then(res => res.json())
    .then(comment => {
      // ONCE THE FETCH HAS FINISHED WE SHOULD THEN DISPATCH
      dispatch({type: "CREATE_COMMENT", payload: comment })
    })
  }
}

export const getComments = () => {
  // action for getting all the comments
  return function(dispatch){
    fetch("https://furbook-api.herokuapp.com/comments", { 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
         Authorization: localStorage.token
      }})
    .then(res => res.json())
    .then(comments => {
      dispatch({ type: 'FETCH_MY_COMMENTS', payload: comments})
    })
  }
  // Return is an action
  // return { type: FETCH_MY_POSTS, payload: myWallPosts }
}