/**
 * @author Christian
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class PlayerAskedQuestion extends Component {
  render() {
    const playerAskedQuestion = this.getPlayerAskedQuestion(this.props.questionId);

    return this.props.render(playerAskedQuestion);
  }
  getPlayerAskedQuestion = questionId => {
    const allPlayersIds = this.props.players.allIds;

    const playerId = allPlayersIds.find(id => {
      const currentPlayer = this.props.players.byId[id];

      return currentPlayer.questions.includes(questionId);
    });
    return this.props.players.byId[playerId];
  };
}

PlayerAskedQuestion.propTypes = {
  questionId: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default connect(state => ({ players: state.players }))(PlayerAskedQuestion);
