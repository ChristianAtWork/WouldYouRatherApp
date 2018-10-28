/**
 * @author Christian
 */
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class PrimaryButton extends Component {
  render() {
    const { classes, text, onClick, disabled } = this.props;

    return (
      <Button disabled={disabled} onClick={onClick} variant="contained" color="primary" className={classes.button}>
        <Typography variant="button">{text}</Typography>
      </Button>
    );
  }
}
PrimaryButton.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  link: PropTypes.string,
};

export default withStyles(styles)(PrimaryButton);
