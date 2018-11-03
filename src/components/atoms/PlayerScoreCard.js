/**
 * @author Christian
 */
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';

import CardWrapper from './CardWrapper';


class PlayerScoreCard extends Component {
  render() {
    return (
      <CardWrapper>
        <CardContent>
          <div>
            <Avatar>H</Avatar>
            <Typography variant="h5" component="h2" >USERNAME:</Typography>
          </div>
          <Divider />
          <Typography >
            Would you rather
          </Typography>
          <Typography >
            Would you rather
          </Typography>
          <Typography component="p" />
        </CardContent>
      </CardWrapper>
    );
  }
}

export default PlayerScoreCard;
