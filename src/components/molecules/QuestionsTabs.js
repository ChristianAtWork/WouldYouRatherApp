/**
 * @author Christian
 */
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import PropTypes from 'prop-types';
import React, { Component } from 'react';


class QuestionsTabs extends Component {
  render() {
    return (
      <div>
        <Tabs fullWidth value={this.props.index || 0} onChange={this.handleChange}>
          <Tab label="Unanswered Questions" />
          <Tab label="Answered Questions" />
        </Tabs>
      </div>
    );
  }

  handleChange = (event, index) => {
    this.props.onTabChange(index);
  };
}

QuestionsTabs.propTypes = {
  onTabChange: PropTypes.func,
  index: PropTypes.number,
};
export default QuestionsTabs;
