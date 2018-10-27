import MenuItem from '@material-ui/core/es/MenuItem';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    color: '#FFF',    
  },
  href: {
    color: 'white',
    textDecoration: 'inherit',
  },
  
};

class PageLayout extends Component {
  state = {
    auth: true,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    const { auth } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/" className={classes.href}>
              <MenuItem onClick={this.handleClose} selected={true}>
                <Typography variant="h6" color="textPrimary" className={classes.grow}>
                  Home
                </Typography>
              </MenuItem>
            </Link>
            <Link to="/login" className={classes.href}>
              <MenuItem onClick={this.handleClose} >
                <Typography variant="h6" color="textPrimary" className={classes.grow}>
                  Login
                </Typography>
              </MenuItem>
            </Link>
            {auth && (
              <div>
                <IconButton color="inherit">
                  <AccountCircle />
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/login" render={() => <Login />} />
      </div>
    );
  }
}

PageLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageLayout);
