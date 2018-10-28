import { FETCH_QUESTIONS } from '../actions/ActionTypes';

const questions = (state = { byId: {}, allIds: [] }, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS: {
      const allIds = Object.keys(action.questions);
      const byId = allIds.reduce((questions, currQuestion, index) => {
        const question = createQuestion(action.questions[currQuestion]);
        return Object.assign(questions, { [action.questions[currQuestion].id]: question });
      }, {});

      return {
        allIds,
        byId,
      };
    }
    default:
      return state;
  }
};

// author -> question id into player
const createQuestion = (question, dispatch) => {
  return {
    id: question.id,
    timestamp: question.timestamp,
    answers: [],
  };
};

export default questions;
