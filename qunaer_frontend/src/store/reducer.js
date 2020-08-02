import { ADD_GOODS } from './actionTypes';
const defaultState = {
  list: []
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_GOODS:
      return state
    default:
      return state
  }
  return state
}