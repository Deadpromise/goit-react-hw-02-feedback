import React, { Component } from "react";

import PropTypes from 'prop-types';
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";

class App extends Component {
  static propTypes = {

  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  addFeedback = (butId) => {
    for (const review in this.state) {
      review === butId && this.setState(prevState => ({
        [review]: prevState[review] + 1,
      }))
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = () => {
            const stateValues = Object.values(this.state);
            return stateValues.reduce((acc, value) => {
                return acc + value;
            }, 0);
        };
    const total = countTotalFeedback();
    const countPositiveFeedbackPercentage = () => {
            return total === 0 ? 0 : (good / total * 100).toFixed();
        }; 
    const positivePercentage = countPositiveFeedbackPercentage(); 
    return <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    ><FeedbackOptions options={this.state} onLeaveFeedback={this.addFeedback}>     
      </FeedbackOptions>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}></Statistics>
    </div>
  }
}

export default App;
