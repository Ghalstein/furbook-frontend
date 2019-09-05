const defaultState = {
	comments: []
}

export default (state = defaultState, action) => {
  // console.log('in messages reducer', action);

  switch (action.type) {
    case 'CREATE_COMMENT':
      return {
      	...state,
        comments: [...state.comments, action.payload.object]
      }
      // debugger
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
