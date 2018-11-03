/**
 * @author Christian
 */
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';

import QuestionCards from '../molecules/QuestionCards';
import QuestionsTabs from '../molecules/QuestionsTabs';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: 350,
    marginTop: 16,
  },
});

class Home extends Component {
  state = {
    index: 0,
  };
  render() {
    const { user, theme } = this.props;
    const { index } = this.state;

    if (!user) {
      return <div> no user</div>;
    }
    return (
      <React.Fragment>
        <QuestionsTabs index={index} onTabChange={this.handleChangeTab} />
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={index}
          onChangeIndex={this.handleChangeTab}
        >
          <Typography component="div" dir={theme.direction}>
            <QuestionCards questionIds={[1, 2, 3]} />
          </Typography>

          <Typography component="div" dir={theme.direction}>
            <QuestionCards questionIds={[4, 5, 6]} />
          </Typography>
        </SwipeableViews>
      </React.Fragment>
    );
  }

  handleChangeTab = index => {
    this.setState({ index });
  };
  getUserAnswers = (user, players) => {
    return players.byId[user].answers;
  };
  getAnsweredQuestionsIds = (user, players, questions) => {
    const answers = this.getUserAnswers(user, players);

    return answers.map(answer => {
      const answeredQuestion = Object.keys(questions.byId).find(id => {
        return questions.byId[id].answers.includes(answer);
      });
      return answeredQuestion;
    });
  };
}

Home.propTypes = {
  user: PropTypes.string,
  players: PropTypes.object,
  questions: PropTypes.object,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default connect(state => ({
  questions: state.questions,
  answers: state.answers,
  user: state.user,
  players: state.players,
}))(withStyles(styles, { withTheme: true })(Home));
