import * as _DATA from '../../_DATA';
import { FETCH_PLAYERS, CREATE_QUESTION, ANSWER_QUESTION, UPDATE_SCORE } from './ActionTypes';


export const fetchPlayers = players => ({
    type: FETCH_PLAYERS,
    players
  });

export const createQuestion = (playerId, questionId) => ({
    type: CREATE_QUESTION,
    playerId,
    questionId
  });

export const answerQuestion = (playerId, answerId) => ({
    type: ANSWER_QUESTION,
    playerId,
    answerId
  });

export const updateScore = (playerId) => ({
    type: UPDATE_SCORE,
    playerId,
  });

  export const handleFetchPlayers = (name, cb) => dispatch => {
    _DATA._getUsers().then(players => dispatch(fetchPlayers(players)) )    
  }
  
  export const handleAnswerQuestion = (playerId, answerId) => dispatch => { 
    dispatch(answerQuestion(playerId, answerId))
    dispatch(updateScore(playerId))
  }