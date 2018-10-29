/**
 * @author Christian
 */

import QuestionCard from './QuestionCard';
import PropTypes from 'prop-types';


import React, { Component } from 'react'

class QuestionCards extends Component {
    render() {
        return (this.props.questionIds.map((questionId => <QuestionCard id={questionId}/>)));
    }
}
QuestionCards.propTypes = {
    questionIds: PropTypes.array,
}
export default QuestionCards;