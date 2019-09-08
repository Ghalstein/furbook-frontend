const defaultState = {
	user: {}
}

export default (state = defaultState, action) => {
  // console.log('in messages reducer', action);
  switch (action.type) {
	  case 'FETCH_USER':
	      return {
	        user: action.payload
	      }
	  default:
	    return state
	  }
}