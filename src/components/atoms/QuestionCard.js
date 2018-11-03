/**
 * @author Christian
 */
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

import CardWrapper from './CardWrapper';
import TertiaryButton from './TertiaryButton';
import PlayerAskedQuestion from '../../container/PlayerAskedQuestion';
import QuestionAnswers from '../../container/QuestionAnswers';

const styles = {
  user: {
    display: 'flex',
    alignItems: 'center',
    margin: 5,
  },
  avatar: {
    marginLeft: 'auto',
  },
  button: {
    marginLeft: 'auto',
  },
};

function QuestionCard(props) {
  const { classes, questionId } = props;

  return (
    <PlayerAskedQuestion
      questionId={questionId}
      render={player => (
        <QuestionAnswers
          questionId={questionId}
          render={(questionAnswers) => (
            <CardWrapper>
              <CardContent>
                <div className={classes.user}>
                  <Typography className={classes.title} color="textSecondary">
                    {player.name} asks:
                  </Typography>
                  <Avatar className={classes.avatar}>{player.name.slice(0, 1)}</Avatar>
                </div>
                <Divider />
                <Typography variant="h5" component="h2">
                  Would you rather
                </Typography>
                <Typography component="p">{questionAnswers && questionAnswers[0].slice(0, 10)}...</Typography>
              </CardContent>
              <CardActions>
                <div className={classes.button}>
                  <TertiaryButton onClick={() => {}} text={'View Poll'} />
                </div>
              </CardActions>
            </CardWrapper>
          )}
        />
      )}
    />
  );
}

QuestionCard.propTypes = {
  classes: PropTypes.object.isRequired,
  questionId: PropTypes.string.isRequired,
};

export default withStyles(styles)(QuestionCard);
