const defaultState = []

export default (state = defaultState, action) => {
  // console.log('in messages reducer', action);

  switch (action.type) {
    case 'MAKE_A_POST':
      return action.posts
    default:
      return state
  }
}
