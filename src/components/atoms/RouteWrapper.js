/**
 * @author Christian
 */
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';


const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    minWidth: 480,
    marginTop: 16,
    marginBottom: 16,
  },
};

class RouteWrapper extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Paper className={classes.paper}>{this.props.children} </Paper>
      </div>
    );
  }
}
RouteWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RouteWrapper);
