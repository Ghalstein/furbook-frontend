const defaultState = {
	messages: []
}

export default (state = defaultState, action) => {
  // console.log('in messages reducer', action);
  // handles message requests
  switch (action.type) {
    // creates messages
    case 'CREATE_MESSAGE':
      return {
      	...state,
        messages: [...state.messages, action.payload]
      }
      // fetches messgaes
    case 'FETCH_MY_MESSAGES':
      return {
        ...state,
        messages: action.payload
      }
      //updates message to viewed
    case 'VIEWED_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    default:
      return state
  }
}
