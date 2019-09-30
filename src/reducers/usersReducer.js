const defaultState = {
	users: [],
  user: {}
}

export default (state = defaultState, action) => {
  // console.log('in messages reducer', action);
 
  switch (action.type) {
    // gets all users 
  	case 'FETCH_USERS':
      return {
        ...state,
        users: action.payload
      }
    // gets a particular user
    case 'FETCH_USER':
      return {
        ...state, 
        user: action.payload
      }
    default:
      return state
  }
}
