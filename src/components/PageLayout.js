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
import LeaderBoard from './routes/LeaderBoard';
import Login from './routes/Login';
import RouteWrapper from './atoms/RouteWrapper';
import { connect } from 'react-redux';
import { handleFetchPlayers } from '../store/actions/PlayersAction';
import { handleFetchQuestions } from '../store/actions/QuestionsAction';
import { withRouter } from 'react-router-dom';
import { logoutUserAction } from '../store/actions/UserAction';


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
  componentDidMount() {
    this.props.dispatch(handleFetchPlayers());
    this.props.dispatch(handleFetchQuestions());
  }

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };
  handleLogout = () => {
    this.props.dispatch(logoutUserAction());
    this.props.history.push('/Login');
  };

  render() {
    const { classes, user, players } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/" className={classes.href}>
              <MenuItem selected={true}>
                <Typography variant="button" color="textPrimary" className={classes.grow}>
                  Home
                </Typography>
              </MenuItem>
            </Link>
            <Link to="/leaderboard" className={classes.href}>
              <MenuItem>
                <Typography variant="button" color="textPrimary" className={classes.grow}>
                  Leader Board
                </Typography>
              </MenuItem>
            </Link>
            <Link to="/login" className={classes.href}>
              <MenuItem>
                <Typography variant="button" color="textPrimary" className={classes.grow}>
                  Login
                </Typography>
              </MenuItem>
            </Link>
            {user !== '' && (
              <div>
                <IconButton color="inherit">
                  <AccountCircle />
                </IconButton>
                {players.byId[user].name}
                <MenuItem onClick={this.handleLogout}>
                  <Typography variant="button" color="textPrimary" className={classes.grow}>
                    Logout
                  </Typography>
                </MenuItem>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <RouteWrapper className={classes.container}>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/leaderboard" render={() => <LeaderBoard />} />
            <Route path="/login" render={() => <Login />} />
        </RouteWrapper>
      </div>
    );
  }
}

PageLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.string,
  players: PropTypes.object,
};

export default withRouter(
  connect(state => ({ user: state.user, players: state.players }))(withStyles(styles)(PageLayout)),
);
