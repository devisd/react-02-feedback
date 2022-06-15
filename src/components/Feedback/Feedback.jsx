import { Component } from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';
import Statistics from './Statistics';
import './Feedback.css';

class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percents: 0,
  };

  static propTypes = {
    bad: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percents: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  total = {
    total: this.props.total,
  }

  percents = {
    percents: this.props.percents,
  }

  updateStatistic = e => {
    const value = e.target.textContent;
    return this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback() {
    this.total = this.state.good + this.state.neutral + this.state.bad;    
  }

  countPositiveFeedbackPercentage() {
    this.percents = Math.round((this.state.good / this.total) * 100) + ' %';
  }

  render() {
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()

    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul className='button__list'>
          <Buttons
            props={this.state}
            onUpdateStatistic={this.updateStatistic}
          />
        </ul>

        <h2>Statistics</h2>
        <ul className='statistics__list'>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.total}
            percents={this.percents}
          />
          
        </ul>
      </div>
    );
  }
}

export default Feedback;