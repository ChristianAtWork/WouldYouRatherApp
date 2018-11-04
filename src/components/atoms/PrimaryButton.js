/**
 * @author Christian
 */
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class PrimaryButton extends Component {
  render() {
    const { classes, text, onClick, disabled } = this.props;

    return (
      <Button disabled={disabled} onClick={onClick} variant="contained" color="primary" className={classes.button}>
        {text}
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
