
export const createPost = (content, userId) => {
  return function(dispatch) {
    fetch('http://localhost:3000/posts', {
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
  }
}