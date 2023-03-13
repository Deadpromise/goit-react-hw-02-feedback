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
        console.log(this.state);
        return (
            <div>
                <h2>Please leave feedback</h2>
                <button type="button" onClick={this.addGoodReview}>Good</button>
                <button type="button" onClick={this.addNeutralReview}>Neutral</button>
                <button type="button" onClick={this.addBadReview}>Bad</button>
                <h2>Statistics</h2>
                <p>Good:{good}</p>
                <p>Neutral:{neutral}</p>
                <p>Bad:{ bad }</p>
            </div>

        )
    }
}

export default Feedback;