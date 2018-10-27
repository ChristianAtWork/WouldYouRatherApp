/**
 * @author Christian
 */
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import PropTypes from 'prop-types';

import LoginDialog from '../LoginDialog';
import PrimaryButton from '../PrimaryButton';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,    
  },
}
class Login extends React.Component {
  state = {
    open: false,
    selectedUser: '',
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedUser: value, open: false });
  };
  handleLoginUser = () => {};
  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <Typography variant="subtitle1">Selected User: {this.state.selectedUser}</Typography>
        <br />
        <Button onClick={this.handleClickOpen}>Select User</Button>
        <LoginDialog selectedValue={this.state.selectedUser} open={this.state.open} onClose={this.handleClose} />
        <PrimaryButton onClick={this.handleLoginUser} text="Sign In" />
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Login);
