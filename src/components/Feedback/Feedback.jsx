import { Component } from "react";
import PropTypes from 'prop-types';
import Statistics from './Statistics/Statistics'
import './Feedback.module.css'

export class Feedback extends Component {

  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  static propTypes = {
    bad: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad
  }

  updateStatistic = (e) => {
    const value = e.target.textContent;
      return this.setState(prevState => {
        return {
          [value]: prevState[value] + 1
        };
      });
    }


  render() {
    const state = Object.keys(this.state);
    const buttons = state.map(e => {
      return <button type="button" key={e} onClick={this.updateStatistic}>{e}</button>
    })

    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          {buttons}
        </div>

        <h2>Statistics</h2>
        <div>
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}/>
        </div>
      </div>
    )
  }
}

