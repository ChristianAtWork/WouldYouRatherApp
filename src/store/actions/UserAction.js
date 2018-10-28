import {LOGIN_USER,LOGOUT_USER } from "./ActionTypes";

export const loginUserAction = id => ({
    type: LOGIN_USER,
    id
  });

export const logoutUserAction = () => ({
    type: LOGOUT_USER,
  });

//   export const handleSelectUser = (name, cb) => dispatch => {}
  