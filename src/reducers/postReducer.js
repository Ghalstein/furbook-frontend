const defaultState = {
	posts: []
}

export default (state = defaultState, action) => {
  // console.log('in messages reducer', action);

  switch (action.type) {
    //fetches posts
  	case 'FETCH_MY_POSTS':
      return {
        ...state,
        posts: action.payload
      }
    //creates posts
    case 'CREATE_POST':
    	// debugger
      return {
        posts: [action.payload, ...state.posts]
      }
    // fecths individual post
    case 'FETCH_MY_POST':
      return {
        ...state,
        post: action.payload
      }
    default:
      return state
  }
}
