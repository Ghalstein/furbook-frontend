const defaultState = {
	posts: []
}

export default (state = defaultState, action) => {
  // console.log('in messages reducer', action);

  switch (action.type) {
  	case 'FETCH_MY_POSTS':
      return {
        ...state,
        posts: action.payload
      }
    case 'CREATE_POST':
    	// debugger
      return {
        posts: [action.payload, ...state.posts]
      }
    case 'FETCH_MY_POST':
      return {
        ...state,
        post: action.payload
      }
    default:
      return state
  }
}
