const defaultState = {
	comments: []
}

export default (state = defaultState, action) => {
  // console.log('in messages reducer', action);

  switch (action.type) {
    case 'CREATE_COMMENT':
      
      return {
        comments: [...state.comments, action.payload.object]
      }
      // debugger
    case 'FETCH_MY_COMMENTS':
      // debugger
      return {
        comments: action.payload
      }
    default:
      return state
  }
}
