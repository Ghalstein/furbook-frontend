export const getCommentById = (id) => {

  return function(dispatch){
    // action for ggetting a comment by id
    fetch(`https://furbook-api.herokuapp.com/comments/${id}`, { 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
         Authorization: localStorage.token
      }
    })
    .then(res => res.json())
    .then(post => {
      dispatch({ type: 'FETCH_MY_COMMENT', payload: post})
    })
  }
  // Return is an action
  // return { type: FETCH_MY_COMMENT, payload: comments }
}
