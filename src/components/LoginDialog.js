import Avatar from '@material-ui/core/Avatar';
import blue from '@material-ui/core/colors/blue';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import PropTypes from 'prop-types';
import React from 'react';

const players = {
  byId: {
    1: {
      id: 1,
      name: 'Max Mustermann',
      avatarUrl: '',
      questions: [],
      answers: [],
      score: 0,
    },
    2: {
      id: 2,
      name: 'Jone Doe',
      avatarUrl: '',
      questions: [],
      answers: [],
      score: 0,
    },
  },
  allIds: [1, 2],
};

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

class LoginDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">
        <Typography variant="subtitle1">Set backup account</Typography>

            </DialogTitle>
        <div>
          <List>
            {players.allIds.map(playerId => {
              return (
                <ListItem button onClick={() => this.handleListItemClick(players.byId[playerId].name)} key={playerId}>
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
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default withStyles(styles)(LoginDialog);
