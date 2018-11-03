import Avatar from '@material-ui/core/Avatar';
import blue from '@material-ui/core/colors/blue';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

class LoginDialog extends React.Component {
  handleListItemClick = id => {
    this.props.onClose(id);
  };

  render() {
    const { classes, onClose, players, open } = this.props;

    return (
      <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Login as: </DialogTitle>
        <div>
          <List>
            {players.allIds &&
              players.allIds.map(playerId => {
                return (
                  <ListItem button onClick={() => this.handleListItemClick(players.byId[playerId].id)} key={playerId}>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <PersonIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={players.byId[playerId].name} />
                  </ListItem>
                );
              })}
          </List>
        </div>
      </Dialog>
    );
  }
}

LoginDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  players: PropTypes.object,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default connect(state => ({ players: state.players, user: state.user }))(withStyles(styles)(LoginDialog));
