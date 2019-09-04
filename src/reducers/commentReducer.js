const defaultState = {
	comments: []
}

export default (state = defaultState, action) => {
  // console.log('in messages reducer', action);

  switch (action.type) {
    case 'CREATE_COMMENT':
    	// debugger
      return {
      	...state,
        comments: [action.payload.object, ...state.posts.comments]
      }
    default:
      return state
  }
}
