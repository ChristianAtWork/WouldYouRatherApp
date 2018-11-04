/**
 * @author Christian
 */

import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class UserCreateQuestion extends Component {
    render() {
        return this.props.render(this.handleSubmit);
    }
    handleSubmit = (firstAnswer, secondAnswer) => {
        console.log('answers', firstAnswer, secondAnswer);
    }
}

UserCreateQuestion.propTypes = {
render: PropTypes.func.isRequired,
}

export default connect()(UserCreateQuestion);