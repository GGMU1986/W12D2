import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

const defaultSession = {
  currentUser: null
};

const sessionReducer = (state = defaultSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUser: action.user })
    
    case LOGOUT_CURRENT_USER:
      return defaultSession;
  
    default:
      return state;
  }
};

export default sessionReducer;