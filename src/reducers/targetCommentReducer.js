const defaultState = {
	comment: {}
}

export default (state = defaultState, action) => {
  // console.log('in messages reducer', action);

  switch (action.type) {
    // fetches a single comment
    case 'FETCH_MY_COMMENT':
      return {
        comment: action.payload
      }
    default:
      return state
  }
}
