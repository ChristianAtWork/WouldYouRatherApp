import { ADD_ANSWER } from '../actions/ActionTypes';

const answers = (state = { byId: {}, allIds: [] }, action) => {
  switch (action.type) {
    case ADD_ANSWER: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: action.text,
        },
        allIds: [...state.allIds, action.id],
      };
    }
    default:
      return state;
  }
};

export default answers;
