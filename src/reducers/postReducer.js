const defaultState = {
	posts: []
}

export default (state = defaultState, action) => {
  // console.log('in messages reducer', action);

  switch (action.type) {
  	case 'FETCH_MY_POSTS':
      return {
        posts: action.payload
      }
    case 'CREATE_POST':
    	// let post = {...action.payload., comments:[], user:{id: action.payload.user_id}}
      return {
        posts: [action.payload, ...state.posts]
      }
    default:
      return state
  }
}
