/**
 * @author Christian
 */
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CardWrapper from './CardWrapper';


class PlayerScoreCard extends Component {
  render() {
    const {player} = this.props
    return (
      <CardWrapper>
        <CardContent>
          <div>
            <Avatar>{player.name.slice(0, 1)}</Avatar>
            <Typography variant="h5" component="h2" >{player.name}</Typography>
          </div>
          <Divider />
          <Typography >
            answered questions: {player.answers.length}
          </Typography>
          <Typography >
           created questions: {player.questions.length}
          </Typography>
          <Typography component="p" >{player.score}</Typography>
        </CardContent>
      </CardWrapper>
    );
  }
}

PlayerScoreCard.propTypes = {
  player: PropTypes.object
}

export default PlayerScoreCard;
