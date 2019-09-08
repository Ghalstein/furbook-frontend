const defaultState = {
	users: []
}

export default (state = defaultState, action) => {
  // console.log('in messages reducer', action);
  // debugger
  switch (action.type) {
  	case 'FETCH_USERS':
      return {
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
