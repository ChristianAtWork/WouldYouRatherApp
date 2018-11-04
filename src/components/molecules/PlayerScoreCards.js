/**
 * @author Christian
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import PlayerScoreCard from '../atoms/PlayerScoreCard';



class PlayerScoreCards extends Component {
    render() {
        return this.props.playersSorted 
            ? this.props.playersSorted.map((player => <PlayerScoreCard key={player.id} player={player}/>)): <div>loading</div>
    }
}
PlayerScoreCards.propTypes = {
    playersSorted: PropTypes.array
}
export default PlayerScoreCards;