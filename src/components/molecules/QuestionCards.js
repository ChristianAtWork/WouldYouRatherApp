/**
 * @author Christian
 */
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import QuestionCard from '../atoms/QuestionCard';


const styles = theme => ({
  cards: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class QuestionCards extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.cards}>{this.props.questionIds.map(questionId => <QuestionCard key={questionId} id={questionId} />)}</div>
    );
  }
}
QuestionCards.propTypes = {
  questionIds: PropTypes.array,
};
export default withStyles(styles)(QuestionCards);
