/**
 * @author Christian
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import PlayerScoreCard from '../atoms/PlayerScoreCard';



class PlayerScoreCards extends Component {
    render() {
        return ([1,2,3].map((questionId => <PlayerScoreCard id={questionId}/>)));
    }
}
PlayerScoreCards.propTypes = {
    questionIds: PropTypes.array,
}
export default PlayerScoreCards;