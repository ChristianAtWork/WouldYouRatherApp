/**
 * @author Christian
 */
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';


const styles = {
  card: {
    width: '90%',
    margin: 5,
  },
};

class CardWrapper extends Component {
  render() {
    const { classes } = this.props;
    return <Card className={classes.card}>{this.props.children} </Card>;
  }
}
CardWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardWrapper);
