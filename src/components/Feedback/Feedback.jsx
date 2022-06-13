import { Component } from "react";
import './Feedback.module.css'

export class Feedback extends Component {

  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  updateStatisticGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  }

  updateStatisticNeutral = () => {
  this.setState(prevState => {
    return { neutral: prevState.neutral + 1 };
    });
  }

  updateStatisticBad = () => {
  this.setState(prevState => {
    return { bad: prevState.bad + 1 };
    });
  }
  
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>

        <button type="button" onClick={this.updateStatisticGood}>Good</button>
        <button type="button" onClick={this.updateStatisticNeutral}>Neutral</button>
        <button type="button" onClick={this.updateStatisticBad}>Bad</button>

        <h2>Statistics</h2>

        <p>Good : {this.state.good}</p>
        <p>Neutral : {this.state.neutral}</p>
        <p>Bad : {this.state.bad}</p>
      </div>
    )
  }
}

