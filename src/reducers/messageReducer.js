const defaultState = {
	messages: []
}

export default (state = defaultState, action) => {
  // console.log('in messages reducer', action);

  switch (action.type) {
    case 'CREATE_MESSAGE':
      
      return {
      	...state,
        messages: [...state.messages, action.payload.object]
      }
      // debugger
    default:
      return state
  }
}
