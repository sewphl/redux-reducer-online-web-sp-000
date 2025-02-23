export function manageFriends(state, action){
  switch (action.type) {
  case 'ADD_FRIEND':
    return {friends: [...state.friends, action.friend]}
  case 'REMOVE_FRIEND':
    const removeMe = state.friends.findIndex(friend => friend.id === action.id)
    return {...state, friends: [...state.friends.slice(0, removeMe), ...state.friends.slice(removeMe + 1)]}
  default:
    return state;
  }
}
