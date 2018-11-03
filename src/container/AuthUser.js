/**
 * @author Christian
 */

import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AuthUser extends Component {
  render() {
    return this.props.render(this.props.user);
  }
}

AuthUser.propTypes = {
  user: PropTypes.string,
  render: PropTypes.func.isRequired,
};

export default connect(state => ({
  user: state.user,
}))(AuthUser);
