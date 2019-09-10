const defaultState = {
	messages: []
}

export default (state = defaultState, action) => {
  // console.log('in messages reducer', action);

  switch (action.type) {
    case 'CREATE_MESSAGE':
      // debugger
      return {
      	...state,
        messages: [...state.messages, action.payload]
      }

      case 'FETCH_MY_MESSAGES':
      // debugger
      return {
        ...state,
        messages: action.payload
      }
      // debugger
    default:
      return state
  }
}
