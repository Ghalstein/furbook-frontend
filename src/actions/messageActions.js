export const createMessage = (messageContent, user_id, friendship_id) => {
  // debugger
  return function(dispatch) {
    fetch('http://localhost:3000/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
         Authorization: localStorage.token
      },
      body: JSON.stringify({
        user_id: user_id,
        friendship_id: friendship_id,
        content: messageContent
      })
    })
    .then(res => res.json())
    .then(message => {
      // ONCE THE FETCH HAS FINISHED WE SHOULD THEN DISPATCH
      dispatch({type: "CREATE_MESSAGE", payload: message })
    })
  }
}