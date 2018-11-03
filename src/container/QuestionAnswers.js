/**
 * @author Christian
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class QuestionAnswers extends Component {
  render() {
    const { answers, questions, questionId } = this.props;
    const questionAnswers = this.getAnswers(answers , questions, questionId);
    
    return this.props.render(questionAnswers);
  }
  getAnswers = (answers, questions, questionId) => {
    const allAnswerIds = answers.allIds
    const question = questions.byId[questionId];
    const answerIds = allAnswerIds.filter(answerId => question.answers.includes(answerId));

    return answerIds.map(id => answers.byId[id] )
  };
}

QuestionAnswers.propTypes = {
  questionId: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default connect(state => ({
  questions: state.questions,
  answers: state.answers,
}))(QuestionAnswers);
