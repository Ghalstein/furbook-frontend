const defaultState = {
	post: {}
}

export default (state = defaultState, action) => {
  // console.log('in messages reducer', action);
  switch (action.type) {
	  case 'FETCH_MY_POST':
	      return {
	        post: action.payload
	      }
	  default:
	    return state
	  }
}