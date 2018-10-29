/**
 * @author Christian
 */
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import {} from 'prop-types';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';

import QuestionsTabs from '../QuestionsTabs';
import QuestionCards from '../QuestionCards';

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
  cards: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class Home extends Component {
  state = {
    index: 0,
  };
  render() {
    const { user, classes, theme } = this.props;
    const { index } = this.state;

    if (!user) {
      return <div> no user</div>;
    }
    return (
      <div className={classes.container}>
        <Paper>
          <QuestionsTabs index={index}onTabChange={this.handleTabChange} />
          <div className={classes.cards}>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={index}
              onChangeIndex={this.handleChangeIndex}
            >
              <TabContainer dir={theme.direction}>
                <QuestionCards questionIds={[1, 2, 3]} />
              </TabContainer>
              <TabContainer dir={theme.direction}>
                <QuestionCards questionIds={[4, 5, 6]} />
              </TabContainer>
            </SwipeableViews>
          </div>
        </Paper>
      </div>
    );
  }
  handleChangeIndex = index => {
    this.setState({ index });
  };

  handleTabChange = index => {
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
function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} >
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

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
