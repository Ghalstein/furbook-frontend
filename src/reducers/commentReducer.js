const defaultState = {
	comments: []
}

export default (state = defaultState, action) => {
  // console.log('in messages reducer', action);

  switch (action.type) {
    // creates a comment
    case 'CREATE_COMMENT':
      // adds new comment to comments
      return {
      	...state,
        comments: [...state.comments, action.payload]
      }
    // gets all comments
    case 'FETCH_MY_COMMENTS':
      // debugger
      return {
        ...state,
        comments: action.payload
      }
    default:
      return state
  }
}
