/**
 * @author Christian
 */
import React, { Component } from 'react';

import PlayerScoreCards from '../molecules/PlayerScoreCards';
import Players from '../../container/Players';

class LeaderBoard extends Component {
  render() {
    return (
      <React.Fragment>
        <Players render={playersSorted => <PlayerScoreCards playersSorted={playersSorted}/>} />
      </React.Fragment>
    );
  }
}

export default LeaderBoard;
