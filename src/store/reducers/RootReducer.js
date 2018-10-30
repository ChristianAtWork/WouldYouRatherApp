import { combineReducers } from 'redux'
import user from './user'
import players from './players'
import questions from './questions'
import answers from './answers'

const RootReducer = combineReducers({
    user,
    players,
    questions,
    answers
  })
  
export {RootReducer}