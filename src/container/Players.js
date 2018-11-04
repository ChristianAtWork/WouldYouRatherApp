/**
 * @author Christian
 */

import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { orderBy } from 'lodash';

class Players extends Component {
  render() {
    return this.props.render(this.sortByScore());
  }

  sortByScore = () => {
    const { players } = this.props;
    const allPlayerIds = players.allIds;
    return orderBy(allPlayerIds.map(id => players.byId[id]), 'score', 'desc');
  };
}

Players.propTypes = {
  players: PropTypes.object,
  render: PropTypes.func.isRequired,
};

export default connect(state => ({ players: state.players }))(Players);
