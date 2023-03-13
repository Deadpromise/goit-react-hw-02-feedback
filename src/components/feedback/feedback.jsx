import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Feedback extends Component {
    static propTypes = {

    };
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
 
    addGoodReview = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }))
    };
    addNeutralReview = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }))
    };    
    addBadReview = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }))
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
        const positive = countPositiveFeedbackPercentage();
        

        return (
            <div>
                <h2>Please leave feedback</h2>
                <button type="button" onClick={this.addGoodReview}>Good</button>
                <button type="button" onClick={this.addNeutralReview}>Neutral</button>
                <button type="button" onClick={this.addBadReview}>Bad</button>
                <h2>Statistics</h2>
                <p>Good:{good}</p>
                <p>Neutral:{neutral}</p>
                <p>Bad:{bad}</p>
                <p>Total:{total}</p>
                <p>positive feedback:{ positive }%</p>
            </div>

        )
    }
}

export default Feedback;