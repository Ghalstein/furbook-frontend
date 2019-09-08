const defaultState = {
	comment: {}
}

export default (state = defaultState, action) => {
  // console.log('in messages reducer', action);

  switch (action.type) {
    
    case 'FETCH_MY_COMMENT':
      // debugger
      return {
        comment: action.payload
      }
    default:
      return state
  }
}
