/**
 * @author Christian
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class UserPlayer extends Component {
    render() {
        
        console.log('this.props.user', this.props.user);
        console.log('this.props.players.byId[this.props.user]', this.props.players.byId[this.props.user]);
        return this.props.render(this.getUserPlayer())
    }

    getUserPlayer = () => {
        return this.props.players.byId[this.props.user]
    }
}

UserPlayer.propTypes = {
    user: PropTypes.string,
    players: PropTypes.object,    
    render: PropTypes.func.isRequired,
}

export default connect(state => ({
    players: state.players,    
}))(UserPlayer);