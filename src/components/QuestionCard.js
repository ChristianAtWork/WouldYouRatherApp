/**
 * @author Christian
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TertiaryButton from './TertiaryButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  card: {
    width: '90%',
    margin: 5,
  },
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
    <Card className={classes.card}>
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
    </Card>
  );
}

QuestionCard.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
};

export default withStyles(styles)(QuestionCard);
