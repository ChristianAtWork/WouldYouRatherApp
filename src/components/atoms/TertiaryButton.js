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

class TertiaryButton extends Component {
  
  render() {
    const { classes, text, onClick } = this.props;
    
    return (
      <Button onClick={onClick} variant="outlined"  className={classes.button}>
        {text}
      </Button>
    );
  }
}
TertiaryButton.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(TertiaryButton);