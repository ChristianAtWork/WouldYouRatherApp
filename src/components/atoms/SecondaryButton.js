/**
 * @author Christian
 */
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class SecondaryButton extends Component {
  
  render() {
    const { classes, text, onClick } = this.props;
    
    return (
      <Button onClick={onClick} variant="contained" color="secondary" className={classes.button}>
        {text}
      </Button>
    );
  }
}
SecondaryButton.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(SecondaryButton);