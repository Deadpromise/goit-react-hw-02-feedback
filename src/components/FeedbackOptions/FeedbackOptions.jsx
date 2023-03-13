import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const butNames = Object.keys(options); 
    return (
        butNames.map((el) => {
            const butName = el.charAt(0).toUpperCase() + el.slice(1); 
            return <button key={el} type="button" onClick={() => onLeaveFeedback(el)}>{butName}</button>;
        })
    )
};

export default FeedbackOptions;