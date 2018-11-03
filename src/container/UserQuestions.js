/**
 * @author Christian
 */

import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class UserQuestions extends Component {
  render() {
    const questionIds = this.props.questions.allIds;
    const answeredQuestionIds = this.getAnsweredUserQuestions(questionIds);
    const unansweredQuestionIds = this.getUnansweredUserQuestions(questionIds, answeredQuestionIds);

    return this.props.render(answeredQuestionIds, unansweredQuestionIds);
  }

  getAnsweredUserQuestions = questionIds => {
    const userAnswersIds = this.props.userPlayer && this.props.userPlayer.answers ? this.props.userPlayer.answers : [];
    return questionIds.filter(id => {
      const question = this.props.questions.byId[id];
      return userAnswersIds.includes(question.answers[0]) || userAnswersIds.includes(question.answers[1]);
    });
  };
  getUnansweredUserQuestions = (questionIds, answeredQuestionIds) =>
    questionIds.filter(id => !answeredQuestionIds.includes(id));
}

UserQuestions.propTypes = {
  userPlayer: PropTypes.object,
  questions: PropTypes.object,
  render: PropTypes.func.isRequired,
};

export default connect(state => ({
  questions: state.questions,
}))(UserQuestions);
