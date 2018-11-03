/**
 * @author Christian
 */
import React, { Component } from 'react';

import PlayerScoreCards from '../molecules/PlayerScoreCards';


class LeaderBoard extends Component {
  render() {
    return <React.Fragment>
      <PlayerScoreCards />
    </React.Fragment>;
  }
}

export default LeaderBoard;
