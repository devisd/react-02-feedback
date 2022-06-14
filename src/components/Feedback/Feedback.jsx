import { Component } from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons/Buttons';
import Statistics from './Statistics/Statistics';
import './Feedback.module.css';

export class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    bad: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  updateStatistic = e => {
    const value = e.target.textContent;
    return this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul>
          <Buttons
            props={this.state}
            onUpdateStatistic={this.updateStatistic}
          />
        </ul>

        <h2>Statistics</h2>
        <ul>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        </ul>
      </div>
    );
  }
}
