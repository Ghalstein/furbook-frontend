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

export const getMessages = () => {
  return function(dispatch){
    fetch("http://localhost:3000/messages", { 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
         Authorization: localStorage.token
      }})
    .then(res => res.json())
    .then(messages => {
      dispatch({ type: 'FETCH_MY_MESSAGES', payload: messages})
    })
  }
  // Return is an action
  // return { type: FETCH_MY_POSTS, payload: myWallPosts }
}

export const viewedMessage = (message) => {
  // debugger

  return function(dispatch) {
    fetch(`http://localhost:3000/messages/${message.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
         Authorization: localStorage.token
      },
      body: JSON.stringify(
      {
        'viewed': true
      })
    })
    .then(res => res.json())
    .then(console.log)
    // .then(message => {
    //   // ONCE THE FETCH HAS FINISHED WE SHOULD THEN DISPATCH
    //   dispatch({type: "VIEWED_MESSAGE", payload: message })
    // })
  }
}