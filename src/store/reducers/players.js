import { FETCH_PLAYERS, CREATE_QUESTION, ANSWER_QUESTION, UPDATE_SCORE } from '../actions/ActionTypes';

const players = (state = { byId: {}, allIds: [] }, action) => {
  switch (action.type) {
    case FETCH_PLAYERS: {
      const allIds = Object.keys(action.players);

      const byId = allIds.reduce((players, currPlayer, index) => {
        delete currPlayer.answers;

        const player = createPlayer(action.players[currPlayer]);
        return Object.assign(players, { [action.players[currPlayer].id]: player });
      }, {});

      return {
        allIds,
        byId,
      };
    }
    case CREATE_QUESTION: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.playerId]: {
            ...state.byId[action.playerId],
            questions: state.byId[action.playerId].questions.concat(action.questionId),
          },
        },
      };
    }
    case ANSWER_QUESTION: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.playerId]: {
            ...state.byId[action.playerId],
            answers: state.byId[action.playerId].answers.concat(action.answerId),
          },
        },
      };
    }
    case UPDATE_SCORE: {
      console.log('answerCount', state.byId[action.playerId].answers.length)
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.playerId]: {
            ...state.byId[action.playerId],
            score: state.byId[action.playerId].answers.length + state.byId[action.playerId].questions.length,
          },
        },
      };
    }
    default:
      return state;
  }
};
const createPlayer = player => {
  return {
    id: player.id,
    name: player.name,
    avatarUrl: player.avatarURL,
    questions: player.questions,
    answers: [],
    score: 0,
  };
};
export default players;
