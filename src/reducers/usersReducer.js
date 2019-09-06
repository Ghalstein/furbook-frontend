const defaultState = {
	users: []
}

export default (state = defaultState, action) => {
  // console.log('in messages reducer', action);

  switch (action.type) {
  	case 'FETCH_USERS':
      return {
        ...state,
        users: action.payload
      }
    case 'FETCH_USER':
      return {
        ...state, 
        users: action.payload
      }
    // case 'CREATE_POST':
    // 	// debugger
    // 	// let post = {...action.payload.object, comments:[], user:{id: action.payload.object.user_id}}
    //   return {
    //   	...state,
    //     users: [action.payload.object, ...state.users]
    //   }
    default:
      return state
  }
}
