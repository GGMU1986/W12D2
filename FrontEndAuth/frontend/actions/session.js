import { postUser, postSession, deleteSession } from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const recieveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

//THUNK ACTION CREATORS

export const createNewUser = formUser => dispatch => {
  return postUser(formUser)
    .then(user => dispatch(recieveCurrentUser(user)))
};

export const login = formUser => dispatch => {
  return postSession(formUser)
    .then(user => dispatch(recieveCurrentUser(user)))
};

export const logout = () => dispatch => {
  return deleteSession()
    .then(() => dispatch(logoutCurrentUser()))
};