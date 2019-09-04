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
      return {
      	...state,
        posts: [...state.posts, action.payload]
      }
    default:
      return state
  }
}
