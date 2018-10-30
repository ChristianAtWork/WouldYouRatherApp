import { LOGIN_USER, LOGOUT_USER } from '../actions/ActionTypes';

const user = (state = '', action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return action.id
    }
    case LOGOUT_USER: {
      return ''
    }
    default:
      return state;
  }
};

export default user;
