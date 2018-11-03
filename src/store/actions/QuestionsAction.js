import * as _DATA from '../../_DATA';
import { FETCH_QUESTIONS, GET_ALL_QUESTIONS } from './ActionTypes';
import { addAnswer } from './AnwersAction';
import { handleAnswerQuestion } from './PlayersAction';

function generateUID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

export const fetchQuestions = questions => ({
  type: FETCH_QUESTIONS,
  questions,
});

export const handleFetchQuestions = (name, cb) => dispatch => {
  _DATA._getQuestions().then(questions => {
    const result = Object.keys(questions).reduce((result, questionKey) => {
      const answerOneId = generateUID();
      const answerTwoId = generateUID();
      dispatch(addAnswer(questions[questionKey].optionOne.text, answerOneId));
      dispatch(addAnswer(questions[questionKey].optionTwo.text, answerTwoId));

      questions[questionKey].optionOne.votes.map(playerId => dispatch(handleAnswerQuestion(playerId, answerOneId)));
      questions[questionKey].optionTwo.votes.map(playerId => dispatch(handleAnswerQuestion(playerId, answerTwoId)));

      delete questions[questionKey].optionOne;
      delete questions[questionKey].optionTwo;
      delete questions[questionKey].author;

      return Object.assign(result, {
        [questionKey]: {
          ...questions[questionKey],
          answers: [answerOneId, answerTwoId],
        },
      });
    }, {});

    dispatch(fetchQuestions(result));
  });
};
