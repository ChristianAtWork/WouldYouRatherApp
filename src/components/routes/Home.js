/**
 * @author Christian
 */
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';

import QuestionCards from '../molecules/QuestionCards';
import QuestionsTabs from '../molecules/QuestionsTabs';
import AuthUser from '../../container/AuthUser';
import UserQuestions from '../../container/UserQuestions';
import UserPlayer from '../../container/UserPlayer';

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
    const { theme } = this.props;
    const { index } = this.state;

    return (
      <AuthUser
        render={user => (
          <UserPlayer
            user={user}
            render={userPlayer => (
              <UserQuestions
                userPlayer={userPlayer}
                render={(answeredQuestionIds, unansweredQuestionIds) => (
                  <React.Fragment>
                    {user ? (
                      <React.Fragment>
                        <QuestionsTabs index={index} onTabChange={this.handleChangeTab} />
                        <SwipeableViews
                          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                          index={index}
                          onChangeIndex={this.handleChangeTab}
                        >
                          <Typography component="div" dir={theme.direction}>
                            <QuestionCards questionIds={answeredQuestionIds} />
                          </Typography>

                          <Typography component="div" dir={theme.direction}>
                            <QuestionCards questionIds={unansweredQuestionIds} />
                          </Typography>
                        </SwipeableViews>{' '}
                      </React.Fragment>
                    ) : (
                      <div> no user</div>
                    )}
                  </React.Fragment>
                )}
              />
            )}
          />
        )}
      />
    );
  }

  handleChangeTab = index => {
    this.setState({ index });
  };
}

Home.propTypes = {
  user: PropTypes.string,
  players: PropTypes.object,
  questions: PropTypes.object,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);
