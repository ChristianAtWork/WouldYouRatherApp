/**
 * @author Christian
 */
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PrimaryButton from '../atoms/PrimaryButton';


const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
  },
  or: {
    alignSelf: 'center'
  }
});

class CreateNewQuestion extends Component {
  state = {
    hasAnswers: false,
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Typography variant="h3">Create New Question</Typography>
        <Divider />

        <Typography variant="body1">Complete the Question:</Typography>
        <Typography variant="h4">Would your rather ...</Typography>
        <TextField id="standard-with-placeholder" label="With placeholder" placeholder="Placeholder" margin="normal" />
        <Typography variant="subtitle2" align='center' color='primary'>OR</Typography>
        <TextField id="standard-with-placeholder" label="With placeholder" placeholder="Placeholder" margin="normal" />
        <PrimaryButton disabled={this.state.hasAnswers} text='submit'/>
      </div>
    );
  }
}

CreateNewQuestion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateNewQuestion);
