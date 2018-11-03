/**
 * @author Christian
 */
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loginUserAction } from '../../store/actions/UserAction';
import PrimaryButton from '../atoms/PrimaryButton';
import LoginDialog from '../molecules/LoginDialog';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
};
class Login extends React.Component {
  state = {
    open: false,
    selectedUserId: '',
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = id => {
    this.setState({ open: false, selectedUserId: id });
  };

  handleLoginUser = () => {
    this.props.dispatch(loginUserAction(this.state.selectedUserId));
    this.props.history.push('/');
  };

  render() {
    const { classes } = this.props;
    const { open, selectedUserId } = this.state;
    return (
      <div className={classes.root}>
        <Typography>Selected User: {selectedUserId}</Typography>
        <br />
        <Button onClick={this.handleClickOpen}>Select User</Button>
        <LoginDialog open={open} onClose={this.handleClose} />
        <PrimaryButton disabled={selectedUserId === ''} onClick={this.handleLoginUser} text="Sign In" />
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.any
};

export default  withRouter(connect()(withStyles(styles)(Login)));
