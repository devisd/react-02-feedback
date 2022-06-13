import { Component } from "react";
import PropTypes from 'prop-types';
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
    good: 0,
    neutral: 0,
    bad: 0
  }

  updateStatistic = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
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
        
        <p>Good : {this.state.good}</p>
        <p>Neutral : {this.state.neutral}</p>
        <p>Bad : {this.state.bad}</p>
      </div>
    )
  }
}

