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
  const { classes } = props;

  return (
    <CardWrapper>
      <CardContent>
        <div className={classes.user}>
          <Typography className={classes.title} color="textSecondary">
            User asks:
          </Typography>
          <Avatar className={classes.avatar}>H</Avatar>
        </div>
        <Divider />
        <Typography variant="h5" component="h2">
          Would you rather
        </Typography>
        <Typography component="p">{props.id}...</Typography>
      </CardContent>
      <CardActions>
        <div className={classes.button}>
          <TertiaryButton text={'View Poll'} />
        </div>
      </CardActions>
    </CardWrapper>
  );
}

QuestionCard.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default withStyles(styles)(QuestionCard);
