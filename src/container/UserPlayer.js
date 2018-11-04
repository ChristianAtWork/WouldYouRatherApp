/**
 * @author Christian
 */

import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class UserPlayer extends Component {
  render() {
    return this.props.render(this.getUserPlayer());
  }

  getUserPlayer = () => this.props.players.byId[this.props.user];
}

UserPlayer.propTypes = {
  user: PropTypes.string,
  players: PropTypes.object,
  render: PropTypes.func.isRequired,
};

export default connect(state => ({
  players: state.players,
}))(UserPlayer);
