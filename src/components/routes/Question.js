/**
 * @author Christian
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';



class Question extends Component {
  render() {
    return <div>Question</div>;
  }
}

Question.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.any
};

export default connect()(Question);
