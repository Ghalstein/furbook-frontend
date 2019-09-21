const defaultState = {
	users: [],
  user: {}
}

export default (state = defaultState, action) => {
  // console.log('in messages reducer', action);
  // debugger
  switch (action.type) {
  	case 'FETCH_USERS':
      return {
        ...state,
        users: action.payload
      }
    case 'FETCH_USER':
      return {
        ...state, 
        user: action.payload
      }
    default:
      return state
  }
}
